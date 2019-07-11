import { getActions } from 'EighshiftBlocksGetActions';
import manifest from './manifest.json';

import { Wrapper } from '../../wrapper/wrapper';
import { ListsEditor } from '../../components/lists/components/lists-editor';

export const Lists = (props) => {
  const {
    attributes: {
      blockClass,
      content,
      ordered,
    },
  } = props;

  const actions = getActions(props, manifest);

  return (
    <Wrapper
      props={props}
    >
      <ListsEditor
        blockClass={blockClass}
        content={content}
        onChangeContent={actions.onChangeContent}
        ordered={ordered}
        onChangeOrdered={actions.onChangeOrdered}
      />
    </Wrapper>
  );
};
