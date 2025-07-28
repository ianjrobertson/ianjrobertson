'use client'

import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Contact() {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText('ianjr@byu.edu');
            setCopied(true);
            setTimeout(() => setCopied(false), 1500);
        } catch (err) {
            console.error('Failed to copy: ', err);
        }
    };

    return (
        <AnimatedSection delay={0.6}>
            <h2 className="text-2xl font-semibold mb-2">Get In Touch</h2>
            <p className="mb-4 text-muted-foreground">Interested in working together? Let&apos;s chat.</p>
            <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild onClick={handleCopy} className="cursor-pointer">
                    {copied ? <p>Copied!</p> : <p>ianjr@byu.edu</p>}
                </Button>
                <Button asChild>
                    <a href="https://linkedin.com/in/ianjosephrobertson" target="_blank">LinkedIn</a>
                </Button>
                <Button variant="outline" asChild>
                    <a href="/Public-Robertson-Ian-Resume-7-25.pdf" download>Download Resume</a>
                </Button>
            </div>
        </AnimatedSection>
    )
}