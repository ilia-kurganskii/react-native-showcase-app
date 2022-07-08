import { by, device, element, expect } from 'detox';

import { login, TestIds } from '~features/common/tests';

describe('Profile', () => {
  beforeAll(async () => {
    await device.clearKeychain();
    await device.launchApp({ delete: true });
  });

  describe('Logout flow', () => {
    beforeEach(async () => {
      await login();
    });

    it('Logout after login', async () => {
      await element(by.id(TestIds.Tabs.ProfileTab)).tap();
      await expect(element(by.id(TestIds.Profile.Screen))).toExist();
      await element(by.id(TestIds.Profile.LogoutButton)).tap();
      await expect(
        element(by.id(TestIds.Profile.LogoutDialog.LogoutButton))
      ).toExist();
      await element(by.id(TestIds.Profile.LogoutDialog.LogoutButton)).tap();
      await expect(element(by.id(TestIds.Lunch.Screen))).toExist();
    });
  });
});
