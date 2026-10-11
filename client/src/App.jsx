
import React, { useEffect, useState } from "react";

const services = [
  {
    number: "01",
    title: "Custom Web Applications",
    description:
      "Responsive web applications built around your business processes, from internal tools to customer-facing platforms.",
    deliverables: [
      "Requirements planning",
      "Responsive React UI",
      "API integration",
    ],
  },
  {
    number: "02",
    title: "Enterprise Platforms",
    description:
      "Role-based business systems with structured workflows, secure authentication, dashboards, and data management.",
    deliverables: [
      "Admin dashboards",
      "Role-based access",
      "Business workflows",
    ],
  },
  {
    number: "03",
    title: "API & Backend Development",
    description:
      "Maintainable server-side applications and REST APIs designed to connect user interfaces, databases, and services.",
    deliverables: [
      "REST API design",
      "Authentication",
      "Database integration",
    ],
  },
  {
    number: "04",
    title: "Workflow Automation",
    description:
      "Tools that reduce repetitive work, standardize business processes, and help teams handle everyday tasks more efficiently.",
    deliverables: [
      "Process analysis",
      "Document utilities",
      "Task automation",
    ],
  },
  {
    number: "05",
    title: "Dashboards & Reporting",
    description:
      "Clear operational dashboards that help teams review records, monitor activity, and understand important metrics.",
    deliverables: [
      "Data tables",
      "Filters and search",
      "Reports and summaries",
    ],
  },
  {
    number: "06",
    title: "Deployment & Maintenance",
    description:
      "Support for deployment setup, environment configuration, bug fixes, and iterative improvements after launch.",
    deliverables: [
      "Deployment configuration",
      "Environment setup",
      "Maintenance planning",
    ],
  },
];

const projects = [
  {
    name: "MedEasy",
    category: "Healthcare · HMIS",
    status: "In development",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1400&q=85",
    description:
      "A Hospital Management Information System concept for organizing outpatient and inpatient workflows, patient administration, doctors, and role-based access.",
    highlights: [
      "OPD and IPD workflow planning",
      "Hospital users and doctor administration",
      "PostgreSQL-backed PERN architecture",
    ],
    stack: [
      "PostgreSQL",
      "Express",
      "React",
      "Node.js",
      "Tailwind CSS",
    ],
    note:
      "Feature scope and implementation status should be updated as modules are completed.",
  },
  {
    name: "SysMon",
    category: "IT Operations · Monitoring",
    status: "Project showcase",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=85",
    description:
      "A system-monitoring platform concept for presenting operational health information such as CPU, memory, disk, network, and server status.",
    highlights: [
      "Monitoring-focused dashboard experience",
      "Health and alert-oriented presentation",
      "Administrator-focused information layout",
    ],
    stack: [
      "React",
      "Node.js",
      "PostgreSQL",
      "OAuth",
      "Vercel",
    ],
    note:
      "Connect live metrics and alerting claims only to features that are implemented and verified.",
  },
  {
    name: "HR Jobs",
    category: "HR Technology · Recruitment",
    status: "In development",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1400&q=85",
    description:
      "A recruitment-management extension for connecting HR teams, companies, candidates, and interview workflows within an HR platform.",
    highlights: [
      "Job and application workflows",
      "Candidate profiles and application tracking",
      "Interviewer feedback and recommendations",
    ],
    stack: [
      "React",
      "Node.js",
      "Express",
      "PostgreSQL",
      "JWT",
    ],
    note:
      "Present this as an active build until production readiness has been verified.",
  },
  {
    name: "Store Management",
    category: "Retail Technology · SaaS concept",
    status: "Concept / planning",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1400&q=85",
    description:
      "A planned store-management platform intended to adapt to different retail business types, with subscription-based access as a possible business model.",
    highlights: [
      "Store-specific workflows",
      "Inventory and billing direction",
      "Mobile-friendly interface planning",
    ],
    stack: [
      "React",
      "Node.js",
      "Express",
      "PostgreSQL",
    ],
    note:
      "Roadmap item: avoid describing planned features as already available.",
  },
];

