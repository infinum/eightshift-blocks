import { __ } from '@wordpress/i18n';
import { MediaPlaceholder } from '@wordpress/editor';
import { PanelBody } from '@wordpress/components';

export const ImageOptions = (props) => {
  const {
    onChangeMedia,
  } = props;

  return (
    <PanelBody title={__('Image Settings', 'eightshift_boilerplate')}>
      <MediaPlaceholder
        icon="format-image"
        onSelect={onChangeMedia}
        accept={'image/*'}
        allowedTypes={['image', 'application/json']}
      />
    </PanelBody>
  );
};
