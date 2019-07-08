<?php
/**
 * Template for the Image.
 *
 * @since 1.0.0
 * @package Academy\Blocks.
 */

namespace Academy\Blocks;

$block_class = $attributes['blockClass'] ?? '';
$size        = $attributes['size'] ?? 'large';

$media = \wp_get_attachment_image(
  $attributes['id'],
  $size,
  '',
  [ 'class' => $block_class ]
);

echo wp_kses_post( $media );


