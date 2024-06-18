import { IUser } from './user';

export interface UserSchema {
  authData?: IUser;
  _inited: boolean;
}
