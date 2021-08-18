import './index.scss';

import { TestLibraryConsumerPlugin } from './plugin';

// This exports static code and TypeScript types,
// as well as, OpenSearch Dashboards Platform `plugin()` initializer.
export function plugin() {
  return new TestLibraryConsumerPlugin();
}
export { TestLibraryConsumerPluginSetup, TestLibraryConsumerPluginStart } from './types';
