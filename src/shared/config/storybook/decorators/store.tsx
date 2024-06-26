import { Story } from '@storybook/react';

import { StateSchema, StoreProvider } from 'app/providers/store';
import { articleReducer } from 'entities/article';
import { profileReducer } from 'entities/profile';
import { loginReducer } from 'features/auth';
import { ReducersList } from 'shared/lib/components/DynamicModuleLoader';

const defaultAsyncReducers: ReducersList = {
  login: loginReducer,
  profile: profileReducer,
  article: articleReducer,
};

export const StoreDecorator =
  (state: DeepPartial<StateSchema>, asyncReducers?: ReducersList) =>
  (StoryComponent: Story) =>
    (
      <StoreProvider
        initialState={state}
        asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
      >
        <StoryComponent />
      </StoreProvider>
    );
