import React, {
  createContext,
  useContext,
  useMemo,
  useState,
} from "react";

import { IProvider } from "@/types/context";
import { IUserContext } from "./interface";
import { IUser } from "@/types/user";

const UserContext = createContext<IUserContext>({} as IUserContext);

export const UserProvider: React.FC<IProvider> = ({ children }) => {
  const [user, setUser] = useState<IUser>({} as IUser);

  const value = useMemo(() => ({ user, setUser }), [user, setUser]);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserContext;

export const useUserContext = () => useContext(UserContext);
