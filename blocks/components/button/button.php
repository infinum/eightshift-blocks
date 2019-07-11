<?php
/**
 * Template for the Button Component.
 *
 * @since 1.0.0
 * @package Eightshift_Boilerplate\Blocks.
 */

namespace Eightshift_Boilerplate\Blocks;

$url   = $attributes['url'] ?? '';
$title = $attributes['title'] ?? '';

$component_class  = 'btn';
$block_class      = $attributes['blockClass'] ?? '';
$style_color      = $attributes['styleColor'] ?? '';
$style_size       = $attributes['styleSize'] ?? '';
$style_size_width = $attributes['styleSizeWidth'] ?? '';

$button_class = "
  {$component_class}
  {$component_class}__color--{$style_color}
  {$component_class}__size--{$style_size}
  {$component_class}__size-width--{$style_size_width}
  {$block_class}__btn
";
?>

<a href="<?php echo esc_url( $url ); ?>" class="<?php echo esc_attr( $button_class ); ?>">
  <?php echo esc_html( $title ); ?>
</a>
