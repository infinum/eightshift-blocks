import classnames from 'classnames';
import { __ } from '@wordpress/i18n';
import { RichText } from '@wordpress/editor';

export const ListsEditor = (props) => {
  const {
    blockClass,
    content,
    onChangeContent,
    ordered,
    onChangeOrdered,
  } = props;

  const componentClass = 'lists';

  const listsClass = classnames([
    componentClass,
    `${blockClass}__lists`,
  ]);

  return (
    <RichText
      tagName={ordered}
      multiline="li"
      className={listsClass}
      placeholder={__('Add your list item', 'eightshift-block')}
      onChange={onChangeContent}
      value={content}
      onTagNameChange={onChangeOrdered}
    />
  );
};
