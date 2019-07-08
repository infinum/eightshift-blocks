import { Fragment } from '@wordpress/element';
import { InspectorControls } from '@wordpress/editor';

import { ParagraphEditor } from './components/paragraph-editor';
import { ParagraphOptions } from './components/paragraph-options';

export const Paragraph = (props) => {
  const {
    blockClass,
    content,
    onChangeContent,
    styleAlign,
    onChangeStyleAlign,
    styleColor,
    onChangeStyleColor,
  } = props;

  return (
    <Fragment>
      <InspectorControls>
        <ParagraphOptions
          styleAlign={styleAlign}
          onChangeStyleAlign={onChangeStyleAlign}
          styleColor={styleColor}
          onChangeStyleColor={onChangeStyleColor}
        />
      </InspectorControls>
      <ParagraphEditor
        blockClass={blockClass}
        content={content}
        onChangeContent={onChangeContent}
        styleAlign={styleAlign}
        styleColor={styleColor}
      />
    </Fragment>
  );
};
