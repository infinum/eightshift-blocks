/**
 * Get and require all files fetched using require.context method.
 *
 * @param {object} paths All require.context patch to iterate.
 *
 * @since 1.0.4 Moving to scripts folder.
 * @since 1.0.0
 */
export const dynamicImport = (paths) => {
  paths.keys().forEach(paths);
};
