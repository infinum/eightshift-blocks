import { AlignmentToolbar } from '@wordpress/editor';
import { Fragment } from '@wordpress/element';

export const ParagraphToolbar = (props) => {
  const {
    styleAlign,
    onChangeStyleAlign,
  } = props;

  return (
    <Fragment>

      {styleAlign &&
        <AlignmentToolbar
          value={styleAlign}
          onChange={onChangeStyleAlign}
        />
      }

    </Fragment>
  );
};
