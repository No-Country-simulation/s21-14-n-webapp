import React from 'react'
import { useTheme } from '../../hooks/useTheme';




const ThemeSelect = ({ displayType = "icons" }) => { 
  const { theme, setTheme } = useTheme();
  const isDarkMode = theme === 'dark';

  const handleToggle = () => {
    setTheme(isDarkMode ? 'light' : 'dark');
  };

  const renderIcons = () => (
    <div  className="p-4">
    <div
      className="relative cursor-pointer transition-all duration-500 ease-in-out"
      onClick={handleToggle}
    >
      <div
        className={`absolute w-10 h-10 rounded-full shadow-md flex items-center justify-center 
          ${isDarkMode ? 'bg-neutral-600 rotate-360' : 'bg-white rotate-0'}
          transition-all duration-500 ease-in-out`}
      >
        {isDarkMode ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-text-color stroke-2 opacity-100 transition-opacity duration-500 ease-in-out" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700 stroke-2 opacity-100 transition-opacity duration-500 ease-in-out" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
        )}
      </div>
    </div>
    </div>
  );

  const renderToggle = () => ( 
    <div
      className="relative w-16 h-6 px-2 rounded-full bg-gray-300 dark:bg-gray-700 cursor-pointer transition-colors duration-500 ease-in-out"
      onClick={handleToggle}
    >
      <div
        className={`mt-1 absolute w-4 h-4 rounded-full bg-white shadow-md transition-transform duration-500 ease-in-out ${
          isDarkMode ? 'translate-x-8 bg-gray-800' : 'translate-x-0'
        }`}
      ></div>
    </div>
  );

  const renderSelect = () => ( 
    <select
      value={theme}
      onChange={(e) => setTheme(e.target.value)}
      className="bg-white dark:bg-gray-800 text-black dark:text-white py-2 px-4 rounded border border-gray-300 dark:border-gray-600 transition-colors duration-500 ease-in-out"
    >
      <option value="light">Light</option>
      <option value="dark">Dark</option>
    </select>
  );

    switch (displayType) {
        case "icons":
        return renderIcons();
        case "toggle":
        return renderToggle();
        case "select":
        return renderSelect();
        default:
        return renderIcons(); 
    }
};

export default ThemeSelect;
