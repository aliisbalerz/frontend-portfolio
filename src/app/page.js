"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  // Sync state with user's system preference or html class on mount
  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark") || 
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    setDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      setDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    }
  };

  return (
    <div className="min-h-screen bg-white text-zinc-900 dark:bg-black dark:text-zinc-100 font-sans px-6 py-12 sm:py-20 transition-colors">
      <main className="max-w-xl mx-auto space-y-12">
        
        {/* Top Bar with Dark Mode Toggle */}
        <div className="flex justify-end">
          <button
            onClick={toggleDarkMode}
            className="px-3.5 py-1.5 text-xs font-medium rounded-full border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900 hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors flex items-center gap-2"
          >
            {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </button>
        </div>

        {/* Header / Intro with Photo */}
        <section className="flex flex-col-reverse sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight">Ali-Risha Isbala</h1>
            <p className="text-zinc-600 dark:text-zinc-400">
              Information Technology student building modern web and multiplatform apps.
            </p>
          </div>
          
          {/* Profile Photo */}
          <div className="shrink-0 w-28 h-28 rounded-full overflow-hidden border border-zinc-200 dark:border-zinc-800">
            <Image
              src="/ali.jpg" 
              alt="Profile Picture"
              width={200}
              height={200}
              className="w-full h-full object-cover object-[-2px_3px]" 
              priority
            />
          </div>
        </section>

        {/* About */}
        <section className="space-y-3">
          <h2 className="text-lg font-semibold">About</h2>
          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
            I enjoy building reliable backend systems, clean user interfaces, and mobile applications. Currently focused on modern multiplatform development and web technologies.
          </p>
        </section>

        {/* Projects */}
        <section className="space-y-4">
          <h2 className="text-lg font-semibold">Projects</h2>
          <div className="space-y-4">
            
            <a 
              href="https://github.com/aliisbalerz" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-950/50 space-y-2 hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors"
            >
              <h3 className="font-medium underline underline-offset-4">Student Quiz Platform &rarr;</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                A multiplatform app with a JVM desktop admin interface and an Android student app.
              </p>
            </a>

            <a 
              href="https://github.com/aliisbalerz" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-950/50 space-y-2 hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors"
            >
              <h3 className="font-medium underline underline-offset-4">Personal Portfolio &rarr;</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                A minimal portfolio built using Next.js, React, and Tailwind CSS.
              </p>
            </a>

          </div>
        </section>

        {/* Contact */}
        <section className="space-y-3 pt-4 border-t border-zinc-200 dark:border-zinc-800">
          <h2 className="text-lg font-semibold">Connect</h2>
          <div className="flex gap-4 text-sm text-zinc-600 dark:text-zinc-400">
            <a href="https://github.com/aliisbalerz" target="_blank" rel="noopener noreferrer" className="hover:underline">
              GitHub
            </a>
            <a href="https://www.facebook.com/alirisha03" target="_blank" rel="noopener noreferrer" className="hover:underline">
              Facebook
            </a>
          </div>
        </section>

      </main>
    </div>
  );
}