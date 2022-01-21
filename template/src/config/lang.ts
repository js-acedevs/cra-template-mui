// envs
import {
  I18N_LOCALE_LIST,
  I18N_LOCALE_DEFAULT,
  I18N_LOCALE_FALLBACK,
  LOCALE_STORAGE_KEY as STORAGE_KEY,
} from '@config/index';

// utils
import { readFromStorage } from '@utils/index';

// calculate if primary lang is selected
const isPriarySelected = readFromStorage(STORAGE_KEY) === I18N_LOCALE_DEFAULT;

export const PRIMARY_LOCALE = isPriarySelected
  ? I18N_LOCALE_DEFAULT
  : I18N_LOCALE_FALLBACK;
export const SECONDARY_LOCALE = isPriarySelected
  ? I18N_LOCALE_FALLBACK
  : I18N_LOCALE_DEFAULT;
export const LOCALE_LIST = I18N_LOCALE_LIST;
