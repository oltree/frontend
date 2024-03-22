import { useState } from 'react';

import classes from './Counter.module.scss';

export const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p className={classes.text}>{count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};
