import { __ } from '@wordpress/i18n';
import { URLInput } from '@wordpress/editor';
import { PanelBody, SelectControl, TextControl } from '@wordpress/components';

export const ButtonOptions = (props) => {
  const {
    url,
    onChangeUrl,
    styleSize,
    onChangeStyleSize,
    styleColor,
    onChangeStyleColor,
    styleSizeWidth,
    onChangeStyleSizeWidth,
    btnId,
    onChangeBtnId,
  } = props;

  return (
    <PanelBody title={__('Button Details', 'eightshift_boilerplate')}>

      {styleColor &&
        <SelectControl
          label={__('Button Color', 'eightshift_boilerplate')}
          value={styleColor}
          options={[
            { label: __('Default', 'eightshift_boilerplate'), value: 'default' },
            { label: __('Primary', 'eightshift_boilerplate'), value: 'primary' },
          ]}
          onChange={onChangeStyleColor}
        />
      }

      {styleSize &&
        <SelectControl
          label={__('Button Size', 'eightshift_boilerplate')}
          value={styleSize}
          options={[
            { label: __('Default', 'eightshift_boilerplate'), value: 'default' },
            { label: __('Big', 'eightshift_boilerplate'), value: 'big' },
          ]}
          onChange={onChangeStyleSize}
        />
      }

      {styleSizeWidth &&
        <SelectControl
          label={__('Button Size Width', 'eightshift_boilerplate')}
          value={styleSizeWidth}
          options={[
            { label: __('Default', 'eightshift_boilerplate'), value: 'default' },
            { label: __('Block', 'eightshift_boilerplate'), value: 'block' },
          ]}
          onChange={onChangeStyleSizeWidth}
        />
      }

      {url &&
        <div>
          <label htmlFor="URLInput">{__('Button Link', 'eightshift_boilerplate')}</label>
          <URLInput
            value={url}
            onChange={onChangeUrl}
          />
          <br />
        </div>
      }

      {btnId &&
        <div>
          <TextControl
            label={__('Button ID', 'eightshift_boilerplate')}
            value={btnId}
            onChange={onChangeBtnId}
          />
        </div>
      }

    </PanelBody>
  );
};
