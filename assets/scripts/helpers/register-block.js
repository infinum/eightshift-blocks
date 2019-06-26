/* eslint-disable import/no-dynamic-require, global-require */

import { InnerBlocks } from '@wordpress/editor';
import globalManifest from './../../../manifest.json';

export const registerBlock = (manifest, edit) => {
  const {
    blockName,
    title,
    description,
    category,
    keywords,
    supports,
    parent,
    type,
  } = manifest;

  let {
    icon,
  } = manifest;

  const {
    namespace,
    background,
  } = globalManifest;

  // Default save method.
  let save = () => {
    return null;
  };

  // Append globalManifest data in to output.
  icon = {
    background,
    src: icon.src,
  };

  // Provide different save method for InnerBlocks.
  // if (type === 'repeater') {
  //   save = () => {
  //     return (
  //       <InnerBlocks.Content />
  //     );
  //   };
  // }

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
