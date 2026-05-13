import { useState } from "react";
import { cn } from "../lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const skills = [
    // Programming Skills
    { name: "Python", level: 95, category: "programming"},
    { name: "Java", level: 85, category: "programming"},
    { name: "C", level: 70, category:"programming"},
    { name: "Swift", level: 65, category: "programming"},
    { name: "HTML/CSS", level: 95, category: "programming" },
    { name: "JavaScript / TypeScript", level: 90, category: "programming" },
    { name: "Tailwind CSS", level: 90, category: "programing" },


    // Frameworks & DB
    { name: "React", level: 65, category: "frameworks & DBs" },
    { name: "Angular", level: 75, category: "frameworks & DBs"},
    { name: "Node.js", level: 75, category: "frameworks & DBs" },
    { name: "MongoDB", level: 70, category: "frameworks & DBs" },
    { name: "SQL", level: 70, category: "frameworks & DBs"},


    // Tools
    { name: "Git/GitHub", level: 90, category: "tools" },
    { name: "VS Code", level: 95, category: "tools" },
    { name: "OS (Windows, MacOS, Linux)", level: 95, category: "tools"},
    { name: "English", level: 100, category: "tools" },
    { name: "Spanish", level: 85, category: "tools" },
    { name: "French", level: 75, category: "tools" },


];

const categories = ["all", "programming", "frameworks & DBs", "tools"];

export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("all");

    const filteredSkills = skills.filter(skill => activeCategory === "all" || skill.category === activeCategory);

    return (
        <section id="skills" 
            className="py-24 px-4 relative bg-secondary/30">
            
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary"> Skills</span>
                </h2>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category) => (
                        <button key={category} 
                            onClick={() => setActiveCategory(category)}
                            className={cn(
                                "px-5 py-2 font-semibold text-lg rounded-full transition-colors duration-300 capitalize cursor-pointer",
                                activeCategory === category ? "bg-primary text-primary-foreground"
                                : "bg-secondary/70 text-foreground hover:bg-secondary" )}>
                            {category}
                        </button>
                    ))}
                </div>

                <AnimatePresence mode="wait">
                    <motion.div key={activeCategory}
                        initial={{opacity: 0, y:10}}
                        animate={{opacity:1, y:0}}
                        exit={{opacity: 0, y:-10}}
                        transition={{duration: 0.2}}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredSkills.map((skill, i) =>(
                            <div key={skill.name} 
                                className="bg-card p-6 rounded-lg shadow-md card-hover">
                                <div className="text-left mb-4">
                                    <h3 className="font-semibold text-md">{skill.name}</h3>
                                </div>
                                <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                                    <motion.div 
                                        className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]" 
                                        initial={{width:0}}
                                        animate={{width: `${skill.level}%`}}
                                        transition={{duration:1, ease: "easeOut"}}/>
                                </div>

                                <div className="text-right mt-1">
                                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div> 
        </section>
    );
};