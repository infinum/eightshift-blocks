import { AlignmentToolbar } from '@wordpress/editor';
import { Fragment } from '@wordpress/element';
import { HeadingLevel } from '../../../toolbars/heading-level';

export const HeadingToolbar = (props) => {
  const {
    level,
    onChangeLevel,
    styleAlign,
    onChangeStyleAlign,
  } = props;

  return (
    <Fragment>
      {level &&
        <HeadingLevel
          minLevel={1}
          maxLevel={7}
          selectedLevel={level}
          onChange={onChangeLevel}
        />
      }

      {styleAlign &&
        <AlignmentToolbar
          value={styleAlign}
          onChange={onChangeStyleAlign}
        />
      }

    </Fragment>
  );
};
