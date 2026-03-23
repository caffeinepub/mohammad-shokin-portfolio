import {
  Award,
  BookOpen,
  Brain,
  Briefcase,
  Code,
  Download,
  ExternalLink,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  Users,
  Wrench,
} from "lucide-react";
import { useEffect, useRef } from "react";

// ── Scroll reveal hook ────────────────────────────────────────────────────
function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            observer.unobserve(e.target);
          }
        }
      },
      { threshold: 0.12 },
    );
    for (const el of els) observer.observe(el);
    return () => observer.disconnect();
  }, []);
}

// ── Data ──────────────────────────────────────────────────────────────────
const SKILLS = [
  {
    icon: <Code size={22} />,
    title: "Programming",
    items: ["Python", "C", "C++", "Java"],
  },
  {
    icon: <Brain size={22} />,
    title: "Machine Learning",
    items: [
      "Decision Trees",
      "Random Forest",
      "Logistic Regression",
      "SVM",
      "PCA",
    ],
  },
  {
    icon: <Wrench size={22} />,
    title: "Tools",
    items: ["Git", "HTML", "CSS", "Anaconda"],
  },
  {
    icon: <Users size={22} />,
    title: "Soft Skills",
    items: [
      "Problem Solving",
      "Analytical Thinking",
      "Teamwork",
      "Adaptability",
      "Friendly Nature",
    ],
  },
];

const PROJECTS = [
  {
    title: "Ova Care-AI",
    description:
      "An AI-powered application focused on women's health, leveraging machine learning algorithms to assist in health diagnostics and awareness.",
    tech: ["Python", "Machine Learning", "AI"],
    link: "https://github.com/muskaanrana2005/OvaCare-AI",
  },
  {
    title: "Smart Parking System",
    description:
      "An intelligent parking management system that automates slot allocation and monitoring using sensor-driven logic and real-time data.",
    tech: ["Python", "IoT", "Algorithms"],
    link: "https://github.com/Mohammad-shokin/Smart_Parking_Management_System",
  },
];

const CERTIFICATIONS = [
  {
    title: "ChatGPT-4 Prompt Engineering",
    issuer: "Infosys",
    desc: "Advanced prompt engineering techniques for large language models.",
    link: "https://drive.google.com/file/d/1oyh9hbXGnAE-ciKZ34MY98DHjfhKdJ8d/view",
  },
  {
    title: "Social Networks",
    issuer: "NPTEL",
    desc: "Comprehensive study of social network analysis and graph theory.",
    link: "https://drive.google.com/file/d/1VS8lwMbXCuFhXdix8IWSMMEhVPVfKgRm/view",
  },
  {
    title: "Computer Communication Specialization",
    issuer: "Coursera",
    desc: "End-to-end specialization in computer networks and communication protocols.",
    link: "https://drive.google.com/file/d/1vMuTpYNePcsOSNLCa4h5Pw8wC0FGJHwS/view",
  },
];

const ACHIEVEMENTS = [
  {
    title: "DSA Training",
    issuer: "LPU",
    link: "https://drive.google.com/file/d/1p1v64XUiJ2-YnWE5FdEYI6ui4HDFMgpo/view",
  },
  {
    title: "Generative AI",
    issuer: "Infosys",
    link: "https://drive.google.com/file/d/10aBT4Q7pZ1ljOXG-K4lu3aoDTzP9K6el/view",
  },
  {
    title: "Computational Theory",
    issuer: "Infosys",
    link: "https://drive.google.com/file/d/1yYgEvEgynl3g05r-P9jqFVFFl8QQpUEn/view",
  },
  {
    title: "Hardware & OS",
    issuer: "",
    link: "https://drive.google.com/file/d/1jSnGb7BNy3OKeO7j-kLLpcinO2RI9BoD/view",
  },
  {
    title: "Binary Blitz",
    issuer: "",
    link: "https://drive.google.com/file/d/1GuAgbbKwnCqg3ARYa9KREPUTPEHJQ9ub/view",
  },
];

