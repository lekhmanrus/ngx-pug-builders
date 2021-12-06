import { createBuilder } from '@angular-devkit/architect';
import { BrowserBuilderOptions, executeBrowserBuilder } from '@angular-devkit/build-angular';
import { json } from '@angular-devkit/core';
import { transformConfig } from '../utils';

export const buildPugWebpackBrowser: typeof executeBrowserBuilder
  = (options, context, transforms = { }) => executeBrowserBuilder(options, context, {
    ...transforms,
    webpackConfiguration: transformConfig(transforms.webpackConfiguration as any) as any
  });

export default createBuilder<json.JsonObject & BrowserBuilderOptions>(buildPugWebpackBrowser);
