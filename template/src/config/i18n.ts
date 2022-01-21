// i18 next
import i18n from 'i18next';
import HTTP from 'i18next-http-backend';

// react i18 next
import { initReactI18next } from 'react-i18next';

// config variables
import {
  LOCALE_LIST,
  I18N_API_URL,
  PRIMARY_LOCALE,
  SECONDARY_LOCALE,
} from '@config/index';

// create instance
i18n
  .use(initReactI18next)
  .use(HTTP)
  .init(
    {
      lng: PRIMARY_LOCALE,
      supportedLngs: LOCALE_LIST,
      fallbackLng: SECONDARY_LOCALE,
      react: {
        useSuspense: true,
      },
      interpolation: {
        escapeValue: false,
      },
      backend: {
        crossDomain: true,
        loadPath: `${I18N_API_URL}localization/{{lng}}?dot=true`,
        parse: (payload: string) => JSON.parse(payload).data.content,
      },
    },
    (err, t) => {}
  );
export default i18n;
