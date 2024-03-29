import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { ScrollView, Text, View } from 'react-native';
import { Button } from 'react-native-nucleus-ui';
import { SafeAreaView } from 'react-native-safe-area-context';

import { TestIds } from '~features/common';

import { Carousel } from './component/carousel';
import { useLunchScreenController } from './lunch.controller';

const CAROUSEL_VALUES = [
  {
    id: 'slide-1',
    image: require('./assets/carousel-image.png'),
    text: 'Create brilliant learning pathways',
  },
  {
    id: 'slide-2',
    image: require('./assets/carousel-image.png'),
    text: 'Text1',
  },
  {
    id: 'slide-3',
    image: require('./assets/carousel-image.png'),
    text: 'Create brilliant learning pathways',
  },
  {
    id: 'slide-4',
    image: require('./assets/carousel-image.png'),
    text: 'Text1',
  },
];

function LunchScreenComponent() {
  const { styles, goToSignInScreen, goToSignUpScreen } =
    useLunchScreenController();

  const { t } = useTranslation();
  return (
    <ScrollView
      contentContainerStyle={styles.scrollContainer}
      testID={TestIds.Lunch.Screen}
    >
      <SafeAreaView style={styles.safeContainer}>
        <Text style={styles.logo}>
          <Text style={styles.logo__start}>{t('lunch.logo-start')}</Text>
          <Text style={styles.logo__end}>{t('lunch.logo-end')}</Text>
        </Text>
        <Carousel style={styles.carousel} values={CAROUSEL_VALUES} />

        <Button
          appearance="primary"
          onPress={goToSignUpScreen}
          size="large"
          style={styles.button}
          testID={TestIds.Lunch.SignUpButton}
          title={t('lunch.create-account-btn')}
        />
        <Trans
          i18nKey="lunch.have-an-account"
          parent={View}
          style={styles.loginHelper}
        >
          <Text style={styles.loginHelper__text}>
            Already have an account?{' '}
          </Text>
          <Text
            onPress={goToSignInScreen}
            style={styles.loginHelper__link}
            testID={TestIds.Lunch.LoginButton}
          >
            Login
          </Text>
        </Trans>
      </SafeAreaView>
    </ScrollView>
  );
}

export const LunchScreen = React.memo(LunchScreenComponent);
