import { ArrowRight, ExternalLink } from "lucide-react";
import plate from "@/assets/projects/balance_plate.gif"
import photoshare from "@/assets/projects/SAMSALVA.png";
import mx_worldwide from "@/assets/projects/Mx-Worldwide.png";

const projects = [
    {
        id: 1,
        title: "Balancing Plate",
        description: "Programmed a balancing plate that uses touchscreen input to reactively control servos for balancing",
        image: plate,
        tags: ["C", "Linux", "Git"],
        demoURL: "#",
        githubURL: "#"
    },
    {
        id: 2,
        title: "Photoshare",
        description: "Developed a dynamic website enabling users to share and interact with photos",
        image: photoshare,
        tags: ["HTML/CSS", "Python", "Javascript"],
        demoURL: "#",
        githubURL: "https://github.com/naulari/SAMSALVA"
    },
    {
        id: 3,
        title: "Mx-Worldwide",
        description: "Constructed a web application where users choose a song and translate its lyrics to their target language.",
        image: mx_worldwide,
        tags: ["Angular", "Python", "MongoDB"],
        demoURL: "#",
        githubURL: "https://github.com/naulari/Mx-Worldwide"
    }
];

const GithubIcon = () => (
    <svg 
        role="img" 
        viewBox="0 0 24 24" 
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        width="20"
        height="20">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
    </svg>
);

export const ProjectSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center"> Featured <span className="text-primary"> Projects </span> </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto ">
                    Here are some of my projects, showcasing my passion for web development and challenging but rewarding field of embedded systems. 
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project)=>(
                        <article key={project.id} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                            <div className="h-48 overflow-hidden">
                                <img src={project.image} alt={project.title} loading="lazy" decoding="async" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                            </div>

                            <div className="p-6">
                                <ul className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag)=>(
                                        <li key={tag} className="px-2 py-1 border text-xs font-medium rounded-full bg-primary/30 text-secondary-foreground">
                                            {tag}
                                        </li>
                                    ))}
                                </ul>
                            

                                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                                <div className="flex justify-between items-center">
                                    <div className="flex space-x-3">
                                        { project.demoURL !== "#" && 
                                            <a href={project.demoURL} 
                                                className="text-foreground/80 hover:text-primary active:scale-95 transition-colors duration-300"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                title={`Open ${project.title} demo`}
                                                aria-label={`Live demo for ${project.title}`}>
                                                <ExternalLink size={20}/>
                                            </a>
                                        }
                                        { project.githubURL !== "#" &&
                                            <a href={project.githubURL} 
                                                className="text-foreground/80 hover:text-primary active:scale-95 transition-colors duration-300" 
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label={`GitHub repository for ${project.title}`}>
                                                <GithubIcon />
                                            </a>
                                        }
                                    </div>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
                <div className="text-center mt-12">
                    <a className="cosmic-button w-fit flex items-center mx-auto gap-2"
                        href="https://github.com/naulari"
                        target="_blank"
                        rel="noopener noreferrer">
                        Check My Github <ArrowRight size={16}/>
                    </a>
                </div>
            </div>
        </section>
    );
}