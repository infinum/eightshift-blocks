/**
 * This is a main entry point for Gutenberg blocks scripts used in `editor`.
 * This file registers blocks dynamically using `registerBlocks` helper method.
 * File names must follow naming convention to be able run dynamically.
 *
 * `src/blocks/custom/block_name/manifest.json`.
 * `src/blocks/custom/block_name/block_name.js`.
 *
 * Usage: `editor`.
 */
import { registerBlocks } from './helpers/register-blocks';

registerBlocks(require.context('./../../custom', true, /manifest.json$/));
