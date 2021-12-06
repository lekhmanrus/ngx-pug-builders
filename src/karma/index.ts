import { createBuilder } from '@angular-devkit/architect';
import { KarmaBuilderOptions, executeKarmaBuilder } from '@angular-devkit/build-angular';
import { transformConfig } from '../utils';

export const buildPugWebpackKarma: typeof executeKarmaBuilder
  = (options, context, transforms = { }) => executeKarmaBuilder(options, context, {
    ...transforms,
    webpackConfiguration: transformConfig(transforms.webpackConfiguration as any) as any
  });

export default createBuilder<Record<string, string> & KarmaBuilderOptions>(buildPugWebpackKarma);
