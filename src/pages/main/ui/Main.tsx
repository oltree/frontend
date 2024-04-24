import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

interface MainProps {}

const Main: FC<MainProps> = memo(() => {
  const { t } = useTranslation();

  return <div>{t('Main')}</div>;
});

export default Main;
