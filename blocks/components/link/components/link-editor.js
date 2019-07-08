import classnames from 'classnames';
import { __ } from '@wordpress/i18n';
import { RichText } from '@wordpress/editor';

export const LinkEditor = (props) => {
  const {
    blockClass,
    title,
    onChangeTitle,
    styleColor,
  } = props;

  const componentClass = 'link';

  const linkClass = classnames([
    componentClass,
    `${componentClass}__color--${styleColor}`,
    `${blockClass}__link`,
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
