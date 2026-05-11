import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
    return (
        <section id="hero" 
            className="relative min-h-dvh flex flex-col items-center justify-center px-4">
            
            <div className="container max-w-5xl mx-auto text-center z-10">
                <header className="space-y-6">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                       <span className="opacity-0 animate-fade-in">Hi, I'm</span> 
                       <span className="text-primary opacity-0 animate-fade-in-delay-1">{" "}Juan</span>
                       <span className="text-gradient block md:inline opacity-0 animate-fade-in-delay-2">{" "}Alvarracin Naulaguari</span>
                    </h1>

                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur dolore explicabo, enim harum inventore omnis impedit sint tempore voluptatibus aliquid, minima porro esse expedita error cumque nemo in sequi ipsa!
                    </p>

                    <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                        <a href="#projects" className="cosmic-button">
                            View My Work
                        </a>
                    </div>
                </header>
            </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce">
            <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
            <ArrowDown className="h-5 w-5 text-primary"/>
        </div>
        </section>
    );
}