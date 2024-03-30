import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

interface MainProps {}

const Main: FC<MainProps> = memo(() => {
  const { t } = useTranslation('main');

  return <div>{t('main')}</div>;
});

export default Main;
