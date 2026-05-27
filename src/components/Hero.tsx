"use client";

import { useResponsive } from "@/hooks/useResponsive";

const iconBox = (extraStyle = {}): React.CSSProperties => ({
  position: "absolute",
  width: "56px",
  height: "56px",
  borderRadius: "16px",
  background: "linear-gradient(145deg, #1e1e2e, #16161f)",
  border: "1px solid rgba(139,92,246,0.25)",
  boxShadow: "0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 2,
  ...extraStyle,
});

export default function Hero() {
  const { isMobile, isTablet } = useResponsive();
  const isSmall = isMobile || isTablet;

  return (
    <section
      id="inicio"
      style={{
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
        background:
          "linear-gradient(135deg, #0f1342 0%, #1a0d2e 30%, #2d1949 60%, #0f1342 100%)",
      }}
    >
      <style>{`
        @keyframes gradient-shift {
          0%   { background-position: 0% 50%; }
          50%  { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes ping-dot {
          0%   { transform: scale(1); opacity: 1; }
          70%  { transform: scale(2.2); opacity: 0; }
          100% { transform: scale(1); opacity: 0; }
        }
        @keyframes btn-shine {
          0%   { left: -100%; }
          100% { left: 200%; }
        }
        @keyframes pulse-outer {
          0%, 100% { transform: scale(1); opacity: 0.5; }
          50% { transform: scale(1.1); opacity: 0.9; }
        }
        @keyframes pulse-inner {
          0%, 100% { transform: scale(1); opacity: 0.7; }
          50% { transform: scale(1.06); opacity: 1; }
        }
        @keyframes spin-border {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes float1 { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-14px); } }
        @keyframes float2 { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-10px); } }
        @keyframes float3 { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-16px); } }
        @keyframes float4 { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-12px); } }
        @keyframes star-float1 {
          0%, 100% { transform: translateY(0px) scale(1); opacity: 0.7; }
          33% { transform: translateY(-10px) scale(1.3); opacity: 1; }
          66% { transform: translateY(-5px) scale(0.9); opacity: 0.5; }
        }
        @keyframes star-float2 {
          0%, 100% { transform: translateY(0px) translateX(0px) scale(1); opacity: 0.6; }
          40% { transform: translateY(-8px) translateX(4px) scale(1.4); opacity: 1; }
          70% { transform: translateY(-3px) translateX(-2px) scale(0.8); opacity: 0.4; }
        }
        @keyframes star-float3 {
          0%, 100% { transform: translateY(0px) scale(1); opacity: 0.8; }
          50% { transform: translateY(-12px) scale(1.5); opacity: 1; }
          75% { transform: translateY(-6px) scale(0.7); opacity: 0.3; }
        }
      `}</style>

      {/* Glows de fondo */}
      <div
        style={{
          position: "absolute",
          top: "-100px",
          right: "-100px",
          width: "700px",
          height: "700px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(139,92,246,0.25) 0%, rgba(109,40,217,0.12) 40%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-150px",
          left: "-100px",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(75,137,228,0.18) 0%, rgba(15,19,66,0.1) 50%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at center, transparent 40%, rgba(10,8,20,0.6) 100%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Contenedor principal */}
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: isSmall ? "0 20px" : "0 40px",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          paddingTop: isSmall ? "90px" : "0",
          paddingBottom: isSmall ? "80px" : "0",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isSmall ? "1fr" : "1fr 1fr",
            gap: isSmall ? "40px" : "48px",
            alignItems: "center",
            width: "100%",
            position: "relative",
            zIndex: 5,
          }}
        >
          {/* FOTO movil */}
          {isSmall && <FotoCirculo size={isTablet ? 280 : 220} />}

          {/* LADO IZQUIERDO — texto */}
          <div
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
          >
            {/* Badge disponibilidad — ARRIBA DE TODO */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  background: "rgba(10, 10, 20, 0.7)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  borderRadius: "999px",
                  padding: "8px 16px",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                }}
              >
                {/* Punto verde pulsante */}
                <span
                  style={{
                    position: "relative",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <span
                    style={{
                      position: "absolute",
                      width: "14px",
                      height: "14px",
                      borderRadius: "50%",
                      background: "rgba(34,197,94,0.4)",
                      animation: "ping-dot 1.5s ease-out infinite",
                    }}
                  />
                  <span
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      background: "#22c55e",
                      boxShadow: "0 0 8px rgba(34,197,94,0.8)",
                      display: "inline-block",
                      position: "relative",
                      zIndex: 1,
                    }}
                  />
                </span>
                <span
                  style={{
                    color: "#e2e8f0",
                    fontSize: "13px",
                    fontWeight: 500,
                  }}
                >
                  Available for new projects
                </span>
              </div>
            </div>

            {/* Saludo */}
            <p
              style={{
                color: "#94a3b8",
                fontSize: isSmall ? "14px" : "16px",
                margin: 0,
              }}
            >
              ¡Hello! 🤚 I'm
            </p>

            {/* Nombre + título */}
            <div>
              <h1
                style={{
                  fontSize: isMobile ? "48px" : isTablet ? "60px" : "72px",
                  fontWeight: 900,
                  color: "#ffffff",
                  lineHeight: 1,
                  marginBottom: "8px",
                }}
              >
                Maddie
              </h1>
              <h2
                style={{
                  fontSize: isMobile ? "28px" : isTablet ? "36px" : "48px",
                  fontWeight: 900,
                  lineHeight: 1.1,
                  background:
                    "linear-gradient(270deg, #cb9dfe, #4b89e4, #885dfb, #cb9dfe)",
                  backgroundSize: "300% 300%",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  animation: "gradient-shift 4s ease infinite",
                }}
              >
                Full Stack Developer
              </h2>
            </div>

            {/* Descripción */}
            <p
              style={{
                color: "#94a3b8",
                fontSize: isSmall ? "14px" : "16px",
                lineHeight: "1.7",
                maxWidth: isSmall ? "100%" : "400px",
                margin: 0,
              }}
            >
              I create modern, fast, and functional web experiences that help businesses and individuals grow.
            </p>

            {/* Botones */}
            <div
              style={{
                display: "flex",
                gap: "12px",
                flexDirection: isMobile ? "column" : "row",
                flexWrap: "wrap",
              }}
            >
              <button
                onClick={() =>
                  document
                    .getElementById("proyectos")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  background: "linear-gradient(135deg, #885dfb, #4b89e4)",
                  color: "#fff",
                  border: "none",
                  borderRadius: "10px",
                  padding: "14px 24px",
                  fontSize: "15px",
                  fontWeight: 600,
                  cursor: "pointer",
                  position: "relative",
                  overflow: "hidden",
                  transition: "transform 0.2s ease, box-shadow 0.2s ease",
                  boxShadow: "0 0 20px rgba(136,93,251,0.35)",
                  width: isMobile ? "100%" : "auto",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform =
                    "translateY(-3px) scale(1.03)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 30px rgba(136,93,251,0.6)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0) scale(1)";
                  e.currentTarget.style.boxShadow =
                    "0 0 20px rgba(136,93,251,0.35)";
                }}
              >
                <span>My projects</span>
                <span>→</span>
              </button>

              <button
                onClick={() => window.open("/cv.pdf", "_blank")}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  background: "transparent",
                  color: "#fff",
                  border: "1px solid rgba(139,92,246,0.4)",
                  borderRadius: "10px",
                  padding: "14px 24px",
                  fontSize: "15px",
                  fontWeight: 600,
                  cursor: "pointer",
                  transition:
                    "transform 0.2s ease, border-color 0.2s ease, background 0.2s ease",
                  width: isMobile ? "100%" : "auto",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-3px)";
                  e.currentTarget.style.background = "rgba(136,93,251,0.1)";
                  e.currentTarget.style.borderColor = "rgba(203,157,254,0.7)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.borderColor = "rgba(139,92,246,0.4)";
                }}
              >
                Download CV <span>↓</span>
              </button>
            </div>
          </div>

          {/* FOTO — derecha */}
          {!isSmall && <FotoCirculo size={320} />}
        </div>
      </div>

      {/* Divisor */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "120px",
          background: "linear-gradient(to bottom, transparent, #0a0a0f)",
          pointerEvents: "none",
          zIndex: 4,
        }}
      />
    </section>
  );
}

