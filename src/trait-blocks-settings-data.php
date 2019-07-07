<?php
/**
 * Class Blocks_Settings_Data holds abstract class for Gutenberg blocks data.
 *
 * @since   1.0.0
 * @package Eightshift_Blocks
 */

namespace Eightshift_Blocks;

use Eightshift_Blocks\Exception\Missing_Blocks_Manifest;

/**
 * Class Blocks_Settings_Data
 *
 * @since 1.0.0
 */
trait Blocks_Settings_Data {

  /**
   * Default projects blocks setting global variable name.
   * Used to store all blocks global settings data.
   *
   * @var string
   *
   * @since 1.0.0
   */
  protected $blocks_settings_variable_name = 'INF_BLOCKS_SETTINGS';

  /**
   * Define global variable for blocks settings.
   * Used to cache data inside a global variable so you don't have to fetch manifest.json file on every call.
   *
   * @return void
   *
   * @since 1.0.0
   */
  public function register_blocks_settings_variable() {
    define( $this->get_blocks_settings_variable_name(), $this->get_blocks_settings_raw() );
  }

  /**
   * Get global blocks settings variable name to store the cached data into.
   *
   * @return string
   *
   * @since 1.0.0
   */
  protected function get_blocks_settings_variable_name() : string {
    return $this->blocks_settings_variable_name;
  }

  /**
   * Get raw blocks settings manifest data.
   * This data is stored in global variable as a string.
   * Not using array because php <= 7.0 doesn't support it.
   *
   * @throws Exception\Missing_Blocks_Manifest Throws error if blocks manifest is missing.
   *
   * @return string
   *
   * @since 1.0.0
   */
  protected function get_blocks_settings_raw() : string {
    $manifest_path = $this->get_blocks_path() . '/manifest.json';

    if ( ! file_exists( $manifest_path ) ) {
      throw Missing_Blocks_Manifest::manifest_exception( $manifest_path );
    }

    return implode( ' ', file( $manifest_path ) );
  }

  /**
   * Get blocks settings manifest data.
   * Output is converted into array.
   *
   * @return array
   *
   * @since 1.0.0
   */
  protected function get_blocks_settings() : array {
    return json_decode( constant( $this->get_blocks_settings_variable_name() ), true );
  }

}
