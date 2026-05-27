"use client";

import { useState, useEffect } from "react";
import {
  Layout,
  Server,
  Cloud,
  Wrench,
  Search,
  Palette,
  Code2,
  Rocket,
} from "lucide-react";
import { useResponsive } from "@/hooks/useResponsive";

const skillCategories = [
  {
    icon: <Layout size={24} color="#fff" />,
    iconBg: "linear-gradient(135deg, #8b5cf6, #7c3aed)",
    title: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS", "Flutter"],
  },
  {
    icon: <Server size={24} color="#fff" />,
    iconBg: "linear-gradient(135deg, #3b82f6, #2563eb)",
    title: "Backend",
    skills: ["Java", "C#", "PHP", "Python", "Node.js", "GraphQL", "CI/CD"],
  },
  {
    icon: <Cloud size={24} color="#fff" />,
    iconBg: "linear-gradient(135deg, #06b6d4, #0891b2)",
    title: "Cloud & Database",
    skills: ["AWS", "PostgreSQL", "MySQL", "REST APIs", "MongoDB"],
  },
  {
    icon: <Wrench size={24} color="#fff" />,
    iconBg: "linear-gradient(135deg, #ec4899, #db2777)",
    title: "Tools & Design",
    skills: ["Git", "GitHub", "Figma", "Linux", "Claude Code", "OpenAI"],
  },
];

const workflowSteps = [
  {
    number: "1",
    icon: <Search size={22} color="#fff" />,
    title: "Discover",
    description:
      "I research user needs, users, and objectives before writing a single line.",
  },
  {
    number: "2",
    icon: <Palette size={22} color="#fff" />,
    title: "Design",
    description:
      "I create sketches, wireframes, and UI designs with a focus on clarity and user experience.",
  },
  {
    number: "3",
    icon: <Code2 size={22} color="#fff" />,
    title: "Build",
    description: "Modular code, scalable and with modern best practices.",
  },
  {
    number: "4",
    icon: <Rocket size={22} color="#fff" />,
    title: "Test and Optimize",
    description: "QA, performance and feedback until everything is polished.",
  },
];

