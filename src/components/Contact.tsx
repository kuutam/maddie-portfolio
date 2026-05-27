"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import emailjs from "@emailjs/browser";
import { useResponsive } from "@/hooks/useResponsive";

const EMAILJS_SERVICE_ID = "service_u9r98fk";
const EMAILJS_TEMPLATE_ID = "template_9mf0218";
const EMAILJS_PUBLIC_KEY = "JP4kXjR9c6EosZckY";

const socialLinks = [
  {
    name: "GitHub",
    handle: "@kuutam_o",
    url: "https://github.com/kuutam",
    color: "#8b5cf6",
    iconBg: "linear-gradient(135deg, #6d28d9, #4c1d95)",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    handle: "Madeline Ascencio",
    url: "https://www.linkedin.com/in/kuutam/",
    color: "#3b82f6",
    iconBg: "linear-gradient(135deg, #2563eb, #1d4ed8)",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    handle: "@kaihackss",
    url: "https://youtube.com/@kaihackss",
    color: "#ef4444",
    iconBg: "linear-gradient(135deg, #dc2626, #b91c1c)",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
        <polygon
          points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"
          fill="#dc2626"
        />
      </svg>
    ),
  },
  {
    name: "TikTok",
    handle: "@kaihacks",
    url: "https://tiktok.com/@kaihacks",
    color: "#ec4899",
    iconBg: "linear-gradient(135deg, #be185d, #9d174d)",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.75a8.16 8.16 0 0 0 4.78 1.52V6.82a4.85 4.85 0 0 1-1.01-.13z" />
      </svg>
    ),
  },
];

function SocialCard({ social }: { social: (typeof socialLinks)[0] }) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={social.url}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "16px",
        background: "linear-gradient(145deg, #13131f, #0f0f1a)",
        border: `1px solid ${hovered ? social.color + "50" : "rgba(255,255,255,0.07)"}`,
        borderRadius: "16px",
        padding: "20px 24px",
        textDecoration: "none",
        transition: "all 0.3s ease",
        transform: hovered ? "translateX(6px)" : "translateX(0)",
        boxShadow: hovered
          ? `0 8px 30px rgba(0,0,0,0.4), 0 0 20px ${social.color}20`
          : "0 4px 16px rgba(0,0,0,0.2)",
      }}
    >
      {/* Ícono */}
      <div
        style={{
          width: "48px",
          height: "48px",
          borderRadius: "12px",
          background: social.iconBg,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          boxShadow: `0 4px 14px ${social.color}40`,
          transition: "transform 0.3s ease",
          transform: hovered ? "scale(1.1)" : "scale(1)",
        }}
      >
        {social.icon}
      </div>

      {/* Texto */}
      <div>
        <p
          style={{
            color: hovered ? "#f1f5f9" : "#e2e8f0",
            fontSize: "16px",
            fontWeight: 700,
            margin: "0 0 2px",
            transition: "color 0.2s",
          }}
        >
          {social.name}
        </p>
        <p
          style={{
            color: hovered ? social.color : "#64748b",
            fontSize: "13px",
            margin: 0,
            transition: "color 0.2s",
          }}
        >
          {social.handle}
        </p>
      </div>

      {/* Flecha */}
      <div
        style={{
          marginLeft: "auto",
          color: hovered ? social.color : "#374151",
          fontSize: "18px",
          transition: "all 0.3s ease",
          transform: hovered ? "translateX(3px)" : "translateX(0)",
        }}
      >
        →
      </div>
    </a>
  );
}

