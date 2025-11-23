import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";

interface ExperienceItem {
  role: string;
  company: string;
  description?: string;
  duration: string;
}

export default function Experience() {
  const experience: ExperienceItem[] = [
    {
      role: "Incoming SWE",
      company: "Mastercard",
      duration: "August 2026",
    },
    {
      role: "Full-Stack Engineer",
      company: "Blazzi",
      duration: "July 2025 - Present",
    },
    {
      role: "Web Developer",
      company: "BYU Center for Teaching and Learning",
      duration: "August 2024 - August 2025",
    },
    {
      role: "Quality Assurance Analyst",
      company: "BYU Center for Teaching and Learning",
      duration: "May 2024 - August 2024",
    },
  ];

  return (
    <AnimatedSection delay={0.4}>
      <h2 className="text-2xl font-semibold mb-4">Experience</h2>
      <ul className="space-y-4">
        {experience.map((item, i) => (
          <li key={i}>
            <h3 className="font-medium">
              {item.role} @ {item.company}
            </h3>
            <p className="text-sm text-muted-foreground">{item.duration}</p>
            <p className="text-sm">{item.description}</p>
          </li>
        ))}
      </ul>
      <h2 className="text-2xl font-semibold my-4">Education</h2>
      <div className="mb-4">
        <h3 className="font-medium">Brigham Young University</h3>
        <p className="text-sm text-muted-foreground">
          <span className="italic">Expected Graduation:</span> April 2026
        </p>
        <p className="text-sm">
          Computer Science <span className="italic">(BS)</span> / Mathematics{" "}
          <span className="italic">(Minor)</span>
        </p>
      </div>
      <div className="flex flex-col sm:flex-row gap-4">
        <Button asChild>
          <a href="https://linkedin.com/in/ianjosephrobertson" target="_blank">
            LinkedIn
          </a>
        </Button>
        <Button variant="outline" asChild>
          <a href="/Public-Resume-Ian-Robertson-2025.pdf" download>
            Download Resume
          </a>
        </Button>
      </div>
    </AnimatedSection>
  );
}
