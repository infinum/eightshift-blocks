import { __ } from '@wordpress/i18n';
import { MediaPlaceholder } from '@wordpress/editor';
import { PanelBody } from '@wordpress/components';

export const VideoOptions = (props) => {
  const {
    onChangeMedia,
  } = props;

  return (
    <PanelBody title={__('Video Settings', 'eightshift-boilerplate')}>
      <MediaPlaceholder
        onSelect={onChangeMedia}
        accept={'video/*'}
        allowedTypes={['video']}
      />
    </PanelBody>
  );
};
