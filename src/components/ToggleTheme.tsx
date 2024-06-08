import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function ToggleTheme({ className = '' }) {
  const systemPreference = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme === 'dark' : systemPreference;
  });
  const pageClasses = document.documentElement.classList;

  useEffect(() => {
    // Atualiza o localStorage quando o tema for alterado
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
    // Atualiza as classes no JSX
    darkMode ? pageClasses.add('dark') : pageClasses.remove('dark');
  }, [darkMode, pageClasses]);

  const toggle = () => {
    setDarkMode(!darkMode);
  }

  return (
    <div className={className}>
      <Moon 
        className="size-7 md:size-6 text-light block dark:hidden cursor-pointer"
        onClick={toggle}
      />
      <Sun 
        className="size-7 md:size-6 text-light hidden dark:block cursor-pointer"
        onClick={toggle}
      />
    </div>
  )
}
