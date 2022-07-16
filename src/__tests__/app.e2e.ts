import { by, device, element, expect } from 'detox';

import { login, TestIds } from '~features/common/tests';

describe('App', () => {
  beforeAll(async () => {
    await device.clearKeychain();
    await device.launchApp({ delete: true });
  });

  it('Demo', async () => {
    await login();
    await element(by.id(TestIds.Home.HeaderNews)).tap();
    await expect(element(by.id(TestIds.NewsDetails.Screen))).toExist();
    await element(by.id(TestIds.Navigation.BackButton)).tap();
    await element(by.id(TestIds.Tabs.ProfileTab)).tap();
    await element(by.id(TestIds.Profile.LogoutButton)).tap();
    await element(by.id(TestIds.Profile.LogoutDialog.LogoutButton)).tap();
  });
});
