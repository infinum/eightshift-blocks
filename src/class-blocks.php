<?php
/**
 * Class Blocks holds base abstract class for Gutenberg blocks registration.
 * It provides ability to register custom blocks using manifest.json setup.
 *
 * @since   1.0.0
 * @package Eightshift_Blocks
 */

namespace Eightshift_Blocks;

use Eightshift_Blocks\Blocks_Data;
use Eightshift_Blocks\Renderable_Block;
use Eightshift_Blocks\Exception\Missing_Block_Wrapper_View;
use Eightshift_Blocks\Exception\Missing_Block_View;

/**
 * Class Blocks
 *
 * @since 1.0.0
 */
abstract class Blocks extends Blocks_Data implements Renderable_Block {

  /**
   * Register all the hooks
   *
   * @since 1.0.0
   */
  public function register() {
    parent::register();

    // Register all custom blocks.
    add_action( 'init', [ $this, 'register_blocks' ] );

    // Remove P tags from content.
    remove_filter( 'the_content', 'wpautop' );
  }

  /**
   * Method used to register all custom blocks with data fetched from blocks manifest.json.
   *
   * @return void
   *
   * @since 1.0.0
   */
  public function register_blocks() {
    $blocks = $this->get_blocks();

    if ( ! empty( $blocks ) ) {
      \array_map(
        function( $block ) {
          $this->register_block( $block );
        },
        $blocks
      );
    }
  }

  /**
   * Get blocks attributes.
   * This method combines default, block and shared attributes.
   * Default attributes are hardcoded in this lib.
   * Block attributes are provided by block manifest.json file.
   * Shared attributes are provided by blocks settings manifest.json file and is only available if block has `hasWrapper:true` settings.
   *
   * @param array $block_details Block Manifest details.
   *
   * @return array
   */
  public function get_attributes( array $block_details ) : array {

    $default_attributes      = $this->get_default_attributes( $block_details );
    $block_attributes        = $this->get_block_attributes( $block_details );
    $block_shared_attributes = ( $block_details['hasWrapper'] === true ) ? $this->get_blocks_shared_attributes() : [];

    return array_merge(
      $default_attributes,
      $block_attributes,
      $block_shared_attributes
    );
  }

  /**
   * Provides block registration render wrapper callback method.
   * If block is using `hasWrapper:true` setting view method is first routed through wrapper component view and then in block view.
   *
   * @param array  $attributes          Array of attributes as defined in block's manifest.json.
   * @param string $inner_block_content Block's content.
   *
   * @throws Exception\Missing_Block_Wrapper_View Throws error if wrapper component view is missing.
   * @throws Exception\Missing_Block_View         Throws error if block view is missing.
   *
   * @return string Html template for block.
   *
   * @since 1.0.0
   */
  public function render_wrapper( array $attributes, ?string $inner_block_content ) : string {

    // Block details is unavailable in this method so we are fetching block name via attributes.
    $block_name = $attributes['blockName'] ?? '';

    // Get block view path.
    $template_path = $this->get_block_view_path( $block_name );

    // Get block wrapper view path.
    $wrapper_path = $this->get_block_wrapper_view_path();

    // Check if wrapper componet exists.
    $wrapper = locate_template( $wrapper_path );
    if ( empty( $wrapper ) ) {
      throw Missing_Block_Wrapper_View::view_wrapper_exception( $block_name, $wrapper_path );
    }

    // Check if actual block exists.
    $template = locate_template( $template_path );
    if ( empty( $template ) ) {
      throw Missing_Block_View::view_exception( $block_name, $template_path );
    }

    // If everything is ok, return the contents of the template (return, NOT echo).
    ob_start();
    include $wrapper;
    $output = ob_get_clean();
    unset( $attributes, $inner_block_content, $wrapper, $template, $template_path, $wrapper_path );
    return $output;
  }

  /**
   * Provides block registration render normal callback method.
   * If block is using `hasWrapper:false` setting view method is provides in block.
   *
   * @param array  $attributes          Array of attributes as defined in block's manifest.json.
   * @param string $inner_block_content Block's content.
   *
   * @throws Exception\Missing_Block_View Throws error if block view is missing.
   *
   * @return string Html template for block.
   *
   * @since 1.0.0
   */
  public function render( array $attributes, ?string $inner_block_content ) : string {

    // Block details is unavailable in this method so we are fetching block name via attributes.
    $block_name = $attributes['blockName'] ?? '';

    // Get block view path.
    $template_path = $this->get_block_view_path( $block_name );

    // Check if actual block exists.
    $template = locate_template( $template_path );
    if ( empty( $template ) ) {
      throw Missing_Block_View::view_exception( $block_name, $template_path );
    }

    // If everything is ok, return the contents of the template (return, NOT echo).
    ob_start();
    include $template;
    $output = ob_get_clean();
    unset( $attributes, $inner_block_content, $template );
    return $output;
  }

  /**
   * Method used to really register Gutenberg blocks.
   * It used nativ register_block_type method from WP.
   * Render method is provided depending on the hasWrapper key.
   *
   * @param array $block_details Block Manifest details.
   *
   * @return void
   *
   * @since 1.0.0
   */
  public function register_block( array $block_details ) {
    $render = $block_details['hasWrapper'] ? 'render_wrapper' : 'render';

    register_block_type(
      $this->get_block_full_name( $block_details ),
      array(
        'render_callback' => [ $this, $render ],
        'attributes' => $this->get_attributes( $block_details ),
      )
    );
  }

  /**
   * Get default attributes that are dynamically built for all custom blocks.
   * These are:
   * - blockName: Block's name (example: heading)
   * - blockFullName: Block's full name including namespace (example: eightshift-libs/heading)
   * - rootClass: Block's root (base) BEM CSS class, built in "block/$name" format (example: block-heading)
   * - jsClass:   Block's js selector class, built in "js-block-$name" format (example: js-block-heading)
   *
   * @param array $block_details Block Manifest details.
   *
   * @return array
   *
   * @since 1.0.0
   */
  protected function get_default_attributes( array $block_details ) : array {
    $block_name      = $this->get_block_name( $block_details );
    $block_full_name = $this->get_block_full_name( $block_details );

    return [
      'blockName' => array(
        'type' => 'string',
        'default' => $block_name,
      ),
      'blockFullName' => array(
        'type' => 'string',
        'default' => $block_full_name,
      ),
      'rootClass' => array(
        'type' => 'string',
        'default' => "block-{$block_name}",
      ),
      'jsClass' => array(
        'type' => 'string',
        'default' => "js-block-{$block_name}",
      ),
    ];
  }

  /**
   * Get block view path.
   *
   * @param string $block_name Block Name value.
   *
   * @return string
   *
   * @since 1.0.0
   */
  protected function get_block_view_path( string $block_name ) : string {
    return "src/blocks/custom/{$block_name}/{$block_name}.php";
  }

  /**
   * Get block wrapper view path.
   *
   * @return string
   *
   * @since 1.0.0
   */
  protected function get_block_wrapper_view_path() {
    return 'src/blocks/components/wrapper-block/wrapper-block.php';
  }
}
