import { device, expect, by, element } from 'detox';

describe('Login', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  describe('login', () => {
    it('login by button', async () => {
      await element(by.id('login-button')).tap();
      await expect(element(by.text('Home Screen'))).toBeVisible();
    });
  });
});
