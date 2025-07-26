import AnimatedSection from "@/components/AnimatedSection";
import { ModeToggle } from "@/components/theme-switcher";
import Projects from "./Projects";
import Experience from "./Experience";
import Contact from "./Contact";
import ScrollSidebar from "./ScrollSidebar";

export default function Home() {
  return (
    <div className="min-h-screen flex">
      <div className="flex-1"> 
        <main className="min-h-screen flex flex-col items-center">
          <div className="flex-1 flex flex-col gap-20 max-w-5xl p-5">
            <main className="flex-1 flex flex-col">
              <ScrollSidebar/>
              <section id='me' className="min-h-screen flex items-center justify-center px-8">
                <AnimatedSection>
                  <h1 className="text-4xl font-bold">Hi, I&apos;m Ian 👋</h1>
                  <p className="mt-2 text-muted-foreground">Software Engineer | React | TypeScript</p>
                </AnimatedSection>
              </section>

              <section id="experience" className="min-h-screen flex items-center px-8">
                <Experience />
              </section>

              <section id="projects" className="min-h-screen flex items-center px-8">
                <Projects />
              </section>

              <section id="contact" className="min-h-screen flex items-center justify-center px-8">
                <Contact />
              </section>
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
