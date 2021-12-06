# Angular Pug Builders

[![Build](https://github.com/lekhmanrus/ngx-pug-builders/actions/workflows/build.yml/badge.svg)](https://github.com/lekhmanrus/ngx-pug-builders/actions/workflows/build.yml)
[![Publish](https://github.com/lekhmanrus/ngx-pug-builders/actions/workflows/npm-publish.yml/badge.svg)](https://github.com/lekhmanrus/ngx-pug-builders/actions/workflows/npm-publish.yml)
[![npm version](https://img.shields.io/npm/v/lekhmanrus/ngx-pug-builders.svg)](https://www.npmjs.com/package/lekhmanrus/ngx-pug-builders)
[![npm](https://img.shields.io/npm/dm/lekhmanrus/ngx-pug-builders.svg)](https://www.npmjs.com/package/lekhmanrus/ngx-pug-builders)

Angular Pug Builders adds [pug](https://pugjs.org/) support for your Angular project.

It extends default [@angular-devkit/build-angular](https://github.com/angular/angular-cli/tree/master/packages/angular_devkit/build_angular) builders with webpack pug rules. That means you always could you the latest (or a specific version) Angular native builders with Angular Pug Builders, because Angular Pug Builders uses `@angular-devkit/build-angular` builders as a dependency.



## Installation

Installation is simple as:

1. At the root of your project, run:

```sh
ng add ngx-pug-builders
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

Use `v13.x.x` with Angular `13.x.x`.

Use `v12.x.x` with Angular `12.x.x`.


## Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory.
