import { InspectorControls } from '@wordpress/editor';

import { getActions } from 'EighshiftBlocksGetActions';
import manifest from './manifest.json';

import { Wrapper } from '../../wrapper/wrapper';
import { HeadingEditor } from '../../components/heading/components/heading-editor';
import { HeadingOptions } from '../../components/heading/components/heading-options';

export const Heading = (props) => {
  const {
    attributes: {
      blockClass,
      content,
      level,
      styleAlign,
      styleColor,
      styleSize,
    },
  } = props;

  const actions = getActions(props, manifest);

  return (
    <Wrapper
      props={props}
    >
      <InspectorControls>
        <HeadingOptions
          level={level}
          onChangeLevel={actions.onChangeLevel}
          styleAlign={styleAlign}
          onChangeStyleAlign={actions.onChangeStyleAlign}
          styleColor={styleColor}
          onChangeStyleColor={actions.onChangeStyleColor}
          styleSize={styleSize}
          onChangeStyleSize={actions.onChangeStyleSize}
        />
      </InspectorControls>
      <HeadingEditor
        blockClass={blockClass}
        content={content}
        onChangeContent={actions.onChangeContent}
        level={level}
        styleAlign={styleAlign}
        styleColor={styleColor}
        styleSize={styleSize}
      />
    </Wrapper>
  );
};
