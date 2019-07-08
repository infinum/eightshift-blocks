import { __ } from '@wordpress/i18n';
import { PanelBody, TextControl, SelectControl } from '@wordpress/components';

export const WrapperOptions = (props) => {
  const {
    attributes: {
      styleBackgroundColor,
      styleTextColor,
      styleContentWidth,
      styleContentOffset,
      styleContainerWidth,
      styleContainerSpacing,
      styleSpacingTop,
      styleSpacingTopTablet,
      styleSpacingTopMobile,
      styleSpacingBottom,
      styleSpacingBottomTablet,
      styleSpacingBottomMobile,
      styleShowOnlyMobile,
      id,
    },
    actions: {
      onChangeStyleBackgroundColor,
      onChangeStyleTextColor,
      onChangeStyleContentWidth,
      onChangeStyleContentOffset,
      onChangeStyleContainerWidth,
      onChangeStyleContainerSpacing,
      onChangeStyleSpacingTop,
      onChangeStyleSpacingTopTablet,
      onChangeStyleSpacingTopMobile,
      onChangeStyleSpacingBottom,
      onChangeStyleSpacingBottomTablet,
      onChangeStyleSpacingBottomMobile,
      onChangeStyleShowOnlyMobile,
      onChangeId,
    },
  } = props;

  const maxCols = 12;
  const colsOutput = [];

  for (let index = 1; index <= maxCols; index++) {
    colsOutput.push({ label: `${index} - (${Math.round((100 / maxCols) * index)}%)`, value: index });
  }

  const spacingOptions = [
    { label: __('Not Set', 'eightshift_boilerplate'), value: '' },
    { label: __('Biggest (100px)', 'eightshift_boilerplate'), value: 'biggest' },
    { label: __('Bigger (90px)', 'eightshift_boilerplate'), value: 'bigger' },
    { label: __('Big (80px)', 'eightshift_boilerplate'), value: 'big' },
    { label: __('Largest (70px)', 'eightshift_boilerplate'), value: 'largest' },
    { label: __('Larger (60px)', 'eightshift_boilerplate'), value: 'larger' },
    { label: __('Large (50px)', 'eightshift_boilerplate'), value: 'large' },
    { label: __('Default (40px)', 'eightshift_boilerplate'), value: 'default' },
    { label: __('Medium (30px)', 'eightshift_boilerplate'), value: 'medium' },
    { label: __('Small (20px)', 'eightshift_boilerplate'), value: 'small' },
    { label: __('Tiny (10px)', 'eightshift_boilerplate'), value: 'tiny' },
    { label: __('No padding (0px)', 'eightshift_boilerplate'), value: 'no-spacing' },
  ];

  return (
    <PanelBody title={__('Utility', 'eightshift_boilerplate')}>
      <h3>{__('Colors', 'eightshift_boilerplate')}</h3>
      <SelectControl
        label={__('Background Color', 'eightshift_boilerplate')}
        value={styleBackgroundColor}
        options={[
          { label: __('Default', 'eightshift_boilerplate'), value: 'default' },
          { label: __('Primary', 'eightshift_boilerplate'), value: 'primary' },
          { label: __('Black', 'eightshift_boilerplate'), value: 'black' },
        ]}
        onChange={onChangeStyleBackgroundColor}
      />
      <SelectControl
        label={__('Text Color', 'eightshift_boilerplate')}
        value={styleTextColor}
        options={[
          { label: __('Default', 'eightshift_boilerplate'), value: 'default' },
        ]}
        onChange={onChangeStyleTextColor}
      />

      <hr />
      <h3>{__('Content', 'eightshift_boilerplate')}</h3>
      <SelectControl
        label={__('Content Width', 'eightshift_boilerplate')}
        value={styleContentWidth}
        options={colsOutput}
        onChange={onChangeStyleContentWidth}
      />
      <SelectControl
        label={__('Content Offset', 'eightshift_boilerplate')}
        value={styleContentOffset}
        options={[
          { label: __('No offset', 'eightshift_boilerplate'), value: 'none' },
          { label: __('Center', 'eightshift_boilerplate'), value: 'center' },
        ]}
        onChange={onChangeStyleContentOffset}
      />

      <hr />
      <h3>{__('Container', 'eightshift_boilerplate')}</h3>
      <SelectControl
        label={__('Container Width', 'eightshift_boilerplate')}
        value={styleContainerWidth}
        options={[
          { label: __('Default', 'eightshift_boilerplate'), value: 'default' },
          { label: __('Medium', 'eightshift_boilerplate'), value: 'medium' },
          { label: __('No Width', 'eightshift_boilerplate'), value: 'no-width' },
        ]}
        onChange={onChangeStyleContainerWidth}
      />
      <SelectControl
        label={__('Container Spacing', 'eightshift_boilerplate')}
        value={styleContainerSpacing}
        options={[
          { label: __('Default', 'eightshift_boilerplate'), value: 'default' },
          { label: __('No Spacing', 'eightshift_boilerplate'), value: 'no-spacing' },
        ]}
        onChange={onChangeStyleContainerSpacing}
      />

      <hr />
      <h3>{__('Spacing TOP', 'eightshift_boilerplate')}</h3>
      <SelectControl
        label={__('Desktop', 'eightshift_boilerplate')}
        value={styleSpacingTop}
        options={spacingOptions}
        onChange={onChangeStyleSpacingTop}
      />
      <SelectControl
        label={__('Tablet', 'eightshift_boilerplate')}
        value={styleSpacingTopTablet}
        options={spacingOptions}
        onChange={onChangeStyleSpacingTopTablet}
      />
      <SelectControl
        label={__('Mobile', 'eightshift_boilerplate')}
        value={styleSpacingTopMobile}
        options={spacingOptions}
        onChange={onChangeStyleSpacingTopMobile}
      />

      <hr />
      <h3>{__('Spacing BOTTOM', 'eightshift_boilerplate')}</h3>
      <SelectControl
        label={__('Desktop', 'eightshift_boilerplate')}
        value={styleSpacingBottom}
        options={spacingOptions}
        onChange={onChangeStyleSpacingBottom}
      />
      <SelectControl
        label={__('Tablet', 'eightshift_boilerplate')}
        value={styleSpacingBottomTablet}
        options={spacingOptions}
        onChange={onChangeStyleSpacingBottomTablet}
      />
      <SelectControl
        label={__('Mobile', 'eightshift_boilerplate')}
        value={styleSpacingBottomMobile}
        options={spacingOptions}
        onChange={onChangeStyleSpacingBottomMobile}
      />

      <hr />
      <h3>{__('Visibility', 'eightshift_boilerplate')}</h3>
      <SelectControl
        label={__('Show Block Only On Mobile', 'eightshift_boilerplate')}
        value={styleShowOnlyMobile}
        options={[
          { label: __('False', 'eightshift_boilerplate'), value: 'false' },
          { label: __('True', 'eightshift_boilerplate'), value: 'true' },
        ]}
        onChange={onChangeStyleShowOnlyMobile}
      />
      
      <hr />
      <h3>{__('General', 'eightshift_boilerplate')}</h3>
      <TextControl
        label={__('Section ID', 'eightshift_boilerplate')}
        value={id}
        onChange={onChangeId}
      />
    </PanelBody>
  );
};
