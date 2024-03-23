import { Suspense } from 'react';
import { Link, Route, Routes } from 'react-router-dom';

import { AboutAsync } from './pages/about';
import { MainAsync } from './pages/main';

import { classNames } from './helpers/classNames/classNames';
import './styles/index.scss';
import { useTheme } from './theme/useTheme';

const App = () => {
  const { theme, onToggleTheme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={onToggleTheme}>TOGGLE THEME</button>

      <Link to={'/'}>MAIN</Link>
      <Link to={'/about'}>ABOUT</Link>

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<MainAsync />} />
          <Route path='/about' element={<AboutAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
