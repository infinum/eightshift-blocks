<?php
/**
 * Template for the Example Block view.
 *
 * @since 1.0.0
 * @package Project_Namespace\Blocks.
 */

namespace Project_Namespace\Blocks;

$block_class = $attributes['blockClass'] ?? '';
$content     = $attributes['content'] ?? '';

?>

<div class="<?php echo esc_attr( $block_class ); ?>">
  <?php echo wp_kses_post( $content ); ?>
</div>