const CV_PATH =
  "/assets/uploads/mohammad_shokin_cv.pdf-019d1c82-20eb-7388-8bfc-e0d1c3dac579-1.pdf";

// ── Navbar ────────────────────────────────────────────────────────────────
function Navbar() {
  const links = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Certifications", href: "#certifications" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="navbar fixed top-0 left-0 right-0 z-50">
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: 64,
          }}
        >
          <span
            style={{
              color: "#E5E7EB",
              fontWeight: 700,
              fontSize: 18,
              letterSpacing: "-0.3px",
            }}
          >
            Mohammad<span style={{ color: "#3B82F6" }}> Shokin</span>
          </span>
          <div style={{ display: "flex", gap: 28 }} className="hidden md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                data-ocid={`nav.${l.label.toLowerCase()}.link`}
                style={{
                  color: "#9CA3AF",
                  fontSize: 14,
                  fontWeight: 500,
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#E5E7EB";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "#9CA3AF";
                }}
              >
                {l.label}
              </a>
            ))}
          </div>
          <a
            href={CV_PATH}
            download
            target="_blank"
            rel="noreferrer"
            data-ocid="nav.download_cv.button"
            className="btn-primary"
            style={{ padding: "9px 20px", fontSize: 13 }}
          >
            Download CV
          </a>
        </div>
      </div>
    </nav>
  );
}

// ── Hero ──────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        paddingTop: 80,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Dots pattern overlay */}
      <div
        className="dots-bg"
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.4,
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 24px",
          width: "100%",
          display: "grid",
          gridTemplateColumns: "1fr auto",
          gap: 48,
          alignItems: "center",
        }}
      >
        {/* Left */}
        <div>
          <p
            className="fade-in fade-in-delay-1"
            style={{
              color: "#3B82F6",
              fontSize: 14,
              fontWeight: 600,
              letterSpacing: "0.08em",
              marginBottom: 16,
              textTransform: "uppercase",
            }}
          >
            CSE Student · AI & ML Enthusiast
          </p>
          <h1
            className="fade-in fade-in-delay-2"
            style={{
              color: "#E5E7EB",
              fontSize: "clamp(40px, 5vw, 56px)",
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-1px",
              marginBottom: 20,
            }}
          >
            Mohammad
            <br />
            <span style={{ color: "#3B82F6" }}>Shokin</span>
          </h1>
          <p
            className="fade-in fade-in-delay-3"
            style={{
              color: "#9CA3AF",
              fontSize: 18,
              lineHeight: 1.7,
              maxWidth: 520,
              marginBottom: 36,
              fontStyle: "italic",
            }}
          >
            &ldquo;Building intelligent systems and solving real-world problems
            using AI.&rdquo;
          </p>
          <div
            className="fade-in fade-in-delay-4"
            style={{ display: "flex", gap: 16, flexWrap: "wrap" }}
          >
            <a
              href="#projects"
              data-ocid="hero.view_projects.button"
              className="btn-primary"
            >
              View Projects
            </a>
            <a
              href="#contact"
              data-ocid="hero.contact_me.button"
              className="btn-outline"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Right — Profile Photo */}
        <div
          className="fade-in fade-in-delay-2"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div style={{ position: "relative" }}>
            {/* Radial depth glow behind image — creates separation from background */}
            <div
              style={{
                position: "absolute",
                inset: -80,
                background:
                  "radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 65%)",
                pointerEvents: "none",
                zIndex: 0,
              }}
            />

            {/* Rim light ring — thin blue outline, sits just outside the image border */}
            <div
              style={{
                position: "absolute",
                inset: -4,
                borderRadius: "50%",
                border: "1.5px solid rgba(59,130,246,0.45)",
                boxShadow:
                  "0 0 12px rgba(59,130,246,0.25), inset 0 0 8px rgba(59,130,246,0.1)",
                pointerEvents: "none",
                zIndex: 2,
              }}
            />

            {/* Outer ambient glow — reduced, kept strictly outside */}
            <div
              style={{
                position: "absolute",
                inset: -18,
                borderRadius: "50%",
                boxShadow: "0 0 28px rgba(59,130,246,0.18)",
                pointerEvents: "none",
                zIndex: 0,
              }}
            />

            {/* Image container with inner accent border */}
            <div
              style={{
                position: "relative",
                zIndex: 1,
                width: 240,
                height: 240,
                borderRadius: "50%",
                border: "2px solid #3B82F6",
                overflow: "hidden",
                boxShadow: "0 20px 50px rgba(0,0,0,0.7)",
              }}
            >
              <img
                src="/assets/uploads/img_20240418_164053_799-019d1c93-cfeb-711a-b493-f50ae513560a-1.jpg"
                alt="Mohammad Shokin"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center top",
                  // Brightness +10%, contrast +13%, slight saturation lift for clothing definition
                  filter: "brightness(1.10) contrast(1.13) saturate(1.08)",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── About ─────────────────────────────────────────────────────────────────
