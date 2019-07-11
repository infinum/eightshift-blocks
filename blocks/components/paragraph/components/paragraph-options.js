import { __ } from '@wordpress/i18n';
import { PanelBody, SelectControl } from '@wordpress/components';

export const ParagraphOptions = (props) => {
  const {
    styleColor,
    onChangeStyleColor,
  } = props;

  return (
    <PanelBody title={__('Paragraph Details', 'eightshift-boilerplate')}>

      {styleColor &&
        <SelectControl
          label={__('Paragraph Color', 'eightshift-boilerplate')}
          value={styleColor}
          options={[
            { label: __('Default', 'eightshift-boilerplate'), value: 'default' },
            { label: __('Primary', 'eightshift-boilerplate'), value: 'primary' },
          ]}
          onChange={onChangeStyleColor}
        />
      }

    </PanelBody>
  );
};
