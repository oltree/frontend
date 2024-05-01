import { Suspense } from 'react';

import { Router } from 'app/providers/router';
import { classNames } from 'shared/lib/classNames/classNames';
import { Navbar } from 'widgets/navbar';
import { Sidebar } from 'widgets/sidebar';

function App() {
  return (
    <div className={classNames('app', {}, [])}>
      <Suspense fallback=''>
        <Navbar />

        <div className='content'>
          <Sidebar />
          <Router />
        </div>
      </Suspense>
    </div>
  );
}

export default App;
