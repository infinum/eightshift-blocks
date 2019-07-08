<?php
/**
 * Template for the Link Component.
 *
 * @since 1.0.0
 * @package Inf_theme\Blocks\Components.
 */

namespace Inf_theme\Blocks\Components;

$block_class = $attributes['blockClass'] ?? '';
$title       = $attributes['title'] ?? '';
$url         = $attributes['url'] ?? '';
$color       = $attributes['styleColor'] ?? '';

$link_class = "
  {$block_class}__link
  link__color--{$color}
";
?>

<a href="<?php echo esc_url( $url ); ?>" class="<?php echo esc_attr( $link_class ); ?>">
  <?php echo esc_html( $title ); ?>
</a>
