'use client';

import { useState } from 'react';

const links = [
  { label: 'Accueil', href: '/' },
  { label: 'À propos', href: '#about' },
  { label: 'Services', href: '#services' },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed inset-x-0 top-0 z-50">
      <div className="border-b border-stone-200/60 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 sm:px-12 lg:px-24">
          {/* Logo */}
          <a href="/" className="text-base font-bold tracking-tight text-stone-900">
            Payload
          </a>

          {/* Desktop links */}
          <ul className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-stone-500 transition-colors duration-200 hover:text-stone-900"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="relative flex h-8 w-8 items-center justify-center md:hidden"
            aria-label="Menu"
          >
            <span
              className={`absolute h-px w-5 bg-stone-900 transition-all duration-300 ${open ? 'rotate-45' : '-translate-y-1.5'}`}
            />
            <span
              className={`absolute h-px w-5 bg-stone-900 transition-all duration-300 ${open ? '-rotate-45' : 'translate-y-1.5'}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-b border-stone-200/60 bg-white/95 backdrop-blur-xl transition-all duration-300 md:hidden ${open ? 'max-h-64' : 'max-h-0 border-none'}`}
      >
        <ul className="flex flex-col gap-1 px-6 py-4">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-md px-3 py-2.5 text-sm text-stone-600 transition-colors duration-200 hover:bg-stone-50 hover:text-stone-900"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
