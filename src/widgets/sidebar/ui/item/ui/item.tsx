import { getUser } from 'entities/user';
import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { classNames } from 'shared/lib/classNames/classNames';
import { CustomLink, CustomLinkTheme } from 'shared/ui/custom-link';

import { IItem } from '../../../model/items';

import classes from './item.module.scss';

interface ItemProps {
  item: IItem;
  collapsed: boolean;
}

export const Item: FC<ItemProps> = memo(({ item, collapsed }) => {
  const { t } = useTranslation();
  const isAuth = useSelector(getUser);

  if (!isAuth && item.authOnly) {
    return null;
  }

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
