import { Code, Presentation, Workflow } from "lucide-react";
import resume from "@/assets/Resume.pdf";

export const AboutSection= () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary">Me</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">Developer Focused on <br />Impactful Solutions</h3>
                        <p className="text-muted-foreground">My experience ranges from developing full-stack web applications to creating automation tools that improve real-world workflows. I especially enjoy working on projects where technology can simplify processes and improve accessibility for others.</p>
                        <p className="text-muted-foreground">Beyond development, I enjoy mentoring and teaching programming concepts through collaborative environments. I'm always exploring new technologies and looking for opportunities to continue growing as both a developer and leader.</p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <button onClick={()=>document.getElementById("contact")?.scrollIntoView({behavior:"smooth"})} className="cosmic-button">Get In Touch</button>
                            <a href={resume} target="_blank" rel="noopener noreferrer" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 hover:scale-105 active:scale-95 transition-all duration-300">Resume</a>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg"> Web Development</h4>
                                    <p className="text-muted-foreground">Building responsive full-stack applications using modern frameworks.</p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Workflow className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Automation & Problem Solver</h4>
                                    <p className="text-muted-foreground">Designing automation tools and efficient workflows that reduce repetitive tasks and improve productivity..</p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Presentation className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Teaching & Leadership</h4>
                                    <p className="text-muted-foreground">Supporting students and aspiring developers through mentorship, technical guidance, and collaborative learning.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}