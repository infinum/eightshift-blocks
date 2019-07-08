import { Fragment } from '@wordpress/element';
import { InspectorControls } from '@wordpress/editor';

import { HeadingEditor } from './components/heading-editor';
import { HeadingOptions } from './components/heading-options';

export const Heading = (props) => {
  const {
    blockClass,
    content,
    onChangeContent,
    level,
    onChangeLevel,
    styleAlign,
    onChangeStyleAlign,
    styleColor,
    onChangeStyleColor,
    styleSize,
    onChangeStyleSize,
  } = props;

  return (
    <Fragment>
      <InspectorControls>
        <HeadingOptions
          level={level}
          onChangeLevel={onChangeLevel}
          styleAlign={styleAlign}
          onChangeStyleAlign={onChangeStyleAlign}
          styleColor={styleColor}
          onChangeStyleColor={onChangeStyleColor}
          styleSize={styleSize}
          onChangeStyleSize={onChangeStyleSize}
        />
      </InspectorControls>
      <HeadingEditor
        blockClass={blockClass}
        content={content}
        onChangeContent={onChangeContent}
        level={level}
        styleAlign={styleAlign}
        styleColor={styleColor}
        styleSize={styleSize}
      />
    </Fragment>
  );
};
