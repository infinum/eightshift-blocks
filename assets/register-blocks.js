import { registerBlockType } from '@wordpress/blocks';
import { registerBlock } from './register-block';
import { getBlockEditComponent } from './get-block-edit-component';

/**
 * Register all Gutenberg blocks using WP registerBlockType method.
 * Due to restrictions in dynamic import using dynamic names all block are registred using require.context.
 *
 * @param {function} blocksManifests Must provide require.context for all blocks manifest.json-s.
 * @param {function} blocksFilePaths Must provide require.context for all blocks javascript files (unable to add only block edit file due to dynamic naming).
 * @param {object} blocksSettings Must provide global blocks setting manifest.json.
 *
 * @since 1.0.0
 */
export const registerBlocks = (blocksManifests, blocksFilePaths, blocksSettings) => {

  // Create an array of all blocks file paths.
  const blocksFilePathsKeys = blocksFilePaths.keys();

  // Create an array of Block manifests.
  const allBlocksManifests = blocksManifests.keys().map(blocksManifests);

  // Iterate blocks to register.
  allBlocksManifests.map((block) => {

    // Get Block edit component from block name and blocksFilePathsKeys.
    const editComponent = getBlockEditComponent(block.blockName, blocksFilePathsKeys).map(blocksFilePaths)[0];

    // If edit component is missing throw and error.
    if (typeof editComponent === 'undefined') {
      throw Error(`It looks like you are missing block edit component for block: ${block.blockName}`);
    }

    // No mater if class of functional component is used fetch the first item in an object.
    const editCallback = editComponent[Object.keys(editComponent)[0]];

    // If edit component callback is missing throw and error.
    if (typeof editCallback === 'undefined') {
      throw Error(`It looks like you are missing block edit component callback for block: ${block.blockName}`);
    }

    // Pass data to registerBlock helper to get final output for registerBlockType.
    const blockDetails = registerBlock(block, blocksSettings, editCallback);

    // Native WP method for block registration.
    registerBlockType(blockDetails.blockName, blockDetails.options);

    return null;
  });
};
