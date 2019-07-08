import { Fragment } from '@wordpress/element';
import { InspectorControls } from '@wordpress/editor';

import { VideoEditor } from './components/video-editor';
import { VideoOptions } from './components/video-options';

export const Video = (props) => {
  const {
    blockClass,
    url,
    onChangeMedia,
  } = props;

  return (
    <Fragment>
      <InspectorControls>
        <VideoOptions
          onChangeMedia={onChangeMedia}
        />
      </InspectorControls>
      <VideoEditor
        blockClass={blockClass}
        url={url}
      />
    </Fragment>
  );
};
