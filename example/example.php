<?php
/**
 * Template for the Example Block view.
 *
 * @since 1.0.0
 * @package Inf_theme\Blocks.
 */

namespace Inf_theme\Blocks;

$block_class = $attributes['blockClass'] ?? '';
$content     = $attributes['content'] ?? '';

?>

<div class="<?php echo esc_attr( $block_class ); ?>">
  <?php echo wp_kses_post( $content ); ?>
</div>
