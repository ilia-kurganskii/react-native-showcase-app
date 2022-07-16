import { device } from 'detox';

import { login } from '~features/common/tests';

describe('Login', () => {
  beforeAll(async () => {
    await device.clearKeychain();
    await device.launchApp({ delete: true });
  });

  describe('Login flow', () => {
    it('Open login screen', async () => {
      await login();
    });
  });
});
