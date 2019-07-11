<?php
/**
 * Class Blocks holds base abstract class for Gutenberg blocks registration.
 * It provides ability to register custom blocks using manifest.json setup.
 *
 * @since   1.0.0
 * @package Eightshift_Blocks
 */

namespace Eightshift_Blocks;

use Eightshift_Blocks\Attributes;
use Eightshift_Blocks\Renderable_Block;
use Eightshift_Blocks\Exception\Missing_Block_Wrapper_View;
use Eightshift_Blocks\Exception\Missing_Block_View;

/**
 * Class Blocks
 *
 * @since 1.0.0
 */
abstract class Blocks extends Attributes implements Renderable_Block {

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
   * Method used to really register Gutenberg blocks.
   * It uses native register_block_type method from WP.
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
    if ( ! file_exists( $wrapper_path ) ) {
      throw Missing_Block_Wrapper_View::view_wrapper_exception( $block_name, $wrapper_path );
    }

    // Check if actual block exists.
    if ( ! file_exists( $template_path ) ) {
      throw Missing_Block_View::view_exception( $block_name, $template_path );
    }

    // If everything is ok, return the contents of the template (return, NOT echo).
    ob_start();
    include $wrapper_path;
    $output = ob_get_clean();
    unset( $block_name, $template_path, $wrapper_path, $attributes, $inner_block_content );
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
    if ( ! file_exists( $template_path ) ) {
      throw Missing_Block_View::view_exception( $block_name, $template_path );
    }

    // If everything is ok, return the contents of the template (return, NOT echo).
    ob_start();
    include $template_path;
    $output = ob_get_clean();
    unset( $block_name, $template_path, $attributes, $inner_block_content );
    return $output;
  }
}
