import { device, expect, by, element } from 'detox';

describe('Login', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  describe('Login flow', () => {
    it('Open Sign Up scren', async () => {
      await element(by.id('create-account-btn')).tap();
      await expect(element(by.id('sign-up-screen'))).toExist();
    });
  });
});
