"use client";

import { useState } from "react";
import { Code2, ExternalLink } from "lucide-react";

import { useResponsive } from "@/hooks/useResponsive";

const projects = [
  {
    id: 1,
    title: "FlowMind AI — AI Productivity Dashboard",
    description:
      "A task management app focused on productivity and smart dashboards.",
    image: "/projects/taskflow.png",
    tags: ["React", "Tailwind CSS", "TypeScript", "Next.js", "Chart.js"],
    demoUrl: "https://flowmind-ai-qsv5.vercel.app/",
    codeUrl: "https://github.com/kuutam/flowmind-ai",
    category: "Dashboard",
    color: "#8b5cf6",
  },
  {
    id: 2,
    title: "RemoteFlow — Job Tracker Platform",
    description:
      "A platform for finding remote job opportunities with advanced features.",
    image: "/projects/remoteflow.png",
    tags: ["React", "Node.js", "MongoDB"],
    demoUrl: "https://github.com/tuusuario/remoteflow",
    codeUrl: "https://github.com/tuusuario/remoteflow",
    category: "Job Tracking",
    color: "#06b6d4",
  },
  {
    id: 3,
    title: "ServeSync — Food Service & Order Management",
    description:
      "A system for managing orders and inventory for fast-food establishments with a scalable MVC architecture.",
    image: "/projects/servesync.png",
    tags: ["React", "Node.js", "MongoDB"],
    demoUrl: "https://github.com/tuusuario/servesync",
    codeUrl: "https://github.com/tuusuario/servesync",
    category: "Food Service",
    color: "#ec4899",
  },
  {
    id: 4,
    title: "Portfolio & Branding Website",
    description:
      "A portfolio and branding website with modern design and interactive features.",
    image: "/projects/portfolio.png",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    demoUrl: "https://github.com/tuusuario/portfolio",
    codeUrl: "https://github.com/tuusuario/portfolio",
    category: "Web App",
    color: "#8b5cf6",
  },
];

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  const [hovered, setHovered] = useState(false);
  const { isMobile } = useResponsive();

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "linear-gradient(145deg, #13131f, #0f0f1a)",
        border: `1px solid ${hovered ? project.color + "60" : "rgba(255,255,255,0.06)"}`,
        borderRadius: "20px",
        overflow: "hidden",
        transition: "all 0.35s ease",
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
        boxShadow: hovered
          ? `0 20px 60px rgba(0,0,0,0.5), 0 0 30px ${project.color}25`
          : "0 4px 20px rgba(0,0,0,0.3)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Imagen / Screenshot */}
      <div
        style={{
          position: "relative",
          width: "100%",
          aspectRatio: "16/9",
          overflow: "hidden",
          background: "linear-gradient(135deg, #1a1a2e, #16213e)",
          flexShrink: 0,
        }}
      >
        <img
          src={project.image}
          alt={project.title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "transform 0.4s ease",
            transform: hovered ? "scale(1.05)" : "scale(1)",
            display: "block",
          }}
          onError={(e) => {
            // Placeholder si no hay imagen
            (e.target as HTMLImageElement).style.display = "none";
          }}
        />

        <div
          style={{
            position: "absolute",
            inset: 0,
            background: hovered
              ? "linear-gradient(to bottom, transparent 50%, rgba(13,13,26,0.8) 100%)"
              : "linear-gradient(to bottom, transparent 60%, rgba(13,13,26,0.95) 100%)",
            transition: "all 0.35s ease",
          }}
        />

        <div
          style={{
            position: "absolute",
            top: "14px",
            left: "14px",
            background: project.color + "22",
            border: `1px solid ${project.color}55`,
            color: project.color,
            padding: "4px 12px",
            borderRadius: "20px",
            fontSize: "11px",
            fontWeight: 700,
            letterSpacing: "0.5px",
            backdropFilter: "blur(8px)",
          }}
        >
          {project.category}
        </div>
      </div>

      <div
        style={{
          padding: isMobile ? "18px" : "24px",
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          flex: 1,
        }}
      >
        {/* Título */}
        <h3
          style={{
            color: "#f1f5f9",
            fontSize: "18px",
            fontWeight: 700,
            margin: 0,
            lineHeight: 1.3,
          }}
        >
          {project.title}
        </h3>

        {/* Descripción */}
        <p
          style={{
            color: "#94a3b8",
            fontSize: "14px",
            lineHeight: "1.65",
            margin: 0,
          }}
        >
          {project.description}
        </p>

        {/* Tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
          {project.tags.map((tag) => (
            <span
              key={tag}
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "#cbd5e1",
                fontSize: isMobile ? "11px" : "12px",
                fontWeight: 500,
                padding: "3px 10px",
                borderRadius: "20px",
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Botones */}
        <div
          style={{
            display: "flex",
            gap: "10px",
            marginTop: "4px",
            flexDirection: "row",
          }}
        >
          {/* Código */}
          <a
            href={project.codeUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              background: "transparent",
              border: "1px solid rgba(255,255,255,0.15)",
              color: "#e2e8f0",
              padding: "9px 18px",
              borderRadius: "10px",
              fontSize: "13px",
              fontWeight: 600,
              textDecoration: "none",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.35)";
              e.currentTarget.style.background = "rgba(255,255,255,0.06)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)";
              e.currentTarget.style.background = "transparent";
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            Code
          </a>

          {/* Demo */}
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              background: `linear-gradient(135deg, ${project.color}, ${project.color}bb)`,
              border: "none",
              color: "#fff",
              padding: "9px 18px",
              borderRadius: "10px",
              fontSize: "13px",
              fontWeight: 600,
              textDecoration: "none",
              transition: "all 0.2s ease",
              boxShadow: `0 4px 15px ${project.color}40`,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.04)";
              e.currentTarget.style.boxShadow = `0 6px 22px ${project.color}70`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = `0 4px 15px ${project.color}40`;
            }}
          >
            <ExternalLink size={14} />
            Demo
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const { isMobile, isTablet } = useResponsive();
  return (
    <section
      id="proyectos"
      style={{
        background: "#0a0a0f",
        padding: isMobile ? "70px 0 60px" : "100px 0 80px",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "0",
          left: "50%",
          transform: "translateX(-50%)",
          width: "800px",
          height: "400px",
          background:
            "radial-gradient(ellipse, rgba(139,92,246,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: isMobile ? "0 16px" : isTablet ? "0 24px" : "0 40px",
        }}
      >
        {/* Header */}
        <div
          style={{
            textAlign: "center",
            marginBottom: isMobile ? "40px" : "60px",
          }}
        >
          {/* Badge PORTFOLIO */}
          <div style={{ marginBottom: "16px" }}>
            <span
              style={{
                display: "inline-block",
                border: "1px solid rgba(139,92,246,0.4)",
                color: "#a78bfa",
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "2px",
                padding: "6px 18px",
                borderRadius: "20px",
                background: "rgba(139,92,246,0.08)",
              }}
            >
              PORTFOLIO
            </span>
          </div>

          {/* Título */}
          <h2
            style={{
              fontSize: isMobile ? "30px" : isTablet ? "36px" : "44px",
              fontWeight: 900,
              margin: "0 0 16px",
              color: "#f1f5f9",
              lineHeight: 1.1,
            }}
          >
            Featured {" "}
            <span
              style={{
                background: "linear-gradient(135deg, #cb9dfe, #4b89e4)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Projects
            </span>
          </h2>

          {/* Subtítulo */}
          <p
            style={{
              color: "#94a3b8",
              fontSize: isMobile ? "14px" : "16px",
              maxWidth: "520px",
              margin: "0 auto",
              lineHeight: "1.7",
            }}
          >
            A selection of recent projects where I combine clean code, 
            modern design, and tangible results.
          </p>
        </div>

        {/* Grid 2x2 */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
            gap: isMobile ? "16px" : "24px",
          }}
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
