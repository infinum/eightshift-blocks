import { ucfirst } from './ucfirst';

/**
 * Crate attributes store from blocks manifest.json.
 * Store is passed in child components in order to update props on event.
 * Default function output is `onChange` + attribute name.
 * Example `onChangeContent`.
 *
 * @param {object} props Block props so we can get `setAttributes` method.
 * @param {object} manifest Block manifest.json so we can get all attributes.
 *
 * @since 1.0.0
 */
export const getStore = (props, manifest) => {

  // Get data and store if not available set to default.
  const { setAttributes } = props || {};
  const { attributes } = manifest || {};

  // Prepare output variable.
  const storeOutput = {};

  // Iterate all object keys. This is the fastest way.
  for (const key in attributes) {

    // If key doesn't exists skip this iteration.
    if (attributes.hasOwnProperty(key)) {

      // Set output as a object key with anonimus function callback.
      // Keys first name must be uppercased.
      storeOutput[`onChange${ucfirst(key)}`] = function(value) {
        setAttributes({
          [key]: value,
        });
      };
    }
  }

  return storeOutput;
};