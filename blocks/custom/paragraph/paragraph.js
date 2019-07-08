import { InspectorControls } from '@wordpress/editor';

import { getActions } from 'EighshiftBlocksGetActions';
import manifest from './manifest.json';

import { Wrapper } from '../../wrapper/wrapper';
import { ParagraphEditor } from '../../components/paragraph/components/paragraph-editor';
import { ParagraphOptions } from '../../components/paragraph/components/paragraph-options';

export const Paragraph = (props) => {
  const {
    attributes: {
      blockClass,
      content,
      styleAlign,
      styleColor,
    },
  } = props;

  const actions = getActions(props, manifest);

  return (
    <Wrapper
      props={props}
    >
      <InspectorControls>
        <ParagraphOptions
          styleAlign={styleAlign}
          onChangeStyleAlign={actions.onChangeStyleAlign}
          styleColor={styleColor}
          onChangeStyleColor={actions.onChangeStyleColor}
        />
      </InspectorControls>
      <ParagraphEditor
        blockClass={blockClass}
        content={content}
        onChangeContent={actions.onChangeContent}
        styleAlign={styleAlign}
        styleColor={styleColor}
      />
    </Wrapper>
  );
};
