import { Fragment } from '@wordpress/element';
import { InspectorControls } from '@wordpress/editor';

import { ImageEditor } from './components/image-editor';
import { ImageOptions } from './components/image-options';

export const Image = (props) => {
  const {
    blockClass,
    url,
    onChangeMedia,
  } = props;

  return (
    <Fragment>
      <InspectorControls>
        <ImageOptions
          onChangeMedia={onChangeMedia}
        />
      </InspectorControls>
      <ImageEditor
        blockClass={blockClass}
        url={url}
      />
    </Fragment>
  );
};