const technologyGroups = [
  {
    title: "Frontend",
    items: [
      "JavaScript (ES6+)",
      "React",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
    ],
  },
  {
    title: "Backend",
    items: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "JWT Authentication",
      "OAuth",
    ],
  },
  {
    title: "Databases",
    items: [
      "PostgreSQL",
      "MongoDB",
      "Mongoose",
      "SQL data modeling",
    ],
  },
  {
    title: "Tools & Deployment",
    items: [
      "Git",
      "GitHub",
      "Render",
      "Vercel",
      "PM2",
      "Postman",
    ],
  },
];

const processSteps = [
  [
    "01",
    "Discover",
    "Understand the business goal, users, requirements, and constraints.",
  ],
  [
    "02",
    "Plan",
    "Define scope, workflows, data structure, milestones, and acceptance criteria.",
  ],
  [
    "03",
    "Design",
    "Shape the navigation, responsive layouts, forms, and key user journeys.",
  ],
  [
    "04",
    "Build",
    "Implement the frontend, backend, database, and integrations in manageable increments.",
  ],
  [
    "05",
    "Test",
    "Check validation, permissions, edge cases, responsiveness, and error handling.",
  ],
  [
    "06",
    "Deploy & improve",
    "Prepare the release, configure environments, and plan ongoing improvements.",
  ],
];

const faqs = [
  {
    question: "What types of projects can you work on?",
    answer:
      "The portfolio focuses on web applications, internal business systems, dashboards, REST APIs, and workflow tools. Final scope depends on requirements and available resources.",
  },
  {
    question: "Can an application be tailored to my business?",
    answer:
      "Yes. The process starts by understanding the business workflow and users, then defining a practical scope before implementation.",
  },
  {
    question: "How long will my project take?",
    answer:
      "Timelines depend on the number of workflows, integrations, data migration needs, testing, and deployment requirements. A realistic estimate can be provided after discovery.",
  },
  {
    question: "Do you provide hosting and maintenance?",
    answer:
      "Deployment assistance and maintenance can be discussed as part of the project scope. Hosting, third-party services, and ongoing support costs should be agreed separately.",
  },
  {
    question: "How do I start a project discussion?",
    answer:
      "Use the contact form to share your name, email, and a short description of the problem you want to solve. The form needs a configured API endpoint to deliver messages.",
  },
];

const navItems = [
  ["About", "#about"],
  ["Services", "#services"],
  ["Projects", "#projects"],
  ["Process", "#process"],
  ["Tech Stack", "#stack"],
  ["FAQ", "#faq"],
  ["Contact", "#contact"],
];

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      {eyebrow && (
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-amber-400">
          {eyebrow}
        </p>
      )}

      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>

      {description && (
        <p className="mt-4 leading-7 text-slate-400">
          {description}
        </p>
      )}
    </div>
  );
}

function TechPill({ children }) {
  return (
    <span className="tech-pill rounded-full border border-slate-700 bg-slate-800/80 px-3 py-1.5 text-xs font-medium text-slate-300">
      {children}
    </span>
  );
}

