import { device } from 'detox';

import { login } from '~features/common/tests';

describe('Login', () => {
  beforeAll(async () => {
    await device.launchApp({ delete: true });
  });

  afterEach(async () => {
    await device.clearKeychain();
  });

  describe('Login flow', () => {
    it('Open login screen', async () => {
      await login();
    });
  });
});
