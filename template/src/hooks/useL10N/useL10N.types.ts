export type L10NFn = (key: string, options?: Record<string, unknown>) => string;

export interface L10NHookReturn {
  t: L10NFn;
}
