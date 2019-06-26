<?php
/**
 * File that holds the renderable Block interface.
 *
 * @since   0.1.0
 * @package Blocks\Blocks
 */

namespace Blocks\Blocks;

/**
 * Interface Renderable Block.
 *
 * An object that can be rendered.
 */
interface Renderable_Block {

  /**
   * Renders the block using a template in Infinum\Blocks\Templates namespace/folder.
   * Template file must have the same name as the class-blockname file, for example:
   *
   *   Block:     class-heading.php
   *   Template:  heading.php
   *
   * @param array  $attributes Array of attributes as defined in block's index.js.
   * @param string $content    Block's content.
   *
   * @throws \Exception On missing attributes OR missing template.
   * @echo   string
   *
   * @since 0.1.0
   */
  public function render( array $attributes, string $content ) : string;
}
