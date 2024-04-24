import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

interface AboutProps {}

const About: FC<AboutProps> = memo(() => {
  const { t } = useTranslation();

  return <div>{t('About us')}</div>;
});

export default About;
