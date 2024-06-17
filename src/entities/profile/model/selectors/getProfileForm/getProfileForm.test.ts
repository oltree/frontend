import { StateSchema } from 'app/providers/store';
import { Country } from 'shared/types/enums/country';
import { Currency } from 'shared/types/enums/currency';

import { getProfileForm } from './getProfileForm';

describe('getProfileForm', () => {
  test('should return error', () => {
    const data = {
      username: 'client',
      age: 26,
      country: Country.Belarus,
      lastname: 'melekh',
      first: 'oleg',
      city: 'Minsk',
      currency: Currency.USD,
    };
    const state: DeepPartial<StateSchema> = {
      profile: {
        form: data,
      },
    };
    expect(getProfileForm(state as StateSchema)).toEqual(data);
  });
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileForm(state as StateSchema)).toEqual(undefined);
  });
});
