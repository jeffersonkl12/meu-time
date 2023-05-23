import React, { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

type contextField = {
  token?: boolean;
  onLogin: Function;
};

const startField = {
  token: false,
  onLogin: () => {},
};

export const AuthContext = React.createContext<contextField>(startField);

const AuthProvider = ({ children }: Props) => {
  const [token, setToken] = React.useState(false);

  const handleLogin = () => {
    setToken(true);
  };

  const value = {
    token,
    onLogin: handleLogin,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
