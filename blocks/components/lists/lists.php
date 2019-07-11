<?php
/**
 * Template for the Lists Block view.
 *
 * @since 1.0.0
 * @package Eightshift_Boilerplate\Blocks.
 */

namespace Eightshift_Boilerplate\Blocks;

$content = $attributes['content'] ?? '';
$ordered = $attributes['ordered'] ?? 'ul';

$component_class = 'lists';
$block_class     = $attributes['blockClass'] ?? '';
$style_type      = isset( $attributes['styleType'] ) ? "{$component_class}__type--{$attributes['styleType']}" : '';

$lists_class = "
  {$component_class}
  {$style_type}
  {$block_class}__lists
";

?>

<<?php echo esc_attr( $ordered ); ?> class="<?php echo esc_attr( $lists_class ); ?>">
    <?php echo wp_kses_post( $content ); ?>
</<?php echo esc_attr( $ordered ); ?>>
