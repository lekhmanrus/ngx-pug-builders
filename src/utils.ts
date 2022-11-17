import { ExecutionTransformer } from '@angular-devkit/build-angular/src/transforms';
import { cosmiconfig } from 'cosmiconfig';
import { dirname, resolve } from 'path';
import { Configuration } from 'webpack';
import { merge } from 'webpack-merge';

// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
export function isPromise<T>(promise: any): promise is Promise<T> {
  return !!promise && typeof promise.then === 'function';
}

export const transformConfig = (config?: ExecutionTransformer<Configuration>) => {
  const oldConfig = config || ((input) => input) as ExecutionTransformer<Configuration>;

  return (async (input: Configuration) => {
    const oldResult = oldConfig(input);
    if (isPromise<Configuration>(oldResult)) {
      const result = await oldResult;
      return addPugRules(result);
    }
    return addPugRules(oldResult);
  }) as ExecutionTransformer<Configuration>;
}

export const addPugRules = async (config: Configuration) => {
  const explorer = cosmiconfig('pug');
  const result = await explorer.search();
  let pugOptions: any;
  if (result && result.config && !result.isEmpty) {
    pugOptions = result.config;
    const configDirPath = dirname(result.filepath);
    if (configDirPath) {
      if (pugOptions.root) {
        pugOptions.root = resolve(configDirPath, pugOptions.root);
      }
      if (pugOptions.basedir) {
        pugOptions.basedir = resolve(configDirPath, pugOptions.basedir);
      }
    }
  }
  return merge(config, {
    module: {
      rules: [
        {
          test: /\.(pug|jade)$/,
          use: [
            { loader: 'apply-loader' },
            { loader: 'simple-pug-loader', ...(pugOptions ? { options: pugOptions } : { }) }
          ]
        }
      ]
    }
  });
};
