<?php
/**
 * Template for the Button Block view.
 *
 * @since 1.0.0
 * @package Inf_theme\Blocks.
 */

namespace Inf_theme\Blocks;

use Eightshift_Blocks\Helpers\Block_View_Helper;

Block_View_Helper::render_block_view(
  '/components/button/button.php',
  [
    'blockClass' => $attributes['blockClass'] ?? '',
    'title' => $attributes['title'] ?? '',
    'url' => $attributes['url'] ?? '',
    'styleColor' => $attributes['styleColor'] ?? '',
    'styleSize' => $attributes['styleSize'] ?? '',
    'styleSizeWidth' => $attributes['styleSizeWidth'] ?? '',
  ]
);