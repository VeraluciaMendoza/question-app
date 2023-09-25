import { createContext, useContext } from 'react';
import useToggle from '../../hooks/useToogle';

const AppContext = createContext();

const useAppContext = () => useContext(AppContext);

const AppProvider = ({ children }) => {
  const [openNav, toggleOpenNav] = useToggle(false);

  return (
    <AppContext.Provider value={{ openNav, toggleOpenNav }}>
      {children}
    </AppContext.Provider>
  );
};

export { useAppContext, AppProvider };