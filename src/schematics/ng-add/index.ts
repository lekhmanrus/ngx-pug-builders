import { Rule, SchematicContext, Tree, chain } from '@angular-devkit/schematics';
import { NodePackageInstallTask } from '@angular-devkit/schematics/tasks';
import {
  NodeDependencyType,
  addPackageJsonDependency
} from '@schematics/angular/utility/dependencies';
import { allWorkspaceTargets, updateWorkspace } from '@schematics/angular/utility/workspace';
import ora from 'ora';
import { devDependencies } from './dependencies';

export default () => chain([
  addDependencies(),
  updateAngularConfig()
]);

// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
function addDependencies(): Rule {
  return (tree: Tree, context: SchematicContext) => {
    for (const peerDependency of devDependencies) {
      addPackageJsonDependency(tree, {
        type: NodeDependencyType.Dev,
        name: peerDependency.name,
        version: peerDependency.version
      });
    }
    context.addTask(new NodePackageInstallTask());
    return tree;
  };
}

// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
function updateAngularConfig(): Rule {
  const spinner = ora({
    text: `Updating workspace builders...`,
    // Workaround for https://github.com/sindresorhus/ora/issues/136.
    discardStdin: process.platform != 'win32'
  }).start();
  return updateWorkspace((workspace) => {
    const targets = Array.from(allWorkspaceTargets(workspace));
    // eslint-disable-next-line max-len
    const regexp = /^@angular-devkit\/build-angular:(browser|dev-server|extract-i18n|karma|server)$/g;
    for (const [, target] of targets) {
      if (regexp.test(target.builder)) {
        target.builder = target.builder
          .replace('@angular-devkit/build-angular', 'ngx-pug-builders');
      }
    }
    spinner.succeed(
      // eslint-disable-next-line max-len
      'Workspace builders successfully updated from @angular-devkit/build-angular:* to ngx-pug-builders:*.'
    );
    spinner.stop();
  });
}
