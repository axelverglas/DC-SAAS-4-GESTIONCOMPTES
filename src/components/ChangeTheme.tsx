import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { BsSun, BsMoon } from 'react-icons/bs';

export default function ChangeTheme() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;
  return (
    <div className="flex items-center">
      {theme === 'dark' ? (
        <button onClick={() => setTheme('light')}>
          <BsSun className="z-20 cursor-pointer pr-2 text-3xl hover:text-sky-500 md:pr-0 md:text-2xl" />
        </button>
      ) : (
        <button onClick={() => setTheme('dark')}>
          <BsMoon className="z-20 cursor-pointer pr-2 text-3xl hover:text-sky-500 md:pr-0 md:text-2xl" />
        </button>
      )}
    </div>
  );
}
