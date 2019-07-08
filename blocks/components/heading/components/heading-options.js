import { __ } from '@wordpress/i18n';
import { AlignmentToolbar } from '@wordpress/editor';
import { PanelBody, SelectControl } from '@wordpress/components';
import { HeadingToolbar } from './../../../toolbars/heading-toolbar';

export const HeadingOptions = (props) => {
  const {
    level,
    onChangeLevel,
    styleAlign,
    onChangeStyleAlign,
    styleColor,
    onChangeStyleColor,
    styleSize,
    onChangeStyleSize,
  } = props;

  return (
    <PanelBody title={__('Heading Details', 'eightshift-blocks')}>

      {level &&
        <div>
          <p>{__('Heading Level', 'eightshift-blocks')}</p>
          <HeadingToolbar
            minLevel={1}
            maxLevel={7}
            selectedLevel={level}
            onChange={onChangeLevel}
          />
          <br />
        </div>
      }

      {styleColor &&
        <SelectControl
          label={__('Heading Color', 'eightshift-blocks')}
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
          <p>{__('Heading Text Alignment', 'eightshift-blocks')}</p>
          <AlignmentToolbar
            value={styleAlign}
            onChange={onChangeStyleAlign}
          />
          <br />
        </div>
      }

      {styleSize &&
        <SelectControl
          label={__('Heading Size', 'eightshift-blocks')}
          value={styleSize}
          options={[
            { label: __('Default', 'eightshift-blocks'), value: 'default' },
            { label: __('Big', 'eightshift-blocks'), value: 'big' },
          ]}
          onChange={onChangeStyleSize}
        />
      }

    </PanelBody>
  );
};
