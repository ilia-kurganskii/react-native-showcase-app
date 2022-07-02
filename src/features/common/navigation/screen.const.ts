import { NavigatorScreenParams } from '@react-navigation/native';

export enum SCREENS {
  LOGIN_LUNCH = 'LOGIN_LUNCH',
  LOGIN_LOGIN = 'LOGIN_LOGIN',
  LOGIN_SIGN_UP = 'LOGIN_SIGN_UP',

  TABS_HOME = 'TABS_HOME',
  TABS_PROFILE = 'TABS_PROFILE',

  NEWS_DETAILS = 'NEWS_DETAILS',
}

export enum FLOWS {
  LOGIN = 'LOGIN-FLOW',
  TABS = 'TABS-FLOW',
  NEWS_DETAILS = 'NEWS_DETAILS-FLOW',
}

export interface LoginFlowParamList {
  [SCREENS.LOGIN_LOGIN]: undefined;
  [SCREENS.LOGIN_LUNCH]: undefined;
  [SCREENS.LOGIN_SIGN_UP]: undefined;
}

export interface NewsFlowParamList extends Record<string, object | undefined> {
  [SCREENS.NEWS_DETAILS]: {
    id: string;
  };
}

export interface RootStackParamList extends Record<string, object | undefined> {
  [FLOWS.LOGIN]: NavigatorScreenParams<LoginFlowParamList>;
  [FLOWS.NEWS_DETAILS]: NavigatorScreenParams<NewsFlowParamList>;
}

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
