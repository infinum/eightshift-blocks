<?php
/**
 * Template for the Link Block view.
 *
 * @since 1.0.0
 * @package Project_Namespace\Blocks.
 */

namespace Project_Namespace\Blocks;

use Eightshift_Blocks\Helpers\Block_View_Helper;

Block_View_Helper::render_block_view(
  '/components/link/link.php',
  [
    'blockClass' => $attributes['blockClass'] ?? '',
    'title' => $attributes['title'] ?? '',
    'url' => $attributes['url'] ?? '',
    'styleColor' => $attributes['styleColor'] ?? '',
  ]
);
