import { by, element, expect } from 'detox';

import { TestIds } from '~features/common/tests';

export async function login(params?: { email: string; password: string }) {
  const {
    email = process.env.DETOX_DEFAULT_LOGIN_EMAIL,
    password = process.env.DETOX_DEFAULT_LOGIN_PASSWORD,
  } = params || {};
  if (!email || !password) {
    throw new Error('Email and password should non empty');
  }
  await element(by.id(TestIds.Lunch.LoginButton)).tap();
  await expect(element(by.id(TestIds.Login.Screen))).toExist();
  await element(by.id(TestIds.Login.EmailInput)).typeText(email);
  await element(by.id(TestIds.Login.PasswordInput)).replaceText(
    password + '\n'
  );
  await element(by.id(TestIds.Login.LoginButton)).tap();
  await waitFor(element(by.id(TestIds.Home.Screen)))
    .toExist()
    .withTimeout(5000);
}
