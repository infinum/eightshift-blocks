import { __ } from '@wordpress/i18n';
import { PanelBody, SelectControl } from '@wordpress/components';

export const HeadingOptions = (props) => {
  const {
    styleColor,
    onChangeStyleColor,
    styleSize,
    onChangeStyleSize,
  } = props;

  return (
    <PanelBody title={__('Heading Details', 'eightshift_boilerplate')}>

      {styleColor &&
        <SelectControl
          label={__('Heading Color', 'eightshift_boilerplate')}
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
          label={__('Heading Size', 'eightshift_boilerplate')}
          value={styleSize}
          options={[
            { label: __('Default', 'eightshift_boilerplate'), value: 'default' },
            { label: __('Big', 'eightshift_boilerplate'), value: 'big' },
          ]}
          onChange={onChangeStyleSize}
        />
      }

    </PanelBody>
  );
};
