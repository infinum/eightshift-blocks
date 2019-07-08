<?php
/**
 * Template for the Paragraph Block view.
 *
 * @since 1.0.0
 * @package Inf_theme\Blocks.
 */

namespace Inf_theme\Blocks;

use Eightshift_Blocks\Helpers\Block_View_Helper;

Block_View_Helper::render_block_view(
  '/components/paragraph/paragraph.php',
  [
    'blockClass' => $attributes['blockClass'] ?? '',
    'content' => $attributes['content'] ?? '',
    'styleAlign' => $attributes['styleAlign'] ?? '',
    'styleColor' => $attributes['styleColor'] ?? '',
  ]
);