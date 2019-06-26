/* Checks to help validate everything is ok when working with dynamic blocks */

import { __ } from '@wordpress/i18n';

/**
 * Make sure the block has the name attribute (which are defined server-side). If it's missing, it
 * probably means the block wasn't defined on server-side. Side effect would be that changes to block
 * attributes (such as content) don't persist after updating / saving.
 *
 * @param {object} props Block's props.
 * @throws {Error}       When block's attribute is missing
 */
export const validateBlock = (props) => {
  console.log(props);
  
  const { attributes: { blockName } } = props;

  if (!blockName) {
    throw Error(__('Missing block attributes, block probably isn\'t initialized in php (class-blocks.php)'));
  }
};
