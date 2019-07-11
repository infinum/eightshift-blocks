// Helper function that returns block path configs.
function blocksConfig(projectRootPath, projectPath) {
  const blocksContainerPath = `/${projectRootPath}/src/blocks/assets`;
  const blocksFullPath = `${projectPath}${blocksContainerPath}`;

  return {
    blocksContainerPath,
    blocksFullPath,
    blocksEntry: `${blocksFullPath}/application-blocks.js`,
    blocksEditorEntry: `${blocksFullPath}/application-blocks-editor.js`,
  }
}

// Export everything so it can be used in project webpack config.
module.exports = blocksConfig;
