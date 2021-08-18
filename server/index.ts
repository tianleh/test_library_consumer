import { PluginInitializerContext } from '../../../src/core/server';
import { TestLibraryConsumerPlugin } from './plugin';

// This exports static code and TypeScript types,
// as well as, OpenSearch Dashboards Platform `plugin()` initializer.

export function plugin(initializerContext: PluginInitializerContext) {
  return new TestLibraryConsumerPlugin(initializerContext);
}

export { TestLibraryConsumerPluginSetup, TestLibraryConsumerPluginStart } from './types';
