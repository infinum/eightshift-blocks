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
    <PanelBody title={__('Heading Details', 'eightshift_boilerplate')}>

      {level &&
        <div>
          <p>{__('Heading Level', 'eightshift_boilerplate')}</p>
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
          label={__('Heading Color', 'eightshift_boilerplate')}
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
          <p>{__('Heading Text Alignment', 'eightshift_boilerplate')}</p>
          <AlignmentToolbar
            value={styleAlign}
            onChange={onChangeStyleAlign}
          />
          <br />
        </div>
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
