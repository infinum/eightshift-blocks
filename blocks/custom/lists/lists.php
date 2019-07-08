<?php
/**
 * Template for the Lists Block view.
 *
 * @since 1.0.0
 * @package Inf_theme\Blocks.
 */

namespace Inf_theme\Blocks;

use Eightshift_Blocks\Helpers\Block_View_Helper;

Block_View_Helper::render_block_view(
  '/components/lists/lists.php',
  [
    'blockClass' => $attributes['blockClass'] ?? '',
    'content' => $attributes['content'] ?? '',
    'ordered' => $attributes['ordered'] ?? '',
  ]
);
