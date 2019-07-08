<?php
/**
 * Template for the Image.
 *
 * @since 1.0.0
 * @package Academy\Blocks.
 */

namespace Academy\Blocks;

$block_class = $attributes['blockClass'] ?? '';
$url         = $attributes['url'] ?? '';

?>

<video class="<?php echo esc_attr( $block_class ); ?>" autoplay loop muted>
  <source src="<?php echo esc_url( $url ); ?>" type="video/mp4">
</video>
