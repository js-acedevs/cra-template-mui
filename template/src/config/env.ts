/**
 * ENV variables
 */

// interfaces
import { JWTHasuraClaims } from '@interfaces/index';

// app ENV variables
export const APP_URL = process.env.REACT_APP_PUBLIC_URL || '';

// graphql ENV variables
export const GQL_API_URI = process.env.REACT_APP_GQL_API_URI || '';
export const GQL_WS_API_URI = process.env.REACT_APP_GQL_WS_API_URI || '';

// I18N ENV variables
export const I18N_API_URL = process.env.REACT_APP_I18N_API_URL || '';
export const I18N_LOCALE_DEFAULT = process.env.REACT_APP_PRIMARY_LANG || '';
export const I18N_LOCALE_FALLBACK = process.env.REACT_APP_SECONDARY_LANG || '';
export const I18N_LOCALE_LIST =
  process.env.REACT_APP_SUPPORTED_LANGS?.split('/') || [];

// crypto ENV variables
export const CRYPTO_SECRET_KEY = process.env.REACT_APP_CRYPTO_SECRET_KEY || '';

// jwt ENV variables
export const JWT_STORAGE_KEY =
  process.env.REACT_APP_JWT_STORAGE_KEY || 'auth-token';

export const DEFAULT_USER_ROLE =
  (process.env
    .REACT_APP_DEFAULT_USER_ROLE as JWTHasuraClaims['x-hasura-role'][0]) ||
  'user';
