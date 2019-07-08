<?php
/**
 * Template for the Video Block view.
 *
 * @since 1.0.0
 * @package Inf_theme\Blocks.
 */

namespace Inf_theme\Blocks;

use Eightshift_Blocks\Helpers\Block_View_Helper;

Block_View_Helper::render_block_view(
  '/components/video/video.php',
  [
    'blockClass' => $attributes['blockClass'] ?? '',
    'url' => $attributes['mediaUrl'] ?? '',
  ]
);