function SkillCard({ category }: { category: (typeof skillCategories)[0] }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "linear-gradient(145deg, #13131f, #0f0f1a)",
        border: `1px solid ${hovered ? "rgba(139,92,246,0.35)" : "rgba(255,255,255,0.07)"}`,
        borderRadius: "20px",
        padding: "32px 28px",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        transition: "all 0.3s ease",
        transform: hovered ? "translateY(-5px)" : "translateY(0)",
        boxShadow: hovered
          ? "0 16px 48px rgba(0,0,0,0.4), 0 0 24px rgba(139,92,246,0.12)"
          : "0 4px 20px rgba(0,0,0,0.25)",
        cursor: "default",
      }}
    >
      <div
        style={{
          width: "52px",
          height: "52px",
          borderRadius: "14px",
          background: category.iconBg,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 16px rgba(0,0,0,0.3)",
        }}
      >
        {category.icon}
      </div>

      <h3
        style={{
          color: "#f1f5f9",
          fontSize: "18px",
          fontWeight: 800,
          margin: 0,
        }}
      >
        {category.title}
      </h3>

      <ul
        style={{
          margin: 0,
          padding: 0,
          listStyle: "none",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        {category.skills.map((skill) => (
          <li
            key={skill}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              color: "#94a3b8",
              fontSize: "14px",
            }}
          >
            <span
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: "linear-gradient(135deg, #8b5cf6, #4b89e4)",
                flexShrink: 0,
              }}
            />
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Skills() {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const { isMobile, isTablet } = useResponsive();
  const isSmall = isMobile || isTablet;
  useEffect(() => {
    let step = 0;
    let timeout: ReturnType<typeof setTimeout>;

    const runSequence = () => {
      if (step < workflowSteps.length) {
        setActiveStep(step);
        step++;
        timeout = setTimeout(runSequence, 1400);
      } else {
        setActiveStep(null);
        step = 0;
        timeout = setTimeout(runSequence, 2500);
      }
    };

    timeout = setTimeout(runSequence, 1000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section
      id="habilidades"
      style={{
        background: "#0a0a0f",
        padding: "100px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <style>{`
        @keyframes pulse-step {
          0%   { box-shadow: 0 0 0 0px rgba(139,92,246,0.6), 0 8px 24px rgba(139,92,246,0.3); }
          50%  { box-shadow: 0 0 0 12px rgba(139,92,246,0.08), 0 8px 24px rgba(139,92,246,0.3); }
          100% { box-shadow: 0 0 0 0px rgba(139,92,246,0.0), 0 8px 24px rgba(139,92,246,0.3); }
        }
        @keyframes pulse-ring {
          0%   { transform: translate(-50%, -50%) scale(1); opacity: 0.4; }
          100% { transform: translate(-50%, -50%) scale(1.7); opacity: 0; }
        }
      `}</style>

      <div
        style={{
          position: "absolute",
          top: "10%",
          right: "-10%",
          width: "500px",
          height: "500px",
          background:
            "radial-gradient(circle, rgba(139,92,246,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 40px" }}>
        {/* ── HABILIDADES HEADER ── */}
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
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
              STACK
            </span>
          </div>
          <h2
            style={{
              fontSize: "44px",
              fontWeight: 900,
              color: "#f1f5f9",
              lineHeight: 1.15,
              margin: "0 0 16px",
            }}
          >
            Skills &{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #cb9dfe, #4b89e4)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Technologies
            </span>
          </h2>
          <p style={{ color: "#94a3b8", fontSize: "16px", margin: 0 }}>
            The tools I use to bring every idea to life.  
          </p>
        </div>

        {/* Grid 4 columnas */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile
              ? "1fr 1fr"
              : isTablet
                ? "repeat(2, 1fr)"
                : "repeat(4, 1fr)",
            gap: "20px",
            marginBottom: "120px",
          }}
        >
          {skillCategories.map((cat, i) => (
            <SkillCard key={i} category={cat} />
          ))}
        </div>

        {/* ── PROCESO HEADER ── */}
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
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
              PROCESS
            </span>
          </div>
          <h2
            style={{
              fontSize: "44px",
              fontWeight: 900,
              color: "#f1f5f9",
              lineHeight: 1.15,
              margin: "0 0 16px",
            }}
          >
            My {" "}
            <span
              style={{
                background: "linear-gradient(135deg, #cb9dfe, #4b89e4)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Workflow
            </span>
          </h2>
          <p style={{ color: "#94a3b8", fontSize: "16px", margin: 0 }}>
            Four steps to take any idea from concept to production.
          </p>
        </div>

        {/* ── TIMELINE CON ANIMACIÓN ── */}
        <div style={{ position: "relative" }}>
          {/* Línea horizontal — solo desktop */}
          {!isMobile && !isTablet && (
            <div
              style={{
                position: "absolute",
                top: "36px",
                left: "12.5%",
                right: "12.5%",
                height: "2px",
                background:
                  "linear-gradient(90deg, rgba(139,92,246,0.2), rgba(139,92,246,0.6), rgba(75,137,228,0.6), rgba(75,137,228,0.2))",
                zIndex: 0,
              }}
            />
          )}

          {/* ── MÓVIL: timeline vertical lateral ── */}
          {isMobile ? (
            <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
              {workflowSteps.map((step, i) => {
                const isActive = activeStep === i;
                const isLast = i === workflowSteps.length - 1;
                return (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      gap: "20px",
                      alignItems: "flex-start",
                    }}
                  >
                    {/* Columna izquierda: círculo + línea */}
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        flexShrink: 0,
                      }}
                    >
                      {/* Círculo */}
                      <div style={{ position: "relative" }}>
                        {isActive && (
                          <div
                            style={{
                              position: "absolute",
                              top: "50%",
                              left: "50%",
                              width: "64px",
                              height: "64px",
                              borderRadius: "50%",
                              background: "rgba(139,92,246,0.2)",
                              animation: "pulse-ring 1s ease-out infinite",
                              zIndex: 0,
                            }}
                          />
                        )}
                        <div
                          style={{
                            position: "absolute",
                            top: "-5px",
                            right: "-5px",
                            width: "18px",
                            height: "18px",
                            borderRadius: "50%",
                            background: isActive
                              ? "linear-gradient(135deg, #c4b5fd, #93c5fd)"
                              : "linear-gradient(135deg, #8b5cf6, #4b89e4)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "9px",
                            fontWeight: 800,
                            color: "#fff",
                            zIndex: 2,
                          }}
                        >
                          {step.number}
                        </div>
                        <div
                          style={{
                            width: "64px",
                            height: "64px",
                            borderRadius: "50%",
                            background: isActive
                              ? "linear-gradient(135deg, #8b5cf6, #6d28d9)"
                              : "linear-gradient(135deg, #4c1d95, #3b3f8c)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            position: "relative",
                            zIndex: 1,
                            animation: isActive
                              ? "pulse-step 1.1s ease-in-out infinite"
                              : "none",
                            transform: isActive ? "scale(1.08)" : "scale(1)",
                            transition:
                              "transform 0.3s ease, background 0.3s ease",
                            flexShrink: 0,
                          }}
                        >
                          {step.icon}
                        </div>
                      </div>

                      {/* Línea vertical del círculo */}
                      {!isLast && (
                        <div
                          style={{
                            width: "2px",
                            flex: 1,
                            minHeight: "60px",
                            background:
                              "linear-gradient(180deg, rgba(139,92,246,0.7), rgba(75,137,228,0.5))",
                            marginTop: "4px",
                            marginBottom: "4px",
                          }}
                        />
                      )}
                    </div>

                    {/* Columna derecha: texto */}
                    <div
                      style={{
                        paddingTop: "14px",
                        paddingBottom: isLast ? "0" : "40px",
                      }}
                    >
                      <h4
                        style={{
                          color: isActive ? "#f1f5f9" : "#cbd5e1",
                          fontSize: "16px",
                          fontWeight: 700,
                          margin: "0 0 8px",
                          lineHeight: 1.3,
                          transition: "color 0.3s ease",
                        }}
                      >
                        {step.title}
                      </h4>
                      <p
                        style={{
                          color: isActive ? "#94a3b8" : "#4b5563",
                          fontSize: "14px",
                          lineHeight: "1.65",
                          margin: 0,
                          transition: "color 0.3s ease",
                        }}
                      >
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            /* ── DESKTOP/TABLET: grid horizontal ── */
            <div
              style={{
                display: "grid",
                gridTemplateColumns: isTablet
                  ? "repeat(2, 1fr)"
                  : "repeat(4, 1fr)",
                gap: "24px",
                position: "relative",
                zIndex: 1,
              }}
            >
              {workflowSteps.map((step, i) => {
                const isActive = activeStep === i;
                return (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      textAlign: "center",
                      gap: "20px",
                    }}
                  >
                    <div style={{ position: "relative" }}>
                      {isActive && (
                        <div
                          style={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            width: "72px",
                            height: "72px",
                            borderRadius: "50%",
                            background: "rgba(139,92,246,0.2)",
                            animation: "pulse-ring 1s ease-out infinite",
                            zIndex: 0,
                          }}
                        />
                      )}
                      <div
                        style={{
                          position: "absolute",
                          top: "-6px",
                          right: "-6px",
                          width: "20px",
                          height: "20px",
                          borderRadius: "50%",
                          background: isActive
                            ? "linear-gradient(135deg, #c4b5fd, #93c5fd)"
                            : "linear-gradient(135deg, #8b5cf6, #4b89e4)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "10px",
                          fontWeight: 800,
                          color: "#fff",
                          zIndex: 2,
                        }}
                      >
                        {step.number}
                      </div>
                      <div
                        style={{
                          width: "72px",
                          height: "72px",
                          borderRadius: "50%",
                          background: isActive
                            ? "linear-gradient(135deg, #8b5cf6, #6d28d9)"
                            : "linear-gradient(135deg, #4c1d95, #3b3f8c)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          position: "relative",
                          zIndex: 1,
                          animation: isActive
                            ? "pulse-step 1.1s ease-in-out infinite"
                            : "none",
                          transform: isActive ? "scale(1.1)" : "scale(1)",
                          transition:
                            "transform 0.3s ease, background 0.3s ease",
                        }}
                      >
                        {step.icon}
                      </div>
                    </div>
                    <h4
                      style={{
                        color: isActive ? "#f1f5f9" : "#94a3b8",
                        fontSize: "16px",
                        fontWeight: 700,
                        margin: 0,
                        lineHeight: 1.3,
                        transition: "color 0.3s ease",
                      }}
                    >
                      {step.title}
                    </h4>
                    <p
                      style={{
                        color: isActive ? "#94a3b8" : "#4b5563",
                        fontSize: "14px",
                        lineHeight: "1.65",
                        margin: 0,
                        maxWidth: "220px",
                        transition: "color 0.3s ease",
                      }}
                    >
                      {step.description}
                    </p>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
