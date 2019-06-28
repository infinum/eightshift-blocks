/* globals @wordpress */

import { InnerBlocks } from '@wordpress/editor';
import { createElement } from '@wordpress/element';

/**
 * Map and prepare all options from block manifest.json file for usage in registerBlockType method.
 * @param {object} manifest Block manifest.json object with data.
 * @param {object} blocksSettings Blocks  manifest.json object with data.
 * @param {function} edit Edit callback function.
 */
export const registerBlock = (manifest, blocksSettings, edit) => {
  const {
    blockName,
    title,
    description,
    category,
    keywords,
    supports,
    parent,
    hasInnerBlocks,
  } = manifest;

  let {
    icon,
  } = manifest;

  const {
    namespace,
    background,
  } = blocksSettings;

  // Default save method.
  let save = () => null;

  // Append globalManifest data in to output.
  icon = {
    background,
    src: icon.src,
  };

  // Provide different save method for InnerBlocks.
  if (hasInnerBlocks) {
    save = () => createElement(InnerBlocks.Content);
  }

  return {
    blockName: `${namespace}/${blockName}`,
    options: {
      title,
      description,
      category,
      icon,
      keywords,
      supports,
      parent,
      edit,
      save,
    },
  };
};