export default function Contact() {
  const { isMobile, isTablet } = useResponsive();
  const isSmall = isMobile || isTablet;

  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    asunto: "",
    mensaje: "",
  });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const [error, setError] = useState<string | null>(null);
  const [notification, setNotification] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  // Función para mostrar notificación
  const showNotification = (type: "success" | "error", message: string) => {
    setNotification({ type, message });
    setTimeout(() => setNotification(null), 4000);
  };

  const inputStyle = (): React.CSSProperties => ({
    width: "100%",
    padding: "14px 16px",
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "12px",
    color: "#f1f5f9",
    fontSize: "14px",
    outline: "none",
    transition: "border-color 0.2s ease",
    boxSizing: "border-box",
    fontFamily: "inherit",
  });

  const handleSubmit = async () => {
    setError(null);

    if (!formData.nombre || !formData.email || !formData.mensaje) {
      setError("Please enter your name, email address, and message.");
      return;
    }

    setSending(true);

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.nombre,
          from_email: formData.email,
          subject: formData.asunto || "Message from the portfolio",
          message: formData.mensaje,
          to_email: "maddiedev104@gmail.com",
        },
        EMAILJS_PUBLIC_KEY,
      );

      setSent(true);
      setFormData({ nombre: "", email: "", asunto: "", mensaje: "" });
      showNotification("success", "Message sent! I'll get back to you soon 🚀");
      setTimeout(() => setSent(false), 4000);
    } catch (error) {
      console.error("Error al enviar:", error);
      showNotification("error", "There was an error sending the message. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section
      id="contacto"
      style={{
        background: "#0a0a0f",
        padding: "100px 0 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* ── TOAST FLOTANTE ── */}
      {notification && (
        <div
          style={{
            position: "fixed",
            top: "24px",
            right: "24px",
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            gap: "12px",
            background:
              notification.type === "success"
                ? "linear-gradient(135deg, #14532d, #166534)"
                : "linear-gradient(135deg, #7f1d1d, #991b1b)",
            border: `1px solid ${notification.type === "success" ? "rgba(34,197,94,0.4)" : "rgba(239,68,68,0.4)"}`,
            borderRadius: "14px",
            padding: "16px 20px",
            boxShadow:
              notification.type === "success"
                ? "0 8px 32px rgba(22,163,74,0.3)"
                : "0 8px 32px rgba(239,68,68,0.3)",
            animation: "slideIn 0.4s ease",
            maxWidth: "360px",
          }}
        >
          <style>{`
          @keyframes slideIn {
            from { transform: translateX(120%); opacity: 0; }
            to   { transform: translateX(0);    opacity: 1; }
          }
        `}</style>

          {/* Ícono */}
          <div
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "10px",
              flexShrink: 0,
              background:
                notification.type === "success"
                  ? "rgba(34,197,94,0.2)"
                  : "rgba(239,68,68,0.2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "18px",
            }}
          >
            {notification.type === "success" ? "✅" : "⚠️"}
          </div>

          {/* Texto */}
          <div>
            <p
              style={{
                color: "#f1f5f9",
                fontSize: "14px",
                fontWeight: 700,
                margin: "0 0 2px",
              }}
            >
              {notification.type === "success" ? "¡Sent!" : "Error"}
            </p>
            <p style={{ color: "#cbd5e1", fontSize: "13px", margin: 0 }}>
              {notification.message}
            </p>
          </div>

          {/* Cerrar */}
          <button
            onClick={() => setNotification(null)}
            style={{
              marginLeft: "auto",
              background: "transparent",
              border: "none",
              color: "#94a3b8",
              cursor: "pointer",
              fontSize: "16px",
              padding: "4px",
              lineHeight: 1,
            }}
          >
            ✕
          </button>
        </div>
      )}

      {/* Glow fondo */}
      <div
        style={{
          position: "absolute",
          bottom: "20%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "700px",
          height: "400px",
          background:
            "radial-gradient(ellipse, rgba(139,92,246,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1400px", margin: "0 auto", padding: isMobile ? "0 16px" : isTablet ? "0 24px" : "0 40px" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: isMobile ? "40px" : "64px" }}>
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
              CONTACT ME
            </span>
          </div>
          <h2
            style={{
              fontSize: isMobile ? "32px" : isTablet ? "40px" : "48px", 
              fontWeight: 900,
              color: "#f1f5f9",
              margin: "0 0 16px",
              lineHeight: 1.1,
            }}
          >
            Let's build something{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #cb9dfe, #4b89e4)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              amazing
            </span>
          </h2>
          <p style={{ color: "#94a3b8", fontSize: "16px", margin: 0 }}>
            Do you have an idea, project, or collaboration in mind? Write it down to me.
          </p>
        </div>

        {/* Grid: formulario + redes */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isSmall ? "1fr" : "1.2fr 1fr",
            gap: "32px",
            alignItems: "start",
          }}
        >
          {/* FORMULARIO */}
          <div
            style={{
              background: "linear-gradient(145deg, #13131f, #0f0f1a)",
              border: "1px solid rgba(139,92,246,0.2)",
              borderRadius: "24px",
              padding: isMobile ? "24px 20px" : "40px",
            }}
          >
            {/* Nombre + Email */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: isSmall ? "1fr" : "1.2fr 1fr",
                gap: "16px",
                marginBottom: "20px",
              }}
            >
              <div>
                <label
                  style={{
                    display: "block",
                    color: "#94a3b8",
                    fontSize: "13px",
                    fontWeight: 500,
                    marginBottom: "8px",
                  }}
                >
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  value={formData.nombre}
                  onChange={(e) =>
                    setFormData({ ...formData, nombre: e.target.value })
                  }
                  style={inputStyle()}
                  onFocus={(e) =>
                    (e.target.style.borderColor = "rgba(139,92,246,0.6)")
                  }
                  onBlur={(e) =>
                    (e.target.style.borderColor = "rgba(255,255,255,0.1)")
                  }
                />
              </div>
              <div>
                <label
                  style={{
                    display: "block",
                    color: "#94a3b8",
                    fontSize: "13px",
                    fontWeight: 500,
                    marginBottom: "8px",
                  }}
                >
                  Email
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  style={inputStyle()}
                  onFocus={(e) =>
                    (e.target.style.borderColor = "rgba(139,92,246,0.6)")
                  }
                  onBlur={(e) =>
                    (e.target.style.borderColor = "rgba(255,255,255,0.1)")
                  }
                />
              </div>
            </div>

            {/* Asunto */}
            <div style={{ marginBottom: "20px" }}>
              <label
                style={{
                  display: "block",
                  color: "#94a3b8",
                  fontSize: "13px",
                  fontWeight: 500,
                  marginBottom: "8px",
                }}
              >
                Subject
              </label>
              <input
                type="text"
                placeholder="What do you want to talk about?"
                value={formData.asunto}
                onChange={(e) =>
                  setFormData({ ...formData, asunto: e.target.value })
                }
                style={inputStyle()}
                onFocus={(e) =>
                  (e.target.style.borderColor = "rgba(139,92,246,0.6)")
                }
                onBlur={(e) =>
                  (e.target.style.borderColor = "rgba(255,255,255,0.1)")
                }
              />
            </div>

            {/* Mensaje */}
            <div style={{ marginBottom: "28px" }}>
              <label
                style={{
                  display: "block",
                  color: "#94a3b8",
                  fontSize: "13px",
                  fontWeight: 500,
                  marginBottom: "8px",
                }}
              >
                Message
              </label>
              <textarea
                placeholder="Tell me about your project..."
                rows={5}
                value={formData.mensaje}
                onChange={(e) =>
                  setFormData({ ...formData, mensaje: e.target.value })
                }
                style={{ ...inputStyle(), resize: "none" }}
                onFocus={(e) =>
                  (e.target.style.borderColor = "rgba(139,92,246,0.6)")
                }
                onBlur={(e) =>
                  (e.target.style.borderColor = "rgba(255,255,255,0.1)")
                }
              />
            </div>

            {error && (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  background: "rgba(239,68,68,0.08)",
                  border: "1px solid rgba(239,68,68,0.25)",
                  borderRadius: "10px",
                  padding: "12px 16px",
                  marginBottom: "16px",
                }}
              >
                <span style={{ fontSize: "16px" }}>⚠️</span>
                <p
                  style={{
                    color: "#fca5a5",
                    fontSize: "13px",
                    margin: 0,
                    fontWeight: 500,
                  }}
                >
                  {error}
                </p>
                <button
                  onClick={() => setError(null)}
                  style={{
                    marginLeft: "auto",
                    background: "transparent",
                    border: "none",
                    color: "#f87171",
                    cursor: "pointer",
                    fontSize: "14px",
                  }}
                >
                  ✕
                </button>
              </div>
            )}

            {/* Botón enviar */}
            <button
              onClick={handleSubmit}
              disabled={sending || sent}
              style={{
                width: "100%",
                padding: "16px",
                background: sent
                  ? "linear-gradient(135deg, #16a34a, #15803d)"
                  : "linear-gradient(135deg, #8b5cf6, #4b89e4)",
                border: "none",
                borderRadius: "12px",
                color: "#fff",
                fontSize: "15px",
                fontWeight: 700,
                cursor: sending ? "wait" : "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
                transition: "all 0.3s ease",
                boxShadow: "0 4px 20px rgba(139,92,246,0.4)",
                opacity: sending ? 0.8 : 1,
              }}
              onMouseEnter={(e) => {
                if (!sending && !sent) {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 30px rgba(139,92,246,0.6)";
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 4px 20px rgba(139,92,246,0.4)";
              }}
            >
              {sent ? (
                "✅ Message sent!"
              ) : sending ? (
                "Sending..."
              ) : (
                <>
                  Send message
                  <Send size={16} />
                </>
              )}
            </button>
          </div>

          {/* REDES SOCIALES */}
          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            {socialLinks.map((social, i) => (
              <SocialCard key={i} social={social} />
            ))}
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div
        style={{
          marginTop: "80px",
          borderTop: "1px solid rgba(255,255,255,0.06)",
          padding: isMobile ? "24px 16px" : "28px 40px",
          textAlign: "center",
          color: "#4b5563",
          fontSize: "14px",
        }}
      >
        © 2026{" "}
        <span
          style={{
            background: "linear-gradient(135deg, #cb9dfe, #4b89e4)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            fontWeight: 600,
          }}
        >
          Maddie.dev
        </span>{" "}
        — Made with ❤️ and lots of coffee ☕
      </div>
    </section>
  );
}
