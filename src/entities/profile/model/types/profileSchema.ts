import { Country } from 'shared/types/enums/country';
import { Currency } from 'shared/types/enums/currency';

export enum ValidateProfileError {
  INCORRECT_USER_DATA = 'INCORRECT_USER_DATA',
  INCORRECT_AGE = 'INCORRECT_AGE',
  INCORRECT_COUNTRY = 'INCORRECT_COUNTRY',
  NO_DATA = 'NO_DATA',
  SERVER_ERROR = 'SERVER_ERROR',
}

export interface IProfile {
  first?: string;
  lastname?: string;
  age?: number;
  currency?: Currency;
  country?: Country;
  city?: string;
  username?: string;
  avatar?: string;
}

export interface ProfileSchema {
  data?: IProfile;
  form?: IProfile;
  error?: string;
  isLoading: boolean;
  readonly: boolean;
  validateErrors?: ValidateProfileError[];
}
