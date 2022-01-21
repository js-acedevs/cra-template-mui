// rhooks
import { useKeys } from 'rooks';

// i18 next
import { useTranslation } from 'react-i18next';

// hooks
import { useToggle } from '../useToggle';

// types
import { L10NHookReturn } from './useL10N.types';

export const useL10N = (): L10NHookReturn => {
  const { t } = useTranslation();

  const [keyToggle, setKeyToggler] = useToggle(false);

  // key listener
  useKeys(
    ['l', 't'], // LT
    setKeyToggler
  );

  return {
    t: (key: string, options?: Record<string, unknown>) => {
      if (keyToggle) return key;
      if (options) {
        return t(key, options);
      }
      return t(key);
    },
  };
};
