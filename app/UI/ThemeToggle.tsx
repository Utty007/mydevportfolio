import React, { useState, useEffect } from 'react';

const ThemeToggle = () => {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        const checkSystemTheme = () => {
            if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                setTheme('dark');
            } else {
                setTheme('light');
            }
        };

        checkSystemTheme();

        window.addEventListener('storage', checkSystemTheme);

        return () => window.removeEventListener('storage', checkSystemTheme);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        document.documentElement.classList.toggle('dark'); // Apply class for dark theme
    };

    return (
        <button onClick={toggleTheme}>
            {theme === 'dark' ? 'Dark Mode' : '☀️ Light Mode'}
        </button>
    );
};

export default ThemeToggle;
