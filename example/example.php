<?php
/**
 * Template for the Example Block view.
 *
 * @since 1.0.0
 * @package Project_Namespace\Blocks.
 */

namespace Project_Namespace\Blocks;

$root_class = $attributes['rootClass'] ?? '';
$content    = $attributes['content'] ?? '';

$block_class = $root_class;

?>

<div class="<?php echo esc_attr( $block_class ); ?>">
  <?php echo wp_kses_post( $content ); ?>
</div>
