import { ModeToggle } from "@/components/theme-switcher";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col min-h-screen justify-between">
      {children}
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
    </div>
  );
}
