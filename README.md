# Angular Pug Builders

[![Build](https://github.com/lekhmanrus/ngx-pug-builders/actions/workflows/build.yml/badge.svg)](https://github.com/lekhmanrus/ngx-pug-builders/actions/workflows/build.yml)
[![Publish](https://github.com/lekhmanrus/ngx-pug-builders/actions/workflows/npm-publish.yml/badge.svg)](https://github.com/lekhmanrus/ngx-pug-builders/actions/workflows/npm-publish.yml)
[![npm version](https://img.shields.io/npm/v/ngx-pug-builders.svg)](https://www.npmjs.com/package/ngx-pug-builders)
[![npm](https://img.shields.io/npm/dm/ngx-pug-builders.svg)](https://www.npmjs.com/package/ngx-pug-builders)

Angular Pug Builders adds [pug](https://pugjs.org/) (`.pug` / `.jade` files) support for your Angular project.

It extends default [@angular-devkit/build-angular](https://github.com/angular/angular-cli/tree/master/packages/angular_devkit/build_angular) builders with webpack pug rules. That means you always could you the latest (or a specific version) Angular native builders with Angular Pug Builders, because Angular Pug Builders uses `@angular-devkit/build-angular` builders as a dependency.



## Installation

Installation is simple as:

1. At the root of your project, run:

    ```sh
    ng add ngx-pug-builders
    ```

    **Note:** If you use older version of Angular, you need to install appropriate version of Angular Pug Builders. See [Versioning](#versioning).

    **Example:** For Angular `v12.x.x` use

      ```sh
      ng add ngx-pug-builders@12
      ```


2. That's it!



### Manual installation

If you prefer manual installation, you would need:

1. Make sure your project have installed:

    * `@angular-devkit/build-angular`
    * `@angular/compiler-cli`
    * `typescript`


2. Install `ngx-pug-builders` and `pug` as a development dependencies:

    ```sh
    npm install --save-dev ngx-pug-builders pug
    ```

    or

    ```sh
    npm i -D ngx-pug-builders pug
    ```


3. Switch `@angular-devkit/build-angular` builders to appropriate `ngx-pug-builders` builders in your `angular.json`.

    Before:
    ```json
      "builder": "@angular-devkit/build-angular:[browser|dev-server|extract-i18n|karma|server]"
    ```

    After:
    ```json
      "builder": "ngx-pug-builders:[browser|dev-server|extract-i18n|karma|server]"
    ```



## Usage

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.pug', // <--- Pug file supported now
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
}

```


### Options

You can configure your project to pass the additional options to Pug loader.

You can see the [supported options here](https://github.com/Spence-S/simple-pug-loader#options).

### Configuration File Formats
Angular Pug Builders supports configuration files in several formats:

* **JavaScript** - use `.pugrc.js` or `pug.config.js` and export an object containing your configuration.
* **YAML** - use `.pugrc`, .`pugrc.yaml` or `.pugrc.yml` to define the configuration structure.
* **JSON** - use `.pugrc.json` to define the configuration structure.
* **package.json** - create an `pugConfig` property in your `package.json` file and define your configuration there.

If there are multiple configuration files in the same directory, Angular Pug Builders will only use one. The priority order is as follows:

1. `package.json`
2. `.pugrc`
3. `.pugrc.json`
4. `.pugrc.yaml`
5. `.pugrc.yml`
6. `.pugrc.js`
7. `.pugrc.cjs`
8. `pug.config.js`
9. `pug.config.cjs`

### Using Configuration Files

Here's an example configuration file that sets Pug loader `basedir` option (again, [see whole list of supported options here](https://github.com/Spence-S/simple-pug-loader#options)):
* `.pugrc.json` (JSON)
  ```json
  {
    "basedir": "./src/"
  }
  ```

* `.pugrc` (YAML)
  ```yaml
  # Unlike pug-loader, simple-pug-loader uses pug for all file resolution.
  basedir: ./src/
  ```

* `pug.config.js` (JavaScript)
  ```js
  module.exports = {
    // Unlike pug-loader, simple-pug-loader uses pug for all file resolution.
    basedir: './src/'
  };
  ```

**P.S.**: Either of that should work. No need to create all of them. [See Configuration File Formats](#configuration-file-formats).


## Builders

| Name         | Description                                                                                                                                                                                                                          |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| browser      | Build an Angular application targeting a browser environment.                                                                                                                                                                        |
| dev-server   | A development server that provides live reloading.                                                                                                                                                                                   |
| extract-i18n | Extract i18n messages from an Angular application.                                                                                                                                                                                   |
| karma        | Execute unit tests using [Karma](https://github.com/karma-runner/karma) test runner.                                                                                                                                                 |
| server       | Build an Angular application targeting a [Node.js](https://nodejs.org) environment.                                                                                                                                                  |



## Dependencies

* [@angular-devkit/build-angular](https://github.com/angular/angular-cli/tree/master/packages/angular_devkit/build_angular)
* [@angular/compiler-cli](https://github.com/angular/angular/tree/master/packages/compiler-cli)
* [pug](https://github.com/pugjs/pug)
* [typescript](https://github.com/microsoft/TypeScript)



## Versioning

Versions started from **v12** and are consistant with major Angular version used in your project. E.g.:

Use `v16.x.x` with Angular `16.x.x`.

Use `v15.x.x` with Angular `15.x.x`.

Use `v14.x.x` with Angular `14.x.x`.

Use `v13.x.x` with Angular `13.x.x`.

Use `v12.x.x` with Angular `12.x.x`.


## Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory.
