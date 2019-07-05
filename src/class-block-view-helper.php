<?php
/**
 * Class Block_View_Helper holds helper method to get Gutenberg block dynamic php template partial.
 *
 * @since   1.0.0
 * @package Eightshift_Blocks
 */

namespace Eightshift_Blocks\Helpers;

/**
 * Class Block_View_Helper Helper
 *
 * @since 1.0.0
 */
class Block_View_Helper {

  /**
   * Locate and return template part with passed attributes.
   *
   * @param string $src                  String with URL path to template from theme root.
   * @param array  $attributes           Attributes array to pass in template.
   * @param string $inner_block_content If using inner blocks content pass the data.
   *
   * @return string Html template of block view.
   *
   * @since 1.0.0
   */
  public static function render_block_view( string $src, array $attributes, ?string $inner_block_content = null ) : string {
    $output = '';

    $template = locate_template( $src );
    if ( empty( $template ) ) {
      return $output;
    }

    require $template;
    unset( $attributes, $inner_block_content );
  }
}
