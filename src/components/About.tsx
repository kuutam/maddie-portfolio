"use client";

import { useState } from "react";
import { Rocket, Calendar, Heart, BookOpen } from "lucide-react";
import { useResponsive } from "@/hooks/useResponsive";


const stats = [
  {
    icon: <Rocket size={22} color="#8b5cf6" strokeWidth={1.8} />,
    value: "7+",
    label: "Projects Built",
  },
  {
    icon: <Calendar size={22} color="#8b5cf6" strokeWidth={1.8} />,
    value: "5+",
    label: "Years of Experience",
  },
  {
    icon: <Heart size={22} color="#8b5cf6" strokeWidth={1.8} />,
    value: "100%",
    label: "Dedicated",
  },
  {
    icon: <BookOpen size={22} color="#8b5cf6" strokeWidth={1.8} />,
    value: "∞",
    label: "Constant Learning",
  },
];


function StatCard({ stat }: { stat: typeof stats[0] }) {
  const [hovered, setHovered] = useState(false);

 

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "linear-gradient(145deg, #13131f, #0f0f1a)",
        border: `1px solid ${hovered ? "rgba(139,92,246,0.4)" : "rgba(139,92,246,0.15)"}`,
        borderRadius: "16px",
        padding: "28px 24px",
        display: "flex", flexDirection: "column", gap: "10px",
        transition: "all 0.3s ease",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        boxShadow: hovered
          ? "0 12px 40px rgba(0,0,0,0.4), 0 0 20px rgba(139,92,246,0.15)"
          : "0 4px 20px rgba(0,0,0,0.2)",
        cursor: "default",
      }}
    >
      {/* Icono */}
      <div style={{
        width: "40px", height: "40px", borderRadius: "10px",
        background: "rgba(139,92,246,0.1)",
        border: "1px solid rgba(139,92,246,0.2)",
        display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        {stat.icon}
      </div>

      {/* Número */}
      <div style={{
        fontSize: "32px", fontWeight: 900, lineHeight: 1,
        background: "linear-gradient(135deg, #cb9dfe, #4b89e4)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
      }}>
        {stat.value}
      </div>

      {/* Label */}
      <p style={{ color: "#94a3b8", fontSize: "14px", margin: 0, lineHeight: 1.4 }}>
        {stat.label}
      </p>
    </div>
  );
}

export default function About() {
  
  const { isMobile, isTablet } = useResponsive();
  const isSmall = isMobile || isTablet;

  return (
    <section id="sobre-mi" style={{
      background: "#0a0a0f",
      padding: "100px 0",
      position: "relative",
      overflow: "hidden",
    }}>

      {/* Glow fondo */}
      <div style={{
        position: "absolute", bottom: 0, left: "20%",
        width: "600px", height: "400px",
        background: "radial-gradient(ellipse, rgba(139,92,246,0.07) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 40px" }}>

        {/* Header centrado */}
        <div style={{ textAlign: "center", marginBottom: "72px" }}>

          {/* Badge */}
          <div style={{ marginBottom: "20px" }}>
            <span style={{
              display: "inline-block",
              border: "1px solid rgba(139,92,246,0.4)",
              color: "#a78bfa", fontSize: "11px", fontWeight: 700,
              letterSpacing: "2px", padding: "6px 18px", borderRadius: "20px",
              background: "rgba(139,92,246,0.08)",
            }}>
              ABOUT ME
            </span>
          </div>

          {/* Título */}
          <h2 style={{
            fontSize: "44px", fontWeight: 900,
            color: "#f1f5f9", lineHeight: 1.2,
            margin: 0, maxWidth: "700px",
            marginLeft: "auto", marginRight: "auto",
          }}>
            Passionate about creating {" "}
            <span style={{
              background: "linear-gradient(135deg, #cb9dfe, #4b89e4)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              digital solutions
            </span>
          </h2>
        </div>

        {/* Contenido: texto izquierda + stats derecha */}
        <div style={{
          display: "grid",
          gridTemplateColumns: isSmall ? "1fr" : "1fr 1fr",
          gap: isSmall ? "48px" : "80px",
          alignItems: "center",
        }}>

          {/* IZQUIERDA — Texto */}
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>

            <p style={{ color: "#cbd5e1", fontSize: "16px", lineHeight: "1.8", margin: 0 }}>
              I am a {" "}
              <strong style={{ color: "#f1f5f9", fontWeight: 700 }}>Computer Science</strong>
              {" "}student and Junior Full Stack Developer. I love solving problems and translating ideas
              into clean, accessible interfaces with purpose.
            </p>

            <p style={{ color: "#cbd5e1", fontSize: "16px", lineHeight: "1.8", margin: 0 }}>
              I have developed web and mobile applications, integrated REST APIs, and worked on both
              frontend and backend. I am passionate about the combination of {" "}
              <strong style={{ color: "#f1f5f9", fontWeight: 700 }}>carefully designed UI/UX</strong>
              {" "}and scalable architecture.
            </p>

            <p style={{ color: "#cbd5e1", fontSize: "16px", lineHeight: "1.8", margin: 0 }}>
              I am currently exploring{" "}
              <span style={{
                background: "linear-gradient(135deg, #cb9dfe, #4b89e4)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                fontWeight: 600,
              }}>
                cloud computing, AI integration, and scalable systems
              </span>
              {" "}— always with the mind set on building products that people love to use.
            </p>

          </div>

          {/* DERECHA — Grid de stats */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "16px",
          }}>
            {stats.map((stat, i) => (
              <StatCard key={i} stat={stat} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}