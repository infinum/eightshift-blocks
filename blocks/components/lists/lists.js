import { Fragment } from '@wordpress/element';

import { ListsEditor } from './components/lists-editor';

export const Lists = (props) => {
  const {
    blockClass,
    content,
    onChangeContent,
    ordered,
    onChangeOrdered,
  } = props;

  return (
    <Fragment>
      <ListsEditor
        blockClass={blockClass}
        content={content}
        onChangeContent={onChangeContent}
        ordered={ordered}
        onChangeOrdered={onChangeOrdered}
      />
    </Fragment>
  );
};
