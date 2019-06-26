/**
 * This is a main entry point for Gutenberg blocks scripts used on `frontend`.
 * This file registers all blocks additional scripts dynamically using `dynamicImport` helper method.
 * File names must follow naming convention to be able run dynamically.
 *
 * `src/blocks/custom/block_name/assets/index.js`.
 *
 * Usage: `frontend`.
 */
import { dynamicImport } from './helpers/dynamic-import';

// Find all blocks and require assets index.js inside it.
dynamicImport(require.context('./../../custom', true, /assets\/index.js$/));
