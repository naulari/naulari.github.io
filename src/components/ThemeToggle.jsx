import { Sun, Moon} from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "../lib/utils";

export const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme")
        if (storedTheme === "dark"){
            setIsDarkMode(true)
            document.documentElement.classList.add("dark");
        }else if (storedTheme === "light"){
            setIsDarkMode(false);
            document.documentElement.classList.remove("dark");
        }else{
            const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
            setIsDarkMode(prefersDark);
            document.documentElement.classList.toggle("dark", prefersDark);
        }
    }, []);

    const toggleTheme = () => {
        if (isDarkMode){
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
            setIsDarkMode(false);
        }else{
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setIsDarkMode(true);
        }
    };

    return (
        <button onClick={toggleTheme} 
                className={cn("items-center justify-center h-10 w-10 rounded-full",
                "transition-colors duration-300 focus:outline-none active:scale-95 "
        )}>

            {isDarkMode? (<Sun className="h-6 w-6 text-[#f7f1ee]" /> )
            : (<Moon className="h-6 w-6 text-[#023C40]" />)}
        </button>
    );
}