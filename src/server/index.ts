import { createBuilder } from '@angular-devkit/architect';
import {
  ServerBuilderOptions,
  ServerBuilderOutput,
  executeServerBuilder
} from '@angular-devkit/build-angular';
import { transformConfig } from '../utils';

export const buildPugWebpackServer: typeof executeServerBuilder
  = (options, context, transforms = { }) => executeServerBuilder(options, context, {
    ...transforms,
    webpackConfiguration: transformConfig(transforms.webpackConfiguration as any) as any
  });

export default createBuilder<ServerBuilderOptions, ServerBuilderOutput>(buildPugWebpackServer);