function About() {
  return (
    <section id="about" style={{ padding: "80px 0" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        <div className="reveal">
          <h2
            className="section-title"
            style={{
              color: "#E5E7EB",
              fontSize: 32,
              fontWeight: 700,
              marginBottom: 32,
            }}
          >
            About Me
          </h2>
          <div
            className="portfolio-card"
            style={{ padding: "32px 36px", maxWidth: 760 }}
          >
            <p style={{ color: "#D1D5DB", fontSize: 17, lineHeight: 1.85 }}>
              I&apos;m a B.Tech Computer Science Engineering student at Lovely
              Professional University with a deep passion for Artificial
              Intelligence and Machine Learning. I thrive on solving challenging
              real-world problems through logical thinking and practical,
              hands-on experimentation. Whether it&apos;s implementing ML
              algorithms or exploring new tools, I approach every task with
              curiosity and a strong analytical mindset. I&apos;m a
              collaborative team player who adapts quickly to new environments,
              and I genuinely enjoy learning alongside others. My goal is to
              build intelligent systems that create meaningful impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Skills ────────────────────────────────────────────────────────────────
function Skills() {
  return (
    <section id="skills" style={{ padding: "80px 0" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        <div className="reveal">
          <h2
            className="section-title"
            style={{
              color: "#E5E7EB",
              fontSize: 32,
              fontWeight: 700,
              marginBottom: 32,
            }}
          >
            Skills
          </h2>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 24,
          }}
        >
          {SKILLS.map((skill) => (
            <div
              key={skill.title}
              className="portfolio-card reveal"
              style={{ padding: "24px" }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  marginBottom: 20,
                }}
              >
                <span style={{ color: "#3B82F6" }}>{skill.icon}</span>
                <h3
                  style={{
                    color: "#E5E7EB",
                    fontSize: 16,
                    fontWeight: 700,
                    margin: 0,
                  }}
                >
                  {skill.title}
                </h3>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {skill.items.map((item) => (
                  <span key={item} className="skill-badge">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Projects ──────────────────────────────────────────────────────────────
function Projects() {
  return (
    <section id="projects" style={{ padding: "80px 0" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        <div className="reveal">
          <h2
            className="section-title"
            style={{
              color: "#E5E7EB",
              fontSize: 32,
              fontWeight: 700,
              marginBottom: 32,
            }}
          >
            Projects
          </h2>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 24,
          }}
        >
          {PROJECTS.map((p, i) => (
            <div
              key={p.title}
              className="portfolio-card reveal"
              style={{
                padding: "28px",
                display: "flex",
                flexDirection: "column",
                gap: 16,
              }}
              data-ocid={`projects.item.${i + 1}`}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                }}
              >
                <h3
                  style={{
                    color: "#E5E7EB",
                    fontSize: 20,
                    fontWeight: 700,
                    margin: 0,
                  }}
                >
                  {p.title}
                </h3>
                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  data-ocid={`projects.github_link.${i + 1}`}
                  style={{ color: "#3B82F6", transition: "color 0.2s" }}
                >
                  <ExternalLink size={18} />
                </a>
              </div>
              <p
                style={{
                  color: "#9CA3AF",
                  fontSize: 15,
                  lineHeight: 1.7,
                  margin: 0,
                  flex: 1,
                }}
              >
                {p.description}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {p.tech.map((t) => (
                  <span key={t} className="skill-badge">
                    {t}
                  </span>
                ))}
              </div>
              <a
                href={p.link}
                target="_blank"
                rel="noreferrer"
                style={{
                  color: "#3B82F6",
                  fontSize: 14,
                  fontWeight: 600,
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  transition: "opacity 0.2s",
                }}
              >
                <Github size={15} /> View on GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Certifications ────────────────────────────────────────────────────────
function Certifications() {
  return (
    <section id="certifications" style={{ padding: "80px 0" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        <div className="reveal">
          <h2
            className="section-title"
            style={{
              color: "#E5E7EB",
              fontSize: 32,
              fontWeight: 700,
              marginBottom: 32,
            }}
          >
            Certifications
          </h2>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 24,
            marginBottom: 48,
          }}
        >
          {CERTIFICATIONS.map((c, i) => (
            <a
              key={c.title}
              href={c.link}
              target="_blank"
              rel="noreferrer"
              className="portfolio-card reveal"
              data-ocid={`certifications.item.${i + 1}`}
              style={{
                padding: "28px 28px 24px",
                display: "block",
                textDecoration: "none",
                cursor: "pointer",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  marginBottom: 12,
                }}
              >
                <Award size={20} style={{ color: "#3B82F6", flexShrink: 0 }} />
                <span
                  style={{
                    background: "rgba(59,130,246,0.12)",
                    color: "#60A5FA",
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    padding: "3px 10px",
                    borderRadius: 4,
                  }}
                >
                  {c.issuer}
                </span>
              </div>
              <h3
                style={{
                  color: "#E5E7EB",
                  fontSize: 17,
                  fontWeight: 700,
                  margin: "0 0 10px",
                }}
              >
                {c.title}
              </h3>
              <p
                style={{
                  color: "#9CA3AF",
                  fontSize: 14,
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                {c.desc}
              </p>
              <div
                style={{
                  marginTop: 16,
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  color: "#3B82F6",
                  fontSize: 13,
                  fontWeight: 600,
                }}
              >
                <ExternalLink size={13} /> View Certificate
              </div>
            </a>
          ))}
        </div>

        {/* Additional Achievements */}
        <div className="reveal">
          <h3
            style={{
              color: "#E5E7EB",
              fontSize: 22,
              fontWeight: 700,
              marginBottom: 20,
            }}
          >
            Additional Achievements
          </h3>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
            gap: 16,
          }}
        >
          {ACHIEVEMENTS.map((a, i) => (
            <a
              key={a.title}
              href={a.link}
              target="_blank"
              rel="noreferrer"
              className="portfolio-card reveal"
              data-ocid={`achievements.item.${i + 1}`}
              style={{
                padding: "18px 20px",
                display: "flex",
                alignItems: "center",
                gap: 12,
                textDecoration: "none",
              }}
            >
              <BookOpen size={16} style={{ color: "#3B82F6", flexShrink: 0 }} />
              <div>
                <div
                  style={{ color: "#E5E7EB", fontSize: 14, fontWeight: 600 }}
                >
                  {a.title}
                </div>
                {a.issuer && (
                  <div style={{ color: "#6B7280", fontSize: 12, marginTop: 2 }}>
                    {a.issuer}
                  </div>
                )}
              </div>
              <ExternalLink
                size={13}
                style={{ color: "#4B5563", marginLeft: "auto", flexShrink: 0 }}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Experience ────────────────────────────────────────────────────────────
function Experience() {
  return (
    <section id="experience" style={{ padding: "80px 0" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        <div className="reveal">
          <h2
            className="section-title"
            style={{
              color: "#E5E7EB",
              fontSize: 32,
              fontWeight: 700,
              marginBottom: 32,
            }}
          >
            Experience
          </h2>
        </div>
        <div
          className="portfolio-card reveal"
          style={{ padding: "28px 32px", maxWidth: 680 }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              marginBottom: 16,
            }}
          >
            <Briefcase size={20} style={{ color: "#3B82F6" }} />
            <div>
              <h3
                style={{
                  color: "#E5E7EB",
                  fontSize: 18,
                  fontWeight: 700,
                  margin: 0,
                }}
              >
                NGO Internship
              </h3>
              <span style={{ color: "#9CA3AF", fontSize: 13 }}>
                Social Impact · Volunteer
              </span>
            </div>
          </div>
          <ul style={{ margin: "0 0 20px", padding: "0 0 0 18px" }}>
            <li style={{ color: "#D1D5DB", fontSize: 15, lineHeight: 1.8 }}>
              Completed 32+ hours of community service
            </li>
            <li style={{ color: "#D1D5DB", fontSize: 15, lineHeight: 1.8 }}>
              Conducted computer awareness sessions for underserved communities
            </li>
            <li style={{ color: "#D1D5DB", fontSize: 15, lineHeight: 1.8 }}>
              Contributed to social impact through digital literacy programs
            </li>
          </ul>
          <a
            href="https://drive.google.com/file/d/1_F55vaMPRfdle9KCQ6BleyPZj6eVbAlk/view"
            target="_blank"
            rel="noreferrer"
            data-ocid="experience.certificate.link"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              color: "#3B82F6",
              fontSize: 14,
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            <ExternalLink size={14} /> View Certificate
          </a>
        </div>
      </div>
    </section>
  );
}

// ── Education ─────────────────────────────────────────────────────────────
function Education() {
  const items = [
    {
      degree: "B.Tech Computer Science Engineering",
      inst: "Lovely Professional University (LPU)",
      year: "2023 – Present",
      score: null,
    },
    {
      degree: "12th Standard",
      inst: "Senior Secondary",
      year: "Completed",
      score: "62%",
    },
    {
      degree: "10th Standard",
      inst: "Secondary",
      year: "Completed",
      score: "71%",
    },
  ];

  return (
    <section id="education" style={{ padding: "80px 0" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        <div className="reveal">
          <h2
            className="section-title"
            style={{
              color: "#E5E7EB",
              fontSize: 32,
              fontWeight: 700,
              marginBottom: 32,
            }}
          >
            Education
          </h2>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 16,
            maxWidth: 680,
          }}
        >
          {items.map((item, i) => (
            <div
              key={item.degree}
              className="portfolio-card reveal"
              style={{
                padding: "22px 28px",
                display: "flex",
                alignItems: "center",
                gap: 16,
              }}
              data-ocid={`education.item.${i + 1}`}
            >
              <GraduationCap
                size={20}
                style={{ color: "#3B82F6", flexShrink: 0 }}
              />
              <div style={{ flex: 1 }}>
                <div
                  style={{ color: "#E5E7EB", fontSize: 16, fontWeight: 700 }}
                >
                  {item.degree}
                </div>
                <div style={{ color: "#9CA3AF", fontSize: 14, marginTop: 2 }}>
                  {item.inst}
                </div>
              </div>
              <div style={{ textAlign: "right" }}>
                <div style={{ color: "#6B7280", fontSize: 13 }}>
                  {item.year}
                </div>
                {item.score && (
                  <div
                    style={{
                      color: "#3B82F6",
                      fontSize: 14,
                      fontWeight: 700,
                      marginTop: 2,
                    }}
                  >
                    {item.score}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Resume ────────────────────────────────────────────────────────────────
function Resume() {
  return (
    <section id="resume" style={{ padding: "80px 0" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        <div
          className="portfolio-card reveal"
          style={{
            padding: "56px 48px",
            textAlign: "center",
            background: "linear-gradient(135deg, #111827 0%, #0f172a 100%)",
            border: "1px solid rgba(59,130,246,0.2)",
            maxWidth: 600,
            margin: "0 auto",
          }}
        >
          <Download size={36} style={{ color: "#3B82F6", marginBottom: 16 }} />
          <h2
            style={{
              color: "#E5E7EB",
              fontSize: 30,
              fontWeight: 700,
              marginBottom: 12,
            }}
          >
            My Resume
          </h2>
          <p style={{ color: "#9CA3AF", fontSize: 16, marginBottom: 32 }}>
            Download my resume for complete details about my skills, projects,
            and experience.
          </p>
          <a
            href={CV_PATH}
            download
            target="_blank"
            rel="noreferrer"
            data-ocid="resume.download_cv.button"
            className="btn-primary"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              fontSize: 15,
            }}
          >
            <Download size={16} /> Download CV
          </a>
        </div>
      </div>
    </section>
  );
}

// ── Contact ───────────────────────────────────────────────────────────────
function Contact() {
  const links = [
    {
      icon: <Mail size={22} />,
      label: "Email",
      value: "mohamadshokin@gmail.com",
      href: "mailto:mohamadshokin@gmail.com",
      ocid: "contact.email.link",
    },
    {
      icon: <Github size={22} />,
      label: "GitHub",
      value: "github.com/Mohammad-shokin",
      href: "https://github.com/Mohammad-shokin",
      ocid: "contact.github.link",
    },
    {
      icon: <Linkedin size={22} />,
      label: "LinkedIn",
      value: "linkedin.com/in/mohammad-shokin",
      href: "https://linkedin.com/in/mohammad-shokin",
      ocid: "contact.linkedin.link",
    },
  ];

  return (
    <section id="contact" style={{ padding: "80px 0" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        <div className="reveal">
          <h2
            className="section-title"
            style={{
              color: "#E5E7EB",
              fontSize: 32,
              fontWeight: 700,
              marginBottom: 32,
            }}
          >
            Contact
          </h2>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 20,
            maxWidth: 800,
          }}
        >
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noreferrer"
              data-ocid={l.ocid}
              className="portfolio-card reveal"
              style={{
                padding: "22px 24px",
                display: "flex",
                alignItems: "center",
                gap: 16,
                textDecoration: "none",
              }}
            >
              <span
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: "10px",
                  background: "rgba(59,130,246,0.12)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#3B82F6",
                  flexShrink: 0,
                }}
              >
                {l.icon}
              </span>
              <div>
                <div
                  style={{
                    color: "#9CA3AF",
                    fontSize: 12,
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                  }}
                >
                  {l.label}
                </div>
                <div
                  style={{
                    color: "#E5E7EB",
                    fontSize: 14,
                    marginTop: 2,
                    wordBreak: "break-all",
                  }}
                >
                  {l.value}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Footer ────────────────────────────────────────────────────────────────
function Footer() {
  const year = new Date().getFullYear();
  const utm = encodeURIComponent(
    typeof window !== "undefined" ? window.location.hostname : "",
  );
  return (
    <footer
      style={{
        borderTop: "1px solid rgba(255,255,255,0.06)",
        padding: "28px 24px",
        textAlign: "center",
        color: "#4B5563",
        fontSize: 13,
      }}
    >
      © {year} Mohammad Shokin. Built with ❤️ using{" "}
      <a
        href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${utm}`}
        target="_blank"
        rel="noreferrer"
        style={{ color: "#3B82F6", textDecoration: "none" }}
      >
        caffeine.ai
      </a>
    </footer>
  );
}

// ── App ───────────────────────────────────────────────────────────────────
export default function App() {
  useScrollReveal();

  return (
    <div style={{ fontFamily: "Inter, system-ui, sans-serif" }}>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Experience />
        <Education />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
