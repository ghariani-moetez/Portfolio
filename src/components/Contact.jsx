import React, { useState, useRef, useEffect } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  // Fade-in on scroll
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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert('Failed to send message. Please try again later.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative w-full px-4 py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-neutral-900"
    >
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className={`relative z-10 max-w-4xl mx-auto transition-opacity duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-20 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent break-words leading-tight px-2">
          Get In Touch
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
           <div className={`bg-black/20 backdrop-blur-sm p-8 rounded-2xl border border-cyan-500/20 transition-all duration-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} transition-opacity duration-1000 delay-200`}>
            <h3 className="text-2xl font-semibold text-cyan-400 mb-6">Let's Connect</h3>
            <p className="text-gray-300 mb-8 leading-relaxed">
              I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology and development.
            </p>

            <div className="space-y-4">
              <div className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                <span className="text-cyan-400 mr-4">📧</span>
                <span>gharianimoetez72@gmail.com</span>
              </div>
              <div className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                <span className="text-cyan-400 mr-4">📞</span>
                <span>+216 25 032 639</span>
              </div>
              <div className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                <span className="text-cyan-400 mr-4">📍</span>
                <span>Takelsa, Nabeul, Tunisie</span>
              </div>
              <div className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                <span className="text-cyan-400 mr-4">💼</span>
                <span>LinkedIn: /in/moetez-ghariani</span>
              </div>
              <div className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                <span className="text-cyan-400 mr-4">🐙</span>
                <span>GitHub: /ghariani-moetez</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className={`bg-black/20 backdrop-blur-sm p-8 rounded-2xl border border-purple-500/20 transition-all duration-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} transition-opacity duration-1000 delay-400`}
          >
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors duration-300"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors duration-300"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors duration-300 resize-none"
                  placeholder="Tell me about your project or just say hello!"
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 disabled:opacity-70 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 disabled:transform-none disabled:shadow-none flex items-center justify-center"
              >
                {isLoading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  'Send Message 🚀'
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;