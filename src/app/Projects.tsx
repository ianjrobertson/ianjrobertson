'use client'
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { useEffect, useState } from "react";

interface Project {
  title: string,
  description: string,
  github: string,
  link: string
}

export default function Projects() {
    const [projects, setProjects] = useState<Project[]>([]);

    const getProjects = async () => {
        const tempProjects = [
        {
            title: "Reading Tracker",
            description: "Next.js app for tracking reading hours, uses supabase backend",
            github: 'https://github.com/ianjrobertson/reading-tracker',
            link: 'https://read.ianjrobertson.click/'
        },
        {
            title: "Hangspot",
            description: "Hammock spot sharing app built with react.js MERN stack and Google Maps API",
            github: 'https://github.com/ianjrobertson/startup',
            link: 'https://startup.ianjrobertson.click/'
        },
        {
            title: "RepRoute",
            description: "D2D sales efficency app built for Sandbox hackathon. Resulted in acceptance to Sandbox entrepeneurship program",
            github: 'https://github.com/ianjrobertson/hackathon',
            link: 'https://reproute.ianjrobertson.click/'
        },
        ]

        setProjects(tempProjects as Project[]);
    }

    useEffect(() => {
        getProjects();
    }, [])

    return (
        <AnimatedSection delay={0.2}>
            <h2 className="text-2xl font-semibold mb-4">Featured Projects</h2>
            <div className="grid md:grid-cols-2 gap-6">
                {projects.map((proj, i) => (
                <Card key={i}>
                    <CardHeader>
                        <Button variant='link' asChild className="justify-start!">
                            <a href={proj.link}><h3 className="text-lg font-bold">{proj.title}</h3></a>
                        </Button>
                    </CardHeader>
                    <CardContent>{proj.description}</CardContent>
                    <CardFooter>
                    <Button variant="link" asChild>
                        <a href={proj.github} target="_blank">View on GitHub</a>
                    </Button>
                    </CardFooter>
                </Card>
                ))}
            </div>
            <Button className="mt-6" asChild>
                <a href="https://github.com/ianjrobertson" target="_blank">Visit my GitHub</a>
            </Button>
        </AnimatedSection>
    )
}