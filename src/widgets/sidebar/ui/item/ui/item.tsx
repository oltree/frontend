import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';
import { CustomLink, CustomLinkTheme } from 'shared/ui/custom-link';

import classes from './item.module.scss';

import { IItem } from '../../../model/items';

interface ItemProps {
  item: IItem;
  collapsed: boolean;
}

export const Item: FC<ItemProps> = memo(({ item, collapsed }) => {
  const { t } = useTranslation();

  return (
    <CustomLink
      to={item.path}
      theme={CustomLinkTheme.INVERTED}
      className={classNames(classes.item, { [classes.collapsed]: collapsed })}
    >
      <item.Icon className={classes.icon} />
      <span className={classes.link}>{t(item.text)}</span>
    </CustomLink>
  );
});
