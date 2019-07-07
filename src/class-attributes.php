<?php
/**
 * Class Attributes holds base abstract class for Gutenberg blocks registration.
 * It provides ability to register custom blocks using manifest.json setup.
 *
 * @since   1.0.0
 * @package Eightshift_Blocks
 */

namespace Eightshift_Blocks;

use Eightshift_Blocks\Blocks_Full_Data;
use Eightshift_Blocks\Attributes;
use Eightshift_Blocks\Exception\Missing_Block_Wrapper_View;
use Eightshift_Blocks\Exception\Missing_Block_View;

/**
 * Class Attributes
 *
 * @since 1.0.0
 */
abstract class Attributes extends Blocks_Full_Data implements Attributes_Data {

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
   * Get blocks shared attributes value from blocks settings.
   *
   * @return string
   *
   * @since 1.0.0
   */
  protected function get_blocks_shared_attributes() : array {
    $blocks_settings = $this->get_wrapper();

    return $blocks_settings['attributes'] ?? [];
  }

  /**
   * Get blocks attributes value.
   * Set default values to attributes if they are not set.
   *
   * @throws Exception\Missing_Attribute_Type Throws error if attribute type is missing.
   *
   * @param array $block_details Block Manifest details.
   *
   * @return string
   *
   * @since 1.0.0
   */
  protected function get_block_attributes( array $block_details ) : array {
    $attributes = $block_details['attributes'] ?? [];
    $output     = [];

    if ( empty( $attributes ) ) {
      return $$output;
    }

    foreach ( $attributes as $attribute_key => $attribute_value ) {
      if ( ! isset( $attribute_value['type'] ) ) {
        throw Missing_Attribute_Type::type_exception( $this->get_block_name( $block_details ), $attribute_key );
      }

      $output[ $attribute_key ] = [
        'type' => $attribute_value['type'],
      ];

      // If default value is set out it.
      if ( isset( $attribute_value['default'] ) ) {
        $output[ $attribute_key ]['default'] = $attribute_value['default'];
      } else {

        // If default value is not set output defaults by type.
        switch ( $attribute_value['type'] ) {
          case 'null':
            $output[ $attribute_key ]['default'] = null;
                break;
          case 'boolean':
          case 'bool':
            $output[ $attribute_key ]['default'] = 0;
                break;
          case 'object':
            $output[ $attribute_key ]['default'] = new stdClass();
                break;
          case 'array':
            $output[ $attribute_key ]['default'] = [];
                break;
          case 'string':
            $output[ $attribute_key ]['default'] = '';
                break;
          case 'number':
          case 'integer':
            $output[ $attribute_key ]['default'] = 0;
                break;
        }
      }
    }

    return $output;
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
      'blockClass' => array(
        'type' => 'string',
        'default' => "block-{$block_name}",
      ),
      'blockJsClass' => array(
        'type' => 'string',
        'default' => "js-block-{$block_name}",
      ),
    ];
  }
}
