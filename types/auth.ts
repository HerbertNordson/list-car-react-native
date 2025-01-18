import { IUser } from "./user";

export type IAuth = {
  user: string;
  password: string;
};

export type IAuthResponse = {
  error: boolean;
  user: IUser;
};

export type AuthContextType = {
  isAuthenticated: boolean;
  login: (token: string) => Promise<void>;
  logout: () => Promise<void>;
};
