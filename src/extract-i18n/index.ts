import { createBuilder } from '@angular-devkit/architect';
import {
  ExtractI18nBuilderOptions,
  executeExtractI18nBuilder
} from '@angular-devkit/build-angular';
import { transformConfig } from '../utils';

export const buildPugWebpackExtractI18n: typeof executeExtractI18nBuilder
  = async (options, context, transforms = { }) => executeExtractI18nBuilder(options, context, {
    ...transforms,
    webpackConfiguration: transformConfig(transforms.webpackConfiguration as any) as any
  });

export default createBuilder<ExtractI18nBuilderOptions>(buildPugWebpackExtractI18n);
