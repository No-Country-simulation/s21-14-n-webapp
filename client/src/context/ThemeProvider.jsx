import { useState, useEffect } from 'react';
import ThemeContext from './ThemeContext';


const getInitialTheme = () => 
{
    // Handle server-side rendering scenario
    if (typeof window === 'undefined') return 'light';
    const storedTheme = localStorage.getItem('theme');
    //return storedTheme ? storedTheme : 'dark';
    if (storedTheme) return storedTheme;
  
  // If not in localStorage, check system preference
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark';
  }
  
  // Default fallback
  return 'light';

}

const ThemeProvider = ({ children }) =>
{
    const [theme, setTheme] = useState(getInitialTheme);

    useEffect(() => 
    {
        localStorage.setItem('theme', theme);
        document.documentElement.dataset.theme = theme;
    }, [theme]);
    

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider;