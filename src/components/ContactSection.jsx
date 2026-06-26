import { Mail, MapPin, Phone, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "../hooks/use-toast";
import { useState } from "react";



const LinkedIn = () => (
    <svg role="img" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 16 16">
    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
    </svg>
);

const Instagram = () => (
    <svg role="img" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077"/>
    </svg>
);

export const ContactSection = () => {

    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        setIsSubmitting(true);

        try{
            const formData = new FormData(e.target);

            formData.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);

            formData.append(
            "subject",
            "New Portfolio Contact Form Submission"
        );

            const object = Object.fromEntries(formData);
            const json = JSON.stringify(object);

            const response = await fetch(
                "https://api.web3forms.com/submit",
                {
                    method: "POST",
                    headers:{
                        "Content-Type" : "application/json",
                        Accept: "application/json",
                    },
                    body: json,
                }
            );
            const result = await response.json();

            if (result.success){
                toast({
                    title: "Message Sent!",
                    description:
                    "Thank you for your message. I'll get back to you soon.",
                });
                e.target.reset();
            }else{
                toast({
                    title: "Error",
                    description: 
                        "Failed to send message. Please try again.",
                    variant: "destructive",
                });
            }
        } catch (error){
            toast({
                title: "Error",
                description:
                    "Something went wrong. Please try again later.",
                variant: "destructive",
            });
        } finally {
            setIsSubmitting(false);
        }

        
    };

    return (
        <section id="contact"
            className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Get In <span className="text-primary"> Touch</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Have a burning questions or want to collaborate? Feel free to reach out! <br />
                    I'm always open to discussing new opportunities. 
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold mb-6"> Contact Information</h3>

                        <div className="space-y-6">
                            <div className="grid grid-cols-[auto_1fr] items-start">
                                <div className="p-3 rounded-full bg-primary/10 hover:scale-110 active:scale-95">
                                    <a href="mailto:jalvarr@outlook.com">
                                        <Mail className="h-6 w-6 text-primary" />
                                    </a>
                                </div>
                                <div className="pr-12">
                                    <h4 className="font-bold"> Email</h4>
                                    <a href="mailto:jalvarr@outlook.com"
                                        className="text-muted-foreground hover:text-primary transition-colors">
                                        jalvarr@outlook.com
                                    </a>
                                </div>
                            </div>
                            <div className="grid grid-cols-[auto_1fr] items-start">
                                <div className="p-3 rounded-full bg-primary/10 hover:scale-110 active:scale-95">
                                    <a href="tel:+19144268262">
                                        <Phone className="h-6 w-6 text-primary" />
                                    </a>
                                </div>
                                <div className="pr-12">
                                    <h4 className="font-bold"> Phone</h4>
                                    <a href="tel:+19144268262"
                                        className="text-muted-foreground hover:text-primary transition-colors">
                                        +1 (914) 426-8262
                                    </a>
                                </div>
                            </div>
                            <div className="grid grid-cols-[auto_1fr] items-start">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <MapPin className="h-6 w-6 text-primary" />
                                </div>
                                <div className="pr-12">
                                    <h4 className="font-bold"> Location</h4>
                                    <p  className="text-muted-foreground ">
                                        Los Angeles, CA
                                    </p>
                                </div>
                            </div>
                        </div>
                       
                       <div className="pt-8">
                            <h4 className="font-medium mb-4"> Connect with Me</h4>
                            <div className="flex space-x-4 justify-center">
                                <a href="https://linkedin.com/in/jalvarr/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-hidden="true"
                                    aria-label="Link to my LinkedIn Profile"
                                    className="hover:text-primary active:scale-95">
                                    <LinkedIn/>
                                </a>
                                <a href="https://instagram.com/naulari"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-hidden="true"
                                    aria-label="Link to my Instagram Profile"
                                    className="hover:text-primary active:scale-95">
                                    <Instagram/>
                                </a>
                            </div>
                       </div>
                    </div>
                
                    <div className="bg-card p-8 rounded-lg shadow-xs">
                        <h3 className="text-2xl font-semibold mb-6"> Send a Message</h3>
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="name"
                                    className="block text-sm font-medium mb-2"> Your Name</label>
                                <input id="name" 
                                    name="name"
                                    required 
                                    type="text" 
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                                    placeholder="Juan Alvarracin"/>
                            </div>
                            <div>
                                <label htmlFor="email"
                                    className="block text-sm font-medium mb-2"> Your Email</label>
                                <input id="email"
                                    name="email" 
                                    required 
                                    type="email" 
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                                    placeholder="jalvarr@outlook.com"/>
                            </div>
                            <div>
                                <label htmlFor="message"
                                    className="block text-sm font-medium mb-2"> Your Message</label>
                                <textarea id="message" 
                                    name="message"
                                    required
                                    rows={3} 
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                                    placeholder="Hello, I'd like to talk about..."/>
                            </div>
                            <button type="submit" 
                                disabled={isSubmitting}
                                className={cn("cosmic-button w-full flex items-center justify-center gap-2",
                                    
                                )}>
                                {isSubmitting ? ("Sending...")
                                :( <>
                                    Send Message <Send size={16}/>
                                </>)}
                               
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}