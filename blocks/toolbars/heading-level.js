import { range } from 'lodash';
import { __, sprintf } from '@wordpress/i18n';
import { Toolbar } from '@wordpress/components';

const createLevelControl = (targetLevel, selectedLevel, onChange) => {
  return {
    icon: 'heading',
    title: sprintf(__('Heading %d', 'eightshift-boilerplate'), targetLevel),
    isActive: targetLevel === selectedLevel,
    onClick: () => {
      onChange(targetLevel);
    },
    subscript: String(targetLevel),
  };
};

export const HeadingLevel = (props) => {
  const {
    minLevel,
    maxLevel,
    selectedLevel,
    onChange,
  } = props;

  return (
    <Toolbar controls={range(minLevel, maxLevel + 1).map((index) => createLevelControl(index, selectedLevel, onChange))} />
  );
};
