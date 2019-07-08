import { Fragment } from '@wordpress/element';
import { InspectorControls } from '@wordpress/editor';

import { ButtonEditor } from './components/button-editor';
import { ButtonOptions } from './components/button-options';

export const Button = (props) => {
  const {
    blockClass,
    title,
    onChangeTitle,
    styleSize,
    onChangeStyleSize,
    styleColor,
    onChangeStyleColor,
    styleSizeWidth,
    onChangeStyleSizeWidth,
    url,
    onChangeUrl,
    btnId,
    onChangeBtnId,
  } = props;

  return (
    <Fragment>
      <InspectorControls>
        <ButtonOptions
          blockClass={blockClass}
          title={title}
          onChangeTitle={onChangeTitle}
          styleSize={styleSize}
          styleColor={styleColor}
          styleSizeWidth={styleSizeWidth}
        />
      </InspectorControls>
      <ButtonEditor
        url={url}
        onChangeUrl={onChangeUrl}
        styleSize={styleSize}
        onChangeStyleSize={onChangeStyleSize}
        styleColor={styleColor}
        onChangeStyleColor={onChangeStyleColor}
        styleSizeWidth={styleSizeWidth}
        onChangeStyleSizeWidth={onChangeStyleSizeWidth}
        btnId={btnId}
        onChangeBtnId={onChangeBtnId}
      />
    </Fragment>
  );
};
