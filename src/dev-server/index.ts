import { createBuilder } from '@angular-devkit/architect';
import {
  DevServerBuilderOptions,
  DevServerBuilderOutput,
  executeDevServerBuilder
} from '@angular-devkit/build-angular';
import { transformConfig } from '../utils';

export const buildPugWebpackDevServer: typeof executeDevServerBuilder
  = (options, context, transforms = { }) => executeDevServerBuilder(options, context, {
    ...transforms,
    webpackConfiguration: transformConfig(transforms.webpackConfiguration as any) as any
  });

export default createBuilder<DevServerBuilderOptions & DevServerBuilderOutput>(
  buildPugWebpackDevServer
);
