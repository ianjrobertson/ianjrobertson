import Link from "next/link";
import { ModeToggle } from "./theme-switcher";

export default function Footer() {
  return (
    <footer className="w-full flex items-center justify-center mx-auto text-center text-xs gap-8 py-3">
      <div className="flex space-x-4">
        <p>
        Created by{" "}
        <Link
          href="https://github.com/ianjrobertson"
          target="_blank"
          className="font-bold hover:underline"
          rel="noreferrer"
        >
          Ian Robertson
        </Link>
      </p>
      <Link className="font-bold hover:underline" href='/'>Home</Link>
      <Link className="font-bold hover:underline" href='/blog'>Blog</Link>
      </div>
      <ModeToggle></ModeToggle>
    </footer>
  );
}
