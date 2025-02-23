import { LOCALE } from '../utils/constant';

export type LocaleType = (typeof LOCALE)[keyof typeof LOCALE];
