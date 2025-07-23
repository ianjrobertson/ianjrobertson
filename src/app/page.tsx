import { ModeToggle } from "@/components/theme-switcher";

export default function Home() {
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
