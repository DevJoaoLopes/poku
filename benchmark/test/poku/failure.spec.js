import assert from 'node:assert';
import { test } from '../../../lib/modules/index.js';
import { sum } from '../../src/sum.js';

test('should add 4 + 4', () => {
  assert.equal(sum(4, 4), 4);
});
