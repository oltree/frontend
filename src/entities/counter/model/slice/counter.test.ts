import { counterReducer } from 'entities/counter';

import { CounterSchema } from '../types/counterSchema';
import { decrement, increment } from './counter';

describe('counterSlice', () => {
  test('decrement', () => {
    const state: CounterSchema = { value: 10 };

    expect(counterReducer(state, decrement())).toEqual({
      value: 9,
    });
  });
  test('increment', () => {
    const state: CounterSchema = { value: 10 };

    expect(counterReducer(state, increment())).toEqual({
      value: 11,
    });
  });

  test('should work with empty state', () => {
    expect(counterReducer(undefined, increment())).toEqual({
      value: 1,
    });
  });
});
