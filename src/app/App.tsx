import { Router } from 'app/providers/router';
import { useTheme } from 'app/providers/theme';
import { classNames } from 'shared/lib/classNames';
import { Navbar } from 'widgets/navbar';

import './styles/index.scss';

const App = () => {
  const { theme, onToggleTheme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar />

      <Router />

      <button onClick={onToggleTheme}>TOGGLE THEME</button>
    </div>
  );
};

export default App;
