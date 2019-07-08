import { Fragment } from '@wordpress/element';
import { InspectorControls } from '@wordpress/editor';

import { LinkEditor } from './components/link-editor';
import { LinkOptions } from './components/link-options';

export const Link = (props) => {
  const {
    blockClass,
    title,
    onChangeTitle,
    url,
    onChangeUrl,
    styleColor,
    onChangeColor,
  } = props;

  return (
    <Fragment>
      <InspectorControls>
        <LinkOptions
          url={url}
          onChangeUrl={onChangeUrl}
          styleColor={styleColor}
          onChangeColor={onChangeColor}
        />
      </InspectorControls>
      <LinkEditor
        blockClass={blockClass}
        title={title}
        onChangeTitle={onChangeTitle}
        styleColor={styleColor}
      />
    </Fragment>
  );
};
