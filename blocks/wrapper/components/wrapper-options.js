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
    { label: __('Not Set', 'eightshift-blocks'), value: '' },
    { label: __('Biggest (100px)', 'eightshift-blocks'), value: 'biggest' },
    { label: __('Bigger (90px)', 'eightshift-blocks'), value: 'bigger' },
    { label: __('Big (80px)', 'eightshift-blocks'), value: 'big' },
    { label: __('Largest (70px)', 'eightshift-blocks'), value: 'largest' },
    { label: __('Larger (60px)', 'eightshift-blocks'), value: 'larger' },
    { label: __('Large (50px)', 'eightshift-blocks'), value: 'large' },
    { label: __('Default (40px)', 'eightshift-blocks'), value: 'default' },
    { label: __('Medium (30px)', 'eightshift-blocks'), value: 'medium' },
    { label: __('Small (20px)', 'eightshift-blocks'), value: 'small' },
    { label: __('Tiny (10px)', 'eightshift-blocks'), value: 'tiny' },
    { label: __('No padding (0px)', 'eightshift-blocks'), value: 'no-spacing' },
  ];

  return (
    <PanelBody title={__('Utility', 'eightshift-blocks')}>
      <h3>{__('Colors', 'eightshift-blocks')}</h3>
      <SelectControl
        label={__('Background Color', 'eightshift-blocks')}
        value={styleBackgroundColor}
        options={[
          { label: __('Default', 'eightshift-blocks'), value: 'default' },
          { label: __('Primary', 'eightshift-blocks'), value: 'primary' },
          { label: __('Black', 'eightshift-blocks'), value: 'black' },
        ]}
        onChange={onChangeStyleBackgroundColor}
      />
      <SelectControl
        label={__('Text Color', 'eightshift-blocks')}
        value={styleTextColor}
        options={[
          { label: __('Default', 'eightshift-blocks'), value: 'default' },
        ]}
        onChange={onChangeStyleTextColor}
      />

      <hr />
      <h3>{__('Content', 'eightshift-blocks')}</h3>
      <SelectControl
        label={__('Content Width', 'eightshift-blocks')}
        value={styleContentWidth}
        options={colsOutput}
        onChange={onChangeStyleContentWidth}
      />
      <SelectControl
        label={__('Content Offset', 'eightshift-blocks')}
        value={styleContentOffset}
        options={[
          { label: __('No offset', 'eightshift-blocks'), value: 'none' },
          { label: __('Center', 'eightshift-blocks'), value: 'center' },
        ]}
        onChange={onChangeStyleContentOffset}
      />

      <hr />
      <h3>{__('Container', 'eightshift-blocks')}</h3>
      <SelectControl
        label={__('Container Width', 'eightshift-blocks')}
        value={styleContainerWidth}
        options={[
          { label: __('Default', 'eightshift-blocks'), value: 'default' },
          { label: __('Medium', 'eightshift-blocks'), value: 'medium' },
          { label: __('No Width', 'eightshift-blocks'), value: 'no-width' },
        ]}
        onChange={onChangeStyleContainerWidth}
      />
      <SelectControl
        label={__('Container Spacing', 'eightshift-blocks')}
        value={styleContainerSpacing}
        options={[
          { label: __('Default', 'eightshift-blocks'), value: 'default' },
          { label: __('No Spacing', 'eightshift-blocks'), value: 'no-spacing' },
        ]}
        onChange={onChangeStyleContainerSpacing}
      />

      <hr />
      <h3>{__('Spacing TOP', 'eightshift-blocks')}</h3>
      <SelectControl
        label={__('Desktop', 'eightshift-blocks')}
        value={styleSpacingTop}
        options={spacingOptions}
        onChange={onChangeStyleSpacingTop}
      />
      <SelectControl
        label={__('Tablet', 'eightshift-blocks')}
        value={styleSpacingTopTablet}
        options={spacingOptions}
        onChange={onChangeStyleSpacingTopTablet}
      />
      <SelectControl
        label={__('Mobile', 'eightshift-blocks')}
        value={styleSpacingTopMobile}
        options={spacingOptions}
        onChange={onChangeStyleSpacingTopMobile}
      />

      <hr />
      <h3>{__('Spacing BOTTOM', 'eightshift-blocks')}</h3>
      <SelectControl
        label={__('Desktop', 'eightshift-blocks')}
        value={styleSpacingBottom}
        options={spacingOptions}
        onChange={onChangeStyleSpacingBottom}
      />
      <SelectControl
        label={__('Tablet', 'eightshift-blocks')}
        value={styleSpacingBottomTablet}
        options={spacingOptions}
        onChange={onChangeStyleSpacingBottomTablet}
      />
      <SelectControl
        label={__('Mobile', 'eightshift-blocks')}
        value={styleSpacingBottomMobile}
        options={spacingOptions}
        onChange={onChangeStyleSpacingBottomMobile}
      />

      <hr />
      <h3>{__('Visibility', 'eightshift-blocks')}</h3>
      <SelectControl
        label={__('Show Block Only On Mobile', 'eightshift-blocks')}
        value={styleShowOnlyMobile}
        options={[
          { label: __('False', 'eightshift-blocks'), value: 'false' },
          { label: __('True', 'eightshift-blocks'), value: 'true' },
        ]}
        onChange={onChangeStyleShowOnlyMobile}
      />
      
      <hr />
      <h3>{__('General', 'eightshift-blocks')}</h3>
      <TextControl
        label={__('Section ID', 'eightshift-blocks')}
        value={id}
        onChange={onChangeId}
      />
    </PanelBody>
  );
};
