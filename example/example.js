import { InspectorControls } from '@wordpress/editor';

import { getActions } from 'EighshiftBlocksGetActions';
import manifest from './manifest.json';

import { Wrapper } from './../../wrapper/wrapper';
import { ExampleEditor } from './components/example-editor';
import { ExampleOptions } from './components/example-options';

export const Example = (props) => {
  const {
    attributes,
  } = props;

  const actions = getActions(props, manifest);

  return (
    <Wrapper
      props={props}
    >
      <InspectorControls>
        <ExampleOptions
          attributes={attributes}
          actions={actions}
        />
      </InspectorControls>
      <ExampleEditor
        attributes={attributes}
        actions={actions}
      />
    </Wrapper>
  );
};
