// Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
// See LICENSE in the project root for license information.

import { WebpackTask } from './WebpackTask';

export { IWebpackTaskConfig, WebpackTask } from './WebpackTask';

/**
 * @public
 */
export const webpack: WebpackTask = new WebpackTask();
export default webpack; // tslint:disable-line:export-name
