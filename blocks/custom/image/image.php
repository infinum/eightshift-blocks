<?php
/**
 * Template for the Image Block view.
 *
 * @since 1.0.0
 * @package Eightshift_Boilerplate\Blocks.
 */

namespace Eightshift_Boilerplate\Blocks;

use Eightshift_Blocks\Helpers\Block_View_Helper;

Block_View_Helper::render_block_view(
  '/components/image/image.php',
  [
    'blockClass' => $attributes['blockClass'] ?? '',
    'id' => $attributes['mediaId'] ?? '',
    'size' => $attributes['mediaSize'] ?? '',
  ]
);
