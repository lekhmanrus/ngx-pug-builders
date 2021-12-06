import packageInfo from '../../../package.json';

export const devDependencies = Object.entries<string>(packageInfo.peerDependencies)
  .map(([ name, version ]) => ({ name, version }))
  .concat([ { name: packageInfo.name, version: packageInfo.version } ]);
