import { createContext, useState } from "react";
import { Content } from "./Content";

export const ThemeContext = createContext()

function App() {
  const [theme, setTheme] = useState('light')
  return (
    <ThemeContext.Provider value={theme}>
      <button onClick={(event)=> {
        if(theme === 'light'){
          setTheme('dark')
        }else{
          setTheme('light')
        }
      }}>Change Theme</button>
      <Content />
    </ThemeContext.Provider>
  );
}

export default App;
