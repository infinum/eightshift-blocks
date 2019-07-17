import { Fragment } from '@wordpress/element';
import { InspectorControls } from '@wordpress/editor';

import { getActions } from 'EighshiftBlocksGetActions';
import manifest from './manifest.json';

import { ButtonEditor } from '../../components/button/components/button-editor';
import { ButtonOptions } from '../../components/button/components/button-options';

export const Button = (props) => {
  const {
    attributes: {
      blockClass,
      title,
      url,
      styleSize,
      styleColor,
      styleSizeWidth,
      btnId,
    },
  } = props;

  const actions = getActions(props, manifest);

  return (
    <Fragment>
      <InspectorControls>
        <ButtonOptions
          url={url}
          onChangeUrl={actions.onChangeUrl}
          styleSize={styleSize}
          onChangeStyleSize={actions.onChangeStyleSize}
          styleColor={styleColor}
          onChangeStyleColor={actions.onChangeStyleColor}
          styleSizeWidth={styleSizeWidth}
          onChangeStyleSizeWidth={actions.onChangeStyleSizeWidth}
          btnId={btnId}
          onChangeBtnId={actions.onChangeBtnId}
        />
      </InspectorControls>
      <ButtonEditor
        blockClass={blockClass}
        title={title}
        onChangeTitle={actions.onChangeTitle}
        styleSize={styleSize}
        styleColor={styleColor}
        styleSizeWidth={styleSizeWidth}
      />
    </Fragment>
  );
};
