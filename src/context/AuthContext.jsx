// context/AuthContext.jsx
import { createContext } from 'react';

export const AuthContext = createContext({
  authState: {
    username: "",
    id: 0,
    status: false,
  },
  setAuthState: () => {},
});
