'use client'
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

interface ExperienceItem {
  role: string,
  company: string,
  description: string,
  duration: string,
}

export default function Experience() {
    const [experience, setExperience] = useState<ExperienceItem[]>([]);

    const getExperience = () => {
        const tempExperience: ExperienceItem[] = [
          {
            role: 'Full-stack Software Developer',
            company: 'Blazzi',
            description: 'Built Apps in Typescript + ReactNative',
            duration: 'July 2025 - Present',
          },
          {
            role: 'Web Developer',
            company: 'BYU Center for Teaching and Learning',
            description: 'Built Apps using vue.js + Laravel + Livewire',
            duration: 'August 2024 - Present',
          },
          {
            role: 'Quality Assurance Analyst',
            company: 'BYU Center for Teaching and Learning',
            description: 'Tested Apps to ensure quality',
            duration: 'May 2024 - August 2024',
          },
        ]
    
        setExperience(tempExperience);
      }
    
      useEffect(() => {
        getExperience();
      }, [])

    return (
        <AnimatedSection delay={0.4}>
            <h2 className="text-2xl font-semibold mb-4">Experience & Education</h2>
            <div className="mb-4">
                <h3 className="font-medium">Brigham Young University</h3>
                <p className="text-sm text-muted-foreground"><span className="italic">Expected Graduation:</span> April 2026</p>
                <p className="text-sm">Minor in Mathematics</p>
            </div>
            <ul className="space-y-4">
                {experience.map((item, i) => (
                    <li key={i}>
                    <h3 className="font-medium">{item.role} @ {item.company}</h3>
                    <p className="text-sm text-muted-foreground">{item.duration}</p>
                    <p className="text-sm">{item.description}</p>
                    </li>
                ))}
            </ul>
            <Button className="mt-6" asChild>
                <a href="https://linkedin.com/in/ianjosephrobertson" target="_blank">View my LinkedIn</a>
            </Button>
        </AnimatedSection>
    )
}