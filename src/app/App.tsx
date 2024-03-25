import { Suspense } from 'react';
import { Link, Route, Routes } from 'react-router-dom';

import { useTheme } from 'app/providers/theme';
import { About } from 'pages/about';
import { Main } from 'pages/main';
import { classNames } from 'shared/lib/classNames';

import './styles/index.scss';

const App = () => {
  const { theme, onToggleTheme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={onToggleTheme}>TOGGLE THEME</button>

      <Link to={'/'}>MAIN</Link>
      <Link to={'/about'}>ABOUT</Link>

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
