import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import { Button } from 'shared/ui/button';

import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { decrement, increment } from '../model/slice/counter';

export const Counter: FC = memo(() => {
  const dispatch = useDispatch();
  const counterValue = useSelector(getCounterValue);
  const { t } = useTranslation();

  return (
    <div>
      <h1 data-testid='counter-value'>{counterValue}</h1>

      <Button
        onClick={() => dispatch(increment())}
        data-testid='increment-button'
      >
        {t('increment')}
      </Button>
      <Button
        data-testid='decrement-button'
        onClick={() => dispatch(decrement())}
      >
        {t('decrement')}
      </Button>
    </div>
  );
});
