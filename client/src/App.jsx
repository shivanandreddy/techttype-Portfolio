import React, { useState } from 'react';

export default function TechTypePortfolio() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Integrate with EmailJS, Formspree, or backend endpoint here
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-amber-500 selection:text-slate-950">
      
      {/* 1. NAVIGATION BAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-2xl font-black tracking-tight text-white flex items-center gap-1">
            <span className="text-amber-500">tech</span>type<span className="text-amber-500">.in</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-300">
            <a href="#services" className="hover:text-amber-400 transition-colors">Services</a>
            <a href="#projects" className="hover:text-amber-400 transition-colors">Projects</a>
            <a href="#stack" className="hover:text-amber-400 transition-colors">Tech Stack</a>
            <a href="#contact" className="hover:text-amber-400 transition-colors">Contact</a>
          </div>
          <a
            href="#contact"
            className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold px-5 py-2.5 rounded-lg text-sm transition-all shadow-lg shadow-amber-500/20"
          >
            Get in Touch
          </a>
        </div>
      </nav>

      {/* 2. HERO SECTION */}
      <section className="pt-36 pb-20 px-6 max-w-7xl mx-auto text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="space-y-6 max-w-2xl">
          <div className="inline-block px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-amber-400 text-xs font-semibold tracking-wide">
            FULL-STACK SOFTWARE & WEB APPLICATIONS
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
            We Build Modern, Scalable <span className="text-amber-500">Digital Solutions.</span>
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed">
            At TechType, we architect high-performance web applications, custom enterprise platforms, and automated business tools using full-stack technologies.
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-2">
            <a
              href="#projects"
              className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-7 py-3.5 rounded-xl text-base transition-all shadow-lg shadow-amber-500/25"
            >
              Explore Our Work
            </a>
            <a
              href="#contact"
              className="bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 font-semibold px-7 py-3.5 rounded-xl text-base transition-all"
            >
              Start a Project
            </a>
          </div>
        </div>

        {/* Hero Card Visual */}
        <div className="w-full md:w-[480px] bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-2xl relative">
          <div className="flex items-center gap-2 mb-4 border-b border-slate-800 pb-4">
            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
            <span className="text-xs text-slate-500 ml-2 font-mono">techtype-architecture.json</span>
          </div>
          <pre className="text-xs text-amber-400/90 font-mono overflow-x-auto leading-relaxed">
{`{
  "agency": "TechType",
  "status": "Production Ready",
  "stack": ["PERN", "MERN"],
  "capabilities": [
    "Enterprise HMIS (MedEasy)",
    "Client-Side Automation Tools",
    "RESTful API Systems",
    "Client PDF & Automation"
  ]
}`}
          </pre>
        </div>
      </section>

      {/* 3. SERVICES SECTION */}
      <section id="services" className="py-20 border-t border-slate-900 bg-slate-950/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl font-bold text-white">Core Capabilities</h2>
            <p className="text-slate-400">Tailored full-stack development designed to power operations and scale businesses.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-900/60 border border-slate-800 p-8 rounded-2xl hover:border-amber-500/50 transition-all">
              <div className="w-12 h-12 bg-amber-500/10 text-amber-400 rounded-xl flex items-center justify-center font-bold text-xl mb-6">
                01
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Custom Web Applications</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Full-stack web applications built with React, Node.js, and Express, offering responsive layouts, dark themes, and optimized client performance.
              </p>
            </div>

            <div className="bg-slate-900/60 border border-slate-800 p-8 rounded-2xl hover:border-amber-500/50 transition-all">
              <div className="w-12 h-12 bg-amber-500/10 text-amber-400 rounded-xl flex items-center justify-center font-bold text-xl mb-6">
                02
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Enterprise Systems & Portals</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Robust backends with PostgreSQL and MongoDB databases, implementing secure user authentication (JWT/OAuth) and complex business workflows.
              </p>
            </div>

            <div className="bg-slate-900/60 border border-slate-800 p-8 rounded-2xl hover:border-amber-500/50 transition-all">
              <div className="w-12 h-12 bg-amber-500/10 text-amber-400 rounded-xl flex items-center justify-center font-bold text-xl mb-6">
                03
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Workflow Automation Tools</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Client-side document exporters, PDF generators, and automated utility applications that streamline daily business tasks without cloud hosting overhead.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FEATURED PROJECTS SECTION */}
      <section id="projects" className="py-20 max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <h2 className="text-3xl font-bold text-white">Featured Projects</h2>
          <p className="text-slate-400">Selected enterprise applications and web platforms architected by TechType.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Project 1: MedEasy */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-slate-700 transition-all flex flex-col justify-between p-8">
            <div>
              <span className="text-xs font-semibold text-amber-400 uppercase tracking-widest">Enterprise Software</span>
              <h3 className="text-2xl font-bold text-white mt-2 mb-4">MedEasy (EzoMed)</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                A Hospital Management Information System (HMIS) built with the PERN stack. Manages outpatient/inpatient workflows, central ENUM schemas, doctors, and secure role-based access control.
              </p>
            </div>
            <div>
              <div className="flex flex-wrap gap-2 mb-6">
                {['PostgreSQL', 'Express', 'React', 'Node.js', 'Tailwind CSS'].map((tech) => (
                  <span key={tech} className="bg-slate-800 text-slate-300 text-xs px-3 py-1 rounded-full border border-slate-700">
                    {tech}
                  </span>
                ))}
              </div>
              <span className="text-xs text-slate-500 font-mono">Backend deployed on Render</span>
            </div>
          </div>

          {/* Project 2: ezohr */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-slate-700 transition-all flex flex-col justify-between p-8">
            <div>
              <span className="text-xs font-semibold text-amber-400 uppercase tracking-widest"> Centralized System Monitoring Tool</span>
              <h3 className="text-2xl font-bold text-white mt-2 mb-4">Sys Mon</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6"> SysMon is a system monitoring platform that provides real-time insights into CPU, memory, disk, network, and server health, enabling administrators to detect issues, manage alerts, and maintain reliable system performance.
              </p>
            </div>
            <div>
              <div className="flex flex-wrap gap-2 mb-6">
                {['React', 'Node.js', 'PostgreSQL', 'Google OAuth', 'Vercel'].map((tech) => (
                  <span key={tech} className="bg-slate-800 text-slate-300 text-xs px-3 py-1 rounded-full border border-slate-700">
                    {tech}
                  </span>
                ))}
              </div>
              <span className="text-xs text-slate-500 font-mono">Frontend deployed on Vercel</span>
            </div>
          </div>

        </div>
      </section>

      {/* 5. TECH STACK SECTION */}
      <section id="stack" className="py-20 bg-slate-950/50 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-12">Technologies & Frameworks</h2>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {[
              'JavaScript (ES6+)', 'React.js', 'Node.js', 'Express.js', 
              'PostgreSQL', 'MongoDB', 'Mongoose', 'Tailwind CSS', 
              'JWT & OAuth', 'Git & GitHub', 'Render', 'Vercel', 'PM2'
            ].map((skill) => (
              <span 
                key={skill} 
                className="bg-slate-900 border border-slate-800 text-slate-200 font-medium px-5 py-2.5 rounded-xl text-sm hover:border-amber-500/40 hover:text-amber-400 transition-all"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CONTACT SECTION */}
      <section id="contact" className="py-20 max-w-4xl mx-auto px-6">
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 md:p-12 shadow-2xl">
          <div className="text-center max-w-lg mx-auto mb-10 space-y-3">
            <h2 className="text-3xl font-bold text-white">Let’s Build Something Great</h2>
            <p className="text-slate-400 text-sm">Have a project in mind or need custom web application development? Send us a message.</p>
          </div>

          {submitted ? (
            <div className="bg-amber-500/10 border border-amber-500/30 text-amber-400 text-center p-6 rounded-2xl">
              <h3 className="font-bold text-lg mb-1">Thank You!</h3>
              <p className="text-sm">Your message has been received. We will get back to you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your Name"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-slate-100 placeholder-slate-600 focus:outline-none focus:border-amber-500 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your@email.com"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-slate-100 placeholder-slate-600 focus:outline-none focus:border-amber-500 text-sm"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Project Details</label>
                <textarea
                  rows="4"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Describe your web application or business requirements..."
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-slate-100 placeholder-slate-600 focus:outline-none focus:border-amber-500 text-sm"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold py-4 rounded-xl text-base transition-all shadow-lg shadow-amber-500/20"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </section>

      {/* 7. FOOTER */}
      <footer className="border-t border-slate-900 py-8 text-center text-slate-500 text-sm">
        <p>© {new Date().getFullYear()} TechType (techtype.in). All rights reserved.</p>
      </footer>

    </div>
  );
}