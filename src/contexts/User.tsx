import { createContext, useState } from "react";
import { valididateLogin } from "../utils/api";

interface UserContextType {
  user: User | null;
  login: ({
    username,
    password,
  }: {
    username: string;
    password: string;
  }) => Promise<void>;
  logout: () => void;
}

export const UserContext = createContext<UserContextType>({
  user: null,
  login: () => valididateLogin(),
  logout: () => {},
});

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = ({
    username,
    password,
  }: {
    username: string;
    password: string;
  }): Promise<void> => {
    return valididateLogin({ username, password }).then((user) => {
      setUser(user);
    });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
