import { ScrollView, Text } from 'react-native';
import { Button } from 'react-native-nucleus-ui';
import React from 'react';
import { useLunchScreenController } from './lunch.controller';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Carousel } from './component/carousel';

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
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <SafeAreaView style={styles.safeContainer}>
        <Text style={styles.logo}>
          <Text style={styles.logo__start}>you</Text>
          <Text style={styles.logo__end}>learn</Text>
        </Text>
        <Carousel style={styles.carousel} values={CAROUSEL_VALUES} />

        <Button
          appearance="primary"
          onPress={goToSignUpScreen}
          size="large"
          style={styles.button}
          testID="create-account-btn"
          title="Create account"
        />

        <Text style={styles.loginHelper}>
          <Text style={styles.loginHelper__text}>Have an account? </Text>
          <Text
            onPress={goToSignInScreen}
            style={styles.loginHelper__link}
            testID="login-btn"
          >
            Log in
          </Text>
        </Text>
      </SafeAreaView>
    </ScrollView>
  );
}

export const LunchScreen = React.memo(LunchScreenComponent);
