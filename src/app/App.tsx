import { Suspense } from 'react';

import { Router } from 'app/providers/router';
import { useTheme } from 'app/providers/theme';
import { classNames } from 'shared/lib/classNames/classNames';
import { Navbar } from 'widgets/navbar';
import { Sidebar } from 'widgets/sidebar';

function App() {
  const { theme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
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
