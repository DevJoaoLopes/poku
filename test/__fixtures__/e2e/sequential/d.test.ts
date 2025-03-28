import { existsSync } from 'node:fs';
import { mkdir, rm, writeFile } from 'node:fs/promises';
import { assert } from '../../../../src/modules/essentials/assert.js';
import { test } from '../../../../src/modules/helpers/test.js';

test(async () => {
  const testDir = '../../.temp/sequential';
  const testFile = `${testDir}/once-per-time.json`;

  if (existsSync(testFile)) assert.fail("File shoudn't exists");

  await mkdir(testDir);
  await writeFile(testFile, 'test', 'utf8');
  await rm(testFile);
  await rm(testDir, { recursive: true, force: true });
});
