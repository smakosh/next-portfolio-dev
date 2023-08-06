'use client';
import { useTheme } from 'next-themes';
import Moon from '../../../../../components/ui/Icons/Moon';
import Sun from '../../../../../components/ui/Icons/Sun';

const ToggleTheme = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      className="text-left lg:text-center bg-none border-none cursor-pointer transition-all duration-300 focus:transition-all focus:duration-300"
      type="button"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <Sun className="text-black dark:text-white lg:dark:text-black min-[2170px]:dark:text-white" />
      ) : (
        <Moon className="text-black dark:text-white lg:dark:text-black min-[2170px]:dark:text-white" />
      )}
    </button>
  );
};

export default ToggleTheme;
