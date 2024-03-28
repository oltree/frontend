import { Router } from 'app/providers/router';
import { useTheme } from 'app/providers/theme';
import { classNames } from 'shared/lib/classNames';
import { Navbar } from 'widgets/navbar';

import './styles/index.scss';

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar />

      <Router />
    </div>
  );
};

export default App;
