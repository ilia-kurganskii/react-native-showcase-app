import { by, device, element, expect } from 'detox';

import { login, TestIds } from '~features/common/tests';

describe('Home', () => {
  beforeEach(async () => {
    await device.launchApp({ delete: true });
  });

  describe('News flow', () => {
    beforeEach(async () => {
      await login();
    });

    afterEach(async () => {
      await device.clearKeychain();
    });

    it('Open header news', async () => {
      await element(by.id(TestIds.Home.HeaderNews)).tap();
      await expect(element(by.id(TestIds.NewsDetails.Screen))).toExist();
    });
  });
});
