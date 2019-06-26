<?php
/**
 * Enqueue class used to define configurations.
 *
 * @since   1.0.0
 * @package Eightshift_Blocks\Blocks
 */

namespace Eightshift_Blocks\Blocks;

use Eightshift_Libs\Core\Service;

/**
 * Enqueue class.
 */
class Enqueue implements Service {

  private $theme_name = 'eightshift';
  private $theme_version = '1';

  /**
   * Register all the hooks
   *
   * @since 1.0.0
   */
  public function register() : void {
    remove_filter( 'the_content', 'wpautop' );

    // Only editor.
    add_action( 'enqueue_block_editor_assets', [ $this, 'enqueue_block_editor_scripts' ] );
    add_action( 'enqueue_block_editor_assets', [ $this, 'enqueue_block_editor_styles' ], 50 );

    // Editor and Theme.
    add_action( 'enqueue_block_assets', [ $this, 'enqueue_block_styles' ], 50 );

    // Only Theme.
    add_action( 'wp_enqueue_scripts', [ $this, 'enqueue_block_scripts' ] );
  }

  /**
   * Register the Stylesheets for the blocks editor and frontend area.
   *
   * @since 1.0.0
   */
  public function enqueue_block_styles() {
    \wp_register_style( "{$this->theme_name}-block-style", $this->manifest->get_manifest_assets_data( 'applicationBlocks.css' ), array( "{$this->theme_name}-style" ), $this->theme_version, false );
    \wp_enqueue_style( "{$this->theme_name}-block-style" );
  }

  /**
   * Register the Stylesheets for the blocks editor only area.
   *
   * @since 1.0.0
   */
  public function enqueue_block_editor_styles() {
    \wp_register_style( "{$this->theme_name}-block-editor-style", $this->manifest->get_manifest_assets_data( 'applicationBlocksEditor.css' ), array( "{$this->theme_name}-style", "{$this->theme_name}-block-style" ), $this->theme_version, false );
    \wp_enqueue_style( "{$this->theme_name}-block-editor-style" );
  }

  /**
   * Register the JavaScript for the blocks ONLY Frontend.
   *
   * @since 1.0.0
   */
  public function enqueue_block_scripts() {
    \wp_register_script(
      "{$this->theme_name}-block-scripts",
      $this->manifest->get_manifest_assets_data( 'applicationBlocks.js' ),
      [],
      $this->theme_version,
      true
    );
    \wp_enqueue_script( "{$this->theme_name}-block-scripts" );
  }

  /**
   * Register the JavaScript for the blocks editor area.
   *
   * @since 1.0.0
   */
  public function enqueue_block_editor_scripts() {
    \wp_register_script(
      "{$this->theme_name}-block-editor-scripts",
      $this->manifest->get_manifest_assets_data( 'applicationBlocksEditor.js' ),
      array(
        'jquery',
        'wp-components',
        'wp-blocks',
        'wp-element',
        'wp-editor',
        'wp-date',
        'wp-data',
        'wp-i18n',
        'wp-viewport',
        'wp-blob',
        'wp-url',
      ),
      $this->theme_version,
      true
    );
    \wp_enqueue_script( "{$this->theme_name}-block-editor-scripts" );
  }
}
