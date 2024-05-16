import { Country } from 'shared/types/enums/country';
import { Currency } from 'shared/types/enums/currency';

export interface IProfile {
  first: string;
  lastname: string;
  age: number;
  currency: Currency;
  country: Country;
  city: string;
  username: string;
  avatar: string;
}

export interface ProfileSchema {
  data?: IProfile;
  error?: string;
  isLoading: boolean;
  readonly: boolean;
}
