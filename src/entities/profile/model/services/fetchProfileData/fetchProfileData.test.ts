import { TestAsyncThunk } from 'shared/lib/tests/test-async-thunk';
import { Country } from 'shared/types/enums/country';
import { Currency } from 'shared/types/enums/currency';

import { fetchProfileData } from './fetchProfileData';

const data = {
  username: 'client',
  age: 26,
  country: Country.Belarus,
  lastname: 'melekh',
  first: 'oleg',
  city: 'Minsk',
  currency: Currency.USD,
};

describe('fetchProfileData', () => {
  test('success', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);
    thunk.api.get.mockReturnValue(Promise.resolve({ data }));

    const result = await thunk.callThunk();

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(data);
  });

  test('error login', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk();

    expect(result.meta.requestStatus).toBe('rejected');
  });
});
