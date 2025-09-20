import React, { useRef, useEffect, useState } from 'react';

function Skills() {
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

  const groupedSkills = [
    {
      group: 'Languages',
      items: [
        { name: 'Java', icon: '☕' },
        { name: 'JavaScript', icon: '🟨' },
        { name: 'Python', icon: '🐍' },
        { name: 'PHP', icon: '🐘' },
        { name: 'HTML5', icon: '🌐' },
        { name: 'CSS3', icon: '🎨' },
        { name: 'PL/SQL', icon: '🗄️' },
        { name: 'SQL', icon: '🗄️' },
        { name: 'C', icon: '💻' },
      ],
    },
    {
      group: 'Frameworks & Tools',
      items: [
        { name: 'Spring Boot', icon: '🍃' },
        { name: 'Flutter', icon: '📱' },
        { name: 'React', icon: '⚛️' },
        { name: 'Angular', icon: '🅰️' },
        { name: 'JavaFX', icon: '🎨' },
      ],
    },
    {
      group: 'Databases',
      items: [
        { name: 'MySQL', icon: '🗃️' },
        { name: 'PostgreSQL', icon: '🐘' },
        { name: 'Firebase', icon: '🔥' },
      ],
    },
    {
      group: 'Development Tools',
      items: [
        { name: 'Git', icon: '🔧' },
        { name: 'GitHub', icon: '🐙' },
        { name: 'VS Code', icon: '📝' },
        { name: 'Postman', icon: '📮' },
        { name: 'StarUML', icon: '📐' },
        { name: 'Android Studio', icon: '🤖' },
      ],
    },
    {
      group: 'Analytics & Design',
      items: [
        { name: 'Power BI', icon: '📊' },
        { name: 'Figma', icon: '🎨' },
      ],
    },
    {
      group: 'Operating Systems',
      items: [
        { name: 'Windows', icon: '🪟' },
        { name: 'Linux', icon: '🐧' },
      ],
    },
  ];

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative w-full px-4 py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-neutral-900"
    >
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-10 w-72 h-72 bg-slate-700/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-gray-700/20 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className={`relative z-10 max-w-6xl mx-auto transition-opacity duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-20 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent break-words leading-tight px-2">
          Skills & Technologies
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {groupedSkills.map((group, idx) => (
            <div
              key={group.group}
              className={`bg-black/20 backdrop-blur-sm p-8 rounded-2xl border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300
                ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                transition-opacity duration-1000`}
              style={{ transitionDelay: `${0.2 + idx * 0.1}s` }}
            >
              <h3 className="text-xl font-semibold text-cyan-400 mb-6">{group.group}</h3>
              <ul className="flex flex-wrap gap-4">
                {group.items.map((skill) => (
                  <li
                    key={skill.name}
                    className="flex items-center gap-2 text-gray-200 bg-gray-800/50 px-4 py-2 rounded-full text-base font-medium shadow hover:bg-cyan-900/40 transition-colors duration-200"
                  >
                    <span className="text-2xl">{skill.icon}</span>
                    {skill.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;