function FotoCirculo({ size }: { size: number }) {
  const iconSize = size < 280 ? 44 : 56;

  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: size + 100,
      }}
    >
      {/* Glow exterior */}
      <div
        style={{
          position: "absolute",
          width: size + 100,
          height: size + 100,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(139,92,246,0.3) 0%, rgba(109,40,217,0.15) 50%, transparent 75%)",
          animation: "pulse-outer 3.5s ease-in-out infinite",
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: "absolute",
          width: size + 20,
          height: size + 20,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(139,92,246,0.5) 0%, rgba(109,40,217,0.25) 55%, transparent 75%)",
          animation: "pulse-inner 3.5s ease-in-out infinite 0.4s",
          zIndex: 0,
        }}
      />

      {/* Borde giratorio */}
      <div
        style={{
          position: "absolute",
          width: size,
          height: size,
          borderRadius: "50%",
          background:
            "conic-gradient(from 0deg, #8b5cf6, #ec4899, #06b6d4, #8b5cf6)",
          animation: "spin-border 4s linear infinite",
          zIndex: 1,
          padding: "3px",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "50%",
            background: "#0a0a0f",
          }}
        />
      </div>

      {/* Borde glow */}
      <div
        style={{
          position: "absolute",
          width: size - 2,
          height: size - 2,
          borderRadius: "50%",
          border: "3px solid transparent",
          background:
            "linear-gradient(#0a0a0f, #0a0a0f) padding-box, linear-gradient(135deg, #8b5cf6, #ec4899) border-box",
          boxShadow:
            "0 0 30px rgba(139,92,246,0.6), 0 0 60px rgba(236,72,153,0.3)",
          zIndex: 2,
        }}
      />

      {/* Foto */}
      <div
        style={{
          position: "absolute",
          width: size - 12,
          height: size - 12,
          borderRadius: "50%",
          overflow: "hidden",
          zIndex: 3,
        }}
      >
        <img
          src="/hero-photo.png"
          alt="Maddie"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "top center",
            display: "block",
            transform: "scale(1.02)",
          }}
        />
      </div>

      {/* Iconos flotantes */}
      <div
        style={{
          position: "absolute",
          top: "60px",
          left: "10px",
          width: `${iconSize}px`,
          height: `${iconSize}px`,
          borderRadius: "14px",
          background: "linear-gradient(145deg, #1e1e2e, #16161f)",
          border: "1px solid rgba(139,92,246,0.25)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 4,
          animation: "float1 3s ease-in-out infinite",
        }}
      >
        <span
          style={{
            color: "#8b5cf6",
            fontWeight: 800,
            fontSize: "13px",
            fontFamily: "monospace",
          }}
        >
          &lt;/&gt;
        </span>
      </div>

      <div
        style={{
          position: "absolute",
          top: "40px",
          right: "10px",
          width: `${iconSize}px`,
          height: `${iconSize}px`,
          borderRadius: "14px",
          background: "linear-gradient(145deg, #1e1e2e, #16161f)",
          border: "1px solid rgba(139,92,246,0.25)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 4,
          animation: "float2 3.8s ease-in-out infinite 0.5s",
        }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="2.2" fill="#61dafb" />
          <ellipse
            cx="12"
            cy="12"
            rx="10"
            ry="4"
            stroke="#61dafb"
            strokeWidth="1.2"
            fill="none"
          />
          <ellipse
            cx="12"
            cy="12"
            rx="10"
            ry="4"
            stroke="#61dafb"
            strokeWidth="1.2"
            fill="none"
            transform="rotate(60 12 12)"
          />
          <ellipse
            cx="12"
            cy="12"
            rx="10"
            ry="4"
            stroke="#61dafb"
            strokeWidth="1.2"
            fill="none"
            transform="rotate(120 12 12)"
          />
        </svg>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "80px",
          left: "10px",
          width: `${iconSize}px`,
          height: `${iconSize}px`,
          borderRadius: "14px",
          background: "linear-gradient(145deg, #1e1e2e, #16161f)",
          border: "1px solid rgba(139,92,246,0.25)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 4,
          animation: "float3 4.2s ease-in-out infinite 1s",
        }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="#38bdf8">
          <path d="M12 6C9.33 6 7.67 7.33 7 10c1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.91 1.35C13.39 10.85 14.49 12 17 12c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35C15.61 7.15 14.51 6 12 6zm-5 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.91 1.35C8.39 16.85 9.49 18 12 18c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35C10.61 13.15 9.51 12 7 12z" />
        </svg>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "60px",
          right: "10px",
          width: `${iconSize}px`,
          height: `${iconSize}px`,
          borderRadius: "14px",
          background: "linear-gradient(145deg, #1e1e2e, #16161f)",
          border: "1px solid rgba(139,92,246,0.25)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 4,
          animation: "float4 3.5s ease-in-out infinite 0.3s",
        }}
      >
        <span
          style={{
            color: "#f7df1e",
            fontWeight: 900,
            fontSize: "13px",
            fontFamily: "monospace",
          }}
        >
          JS
        </span>
      </div>

      {/* Estrellitas */}
      <div
        style={{
          position: "absolute",
          top: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 5,
          animation: "star-float1 2.8s ease-in-out infinite",
        }}
      >
        <div
          style={{
            width: "6px",
            height: "6px",
            borderRadius: "50%",
            background: "#a78bfa",
            boxShadow: "0 0 8px 3px rgba(167,139,250,0.8)",
          }}
        />
      </div>
      <div
        style={{
          position: "absolute",
          top: "45%",
          right: "0px",
          zIndex: 5,
          animation: "star-float2 3.4s ease-in-out infinite 0.6s",
        }}
      >
        <div
          style={{
            width: "5px",
            height: "5px",
            borderRadius: "50%",
            background: "#e879f9",
            boxShadow: "0 0 8px 3px rgba(232,121,249,0.8)",
          }}
        />
      </div>
      <div
        style={{
          position: "absolute",
          bottom: "30px",
          right: "50px",
          zIndex: 5,
          animation: "star-float3 2.5s ease-in-out infinite 1s",
        }}
      >
        <div
          style={{
            width: "4px",
            height: "4px",
            borderRadius: "50%",
            background: "#38bdf8",
            boxShadow: "0 0 8px 3px rgba(56,189,248,0.9)",
          }}
        />
      </div>
      <div
        style={{
          position: "absolute",
          bottom: "40px",
          left: "10px",
          zIndex: 5,
          animation: "star-float1 3.8s ease-in-out infinite 0.3s",
        }}
      >
        <div
          style={{
            width: "5px",
            height: "5px",
            borderRadius: "50%",
            background: "#a78bfa",
            boxShadow:
              "0 0 8px 3px rgba(167,139,250,0.8), 0 0 16px 6px rgba(139,92,246,0.4)",
          }}
        />
      </div>
      <div
        style={{
          position: "absolute",
          top: "160px",
          left: "0px",
          zIndex: 5,
          animation: "star-float2 3.1s ease-in-out infinite 1.5s",
        }}
      >
        <div
          style={{
            width: "3px",
            height: "3px",
            borderRadius: "50%",
            background: "#f0abfc",
            boxShadow:
              "0 0 6px 2px rgba(240,171,252,0.9), 0 0 12px 4px rgba(232,121,249,0.4)",
          }}
        />
      </div>
    </div>
  );
}
