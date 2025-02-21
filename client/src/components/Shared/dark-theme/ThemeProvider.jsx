import { createContext, useContext, useState, useEffect } from 'react';


const ThemeContext = createContext();

const getInitialTheme = () => 
{
    // Handle server-side rendering scenario
    if (typeof window === 'undefined') return 'light';
    const storedTheme = localStorage.getItem('theme');
    return storedTheme ? storedTheme : 'dark';
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

export function useTheme() 
{
    const context = useContext(ThemeContext);

    if (context === undefined) 
    {
        throw new Error('useTheme must be used within a ThemeProvider');
    }

    return context;
}

export default ThemeProvider