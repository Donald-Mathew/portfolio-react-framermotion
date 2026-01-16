import { MoonIcon, SunDimIcon, SunIcon, SunriseIcon } from "lucide-react";
import React, { useEffect } from "react"; 

const ThemeToggle = ({theme, setTheme}) => {

    useEffect(() =>{
         const prefersDarkMode = window.matchMedia('(prefers-color-scheme:dark)').matches;
         setTheme(theme || (prefersDarkMode ? "dark" : "light"));
    }, []);

    useEffect(() => {
         if(theme === "dark") {
             document.documentElement.classList.add("dark");
         } else {
            document.documentElement.classList.remove("dark");
         } 
         localStorage.setItem('theme', theme);
    }, [theme]);

    const handleTheme = () => {
        setTheme("light");
    };

    const handleTheme2 = () => {
        setTheme("dark");
    };

    return (
        <>

        <button>
            {theme === "dark" ? <SunIcon className= {theme === "dark" ? "bg-white rounded-[50%] size-8.5 cursor-pointer" : "size-8.5 p-1.5 border border-gray-500 rounded-full cursor-pointer"} onClick={handleTheme} /> : <MoonIcon onClick={handleTheme2} className="size-8.5 p-1.5 border border-gray-500 rounded-full cursor-pointer" /> }
        </button>

        </>
    )
};

export default ThemeToggle;