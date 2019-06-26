<?php
/**
 * File that holds base abstract class for Gutenberg blocks registration
 *
 * @since   0.1.0
 * @package Eightshift_Blocks\Blocks
 */

namespace Eightshift_Blocks\Blocks;

use Eightshift_Blocks\Blocks\Block;
use Eightshift_Blocks\Blocks\Renderable_Block;
use Eightshift_Libs\Core\Service;

/**
 * Class Blocks
 */
class Blocks implements Service {


  /**
   * Global Settings variable.
   *
   * @var object
   *
   * @since 1.0.0
   */
  private $global_settings;

  /**
   * Constructor function
   *
   * @since 1.0.0
   */
  public function __construct() {
    $this->global_settings = $this->get_global_settings();
  }

  public function get_global_settings() {
    return json_decode( file_get_contents( ABSPATH. $this->get_blocks_path() . '/manifest.json' ) );
  }

  /**
   * Register all the hooks
   *
   * @since 0.1.0
   */
  public function register() : void {
    add_action( 'init', [ $this, 'get_all_blocks' ] );
  }

  protected function get_blocks_path() : string {
    return 'wp-content/themes/academy/src/blocks';
  }

  /**
   * Get the block name used to register block.
   *
   * @return string Custom block name.
   *
   * @since 0.1.0
   */
  public function get_all_blocks() {
    
    $all_blocks = glob( ABSPATH. $this->get_blocks_path() . '/custom/*/*.json' );

    if ( ! empty( $all_blocks ) ) {
      \array_map(
        function( $block ) {
          $block_details = json_decode( file_get_contents( $block ) );

          $this->register_block( $this->set_manifest_defaults( $block_details ) );
        },
        $all_blocks
      );
    }
  }

  public function set_manifest_defaults( object $block_details ) : object {
    if ( ! isset( $block_details->classes ) ) {
      $block_details->classes = (object) [];
    }

    if ( ! isset( $block_details->attributes ) ) {
      $block_details->attributes = (object) [];
    }

    if ( ! isset( $block_details->hasWrapper ) ) {
      $block_details->hasWrapper = true;
    }

    if ( ! isset( $block_details->hasState ) ) {
      $block_details->hasState = false;
    }

    if ( ! isset( $block_details->hasInnerBlocks ) ) {
      $block_details->hasInnerBlocks = false;
    }

    return $block_details;
  }

  public function get_block_full_name( string $block_name ) : string {
    return "{$this->global_settings->namespace}/{$block_name}";
  }

  public function register_block( object $block_details  ) : void {
    $render = $block_details->hasWrapper ? 'render_wrapper' : 'render';

    register_block_type(
      $this->get_block_full_name( $block_details->blockName ),
      array(
        'render_callback' => [ $this, $render ],
        'attributes' => $this->get_attributes( $block_details ),
      )
    );
  }

  /**
   * Adds default attributes that are dynamically built for all blocks.
   * These are:
   * - blockName: Block's full name including namespace (example: eightshift/heading)
   * - rootClass: Block's root (base) BEM CSS class, built in "block/$name" format (example: block-heading)
   * - jsClass:   Block's js selector class, built in "js-block-$name" format (example: js-block-heading)
   *
   * @throws \Exception On missing block name.
   *
   * @return array
   *
   * @since 0.1.0
   */
  public function get_default_attributes( string $block_name ) : array {
    return [
      'blockName' => array(
        'type' => 'string',
        'default' => $block_name,
      ),
      'blockFullName' => array(
        'type' => 'string',
        'default' => $this->get_block_full_name( $block_name ),
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

  public function prepare_attributes( array $attributes ) : array {
    return array_map(
      function( $attribute ) {
        return (array) $attribute;
      },
      $attributes
    );
  }

  public function get_attributes( object $block_details ) : array {
    
    $default_attributes      = (array) $this->get_default_attributes( $block_details->blockName );
    $block_attributes        = $this->prepare_attributes( (array) $block_details->attributes );
    $block_shared_attributes = $this->get_block_shared_attributes();

    return array_merge( $default_attributes, $block_attributes, $block_shared_attributes );
  }

  /**
   * Define shared block attributes that will all block share.
   *
   * @return array
   *
   * @since 0.3.0
   */
  protected function get_block_shared_attributes() : ?array {
    return $this->prepare_attributes( (array) $this->global_settings->sharedAttributes );
  }


    /**
   * Get block view path.
   *
   * @return string
   *
   * @since 0.1.0
   */
  public function get_block_view_path( string $block_name ) : string {
    return "src/blocks/custom/{$block_name}/{$block_name}.php";
  }

  /**
   * Get block wrapper view path.
   *
   * @return string
   *
   * @since 0.1.0
   */
  public function get_block_wrapper_view_path() {
    return "src/blocks/components/wrapper-block/wrapper-block.php";
  }


  /**
   * Renders the block using a template in Infinum\Blocks\Templates namespace/folder.
   * Template file must have the same name as the class-blockname file, for example:
   *
   *   Block:     class-heading.php
   *   Template:  heading.php
   *
   * @param array  $attributes          Array of attributes as defined in block's index.js.
   * @param string $inner_block_content Block's content.
   *
   * @throws Missing_Block::view_exception On missing attributes OR missing template.
   * @return string html template for block.
   *
   * @since 0.5.0 Changed $content to $inner_block_content for better naming.
   * @since 0.3.0
   */
  public function render_wrapper( array $attributes, ?string $inner_block_content ) : string {
    $block_name = $attributes['blockName'] ?? '';
    $template_path = $this->get_block_view_path( $block_name );
    $wrapper_path  = $this->get_block_wrapper_view_path();

    $wrapper = locate_template( $wrapper_path );
    if ( empty( $wrapper ) ) {
      throw Missing_Block::view_exception( esc_html__( 'Wrapper Block', 'eightshift-libs' ), $wrapper_path );
    }

    $template = locate_template( $template_path );
    if ( empty( $template ) ) {
      throw Missing_Block::view_exception( $this->get_block_name(), $template_path );
    }

    // If everything is ok, return the contents of the template (return, NOT echo).
    ob_start();
    include $wrapper;
    $output = ob_get_clean();
    unset( $attributes, $inner_block_content, $wrapper, $template, $template_path, $wrapper_path );
    return $output;
  }

  /**
   * Renders the block using a template in Infinum\Blocks\Templates namespace/folder.
   * Template file must have the same name as the class-blockname file, for example:
   *
   *   Block:     class-heading.php
   *   Template:  heading.php
   *
   * @param array  $attributes          Array of attributes as defined in block's index.js.
   * @param string $inner_block_content Block's content.
   *
   * @throws Missing_Block::view_exception On missing attributes OR missing template.
   * @return string html template for block.
   *
   * @since 0.1.0
   */
  public function render( array $attributes, ?string $inner_block_content ) : string {
    $block_name = $attributes['blockName'] ?? '';
    // error_log( print_r( ( $attributes ), true ) );

    var_dump('render');


    $template_path = $this->get_block_view_path( $block_name );

    $template = locate_template( $template_path );
    if ( empty( $template ) ) {
      throw Missing_Block::view_exception( $block_name, $template_path );
    }

    // If everything is ok, return the contents of the template (return, NOT echo).
    ob_start();
    include $template;
    $output = ob_get_clean();
    unset( $attributes, $inner_block_content, $template );
    return $output;
  }
}
