import { StateSchema } from 'app/providers/store';
import { Country } from 'shared/types/enums/country';
import { Currency } from 'shared/types/enums/currency';

import { getProfileData } from './getProfileData';

describe('getProfileData', () => {
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
        data,
      },
    };
    expect(getProfileData(state as StateSchema)).toEqual(data);
  });
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileData(state as StateSchema)).toEqual(undefined);
  });
});