function CloseButton({ onClick, label = "Close modal" }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-700 bg-slate-950/80 text-2xl text-white transition hover:border-amber-400 hover:bg-amber-400 hover:text-slate-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber-400"
    >
      ×
    </button>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  const [selectedProject, setSelectedProject] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formState, setFormState] = useState({
    status: "idle",
    message: "",
  });

  // Reveal elements when they enter the viewport.
  useEffect(() => {
    const elements = document.querySelectorAll(
      ".animate-on-scroll, .stagger-children"
    );

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (
      reduceMotion ||
      !("IntersectionObserver" in window)
    ) {
      elements.forEach((element) =>
        element.classList.add("is-visible")
      );

      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  // Modal keyboard handling and background scroll locking.
  useEffect(() => {
    const modalOpen = Boolean(
      selectedProject || previewImage
    );

    if (!modalOpen) return;

    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
        setPreviewImage(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;

      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [selectedProject, previewImage]);

  // Contact form submission.
  const handleSubmit = async (event) => {
    event.preventDefault();

    setFormState({
      status: "sending",
      message: "",
    });

    const apiBase = (
      import.meta.env.VITE_API_URL || ""
    ).replace(/\/$/, "");

    if (!apiBase) {
      setFormState({
        status: "error",
        message:
          "The contact form is not connected yet. Configure VITE_API_URL and implement POST /api/contact on your backend before accepting inquiries.",
      });

      return;
    }

    try {
      const response = await fetch(
        `${apiBase}/api/contact`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const result = await response
        .json()
        .catch(() => ({}));

      if (!response.ok) {
        throw new Error(
          result.message ||
            "Message could not be sent. Please try again."
        );
      }

      setFormState({
        status: "success",
        message:
          result.message ||
          "Your message has been sent successfully.",
      });

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      setFormState({
        status: "error",
        message:
          error.message ||
          "Something went wrong. Please try again later.",
      });
    }
  };

  const updateField = (event) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const openProject = (project) => {
    setPreviewImage(null);
    setSelectedProject(project);
  };

  const openImage = (image) => {
    setPreviewImage(image);
  };

  const closeModals = () => {
    setSelectedProject(null);
    setPreviewImage(null);
  };

  return (
    <div className="portfolio-shell min-h-screen overflow-hidden bg-slate-950 font-sans text-slate-100 selection:bg-amber-400 selection:text-slate-950">
      <style>{`
        html {
          scroll-behavior: smooth;
          scroll-padding-top: 88px;
        }

        .portfolio-shell {
          --motion-ease: cubic-bezier(.2,.75,.25,1);
        }

        .hero-glow {
          animation: glow-drift 9s ease-in-out infinite alternate;
        }

        .hero-copy > * {
          animation: hero-enter .75s var(--motion-ease) both;
        }

        .hero-copy > *:nth-child(1) { animation-delay: .08s; }
        .hero-copy > *:nth-child(2) { animation-delay: .18s; }
        .hero-copy > *:nth-child(3) { animation-delay: .28s; }
        .hero-copy > *:nth-child(4) { animation-delay: .38s; }
        .hero-copy > *:nth-child(5) { animation-delay: .48s; }

        .float-card {
          animation: gentle-float 6s ease-in-out infinite;
          transition: border-color .3s ease, box-shadow .3s ease;
        }

        .float-card:hover {
          border-color: rgb(251 191 36 / .4);
          box-shadow: 0 24px 80px rgb(0 0 0 / .3);
        }

        .animate-on-scroll {
          opacity: 0;
          transform: translateY(26px);
          transition:
            opacity .7s var(--motion-ease),
            transform .7s var(--motion-ease);
        }

        .animate-on-scroll.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .stagger-children > * {
          opacity: 0;
          transform: translateY(18px);
          transition:
            opacity .55s var(--motion-ease),
            transform .55s var(--motion-ease),
            border-color .25s ease,
            box-shadow .25s ease;
        }

        .stagger-children.is-visible > * {
          opacity: 1;
          transform: translateY(0);
        }

        .stagger-children.is-visible > *:nth-child(1) {
          transition-delay: .04s;
        }

        .stagger-children.is-visible > *:nth-child(2) {
          transition-delay: .1s;
        }

        .stagger-children.is-visible > *:nth-child(3) {
          transition-delay: .16s;
        }

        .stagger-children.is-visible > *:nth-child(4) {
          transition-delay: .22s;
        }

        .stagger-children.is-visible > *:nth-child(5) {
          transition-delay: .28s;
        }

        .stagger-children.is-visible > *:nth-child(6) {
          transition-delay: .34s;
        }

        .project-card {
          transition:
            transform .3s ease,
            border-color .3s ease,
            box-shadow .3s ease;
        }

        .project-card:hover {
          transform: translateY(-6px);
          border-color: rgb(251 191 36 / .38);
          box-shadow: 0 18px 55px rgb(0 0 0 / .22);
        }

        .project-media {
          position: relative;
          overflow: hidden;
          isolation: isolate;
        }

        .project-media img {
          transition:
            transform .7s cubic-bezier(.2,.75,.25,1),
            filter .4s ease;
        }

        .project-media:hover img {
          transform: scale(1.07);
          filter: brightness(.68);
        }

        .project-media-overlay {
          opacity: 0;
          transition: opacity .3s ease;
        }

        .project-media:hover .project-media-overlay,
        .project-media:focus-within .project-media-overlay {
          opacity: 1;
        }

        .tech-pill {
          transition:
            transform .2s ease,
            border-color .2s ease,
            color .2s ease;
        }

        .tech-pill:hover {
          transform: translateY(-2px);
          border-color: rgb(251 191 36 / .6);
          color: rgb(253 230 138);
        }

        .nav-link {
          position: relative;
        }

        .nav-link::after {
          position: absolute;
          right: 0;
          bottom: -7px;
          left: 0;
          height: 2px;
          content: '';
          transform: scaleX(0);
          transform-origin: left;
          background: #fbbf24;
          transition: transform .25s ease;
        }

        .nav-link:hover::after,
        .nav-link:focus-visible::after {
          transform: scaleX(1);
        }

        .modal-backdrop {
          animation: backdrop-in .22s ease both;
          backdrop-filter: blur(10px);
        }

        .modal-panel {
          animation: modal-in .3s cubic-bezier(.2,.75,.25,1) both;
        }

        .lightbox-image {
          animation: image-in .3s ease both;
        }

        @keyframes hero-enter {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes gentle-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }

        @keyframes glow-drift {
          from {
            transform: translate(-8px, 0) scale(.95);
            opacity: .55;
          }
          to {
            transform: translate(18px, 12px) scale(1.08);
            opacity: 1;
          }
        }

        @keyframes backdrop-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes modal-in {
          from {
            opacity: 0;
            transform: translateY(18px) scale(.97);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes image-in {
          from {
            opacity: 0;
            transform: scale(.96);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @media (hover: none) {
          .project-media-overlay {
            opacity: 1;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          html {
            scroll-behavior: auto;
          }

          *,
          *::before,
          *::after {
            animation-duration: .01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: .01ms !important;
            scroll-behavior: auto !important;
          }

          .animate-on-scroll,
          .stagger-children > * {
            opacity: 1;
            transform: none;
          }
        }
      `}</style>

      <a
        href="#main"
        className="sr-only z-[100] rounded-lg bg-amber-400 px-4 py-2 font-bold text-slate-950 focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to content
      </a>

      {/* NAVIGATION */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-800/80 bg-slate-950/90 backdrop-blur-xl">
        <nav
          className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8"
          aria-label="Main navigation"
        >
          <a
            href="#home"
            className="text-2xl font-black tracking-tight text-white"
            aria-label="TechType home"
          >
            <span className="text-amber-400">tech</span>
            type
            <span className="text-amber-400">.in</span>
          </a>

          <div className="hidden items-center gap-6 lg:flex">
            {navItems.map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="nav-link text-sm font-medium text-slate-300 transition hover:text-amber-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber-400"
              >
                {label}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="hidden rounded-lg bg-amber-400 px-4 py-2.5 text-sm font-bold text-slate-950 transition hover:bg-amber-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300 sm:inline-flex"
          >
            Discuss a Project
          </a>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-lg border border-slate-700 p-2 text-slate-100 lg:hidden"
            aria-label={
              menuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? (
              <svg
                viewBox="0 0 24 24"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path d="m6 6 12 12M18 6 6 18" />
              </svg>
            ) : (
              <svg
                viewBox="0 0 24 24"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </nav>

        {menuOpen && (
          <div className="border-t border-slate-800 bg-slate-950 px-5 py-4 lg:hidden">
            <div className="mx-auto flex max-w-7xl flex-col gap-1">
              {navItems.map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-lg px-3 py-3 text-sm font-medium text-slate-300 hover:bg-slate-900 hover:text-amber-400"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      <main id="main">
        {/* HERO */}
        <section
          id="home"
          className="relative px-5 pb-20 pt-32 sm:px-6 sm:pt-40 lg:px-8 lg:pb-28"
        >
          <div className="hero-glow pointer-events-none absolute left-1/2 top-16 -z-0 h-72 w-72 -translate-x-1/2 rounded-full bg-amber-500/10 blur-3xl sm:left-3/4" />

          <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="hero-copy">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-400/20 bg-amber-400/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-amber-300">
                <span className="h-2 w-2 rounded-full bg-amber-400" />
                Web applications · Business software · Automation
              </div>

              <h1 className="max-w-3xl text-4xl font-black leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-6xl">
                Turning business challenges into{" "}
                <span className="text-amber-400">
                  useful digital products.
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
                TechType builds modern web applications,
                operational dashboards, backend APIs, and
                workflow tools shaped around real business needs.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#projects"
                  className="rounded-xl bg-amber-400 px-6 py-3.5 font-bold text-slate-950 transition hover:-translate-y-0.5 hover:bg-amber-300"
                >
                  Explore Projects <span aria-hidden="true">↗</span>
                </a>

                <a
                  href="#contact"
                  className="rounded-xl border border-slate-700 bg-slate-900 px-6 py-3.5 font-semibold text-white transition hover:border-amber-400/60"
                >
                  Start a Conversation
                </a>
              </div>

              <div className="mt-9 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-400">
                <span>✓ Responsive interfaces</span>
                <span>✓ API-driven applications</span>
                <span>✓ Workflow-focused design</span>
              </div>
            </div>

            {/* Animated development card */}
            <div className="float-card rounded-2xl border border-slate-800 bg-slate-900/80 p-4 shadow-2xl shadow-black/30 sm:p-6">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div className="flex gap-2" aria-hidden="true">
                  <span className="h-3 w-3 rounded-full bg-rose-400" />
                  <span className="h-3 w-3 rounded-full bg-amber-300" />
                  <span className="h-3 w-3 rounded-full bg-emerald-400" />
                </div>

                <span className="font-mono text-xs text-slate-500">
                  techtype / solution-map
                </span>
              </div>

              <div className="space-y-3 py-5 font-mono text-sm">
                <div className="rounded-lg border border-slate-800 bg-slate-950 p-4">
                  <p className="text-slate-500">
                    // Understand the workflow
                  </p>
                  <p className="mt-2 text-amber-300">
                    requirements → user journeys
                  </p>
                </div>

                <div className="flex justify-center text-amber-400" aria-hidden="true">
                  ↓
                </div>

                <div className="rounded-lg border border-slate-800 bg-slate-950 p-4">
                  <p className="text-slate-500">
                    // Build the solution
                  </p>
                  <p className="mt-2 text-emerald-300">
                    React UI + API + database
                  </p>
                </div>

                <div className="flex justify-center text-amber-400" aria-hidden="true">
                  ↓
                </div>

                <div className="rounded-lg border border-amber-400/30 bg-amber-400/5 p-4">
                  <p className="text-slate-400">
                    // Deliver iteratively
                  </p>
                  <p className="mt-2 text-white">
                    test → deploy → improve
                  </p>
                </div>
              </div>

              <p className="text-xs leading-5 text-slate-500">
                A practical development approach: clear scope,
                maintainable code, and measurable acceptance criteria.
              </p>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section
          id="about"
          className="animate-on-scroll border-y border-slate-900 bg-slate-900/20 px-5 py-20 sm:px-6 lg:px-8"
        >
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-amber-400">
                About TechType
              </p>

              <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl">
                Technology should make work clearer, not more complicated.
              </h2>
            </div>

            <div className="space-y-5 leading-8 text-slate-400">
              <p>
                TechType is presented as a software development
                portfolio focused on full-stack web applications,
                business platforms, dashboards, and automation utilities.
              </p>

              <p>
                The approach is to understand the people and
                processes behind a requirement, break the work
                into practical milestones, and build a solution
                that can evolve as the business grows.
              </p>

              <div className="stagger-children grid gap-4 pt-2 sm:grid-cols-3">
                {[
                  [
                    "Business-first",
                    "Start with the workflow and user need.",
                  ],
                  [
                    "Modular delivery",
                    "Build and validate in manageable steps.",
                  ],
                  [
                    "Maintainability",
                    "Keep the architecture understandable.",
                  ],
                ].map(([title, text]) => (
                  <div
                    key={title}
                    className="rounded-xl border border-slate-800 bg-slate-950 p-4"
                  >
                    <h3 className="font-bold text-white">{title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      {text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section
          id="services"
          className="animate-on-scroll px-5 py-20 sm:px-6 lg:px-8 lg:py-24"
        >
          <SectionHeading
            eyebrow="What we do"
            title="Services built around real workflows"
            description="A clear overview of the kinds of software work TechType can present and scope with clients."
          />

          <div className="stagger-children mx-auto grid max-w-7xl gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.number}
                className="group rounded-2xl border border-slate-800 bg-slate-900/60 p-6 transition hover:-translate-y-1 hover:border-amber-400/40 sm:p-7"
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-amber-400/20 bg-amber-400/10 font-mono font-bold text-amber-300">
                  {service.number}
                </div>

                <h3 className="text-xl font-bold text-white">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {service.description}
                </p>

                <ul className="mt-5 space-y-2">
                  {service.deliverables.map((item) => (
                    <li
                      key={item}
                      className="flex gap-2 text-sm text-slate-300"
                    >
                      <span className="text-amber-400" aria-hidden="true">
                        ↗
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        {/* PROJECTS WITH MEDIA AND MODALS */}
        <section
          id="projects"
          className="animate-on-scroll border-y border-slate-900 bg-slate-900/20 px-5 py-20 sm:px-6 lg:px-8 lg:py-24"
        >
          <SectionHeading
            eyebrow="Selected work"
            title="Projects and product concepts"
            description="Explore the project overview, key features, technologies, and current implementation status."
          />

          <div className="stagger-children mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">
            {projects.map((project, index) => (
              <article
                key={project.name}
                className="project-card flex flex-col rounded-2xl border border-slate-800 bg-slate-950 p-5 sm:p-7"
              >
                <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
                  <span className="text-xs font-bold uppercase tracking-[0.18em] text-amber-400">
                    {project.category}
                  </span>

                  <span className="rounded-full border border-slate-700 px-3 py-1 text-xs text-slate-400">
                    {project.status}
                  </span>
                </div>

                {/* Clickable project media */}
                <div className="project-media mb-6 h-52 rounded-xl border border-slate-800 bg-slate-900 sm:h-64">
                  <img
                    src={project.image}
                    alt={`${project.name} project preview`}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />

                  <div className="project-media-overlay absolute inset-0 flex items-center justify-center gap-3 bg-slate-950/50 p-4">
                    <button
                      type="button"
                      onClick={() => openImage(project.image)}
                      className="rounded-lg border border-white/30 bg-slate-950/90 px-4 py-3 text-sm font-semibold text-white transition hover:border-amber-400 hover:text-amber-300"
                      aria-label={`Preview ${project.name} image`}
                    >
                      <span aria-hidden="true">⤢</span> Preview
                    </button>

                    <button
                      type="button"
                      onClick={() => openProject(project)}
                      className="rounded-lg bg-amber-400 px-4 py-3 text-sm font-bold text-slate-950 transition hover:bg-amber-300"
                    >
                      View details ↗
                    </button>
                  </div>

                  <span className="absolute bottom-3 left-3 rounded-md border border-white/10 bg-slate-950/80 px-2.5 py-1 font-mono text-[10px] tracking-wider text-slate-300">
                    PROJECT {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white">
                  {project.name}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {project.description}
                </p>

                <h4 className="mt-6 text-sm font-bold text-slate-200">
                  Key areas
                </h4>

                <ul className="mt-3 space-y-2">
                  {project.highlights.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-sm text-slate-400"
                    >
                      <span className="text-amber-400" aria-hidden="true">
                        ✓
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <TechPill key={tech}>{tech}</TechPill>
                  ))}
                </div>

                <p className="mt-5 border-t border-slate-800 pt-4 text-xs leading-6 text-slate-500">
                  {project.note}
                </p>

                <button
                  type="button"
                  onClick={() => openProject(project)}
                  className="mt-5 inline-flex w-fit items-center gap-2 rounded-lg border border-slate-700 px-4 py-2.5 text-sm font-semibold text-white transition hover:border-amber-400 hover:text-amber-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber-400"
                >
                  Explore project <span aria-hidden="true">↗</span>
                </button>
              </article>
            ))}
          </div>

          <p className="mx-auto mt-6 max-w-7xl text-xs leading-6 text-slate-500">
            Project images are illustrative media. Replace them with
            screenshots you own or have permission to use. Add live-demo
            and repository links only when they are available and safe
            to share.
          </p>
        </section>

        {/* DEVELOPMENT PROCESS */}
        <section
          id="process"
          className="animate-on-scroll px-5 py-20 sm:px-6 lg:px-8 lg:py-24"
        >
          <SectionHeading
            eyebrow="How projects move forward"
            title="A transparent development process"
            description="Set expectations early, review progress regularly, and validate each milestone before moving on."
          />

          <div className="stagger-children mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {processSteps.map(([number, title, description]) => (
              <div
                key={number}
                className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6"
              >
                <span className="font-mono text-sm font-bold text-amber-400">
                  {number} / 06
                </span>

                <h3 className="mt-4 text-xl font-bold text-white">
                  {title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* TECHNOLOGY STACK */}
        <section
          id="stack"
          className="animate-on-scroll border-y border-slate-900 bg-slate-900/20 px-5 py-20 sm:px-6 lg:px-8"
        >
          <SectionHeading
            eyebrow="Tools and technologies"
            title="A practical full-stack toolkit"
            description="Technologies used or explored across the portfolio. Keep this list aligned with hands-on experience and each project's actual stack."
          />

          <div className="stagger-children mx-auto grid max-w-6xl gap-5 sm:grid-cols-2">
            {technologyGroups.map((group) => (
              <div
                key={group.title}
                className="rounded-2xl border border-slate-800 bg-slate-950 p-6"
              >
                <h3 className="mb-4 text-lg font-bold text-white">
                  {group.title}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <TechPill key={item}>{item}</TechPill>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section
          id="faq"
          className="animate-on-scroll px-5 py-20 sm:px-6 lg:px-8"
        >
          <SectionHeading
            eyebrow="Common questions"
            title="Before starting a project"
            description="Give potential clients practical information before they submit an inquiry."
          />

          <div className="mx-auto max-w-3xl space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <div
                  key={faq.question}
                  className="overflow-hidden rounded-xl border border-slate-800 bg-slate-900/50"
                >
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-semibold text-white"
                    aria-expanded={isOpen}
                    onClick={() =>
                      setOpenFaq(isOpen ? -1 : index)
                    }
                  >
                    {faq.question}

                    <span className="text-xl text-amber-400" aria-hidden="true">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  {isOpen && (
                    <p className="px-5 pb-5 text-sm leading-7 text-slate-400">
                      {faq.answer}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* CONTACT */}
        <section
          id="contact"
          className="animate-on-scroll border-t border-slate-900 bg-slate-900/20 px-5 py-20 sm:px-6 lg:px-8 lg:py-24"
        >
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-amber-400">
                Contact
              </p>

              <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl">
                Have a business problem worth solving?
              </h2>

              <p className="mt-5 max-w-lg leading-8 text-slate-400">
                Share what you are trying to build, who will use
                it, and the main problem it should solve. The next
                step is to clarify scope and priorities.
              </p>

              <div className="mt-8 rounded-xl border border-slate-800 bg-slate-950 p-5">
                <h3 className="font-bold text-white">
                  Helpful details to include
                </h3>

                <ul className="mt-3 space-y-2 text-sm text-slate-400">
                  <li>• Your business or project type</li>
                  <li>• The main workflow or challenge</li>
                  <li>• Required users, integrations, or reports</li>
                  <li>• Your expected timeline, if known</li>
                </ul>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6 shadow-2xl shadow-black/20 sm:p-8">
              {formState.status === "success" ? (
                <div
                  className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-6 text-emerald-200"
                  role="status"
                >
                  <h3 className="text-lg font-bold">
                    Message sent
                  </h3>

                  <p className="mt-2 text-sm leading-6">
                    {formState.message}
                  </p>

                  <button
                    type="button"
                    onClick={() =>
                      setFormState({
                        status: "idle",
                        message: "",
                      })
                    }
                    className="mt-4 rounded-lg border border-emerald-500/40 px-4 py-2 text-sm font-semibold hover:bg-emerald-500/10"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="mb-2 block text-sm font-medium text-slate-300"
                      >
                        Name *
                      </label>

                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        required
                        maxLength={100}
                        value={formData.name}
                        onChange={updateField}
                        placeholder="Your name"
                        className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/10"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="contact-email"
                        className="mb-2 block text-sm font-medium text-slate-300"
                      >
                        Email *
                      </label>

                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        maxLength={254}
                        value={formData.email}
                        onChange={updateField}
                        placeholder="you@example.com"
                        className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/10"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="mb-2 block text-sm font-medium text-slate-300"
                    >
                      Project details *
                    </label>

                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      minLength={10}
                      maxLength={5000}
                      rows={6}
                      value={formData.message}
                      onChange={updateField}
                      placeholder="What would you like to build or improve?"
                      className="w-full resize-y rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/10"
                    />

                    <p className="mt-2 text-right text-xs text-slate-500">
                      {formData.message.length}/5000
                    </p>
                  </div>

                  {formState.status === "error" && (
                    <p
                      className="rounded-lg border border-rose-500/30 bg-rose-500/10 p-3 text-sm leading-6 text-rose-200"
                      role="alert"
                    >
                      {formState.message}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={formState.status === "sending"}
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-amber-400 px-5 py-4 font-bold text-slate-950 transition hover:bg-amber-300 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {formState.status === "sending"
                      ? "Sending message…"
                      : "Send project inquiry"}

                    {formState.status !== "sending" && (
                      <span aria-hidden="true">↗</span>
                    )}
                  </button>

                  <p className="text-xs leading-5 text-slate-500">
                    Your message is only delivered after a backend
                    endpoint is configured. Do not collect sensitive
                    personal or confidential business information in
                    this public form.
                  </p>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      {/* PROJECT DETAILS MODAL */}
      {selectedProject && (
        <div
          className="modal-backdrop fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-slate-950/85 p-4 sm:p-6"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setSelectedProject(null);
            }
          }}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            className="modal-panel relative my-auto max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-slate-700 bg-slate-900 shadow-2xl shadow-black/50"
          >
            {/* Modal image header */}
            <div className="relative h-52 sm:h-72">
              <img
                src={selectedProject.image}
                alt={`${selectedProject.name} project preview`}
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent" />

              <div className="absolute right-4 top-4">
                <CloseButton
                  label="Close project details"
                  onClick={() => setSelectedProject(null)}
                />
              </div>

              <div className="absolute bottom-5 left-5 right-5">
                <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-amber-400">
                  {selectedProject.category}
                </p>

                <h2
                  id="project-modal-title"
                  className="text-3xl font-black text-white sm:text-4xl"
                >
                  {selectedProject.name}
                </h2>
              </div>
            </div>

            <div className="space-y-7 p-5 sm:p-8">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1.5 text-xs font-semibold text-amber-300">
                  {selectedProject.status}
                </span>

                <button
                  type="button"
                  onClick={() => openImage(selectedProject.image)}
                  className="text-sm font-medium text-slate-300 underline decoration-slate-600 underline-offset-4 transition hover:text-amber-300"
                >
                  Enlarge image ↗
                </button>
              </div>

              <div>
                <h3 className="text-lg font-bold text-white">
                  About this project
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {selectedProject.description}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-white">
                  Key features and focus areas
                </h3>

                <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                  {selectedProject.highlights.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 rounded-xl border border-slate-800 bg-slate-950/70 p-4 text-sm leading-6 text-slate-300"
                    >
                      <span className="text-amber-400" aria-hidden="true">
                        ✓
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold text-white">
                  Technology stack
                </h3>

                <div className="mt-4 flex flex-wrap gap-2">
                  {selectedProject.stack.map((tech) => (
                    <TechPill key={tech}>{tech}</TechPill>
                  ))}
                </div>
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-950 p-4">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Project status and notes
                </p>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  {selectedProject.note}
                </p>
              </div>

              <div className="flex flex-wrap justify-end gap-3 border-t border-slate-800 pt-5">
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="rounded-lg border border-slate-700 px-5 py-3 text-sm font-semibold text-white transition hover:border-slate-500"
                >
                  Close
                </button>

                <a
                  href="#contact"
                  onClick={() => setSelectedProject(null)}
                  className="rounded-lg bg-amber-400 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-amber-300"
                >
                  Discuss a similar project ↗
                </a>
              </div>
            </div>
          </section>
        </div>
      )}

      {/* FULL-SCREEN IMAGE LIGHTBOX */}
      {previewImage && (
        <div
          className="modal-backdrop fixed inset-0 z-[110] flex items-center justify-center bg-slate-950/95 p-4 sm:p-8"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setPreviewImage(null);
            }
          }}
        >
          <div className="absolute right-5 top-5 z-10">
            <CloseButton
              label="Close image preview"
              onClick={() => setPreviewImage(null)}
            />
          </div>

          <img
            src={previewImage}
            alt="Enlarged project preview"
            className="lightbox-image max-h-[85vh] max-w-full rounded-xl border border-slate-800 object-contain shadow-2xl"
          />
        </div>
      )}

      {/* FOOTER */}
      <footer className="border-t border-slate-800 px-5 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-7 md:flex-row md:items-center md:justify-between">
          <div>
            <a
              href="#home"
              className="text-xl font-black tracking-tight text-white"
            >
              <span className="text-amber-400">tech</span>
              type
              <span className="text-amber-400">.in</span>
            </a>

            <p className="mt-2 max-w-md text-sm leading-6 text-slate-500">
              Web applications, business platforms, APIs, and workflow tools.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-5 gap-y-3 text-sm text-slate-400">
            {navItems.map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="transition hover:text-amber-400"
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-8 flex max-w-7xl flex-col gap-2 border-t border-slate-800 pt-5 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} TechType. All rights reserved.
          </p>

          <p>Built with React and Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
}
