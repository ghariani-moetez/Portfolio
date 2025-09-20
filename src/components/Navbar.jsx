import React, { useState } from 'react';

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Journey', id: 'parcours' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <nav className="bg-gradient-to-br from-slate-900 via-gray-900 to-neutral-900/80 backdrop-blur-md text-white px-4 sm:px-6 py-4 sticky top-0 z-50 border-b border-cyan-500/20">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent hover:scale-110 transition-transform duration-300">
          Moetez Ghariani
        </h1>
        {/* Hamburger for mobile */}
        <button
          className="md:hidden flex items-center px-3 py-2 rounded text-cyan-400 hover:text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
            )}
          </svg>
        </button>
        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-4 lg:space-x-8 items-center">
          {navLinks.map(link => (
            <li key={link.id}>
              <button
                onClick={() => scrollToSection(link.id)}
                className="relative hover:text-cyan-400 transition-all duration-300 px-3 py-2 rounded-lg hover:bg-white/10 hover:shadow-lg hover:shadow-cyan-400/20 group active:scale-90"
              >
                <span className="relative z-10">{link.label}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="ml-2 flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white shadow-lg transition-all duration-300 hover:scale-110 active:scale-90"
              aria-label="Back to top"
              title="Back to top"
            >
              <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M5 15l7-7 7 7" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </li>
        </ul>
        {/* Mobile menu */}
        {menuOpen && (
          <ul className="absolute top-full left-0 w-full bg-gradient-to-br from-slate-900 via-gray-900 to-neutral-900/95 border-b border-cyan-500/20 flex flex-col items-center py-4 md:hidden z-50">
            {navLinks.map(link => (
              <li key={link.id} className="w-full">
                <button
                  onClick={() => {
                    scrollToSection(link.id);
                    setMenuOpen(false);
                  }}
                  className="w-full text-left px-6 py-3 text-lg hover:text-cyan-400 hover:bg-white/10 transition-all duration-300 active:scale-95"
                >
                  {link.label}
                </button>
              </li>
            ))}
            <li className="w-full flex justify-center mt-2">
              <button
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  setMenuOpen(false);
                }}
                className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white shadow-lg transition-all duration-300 hover:scale-110 active:scale-90"
                aria-label="Back to top"
                title="Back to top"
              >
                <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M5 15l7-7 7 7" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}

export default Navbar;