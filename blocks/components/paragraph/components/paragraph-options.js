import { __ } from '@wordpress/i18n';
import { AlignmentToolbar } from '@wordpress/editor';
import { PanelBody, SelectControl } from '@wordpress/components';

export const ParagraphOptions = (props) => {
  const {
    styleAlign,
    onChangeStyleAlign,
    styleColor,
    onChangeStyleColor,
  } = props;

  return (
    <PanelBody title={__('Paragraph Details', 'eightshift_boilerplate')}>

      {styleColor &&
        <SelectControl
          label={__('Paragraph Color', 'eightshift_boilerplate')}
          value={styleColor}
          options={[
            { label: __('Default', 'eightshift_boilerplate'), value: 'default' },
            { label: __('Primary', 'eightshift_boilerplate'), value: 'primary' },
          ]}
          onChange={onChangeStyleColor}
        />
      }

      {styleAlign &&
        <div>
          <p>{__('Paragraph Text Alignment', 'eightshift_boilerplate')}</p>
          <AlignmentToolbar
            value={styleAlign}
            onChange={onChangeStyleAlign}
          />
        </div>
      }

    </PanelBody>
  );
};
