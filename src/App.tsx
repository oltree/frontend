import { Route, Routes } from 'react-router-dom';

import { AboutAsync } from './pages/about';
import { MainAsync } from './pages/main';

import { Suspense } from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

const App = () => {
  return (
    <div className='app'>
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
