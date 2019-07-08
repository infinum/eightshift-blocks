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
    <PanelBody title={__('Paragraph Details', 'eightshift-blocks')}>

      {styleColor &&
        <SelectControl
          label={__('Paragraph Color', 'eightshift-blocks')}
          value={styleColor}
          options={[
            { label: __('Default', 'eightshift-blocks'), value: 'default' },
            { label: __('Primary', 'eightshift-blocks'), value: 'primary' },
          ]}
          onChange={onChangeStyleColor}
        />
      }

      {styleAlign &&
        <div>
          <p>{__('Paragraph Text Alignment', 'eightshift-blocks')}</p>
          <AlignmentToolbar
            value={styleAlign}
            onChange={onChangeStyleAlign}
          />
        </div>
      }

    </PanelBody>
  );
};
