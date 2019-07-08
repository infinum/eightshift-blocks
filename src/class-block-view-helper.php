<?php
/**
 * Class Block_View_Helper holds helper method to get Gutenberg block dynamic php template partial.
 *
 * @since   1.0.0
 * @package Eightshift_Blocks
 */

namespace Eightshift_Blocks\Helpers;

use Eightshift_Blocks\Blocks_Full_Data;
use Eightshift_Blocks\Exception\Missing_Wrapper_View_Helper;
use Eightshift_Blocks\Exception\Missing_Block_View_Helper;

/**
 * Class Block_View_Helper Helper
 *
 * @since 1.0.0
 */
class Block_View_Helper {

  /**
   * Locate and return template part with passed attributes for wrapper.
   *
   * @param string $src                  String with URL path to template.
   * @param array  $attributes           Attributes array to pass in template.
   * @param string $inner_block_content If using inner blocks content pass the data.
   *
   * @throws Exception\Missing_Wrapper_View_Helper Throws error if wrapper view template is missing.
   *
   * @since 1.0.0
   */
  public static function render_wrapper_view( string $src, array $attributes, ?string $inner_block_content = null ) {
    if ( ! file_exists( $src ) ) {
      throw Missing_Wrapper_View_Helper::view_exception( $src );
    }

    include $src;
    unset( $src, $attributes, $inner_block_content );
  }

  /**
   * Locate and return template part with passed attributes for block.
   *
   * @param string $src                  String with URL path to template.
   * @param array  $attributes           Attributes array to pass in template.
   * @param string $inner_block_content If using inner blocks content pass the data.
   *
   * @throws Exception\Missing_Wrapper_View_Helper Throws error if wrapper view template is missing.
   *
   * @since 1.0.0
   */
  public static function render_block_view( string $src, array $attributes, ?string $inner_block_content = null ) {
    $path = Blocks_Full_Data::get_blocks_path() . $src;
    if ( ! file_exists( $path ) ) {
      throw Missing_Block_View_Helper::view_exception( $path );
    }

    include $path;
    unset( $src, $attributes, $inner_block_content, $path );
  }
}
