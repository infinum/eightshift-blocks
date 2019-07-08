import { __ } from '@wordpress/i18n';
import { URLInput } from '@wordpress/editor';
import { PanelBody, SelectControl } from '@wordpress/components';

export const LinkOptions = (props) => {
  const {
    url,
    onChangeUrl,
    styleColor,
    onChangeColor,
  } = props;

  return (
    <PanelBody title={__('Link Details', 'eightshift-blocks')}>

      {styleColor &&
        <SelectControl
          label={__('Color', 'eightshift-blocks')}
          value={styleColor}
          options={[
            { label: __('Default', 'eightshift-blocks'), value: 'default' },
          ]}
          onChange={onChangeColor}
        />
      }

      {url &&
        <div>
          <label htmlFor="URLInput">{__('Link', 'eightshift-blocks')}</label>
          <URLInput
            value={url}
            onChange={onChangeUrl}
          />
        </div>
      }

    </PanelBody>
  );
};
