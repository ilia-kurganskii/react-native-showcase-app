import { NavigatorScreenParams } from '@react-navigation/native';

export enum SCREENS {
  LOGIN_LUNCH = 'LOGIN_LUNCH',
  LOGIN_LOGIN = 'LOGIN_LOGIN',
  LOGIN_SIGN_UP = 'LOGIN_SIGN_UP',

  HOME_HOME = 'HOME_HOME',
  HOME_PROFILE = 'HOME_PROFILE',
}

export enum FLOWS {
  LOGIN = 'LOGIN-FLOW',
  HOME = 'HOME-FLOW',
}

export interface LoginFlowParamList {
  [SCREENS.LOGIN_LOGIN]: undefined;
  [SCREENS.LOGIN_LUNCH]: undefined;
  [SCREENS.LOGIN_SIGN_UP]: undefined;
}

export interface RootStackParamList {
  [FLOWS.LOGIN]: NavigatorScreenParams<LoginFlowParamList>;
}

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
