import React, { useRef, useEffect, useState } from 'react';

function Parcours() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="parcours"
      ref={sectionRef}
      className="relative w-full px-4 py-24 bg-gradient-to-br from-slate-900 via-gray-900 to-neutral-900"
    >
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-10 w-[28rem] h-[28rem] bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-[28rem] h-[28rem] bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className={`relative z-10 max-w-6xl mx-auto transition-opacity duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-20 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent break-words leading-tight px-2">
          My Journey
        </h2>
        
        <div className="grid md:grid-cols-2 gap-16">
          {/* Academic Background */}
          <div className={`bg-gradient-to-br from-cyan-900/40 via-slate-900/60 to-cyan-800/30 p-10 rounded-3xl border border-cyan-400/30 shadow-2xl hover:shadow-cyan-400/30 transition-all duration-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} transition-opacity duration-1000 delay-200`}>
            <h3 className="text-3xl font-semibold text-cyan-300 mb-8 flex items-center gap-2">
              <svg className="inline-block mr-2" width="28" height="28" fill="none" viewBox="0 0 24 24"><path fill="#22d3ee" d="M12 2L2 7l10 5 10-5-10-5zm0 7.236L4.618 7 12 3.764 19.382 7 12 9.236z"/><path fill="#22d3ee" d="M2 17l10 5 10-5v-7l-10 5-10-5v7zm2-5.764l8 4 8-4v5.528l-8 4-8-4v-5.528z"/></svg>
              Academic Background
            </h3>
            <ul className="space-y-8 text-gray-200 text-lg">
              <li className="flex flex-col bg-cyan-800/30 border border-cyan-400/30 rounded-2xl p-6 shadow hover:shadow-cyan-400/20 transition">
                <span className="font-bold text-cyan-200 text-xl mb-1">2025 - 2027</span>
                <span className="font-semibold">Master’s in Information Systems and Knowledge Engineering (ISKE)</span>
                <span className="text-cyan-100">FSEG Nabeul (currently studying)</span>
              </li>
              <li className="flex flex-col bg-cyan-800/30 border border-cyan-400/30 rounded-2xl p-6 shadow hover:shadow-cyan-400/20 transition">
                <span className="font-bold text-cyan-200 text-xl mb-1">2022 - 2025</span>
                <span className="font-semibold">Bachelor’s degree in Information Technology</span>
                <span className="text-cyan-100">ISET Nabeul</span>
              </li>
              <li className="flex flex-col bg-cyan-800/30 border border-cyan-400/30 rounded-2xl p-6 shadow hover:shadow-cyan-400/20 transition">
                <span className="font-bold text-cyan-200 text-xl mb-1">2022</span>
                <span className="font-semibold">Baccalaureate in Computer Science</span>
                <span className="text-cyan-100">Takelsa High School</span>
              </li>
            </ul>
          </div>
          {/* Professional Experience */}
          <div className={`bg-gradient-to-br from-purple-900/40 via-slate-900/60 to-purple-800/30 p-10 rounded-3xl border border-purple-400/30 shadow-2xl hover:shadow-purple-400/30 transition-all duration-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} transition-opacity duration-1000 delay-400`}>
            <h3 className="text-3xl font-semibold text-purple-300 mb-8 flex items-center gap-2">
              <svg className="inline-block mr-2" width="28" height="28" fill="none" viewBox="0 0 24 24"><path fill="#a78bfa" d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z"/></svg>
              Professional Experience
            </h3>
            <div className="space-y-8">
              {/* Banque de Tunisie */}
              <div className="bg-purple-800/30 border border-purple-400/30 rounded-2xl p-6 shadow hover:shadow-purple-400/20 transition flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-purple-200 text-xl">Banque de Tunisie</span>
                  <span className="text-sm text-purple-100 font-medium">Tunis</span>
                </div>
                <span className="font-semibold text-purple-100">End-of-studies project internship (PFE)</span>
                <div className="flex items-center gap-2 mt-1">
                  <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path fill="#a78bfa" d="M7 10V7a5 5 0 1 1 10 0v3h1a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h1zm2-3a3 3 0 1 1 6 0v3H9V7z"/></svg>
                  <span className="text-purple-200 text-sm">February - June 2025</span>
                </div>
                <ul className="list-disc list-inside text-purple-100 mt-2 text-base space-y-1">
                  <li>Developed a Flutter mobile application for digitalizing client onboarding.</li>
                  <li>Integrated OCR and liveness detection using Google ML Kit.</li>
                  <li>Implemented a secure process compliant with banking data protection standards.</li>
                </ul>
              </div>
              {/* Bridges S.A. */}
              <div className="bg-purple-800/30 border border-purple-400/30 rounded-2xl p-6 shadow hover:shadow-purple-400/20 transition flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-purple-200 text-xl">Bridges S.A.</span>
                  <span className="text-sm text-purple-100 font-medium">Tunis</span>
                </div>
                <span className="font-semibold text-purple-100">Advanced internship</span>
                <div className="flex items-center gap-2 mt-1">
                  <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path fill="#a78bfa" d="M7 10V7a5 5 0 1 1 10 0v3h1a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h1zm2-3a3 3 0 1 1 6 0v3H9V7z"/></svg>
                  <span className="text-purple-200 text-sm">January - February 2024</span>
                </div>
                <ul className="list-disc list-inside text-purple-100 mt-2 text-base space-y-1">
                  <li>Developed a project for managing carton slips using the PyQt5 library.</li>
                </ul>
              </div>
              {/* Visteon */}
              <div className="bg-purple-800/30 border border-purple-400/30 rounded-2xl p-6 shadow hover:shadow-purple-400/20 transition flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-purple-200 text-xl">Visteon</span>
                  <span className="text-sm text-purple-100 font-medium">Bir El Bey</span>
                </div>
                <span className="font-semibold text-purple-100">Observation internship</span>
                <div className="flex items-center gap-2 mt-1">
                  <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path fill="#a78bfa" d="M7 10V7a5 5 0 1 1 10 0v3h1a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h1zm2-3a3 3 0 1 1 6 0v3H9V7z"/></svg>
                  <span className="text-purple-200 text-sm">January - February 2023</span>
                </div>
                <ul className="list-disc list-inside text-purple-100 mt-2 text-base space-y-1">
                  <li>Participated in observation tasks related to the company’s systems management.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Parcours;