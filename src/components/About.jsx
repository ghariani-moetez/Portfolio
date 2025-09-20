import React, { useRef, useEffect, useState } from 'react';

function About() {
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
      id="about"
      ref={sectionRef}
      className="relative w-full px-4 py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-neutral-900"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-64 h-64 bg-slate-700/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-gray-700/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className={`relative z-10 max-w-6xl mx-auto transition-opacity duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-20 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent break-words leading-tight px-2">
          About Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className={`bg-black/20 backdrop-blur-sm p-8 rounded-2xl border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/20 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} transition-opacity duration-1000 delay-200`}>
            <h3 className="text-2xl font-semibold text-cyan-400 mb-6 flex items-center">
              <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3 animate-pulse"></span>
              Background
            </h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              I am a junior developer, recently graduated in Information Technology and currently pursuing a master’s degree at FSEG Nabeul in Information Systems and Knowledge Engineering (ISKE).
            </p>
            <p className="text-gray-300 mb-4 leading-relaxed">
              My passion lies in transforming complex requirements into clean, efficient code that delivers real value to users.
            </p>
            <p className="text-gray-300 leading-relaxed">
              <span className="text-cyan-400 font-semibold">Always learning:</span> I'm constantly exploring new technologies, frameworks, and best practices to grow as a developer and deliver innovative solutions.
            </p>
          </div>

          <div className={`bg-black/20 backdrop-blur-sm p-8 rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} transition-opacity duration-1000 delay-400`}>
            <h3 className="text-2xl font-semibold text-purple-400 mb-6 flex items-center">
              <span className="w-2 h-2 bg-purple-400 rounded-full mr-3 animate-pulse"></span>
              What I Do
            </h3>
            <ul className="text-gray-300 space-y-3">
              <li className="flex items-center hover:text-cyan-400 transition-colors duration-300">
                <span className="text-cyan-400 mr-3">▶</span>
                Full-stack web development 
              </li>
              <li className="flex items-center hover:text-cyan-400 transition-colors duration-300">
                <span className="text-cyan-400 mr-3">▶</span>
                Mobile app development 
              </li>
              <li className="flex items-center hover:text-cyan-400 transition-colors duration-300">
                <span className="text-cyan-400 mr-3">▶</span>
                REST API design and implementation
              </li>
              <li className="flex items-center hover:text-cyan-400 transition-colors duration-300">
                <span className="text-cyan-400 mr-3">▶</span>
                Database design 
              </li>
              <li className="flex items-center hover:text-cyan-400 transition-colors duration-300">
                <span className="text-cyan-400 mr-3">▶</span>
                UI/UX design and implementation
              </li>
            </ul>
          </div>
        </div>

        {/* Growth Mindset */}
        <div className={`mt-12 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm p-8 rounded-2xl border border-gradient-to-r from-cyan-500/20 to-purple-500/20 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} transition-opacity duration-1000 delay-700`}>
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text mb-4">
              Growth Mindset
            </h3>
            <p className="text-gray-300 max-w-4xl mx-auto leading-relaxed">
              As a junior developer, I embrace every challenge as an opportunity to learn and grow. I'm actively seeking mentorship, 
              contributing to open-source projects, and staying updated with the latest industry trends. My goal is to continuously 
              upgrade my skills and become a well-rounded developer who can tackle complex problems with innovative solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;