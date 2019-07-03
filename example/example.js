import { Fragment } from '@wordpress/element';
import { getStore } from 'EighshiftBlocksGetStore';
import manifest from './manifest.json.js';
import { ExampleEditor } from './components/example-editor';
import { ExampleOptions } from './components/example-options';

export const Example = (props) => {
  const {
    attributes,
  } = props;

  const attributesStore = getStore(props, manifest);

  return (
    <Fragment>
      <InspectorControls>
        <ExampleOptions
          attributes={attributes}
          attributesStore={attributesStore}
        />
      </InspectorControls>
      <ExampleEditor
        attributes={attributes}
        attributesStore={attributesStore}
      />
    </Fragment>
  );
};
