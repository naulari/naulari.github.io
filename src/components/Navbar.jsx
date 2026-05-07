import { useEffect, useState } from "react";
import { cn } from "../lib/utils";
import { X, Menu } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
    {name: "Home", href: "#hero"},
    {name: "About", href: "#about"},
    {name: "Skills", href: "#skills"},
    {name: "Projects", href: "#projects"},
    {name: "Contact", href: "#contact" }
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
                <a className="text-xl font-bold text-primary flex items-center"
                    href="#hero">
                    <span className="relative z-10">
                        <span className="text-glow text-foreground"> Juan A. N.</span> Portfolio
                    </span>
                </a>

                {/* Desktop nav */}
                <div className="hidden md:flex space-x-8">
                    {navItems.map((item) => (
                        <a key={item.name} 
                            href={item.href} 
                            className="flex items-center h-10 text-foreground/80 hover:text-primary transition-colors duration-300">
                            {item.name}
                        </a>
                    ))}
                    <ThemeToggle/>
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
                            <a key={item.name} 
                                href={item.href} 
                                className="flex items-center h-10 text-foreground/80 hover:text-primary transition-colors duration-300"
                                onClick={() => setIsMenuOpen(false)}>
                                {item.name}
                            </a>
                        ))}
                        <ThemeToggle/>
                    </div>
                </div>
            </div>
        </nav>
    );
};