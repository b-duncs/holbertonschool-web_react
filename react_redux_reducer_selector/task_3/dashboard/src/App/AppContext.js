import { createContext } from 'react';

const user = {
  email: '',
  password: '',
  isLoggedIn: false,
};

const logOut = () => { /* document why this arrow function is empty */ };

const AppContext = createContext({
  user,
  logOut,
});

export default AppContext;
