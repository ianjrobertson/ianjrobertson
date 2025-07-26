'use client'

import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";

export default function Contact() {

    const sendEmail = async () => {
        const response = await fetch('/api/contact', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        })

        if (!response.ok) {
        throw new Error('Network response was not ok')
        }

        const result = await response.json()
        console.log(result);
    }

    return (
        <AnimatedSection delay={0.6}>
            <h2 className="text-2xl font-semibold mb-2">Get In Touch</h2>
            <p className="mb-4 text-muted-foreground">Interested in working together? Let&apos;s chat.</p>
            <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild onClick={sendEmail}>
                    <span>Contact Me</span>
                </Button>
                <Button variant="outline" asChild>
                    <a href="/Robertson-Ian-Resume-7-25.pdf" download>Download Resume</a>
                </Button>
            </div>
        </AnimatedSection>
    )
}