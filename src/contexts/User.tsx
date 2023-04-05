import { createContext, useState } from "react";
import { valididateLogin } from "../utils/api";
import getPreviousSessionUser from "../utils/getPreviousSessionsUsername";

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
  const [user, setUser] = useState<User | null>(getPreviousSessionUser());
  const login = ({
    username,
    password,
  }: {
    username: string;
    password: string;
  }): Promise<void> => {
    return valididateLogin({ username, password }).then((user) => {
      setUser(user);
      localStorage.setItem('previousSessionUsername', user.username)
    });
  };

  const logout = () => {
    setUser(null);
    localStorage.setItem('previousSessionUsername', '')
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
