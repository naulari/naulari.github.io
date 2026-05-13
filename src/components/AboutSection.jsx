import { Briefcase, Code, User } from "lucide-react";
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
                        <h3 className="text-2xl font-semibold">Passionate Web Developer & Tech Creator</h3>
                        <p className="text-muted-foreground">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium animi voluptas deserunt, reprehenderit quas obcaecati ipsa totam! Nobis, alias saepe dignissimos suscipit, consectetur assumenda enim, illum libero consequuntur corrupti ullam.</p>
                        <p className="text-muted-foreground">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut neque perspiciatis, laborum tempore, reiciendis illum atque vero itaque possimus laboriosam cupiditate necessitatibus error nihil laudantium nam ea in architecto maiores?</p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button">Get In Touch</a>
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
                                    <p className="text-muted-foreground">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo nulla beatae distinctio voluptate! Ipsum possimus, officiis nostrum rem recusandae labore!</p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <User className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">UI/UX Design</h4>
                                    <p className="text-muted-foreground">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut ipsam sed fugit doloremque! Laboriosam molestiae, dolor natus soluta optio nobis!</p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Briefcase className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Project Management</h4>
                                    <p className="text-muted-foreground">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit praesentium distinctio consectetur amet culpa obcaecati eos commodi eius deleniti incidunt?</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}