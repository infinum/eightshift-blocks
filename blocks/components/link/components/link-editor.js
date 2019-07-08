import classnames from 'classnames';
import { __ } from '@wordpress/i18n';
import { RichText } from '@wordpress/editor';

export const LinkEditor = (props) => {
  const {
    blockClass,
    title,
    styleColor,
    onChangeTitle,
  } = props;

  const linkClass = classnames([
    `${blockClass}__link`,
    'link',
    `link__color--${styleColor}`,
  ]);

  return (
    <RichText
      placeholder={__('Add Link Title', 'eightshift-blocks')}
      value={title}
      onChange={onChangeTitle}
      className={linkClass}
      keepPlaceholderOnFocus
    />
  );
};
