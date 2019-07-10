

[![Travis](https://img.shields.io/travis/infinum/eightshift-blocks.svg?style=for-the-badge)](https://github.com/infinum/eightshift-blocks)
[![npm version](https://img.shields.io/npm/v/create-wp-theme.svg?style=for-the-badge)](https://www.npmjs.com/package/create-wp-theme)
[![GitHub tag](https://img.shields.io/github/tag/infinum/eightshift-blocks.svg?style=for-the-badge)](https://github.com/infinum/eightshift-blocks)
[![GitHub stars](https://img.shields.io/github/stars/infinum/eightshift-blocks.svg?style=for-the-badge&label=Stars)](https://github.com/infinum/eightshift-blocks/)
[![license](https://img.shields.io/github/license/infinum/eightshift-blocks.svg?style=for-the-badge)](https://github.com/infinum/eightshift-blocks)

# Eightshift Block

This repository contains all the tools you need to start building a modern [Gutenberg dynamic blocks](https://developer.wordpress.org/block-editor/tutorials/block-tutorial/creating-dynamic-blocks/), using all the latest front end development tools with simple folder structure and way to register blocks with ease.

For detail implementation and in action view check [WordPress Boilerplate internal repo](https://github.com/infinum/wp-boilerplate-iternal).

## :rocket: Installation
This repository is also added to the [Packagist repos](https://packagist.org/packages/infinum/eightshift-blocks), and it should be installed in your project via Composer.

```php
composer require infinum/eightshift-blocks
```

## :school_satchel: Requirements

1. Webpack build tool for your Editor and Frontend scripts and styles.
2. Project setup that supports OOP way of coding.

## :mortar_board: Setup Blocks
To be able to use blocks all you need to do is extend class-blocks.php abstract class and call it in your project. This method already has `add_action` for blocks registration.

## :mortar_board: Setup Enqueue
To be able to use blocks, you also need to enqueue style and scripts in your project. Gutenberg uses 2 new hooks for assets registration: `enqueue_block_editor_assets` and `enqueue_block_assets`.

`Class-enqueue.php` already incorporates all the registration hooks that you would need. All you need to provide are three methods in your project.

The best way would be to create a new class in your project and extend `class-enqueue.php`.

Keep in mind that `get_project_manifest` methods expect manifest.json file form webpack build. If your project doesn't use it, you can check [this lib](https://www.npmjs.com/package/webpack-manifest-plugin) for more details.

```php
  /**
   * Get project name used in enqueue methods for scripts and styles.
   *
   * @return string
   *
   * @since 1.0.0
   */
  protected function get_project_name() : string {
    return 'theme_name';
  }
```

```php
  /**
   * Get project version used in enqueue methods for scripts and styles.
   *
   * @return string
   *
   * @since 1.0.0
   */
  protected function get_project_version() : string {
    return 'theme_version';
  }
```


```php
  /**
   * Method to provide projects manifest array.
   * Using this manifest you are able to provide project specific implementation of assets locations.
   *
   * @return array
   *
   * @since 1.0.0
   */
  public function get_project_manifest() : array {
    return <Manifest data>;
  }
```

## :rocket: Folder structure
Your folder structure should like this:
|____ src
| |____blocks
| | |____assets
| | |____class-blocks.php
| | |____class-enqueue.php
| | |____manifest.json
| | |____custom
| | | |____block-name
| | | | |____block-name.js
| | | | |____block-name.php
| | | | |____block-name-editor.scss
| | | | |____block-name-style.scss
| | | | |____manifest.json

### blocks
This folder contains all Gutenberg blocks defined in your project.

### assets
This folder contains all additional javascript and style functionality for the block that you only need to use on the frontend and editor.

### class-blocks.php
This class is used to extend Eightshift Blocks abstract class-blocks.php functionality.

### class-enqueue.php
This class is used to extend Eightshift Enqueue abstract class-enqueue.php functionality.

### manifest.json
This file contains some global settings for the project. It must contain `namespace` and `background` key; everything else is optional. You can store data here that you are going to share across toolbars, components, blocks.

Example:
```json
{
  "namespace": "academy",
  "background": "#52368C",
}
```

### custom
This folder contains all Custom Gutenberg blocks defined and used in your project.
Each block must follow a strict naming convention to be able to use all functionality:

All block are automatically registered in the JS and PHP part of the application if you follow this naming convention.

Block Example:
|____heading
| |____heading.js
| |____heading.php
| |____heading-editor.scss
| |____heading-style.scss
| |____manifest.json

### block-name.js
This file is `edit` callback component used in WordPress `registerBlockType` method.

We are not using `save` callback component because this lib is used to create dynamic blocks.

### block-name.php
This file contains frontend part of the block used in your theme when the page reloads.

### block-name-editor.php
This file contains only editor styles for the block.

### block-name-style.php
This file contains editor and frontend styles for the block.

### manifest.json
This file contains all the configuration required for a block to work.
This configuration is used in WordPress `registerBlockType` method to be able to register block.

Example:
```json
{
  "blockName": "heading",
  "title": "Heading",
  "description" : "Heading block with custom settings.",
  "category": "common",
  "icon": {
    "src": "heading"
  },
  "keywords": [
    "Header",
    "Title"
  ],
  "attributes": {
    "content": {
      "type": "string"
    },
    "level": {
      "type": "number",
      "default": 2
    },
    "styleAlign": {
      "type": "string",
      "default": "left"
    },
    "styleSize": {
      "type": "string",
      "default": "huge"
    }
  }
}
```

Most of the keys are the same as `registerBlockType` method that you can find in [WordPress Handbook](https://developer.wordpress.org/block-editor/developers/block-api/block-registration/), But we also have some custom stuff here:

#### attributes
Attributes is an object of attributes that you define here and setup default values. These attributes are then provided for you in the editor as props, and the PHP view part as a `$attributes` variable.
We are using the same structure as [Gutenberg documentation](https://developer.wordpress.org/block-editor/developers/block-api/block-attributes/).

#### hasInnerBlocks
default: false

If the hasInnerBlocks key is set to true blocks, save method for inner blocks will be used. This method is used if the block has InnerBlocks. In PHP you now have `$inner_block_content` variable available.
```js
  save = () => createElement(InnerBlocks.Content);
```

## :mailbox: Who do I talk to?

For questions talk to:

* [ivan.ruzevic@infinum.hr](ivan.ruzevic@infinum.hr)
* [denis.zoljom@infinum.hr](denis.zoljom@infinum.hr)
* [ivan.grginov@infinum.hr](ivan.grginov@infinum.hr)
* [team@eightshift.com](team@eightshift.com)

Eightshift Blocks is maintained and sponsored by Eightshift and Infinum.

## :scroll: License

Infinum WordPress Boilerplate is Copyright ©2018 Infinum. It is free software, and may be redistributed under the terms specified in the LICENSE file.
