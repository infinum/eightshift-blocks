import { registerBlockType } from '@wordpress/blocks';
import { registerBlock } from './register-block';

export const registerBlocks = (blocks) => {

  const allBlocks = blocks.keys().map(blocks);

  allBlocks.map((block) => {

    import(`./../../../custom/${block.blockName}/${block.blockName}.js`).then((edit) => {
      const editComponent = edit[Object.keys(edit)[0]];

      if (editComponent !== 'undefined') {
        const blockDetails = registerBlock(block, editComponent);

        /**
         * Call register block method that provides all options for native
         * registerBlockType function for Gutenberg.
         */
        registerBlockType(blockDetails.blockName, blockDetails.options);
      }
    });

    return null;
  });
};
