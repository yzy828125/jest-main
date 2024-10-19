/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {json as runWithJson} from '../runJest';
import * as testFixturePackage from '../test-environment/package.json';

it('respects testEnvironment docblock', () => {
  expect(testFixturePackage.jest.testEnvironment).toBe('node');

  const {json: result} = runWithJson('test-environment');

  expect(result.success).toBe(true);
  expect(result.numTotalTests).toBe(4);
});
