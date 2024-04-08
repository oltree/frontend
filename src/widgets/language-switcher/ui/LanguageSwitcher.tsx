import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames';
import { CustomButton } from 'shared/ui/custom-button';

import { CustomButtonTheme } from 'shared/ui/custom-button/ui/CustomButton';

interface LanguageSwitcherProps {
  className?: string;
}

export const LanguageSwitcher: FC<LanguageSwitcherProps> = memo(props => {
  const { className } = props;

  const { t, i18n } = useTranslation();

  const handleToggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <CustomButton
      theme={CustomButtonTheme.CLEAR}
      className={classNames('', {}, [className])}
      onClick={handleToggleLanguage}
    >
      {t('language')}
    </CustomButton>
  );
});
