import { useEffect, useState } from "react";
import { cn } from "../lib/utils";
import { X, Menu } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
    {name: "Home", section: "hero"},
    {name: "About", section: "about"},
    {name: "Skills", section: "skills"},
    {name: "Projects", section: "projects"},
    {name: "Contact", section: "contact" },
]


export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
            setIsMenuOpen(false);
        }
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return ( 
        <nav className={cn("fixed w-full z-40 transition-all duration-300",
            isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
        )}>

            <div className="container flex items-center justify-between relative">
                <div className="flex gap-2">
                    <button className="text-xl font-bold text-primary flex items-center"
                        onClick={()=>document.getElementById("hero")?.scrollIntoView({behavior:"smooth"})}>
                        <span className="relative z-10">
                            <span className="text-glow text-foreground"> Juan A. N.</span> Portfolio
                        </span> 
                    </button>
                    <ThemeToggle/>
                </div>
                

                {/* Desktop nav */}
                <div className="hidden md:flex space-x-8">
                    {navItems.map((item) => (
                        <button key={item.name} 
                            onClick={()=> document.getElementById(item.section)?.scrollIntoView({behavior: "smooth"})}
                            className="flex items-center font-semibold h-10 text-foreground/80 hover:text-primary transition-colors duration-300">
                            {item.name}
                        </button>
                    ))}
                </div>
                {/* mobile nav */}
                <button onClick={() => setIsMenuOpen((prev) => !prev)}
                    className="md:hidden p-2 text-foreground z-50"
                    aria-label={isMenuOpen?"Close Menu" : "Open Menu"}>
                    {isMenuOpen ? <X size={24}/> : <Menu size={24}/>}
                </button>

                <div className={cn("absolute top-full left-0 w-full h-[calc(100vh-100%)] bg-background/95 backdrop-blur-md flex flex-col items-center justify-center",
                    "transition-all duration-300 md:hidden",
                    isMenuOpen ? "opacity-100 pointer-events-auto translate-y-0" : "opacity-0 pointer-events-none -translate-y-4" 

                )}>
                    <div className="flex flex-col space-y-8 text-xl">
                        {navItems.map((item) => (
                            <button key={item.name}  
                                className="flex items-center font-semibold h-10 text-foreground/80 hover:text-primary transition-colors duration-300"
                                onClick={() => (setIsMenuOpen(false), document.getElementById(item.section)?.scrollIntoView({behavior:"smooth"}))}>
                                {item.name}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
};