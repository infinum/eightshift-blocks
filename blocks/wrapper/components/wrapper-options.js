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
    { label: __('Not Set', 'inf_theme'), value: '' },
    { label: __('Biggest (100px)', 'inf_theme'), value: 'biggest' },
    { label: __('Bigger (90px)', 'inf_theme'), value: 'bigger' },
    { label: __('Big (80px)', 'inf_theme'), value: 'big' },
    { label: __('Largest (70px)', 'inf_theme'), value: 'largest' },
    { label: __('Larger (60px)', 'inf_theme'), value: 'larger' },
    { label: __('Large (50px)', 'inf_theme'), value: 'large' },
    { label: __('Default (40px)', 'inf_theme'), value: 'default' },
    { label: __('Medium (30px)', 'inf_theme'), value: 'medium' },
    { label: __('Small (20px)', 'inf_theme'), value: 'small' },
    { label: __('Tiny (10px)', 'inf_theme'), value: 'tiny' },
    { label: __('No padding (0px)', 'inf_theme'), value: 'no-spacing' },
  ];

  return (
    <PanelBody title={__('Utility', 'inf_theme')}>
      <h3>{__('Colors', 'inf_theme')}</h3>
      <SelectControl
        label={__('Background Color', 'inf_theme')}
        value={styleBackgroundColor}
        options={[
          { label: __('Default', 'inf_theme'), value: 'default' },
          { label: __('Primary', 'inf_theme'), value: 'primary' },
          { label: __('Black', 'inf_theme'), value: 'black' },
        ]}
        onChange={onChangeStyleBackgroundColor}
      />
      <SelectControl
        label={__('Text Color', 'inf_theme')}
        value={styleTextColor}
        options={[
          { label: __('Default', 'inf_theme'), value: 'default' },
        ]}
        onChange={onChangeStyleTextColor}
      />

      <hr />
      <h3>{__('Content', 'inf_theme')}</h3>
      <SelectControl
        label={__('Content Width', 'inf_theme')}
        value={styleContentWidth}
        options={colsOutput}
        onChange={onChangeStyleContentWidth}
      />
      <SelectControl
        label={__('Content Offset', 'inf_theme')}
        value={styleContentOffset}
        options={[
          { label: __('No offset', 'inf_theme'), value: 'none' },
          { label: __('Center', 'inf_theme'), value: 'center' },
        ]}
        onChange={onChangeStyleContentOffset}
      />

      <hr />
      <h3>{__('Container', 'inf_theme')}</h3>
      <SelectControl
        label={__('Container Width', 'inf_theme')}
        value={styleContainerWidth}
        options={[
          { label: __('Default', 'inf_theme'), value: 'default' },
          { label: __('Medium', 'inf_theme'), value: 'medium' },
          { label: __('No Width', 'inf_theme'), value: 'no-width' },
        ]}
        onChange={onChangeStyleContainerWidth}
      />
      <SelectControl
        label={__('Container Spacing', 'inf_theme')}
        value={styleContainerSpacing}
        options={[
          { label: __('Default', 'inf_theme'), value: 'default' },
          { label: __('No Spacing', 'inf_theme'), value: 'no-spacing' },
        ]}
        onChange={onChangeStyleContainerSpacing}
      />

      <hr />
      <h3>{__('Spacing TOP', 'inf_theme')}</h3>
      <SelectControl
        label={__('Desktop', 'inf_theme')}
        value={styleSpacingTop}
        options={spacingOptions}
        onChange={onChangeStyleSpacingTop}
      />
      <SelectControl
        label={__('Tablet', 'inf_theme')}
        value={styleSpacingTopTablet}
        options={spacingOptions}
        onChange={onChangeStyleSpacingTopTablet}
      />
      <SelectControl
        label={__('Mobile', 'inf_theme')}
        value={styleSpacingTopMobile}
        options={spacingOptions}
        onChange={onChangeStyleSpacingTopMobile}
      />

      <hr />
      <h3>{__('Spacing BOTTOM', 'inf_theme')}</h3>
      <SelectControl
        label={__('Desktop', 'inf_theme')}
        value={styleSpacingBottom}
        options={spacingOptions}
        onChange={onChangeStyleSpacingBottom}
      />
      <SelectControl
        label={__('Tablet', 'inf_theme')}
        value={styleSpacingBottomTablet}
        options={spacingOptions}
        onChange={onChangeStyleSpacingBottomTablet}
      />
      <SelectControl
        label={__('Mobile', 'inf_theme')}
        value={styleSpacingBottomMobile}
        options={spacingOptions}
        onChange={onChangeStyleSpacingBottomMobile}
      />

      <hr />
      <h3>{__('Visibility', 'inf_theme')}</h3>
      <SelectControl
        label={__('Show Block Only On Mobile', 'inf_theme')}
        value={styleShowOnlyMobile}
        options={[
          { label: __('False', 'inf_theme'), value: 'false' },
          { label: __('True', 'inf_theme'), value: 'true' },
        ]}
        onChange={onChangeStyleShowOnlyMobile}
      />
      
      <hr />
      <h3>{__('General', 'inf_theme')}</h3>
      <TextControl
        label={__('Section ID', 'inf_theme')}
        value={id}
        onChange={onChangeId}
      />
    </PanelBody>
  );
};
