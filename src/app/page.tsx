'use client'
import AnimatedSection from "@/components/AnimatedSection";
import { ModeToggle } from "@/components/theme-switcher";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { useEffect, useState } from "react";

interface Project {
  title: string,
  description: string,
  github: string
}

export default function Home() {

  const [projects, setProjects] = useState<Project[]>([])

  const getProjects = async () => {
    const tempProjects = [
      {
        title: "Reading Tracker",
        description: "Next.js app for tracking reading hours, uses supabase backend",
        github: 'https://github.com/ianjrobertson/reading-tracker'
      },
      {
        title: "Hangspot",
        description: "Hammock spot sharing app built with react.js MERN stack",
        github: 'https://github.com/ianjrobertson/startup'
      },
      {
        title: "RepRoute",
        description: "D2D sales efficency app built for Sandbox hackathon. Resulted in acceptance to Sandbox entrepeneurship program",
        github: 'https://github.com/ianjrobertson/hackathon'
      },
    ]

    setProjects(tempProjects as Project[]);
  }

  useEffect(() => {
    getProjects();
  }, [])

  return (
    <div className="min-h-screen flex">
      <div className="flex-1"> 
        <main className="min-h-screen flex flex-col items-center">
          <div className="flex-1 w-full flex flex-col gap-20 items-center">

          </div>
          <div className="flex-1 flex flex-col gap-20 max-w-5xl p-5">
            <main className="flex-1 flex flex-col gap-6 px-4">
                <h2 className="font-medium text-xl mb-4">Ian Robertson</h2>
                <p>Aspiring Software Engineer</p>

                <AnimatedSection>
                    <h1 className="text-4xl font-bold">Hi, I'm Ian 👋</h1>
                    <p className="mt-2 text-muted-foreground">Full-stack developer | React Native | TypeScript</p>
                    <Button asChild>
                      <a href="#projects">See my work</a>
                    </Button>
                </AnimatedSection>

                <AnimatedSection delay={0.2}>
                  <h2 className="text-2xl font-semibold mb-4">Featured Projects</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {projects.map((proj, i) => (
                      <Card key={i}>
                        <CardHeader>
                          <h3 className="text-lg font-bold">{proj.title}</h3>
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
            </main>
          </div>

          <footer className="w-full flex items-center justify-center mx-auto text-center text-xs gap-8 py-3">
            <p>
              Created by{" "}
              <a
                href="https://github.com/ianjrobertson"
                target="_blank"
                className="font-bold hover:underline"
                rel="noreferrer"
              >
                Ian Robertson
              </a>
            </p>
            <ModeToggle></ModeToggle>
          </footer>
        </main>
      </div>
    </div>
  );
}
