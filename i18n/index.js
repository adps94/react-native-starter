import I18n from 'react-native-i18n';

I18n.fallbacks = true;

I18n.translations = {
  en: {
    HOME: {
      TITLE: 'HOME',
    },
    LOGIN: {
      EMAIL: {
        PLACEHOLDER: 'EMAIL',
      },
      PASSWORD: {
        PLACEHOLDER: 'PASSWORD',
      },
      LOGIN_BUTTON: 'Login',
    },
    SIDEBAR: {
      NAV: {
        HOME: 'Home',
        BLANKPAGE: 'Blank Page',
      },
    },
    BLANKPAGE: {
      TITLE: 'Blank Page',
      BODY_CONTENT: 'Create Something Awesome . . .',
    },
    SCROLLABLE_TABS: {
      TITLE: 'Scrollable Tabs',
      TABS: [
        'Tab 1',
        'Tab 2',
      ],
    },
    FOOTER: {
      TABS: [
        { text: 'Tab 1', icon: 'more-horiz', action: 'tab1' },
        { text: 'Tab 2', icon: 'people-outline', action: 'tab2' },
        { text: 'Tab 3', icon: 'message', action: 'tab3' },
        { text: 'Tab 3', icon: 'person-outline', action: 'tab4' },
      ],
      DEFAULT: 'Default Tab',
      TITLE: 'Footer Tabs',
    },
    REDUCER: {
      LIST: [
        'React Native starter kit',
        'RN Navigator',
        'NB Easy Grid',
        'NativeBase',
        'CodePush',
        'Redux',
      ],
    },
  },
};

export default I18n;
