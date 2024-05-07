import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/button';

interface LanguageSwitcherProps {
  className?: string;
  short?: boolean;
}

export const LanguageSwitcher: FC<LanguageSwitcherProps> = memo(props => {
  const { className, short } = props;

  const { t, i18n } = useTranslation();

  const handleToggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <Button
      data-testid='language-switcher'
      theme={ButtonTheme.CLEAR}
      className={classNames('', {}, [className])}
      onClick={handleToggleLanguage}
    >
      {t(short ? 'Lang' : 'Language')}
    </Button>
  );
});
