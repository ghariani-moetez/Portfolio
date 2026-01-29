import React, { useRef, useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Parcours from './components/Parcours';

function App() {
  // Fade-in on scroll for hero section
  const heroRef = useRef(null);
  const [heroVisible, setHeroVisible] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeroVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (heroRef.current) observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-neutral-900 text-white font-sans">
      <Navbar />

      {/* Hero Section with animated background */}
      <main
        ref={heroRef}
        className="relative max-w-4xl mx-auto px-6 sm:px-12 py-20 sm:py-28 text-center"
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-slate-700/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gray-700/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className={`relative z-10 transition-opacity duration-1000 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-300 to-gray-400 bg-clip-text text-transparent mb-6 leading-tight break-words">
            Hi, I'm Moetez Ghariani
          </h1>

          <p className="text-lg sm:text-2xl text-gray-300 mb-4 transition-opacity duration-1000 delay-200">
            Junior Information Systems Developer
          </p>
          <p className="text-base sm:text-lg text-gray-400 mb-8 sm:mb-10 transition-opacity duration-1000 delay-400">
            Passionate about creating innovative solutions with clean architecture and great user experience.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center transition-opacity duration-1000 delay-600">
            <a
              href="#projects"
              className="inline-block bg-gradient-to-r from-slate-700 to-gray-700 hover:from-slate-600 hover:to-gray-600 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow-lg hover:shadow-slate-500/25 transition-all duration-300 transform hover:scale-105 w-full sm:w-auto text-base sm:text-lg"
            >
              Explore My Work ↓
            </a>
            <a
              href="#contact"
              className="inline-block bg-gradient-to-r from-slate-700 to-gray-700 hover:from-slate-600 hover:to-gray-600 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow-lg hover:shadow-slate-500/25 transition-all duration-300 transform hover:scale-105 w-full sm:w-auto text-base sm:text-lg"
            >
              Contact Me
            </a>
               <a
  href="/cv_vf.pdf"
  download="Moetez_Ghariani_CV.pdf"
              className="inline-block bg-gradient-to-r from-slate-700 to-gray-700 hover:from-slate-600 hover:to-gray-600 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow-lg hover:shadow-slate-500/25 transition-all duration-300 transform hover:scale-105 w-full sm:w-auto text-base sm:text-lg"
    target="_blank"
  rel="noopener noreferrer"
>
  Download CV
</a>
          </div>

          {/* Social Buttons with only logos */}
          <div className="flex gap-4 justify-center items-center mt-6 transition-opacity duration-1000 delay-800">
            <a
              href="https://www.linkedin.com/in/ghariani-moetez-474b0a239/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white rounded-full shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-110 w-10 h-10 sm:w-12 sm:h-12"
              aria-label="LinkedIn"
            >
              <svg width="26" height="26" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.845-1.563 3.042 0 3.604 2.003 3.604 4.605v5.591z"/>
              </svg>
            </a>
            <a
              href="mailto:gharianimoetez72@gmail.com"
              className="flex items-center justify-center bg-gradient-to-r from-gray-600 to-gray-800 hover:from-gray-700 hover:to-gray-900 text-white rounded-full shadow-lg hover:shadow-gray-500/25 transition-all duration-300 transform hover:scale-110 w-10 h-10 sm:w-12 sm:h-12"
              aria-label="Email"
            >
              <svg width="26" height="26" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 13.065l-11.985-7.065v14c0 1.104.896 2 2 2h19.97c1.104 0 2-.896 2-2v-14l-11.985 7.065zm11.985-9.065c0-1.104-.896-2-2-2h-19.97c-1.104 0-2 .896-2 2v.217l12 7.083 11.97-7.083v-.217z"/>
              </svg>
            </a>
            <a
              href="https://github.com/ghariani-moetez"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center bg-gradient-to-r from-gray-800 to-black hover:from-gray-900 hover:to-gray-800 text-white rounded-full shadow-lg hover:shadow-gray-800/25 transition-all duration-300 transform hover:scale-110 w-10 h-10 sm:w-12 sm:h-12"
              aria-label="GitHub"
            >
              <svg width="26" height="26" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.729.084-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.371.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.216.694.825.576 4.765-1.589 8.199-6.085 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          </div>
        </div>
      </main>

      <About />
      <Skills />
      <Projects />
      <Parcours />
      <Contact />

      {/* Footer */}
      <footer className="text-center py-8 text-gray-400 text-sm bg-black/20">
        <div className="max-w-4xl mx-auto px-6">
          <p>&copy; {new Date().getFullYear()} Moetez Ghariani. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;