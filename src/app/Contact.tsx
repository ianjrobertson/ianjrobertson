import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";

export default function Contact() {
    return (
        <AnimatedSection delay={0.6}>
            <h2 className="text-2xl font-semibold mb-2">Get In Touch</h2>
            <p className="mb-4 text-muted-foreground">Interested in working together? Let&apos;s chat.</p>
            <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild>
                    <a href="/contact">Contact Me</a>
                </Button>
                <Button variant="outline" asChild>
                    <a href="/Robertson-Ian-Resume-7-25.pdf" download>Download Resume</a>
                </Button>
            </div>
        </AnimatedSection>
    )
}