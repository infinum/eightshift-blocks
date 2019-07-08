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
    <PanelBody title={__('Link Details', 'eightshift_boilerplate')}>

      {styleColor &&
        <SelectControl
          label={__('Color', 'eightshift_boilerplate')}
          value={styleColor}
          options={[
            { label: __('Default', 'eightshift_boilerplate'), value: 'default' },
          ]}
          onChange={onChangeColor}
        />
      }

      {url &&
        <div>
          <label htmlFor="URLInput">{__('Link', 'eightshift_boilerplate')}</label>
          <URLInput
            value={url}
            onChange={onChangeUrl}
          />
        </div>
      }

    </PanelBody>
  );
};
