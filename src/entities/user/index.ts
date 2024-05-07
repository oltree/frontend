import userReducer from './model/slice/user';

export { getUser } from './model/selectors/getUser/getUser';
export { initAuthData, logout, setAuthData } from './model/slice/user';
export { IUser } from './model/types/user';
export { UserSchema } from './model/types/userShema';
export { userReducer };
