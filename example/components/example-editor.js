import { __ } from '@wordpress/i18n';
import { RichText } from '@wordpress/editor';

export const ExampleEditor = (props) => {
  const {
    attributes: {
      blockClass,
      content,
    },
    actions: {
      onChangeContent,
    },
  } = props;

  return (
    <RichText
      tagName="div"
      placeholder={__('Add your content', 'example')}
      className={blockClass}
      onChange={onChangeContent}
      value={content}
    />
  );
};
