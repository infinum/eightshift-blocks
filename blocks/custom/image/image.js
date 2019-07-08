import { InspectorControls } from '@wordpress/editor';

import { Wrapper } from '../../wrapper/wrapper';
import { ImageEditor } from '../../components/image/components/image-editor';
import { ImageOptions } from '../../components/image/components/image-options';

export const Image = (props) => {
  const {
    setAttributes,
    attributes: {
      blockClass,
      mediaUrl,
    },
  } = props;

  const actions = {
    onChangeMedia: (value) => {
      setAttributes({
        mediaId: value.id,
        mediaUrl: value.url,
      });
    },
  };

  return (
    <Wrapper
      props={props}
    >
      <InspectorControls>
        <ImageOptions
          onChangeMedia={actions.onChangeMedia}
        />
      </InspectorControls>
      <ImageEditor
        blockClass={blockClass}
        url={mediaUrl}
      />
    </Wrapper>
  );
};
