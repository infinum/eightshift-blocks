<?php
/**
 * Class Blocks_Data holds abstract class for Gutenberg blocks data.
 *
 * @since   1.0.0
 * @package Eightshift_Blocks
 */

namespace Eightshift_Blocks;

use Eightshift_Libs\Core\Service;
use Eightshift_Blocks\Renderable_Block;
use Eightshift_Blocks\Exception\Missing_Block_Full_Name;
use Eightshift_Blocks\Exception\Missing_Block_Name;
use Eightshift_Blocks\Exception\Missing_Block_Namespace;
use Eightshift_Blocks\Exception\Missing_Blocks_Manifest;

/**
 * Class Blocks_Data
 *
 * @since 1.0.0
 */
abstract class Blocks_Data implements Service {

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
   * Default projects blocks global variable name.
   * Used to store all blocks data.
   *
   * @var string
   *
   * @since 1.0.0
   */
  protected $blocks_variable_name = 'INF_BLOCKS';

  /**
   * Register all the hooks
   *
   * @since 1.0.0
   */
  public function register() {

    // Set blocks settings global variable.
    add_action( 'init', [ $this, 'register_blocks_settings_variable' ] );

    // Set all blocks global variable.
    add_action( 'init', [ $this, 'register_blocks_variable' ] );
  }

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
   * Define global variable for all custom blocks.
   * Used to cache data inside a global variable so you don't have to fetch manifest.json file on every call.
   *
   * @return void
   *
   * @since 1.0.0
   */
  public function register_blocks_variable() {
    define( $this->get_blocks_variable_name(), $this->get_blocks_raw() );
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
          $this->register_block( $this->set_manifest_defaults( $block ) );
        },
        $blocks
      );
    }
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
   * Get global blocks variable name to store the cached data into.
   *
   * @return string
   *
   * @since 1.0.0
   */
  protected function get_blocks_variable_name() : string {
    return $this->blocks_variable_name;
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
   * Get raw blocks manifest data.
   * Method is converted in json because there can be multiple blocks in array.
   * This data is stored in global variable as a string.
   * Not using array because php <= 7.0 doesn't support it.
   *
   * @return string
   *
   * @since 1.0.0
   */
  protected function get_blocks_raw() : string {
    $blocks     = [];
    $all_blocks = glob( $this->get_blocks_path() . '/custom/*/manifest.json' );

    if ( empty( $all_blocks ) ) {
      return $blocks;
    }

    $blocks = array_map(
      function( $block ) {
        return implode( ' ', file( ( $block ) ) );
      },
      $all_blocks
    );

    return wp_json_encode( $blocks );
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

  /**
   * Get blocks manifest data.
   * Output is converted into array.
   * Alse we are adding namespace and blockFullName Key in the array.
   *
   * @return array
   *
   * @since 1.0.0
   */
  protected function get_blocks() : array {
    $namespace = $this->get_blocks_namespace();

    return array_map(
      function( $block ) use ( $namespace ) {
        $block = json_decode( $block, true );

        $block['namespace']     = $namespace;
        $block['blockFullName'] = "{$namespace}/{$this->get_block_name( $block )}";

        return $this->set_manifest_defaults( $block );
      },
      json_decode( constant( $this->get_blocks_variable_name() ), true )
    );
  }

  /**
   * Get Projects Theme path.
   * If you are using a plugin override method must be provided with correct blocks folder.
   *
   * @return string
   *
   * @since 1.0.0
   */
  protected function get_blocks_path() : string {
    return get_template_directory() . '/src/blocks';
  }

  /**
   * Get all blocks with full block name used to limit what blocks are going to be used in the project.
   *
   * @return array
   *
   * @since 1.0.0
   */
  public function get_all_blocks_list() : array {
    return array_map(
      function( $block ) {
        return $block['blockFullName'];
      },
      $this->get_blocks()
    );
  }

  /**
   * Get blocks name value.
   *
   * @throws Exception\Missing_Block_Name Throws error if block name is missing.
   *
   * @param array $block_details Block Manifest details.
   *
   * @return string
   *
   * @since 1.0.0
   */
  protected function get_block_name( array $block_details ) : ?string {

    if ( ! isset( $block_details['blockName'] ) ) {
      throw Missing_Block_Name::name_exception();
    }

    return $block_details['blockName'];
  }

  /**
   * Get blocks fullname value.
   *
   * @throws Exception\Missing_Block_Full_Name Throws error if block fullname is missing.
   *
   * @param array $block_details Block Manifest details.
   *
   * @return string
   *
   * @since 1.0.0
   */
  protected function get_block_full_name( array $block_details ) : ?string {
    if ( ! isset( $block_details['blockFullName'] ) ) {
      throw Missing_Block_Full_Name::name_exception();
    }

    return $block_details['blockFullName'];
  }

  /**
   * Get blocks attributes value.
   *
   * @param array $block_details Block Manifest details.
   *
   * @return string
   *
   * @since 1.0.0
   */
  protected function get_block_attributes( array $block_details ) : array {
    return $block_details['attributes'] ?? [];
  }

  /**
   * Get blocks namespace value from blocks global settings.
   *
   * @throws Exception\Missing_Block_Namespace Throws error if block namespace is missing.
   *
   * @return string
   *
   * @since 1.0.0
   */
  protected function get_blocks_namespace() : ?string {
    $settings = $this->get_blocks_settings();

    if ( ! isset( $settings['namespace'] ) ) {
      throw Missing_Block_Namespace::namespace_exception();
    }

    return $settings['namespace'];
  }

  /**
   * Get blocks shared attributes value from blocks settings.
   *
   * @return string
   *
   * @since 1.0.0
   */
  protected function get_blocks_shared_attributes() : array {
    $blocks_settings = $this->get_blocks_settings();

    return $blocks_settings['sharedAttributes'] ?? [];
  }

  /**
   * Set All Manifest defaults so they can be missing from manifest.json if not used.
   *
   * @param array $block_details Block Manifest details.
   *
   * @return string
   *
   * @since 1.0.0
   */
  protected function set_manifest_defaults( array $block_details ) : array {
    if ( ! isset( $block_details['classes'] ) ) {
      $block_details['classes'] = [];
    }

    if ( ! isset( $block_details['attributes'] ) ) {
      $block_details['attributes'] = [];
    }

    if ( ! isset( $block_details['hasWrapper'] ) ) {
      $block_details['hasWrapper'] = true;
    }

    if ( ! isset( $block_details['hasState'] ) ) {
      $block_details['hasState'] = false;
    }

    if ( ! isset( $block_details['hasInnerBlocks'] ) ) {
      $block_details['hasInnerBlocks'] = false;
    }

    return $block_details;
  }
}
