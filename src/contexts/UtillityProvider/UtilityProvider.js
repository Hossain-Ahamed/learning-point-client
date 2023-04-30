import React, { createContext, useEffect, useState } from 'react';


export const UtilityContext = createContext('d');

const UtilityProvider = ({ children }) => {


    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [theme, setTheme] = useState('light');


    //width
    useEffect(() => {
        const handleWindowResize = () => {
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    });   


    //theme
    useEffect(() => {
        document.querySelector('html').setAttribute('data-theme', theme);
    }, [theme]);


    const data = {
        screenWidth,

        theme,
        setTheme
    }



    return (
        <UtilityContext.Provider value={data}>
            {children}
        </UtilityContext.Provider>
    );
};

export default UtilityProvider;