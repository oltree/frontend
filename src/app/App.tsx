import { Link } from 'react-router-dom';

import { Router } from 'app/providers/router';
import { useTheme } from 'app/providers/theme';
import { classNames } from 'shared/lib/classNames';

import './styles/index.scss';

const App = () => {
  const { theme, onToggleTheme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={onToggleTheme}>TOGGLE THEME</button>

      <Link to={'/'}>MAIN</Link>
      <Link to={'/about'}>ABOUT</Link>

      <Router />
    </div>
  );
};

export default App;
