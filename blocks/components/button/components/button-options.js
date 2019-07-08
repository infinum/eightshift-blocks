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
    <PanelBody title={__('Button Details', 'eightshift-blocks')}>

      {styleColor &&
        <SelectControl
          label={__('Button Color', 'eightshift-blocks')}
          value={styleColor}
          options={[
            { label: __('Default', 'eightshift-blocks'), value: 'default' },
            { label: __('Primary', 'eightshift-blocks'), value: 'primary' },
          ]}
          onChange={onChangeStyleColor}
        />
      }

      {styleSize &&
        <SelectControl
          label={__('Button Size', 'eightshift-blocks')}
          value={styleSize}
          options={[
            { label: __('Default', 'eightshift-blocks'), value: 'default' },
            { label: __('Big', 'eightshift-blocks'), value: 'big' },
          ]}
          onChange={onChangeStyleSize}
        />
      }

      {styleSizeWidth &&
        <SelectControl
          label={__('Button Size Width', 'eightshift-blocks')}
          value={styleSizeWidth}
          options={[
            { label: __('Default', 'eightshift-blocks'), value: 'default' },
            { label: __('Block', 'eightshift-blocks'), value: 'block' },
          ]}
          onChange={onChangeStyleSizeWidth}
        />
      }

      {url &&
        <div>
          <label htmlFor="URLInput">{__('Button Link', 'eightshift-blocks')}</label>
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
            label={__('Button ID', 'eightshift-blocks')}
            value={btnId}
            onChange={onChangeBtnId}
          />
        </div>
      }

    </PanelBody>
  );
};
