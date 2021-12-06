import { ExecutionTransformer } from '@angular-devkit/build-angular/src/transforms';
import * as webpack from 'webpack';
import { merge } from 'webpack-merge';

// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
export function isPromise<T>(promise: any): promise is Promise<T> {
  return !!promise && typeof promise.then === 'function';
}

export const transformConfig = (config?: ExecutionTransformer<webpack.Configuration>) => {
  const oldConfig = config || ((input) => input) as ExecutionTransformer<webpack.Configuration>;

  return ((input: webpack.Configuration) => {
    const oldResult = oldConfig(input);
    if (isPromise<webpack.Configuration>(oldResult)) {
      return oldResult.then((result) => addPugRules(result))
    }
    return addPugRules(oldResult);
  }) as ExecutionTransformer<webpack.Configuration>;
}

export const addPugRules = (config: webpack.Configuration) => {
  return merge(config, {
    module: {
      rules: [
        {
          test: /\.(pug|jade)$/,
          use: [
            { loader: 'apply-loader' },
            { loader: 'simple-pug-loader' }
          ]
        }
      ]
    }
  });
};
