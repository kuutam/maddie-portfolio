"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useResponsive } from "@/hooks/useResponsive";

const links = [
  { label: "Home", href: "#inicio", id: "inicio" },
  { label: "Projects", href: "#proyectos", id: "proyectos" },
  { label: "About Me", href: "#sobre-mi", id: "sobre-mi" },
  { label: "Skills", href: "#habilidades", id: "habilidades" },
  { label: "Contact", href: "#contacto", id: "contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [buttonHovered, setButtonHovered] = useState(false);
  const [logoHovered, setLogoHovered] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const { isMobile, isTablet, isReady } = useResponsive();
  const isSmall = isMobile || isTablet;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    links.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.4 },
      );
      observer.observe(el);
      observers.push(observer);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  // Cierra el menú si cambia a desktop
  useEffect(() => {
    if (!isSmall) setMenuOpen(false);
  }, [isSmall]);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          padding: isSmall ? "10px 16px" : "12px 24px",
        }}
      >
        <div
          style={{
            maxWidth: isSmall ? "100%" : "900px",
            margin: "0 auto",
            padding: isSmall ? "8px 16px" : "10px 28px",
            display: "grid",
            gridTemplateColumns: isSmall ? "1fr auto" : "1fr auto 1fr",
            gap: "12px",
            alignItems: "center",
            background: scrolled ? "rgba(12,10,22,0.92)" : "rgba(12,10,22,0.6)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            borderRadius: "999px",
            border: scrolled
              ? "1px solid rgba(139,92,246,0.25)"
              : "1px solid rgba(255,255,255,0.08)",
            boxShadow: scrolled
              ? "0 8px 32px rgba(0,0,0,0.4)"
              : "0 4px 20px rgba(0,0,0,0.2)",
            transition: "all 0.4s ease",
          }}
        >
          {/* ── LOGO ── */}
          <motion.a
            href="#inicio"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              textDecoration: "none",
              cursor: "pointer",
            }}
            onHoverStart={() => setLogoHovered(true)}
            onHoverEnd={() => setLogoHovered(false)}
            whileHover={{ scale: 1.04 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
          >
            <motion.div
              animate={{
                boxShadow: logoHovered
                  ? "0 0 22px rgba(139,92,246,0.8)"
                  : "0 0 12px rgba(139,92,246,0.35)",
              }}
              transition={{ duration: 0.3 }}
              style={{
                width: "38px",
                height: "38px",
                borderRadius: "10px",
                background: "linear-gradient(145deg, #7c3aed, #6d28d9)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid rgba(167,139,250,0.3)",
                position: "relative",
                overflow: "hidden",
                flexShrink: 0,
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "45%",
                  background: "rgba(255,255,255,0.08)",
                  borderRadius: "10px 10px 0 0",
                }}
              />
              <span
                style={{
                  color: "#e9d5ff",
                  fontFamily: "'Courier New', monospace",
                  fontWeight: 700,
                  fontSize: "13px",
                  letterSpacing: "-1px",
                  position: "relative",
                  zIndex: 1,
                  lineHeight: 1,
                }}
              >
                &lt;/&gt;
              </span>
            </motion.div>

            <motion.span
              animate={{ opacity: logoHovered ? 1 : 0.92 }}
              style={{
                fontWeight: 700,
                fontSize: "15px",
                letterSpacing: "-0.3px",
              }}
            >
              <span style={{ color: "#f1f5f9" }}>maddie</span>
              <span
                style={{
                  fontWeight: 800,
                  background: "linear-gradient(135deg, #cb9dfe, #4b89e4)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                .dev
              </span>
            </motion.span>
          </motion.a>

          {/* ── LINKS — solo desktop ── */}
          {!isSmall && (
            <ul
              style={{
                display: "flex",
                alignItems: "center",
                gap: "4px",
                listStyle: "none",
                margin: 0,
                padding: 0,
              }}
            >
              {links.map((link) => {
                const isActive = activeSection === link.id;
                const isHovered = hoveredLink === link.id;
                return (
                  <li key={link.id} style={{ position: "relative" }}>
                    <motion.a
                      href={link.href}
                      onHoverStart={() => setHoveredLink(link.id)}
                      onHoverEnd={() => setHoveredLink(null)}
                      animate={{
                        color: isActive
                          ? "#a78bfa"
                          : isHovered
                            ? "#e2e8f0"
                            : "#94a3b8",
                        textShadow: isActive
                          ? "0 0 12px rgba(167,139,250,0.6)"
                          : "none",
                      }}
                      transition={{ duration: 0.2 }}
                      style={{
                        display: "block",
                        padding: "8px 14px",
                        fontSize: "14px",
                        fontWeight: isActive ? 600 : 400,
                        textDecoration: "none",
                        borderRadius: "8px",
                        position: "relative",
                      }}
                    >
                      <AnimatePresence>
                        {isHovered && !isActive && (
                          <motion.span
                            key="hover-bg"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.15 }}
                            style={{
                              position: "absolute",
                              inset: 0,
                              background: "rgba(139,92,246,0.08)",
                              borderRadius: "8px",
                            }}
                          />
                        )}
                      </AnimatePresence>

                      {link.label}

                      <AnimatePresence>
                        {isActive && (
                          <motion.span
                            key="dot"
                            initial={{ opacity: 0, scale: 0, y: 2 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0 }}
                            transition={{
                              type: "spring",
                              stiffness: 500,
                              damping: 25,
                            }}
                            style={{
                              position: "absolute",
                              bottom: "2px",
                              left: "50%",
                              transform: "translateX(-50%)",
                              width: "5px",
                              height: "5px",
                              borderRadius: "50%",
                              background: "#8b5cf6",
                              boxShadow: "0 0 8px rgba(139,92,246,0.8)",
                              display: "block",
                            }}
                          />
                        )}
                      </AnimatePresence>
                    </motion.a>
                  </li>
                );
              })}
            </ul>
          )}

          {/* ── BOTÓN HABLEMOS (desktop) o HAMBURGUESA (móvil) ── */}
          {!isReady ? (
  // Placeholder invisible mientras detecta el tamaño
          <div style={{ width: "40px" }} />

          ): isSmall ? (
            <motion.button
              onClick={() => setMenuOpen(!menuOpen)}
              whileTap={{ scale: 0.92 }}
              style={{
                background: menuOpen
                  ? "rgba(139,92,246,0.35)"
                  : "rgba(139,92,246,0.2)",
                border: "1px solid rgba(167,139,250,0.5)",
                borderRadius: "10px",
                padding: "10px 12px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#c4b5fd", // más brillante
                boxShadow: "0 0 12px rgba(139,92,246,0.3)",
                flexShrink: 0,
              }}
            >
              <AnimatePresence mode="wait">
                {menuOpen ? (
                  <motion.div
                    key="x"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={22} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={22} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          ) : (
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <motion.a
                href="#contacto"
                onHoverStart={() => setButtonHovered(true)}
                onHoverEnd={() => setButtonHovered(false)}
                whileHover={{ scale: 1.05, y: -1 }}
                whileTap={{ scale: 0.97 }}
                animate={{
                  boxShadow: buttonHovered
                    ? "0 0 24px rgba(139,92,246,0.7), 0 8px 25px rgba(109,40,217,0.4)"
                    : "0 0 12px rgba(139,92,246,0.3), 0 4px 15px rgba(109,40,217,0.2)",
                }}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  background: "linear-gradient(135deg, #8b5cf6, #7c3aed)",
                  color: "#fff",
                  padding: "10px 22px",
                  borderRadius: "12px",
                  fontSize: "14px",
                  fontWeight: 600,
                  textDecoration: "none",
                  border: "1px solid rgba(167,139,250,0.3)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "40%",
                    background:
                      "linear-gradient(to bottom, rgba(255,255,255,0.12), transparent)",
                    borderRadius: "12px 12px 0 0",
                    pointerEvents: "none",
                  }}
                />
                <span style={{ position: "relative", zIndex: 1 }}>
                  Let's talk
                </span>
                <motion.span
                  animate={{ x: buttonHovered ? 3 : 0 }}
                  style={{ position: "relative", zIndex: 1, fontSize: "15px" }}
                >
                  →
                </motion.span>
              </motion.a>
            </div>
          )}
        </div>
      </motion.nav>

      {/* ── MENÚ MÓVIL DESPLEGABLE ── */}
      <AnimatePresence>
        {menuOpen && isSmall && (
          <motion.div
            initial={{ opacity: 0, y: -16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -16, scale: 0.97 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            style={{
              position: "fixed",
              top: "74px",
              left: "16px",
              right: "16px",
              zIndex: 48,
              background: "rgba(10,8,20,0.97)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              border: "1px solid rgba(139,92,246,0.2)",
              borderRadius: "20px",
              padding: "12px",
              boxShadow:
                "0 24px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(139,92,246,0.1)",
            }}
          >
            {links.map((link, i) => (
              <motion.a
                key={link.id}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "14px 16px",
                  color: activeSection === link.id ? "#a78bfa" : "#94a3b8",
                  fontSize: "15px",
                  fontWeight: activeSection === link.id ? 700 : 400,
                  textDecoration: "none",
                  borderRadius: "12px",
                  background:
                    activeSection === link.id
                      ? "rgba(139,92,246,0.1)"
                      : "transparent",
                  borderBottom:
                    i < links.length - 1
                      ? "1px solid rgba(255,255,255,0.04)"
                      : "none",
                  transition: "background 0.2s ease",
                }}
              >
                <span>{link.label}</span>
                {activeSection === link.id && (
                  <span
                    style={{
                      width: "6px",
                      height: "6px",
                      borderRadius: "50%",
                      background: "#8b5cf6",
                      boxShadow: "0 0 8px rgba(139,92,246,0.8)",
                    }}
                  />
                )}
              </motion.a>
            ))}

            {/* Botón Hablemos dentro del menú móvil */}
            <motion.a
              href="#contacto"
              onClick={() => setMenuOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.28 }}
              style={{
                display: "block",
                marginTop: "10px",
                padding: "14px",
                background: "linear-gradient(135deg, #8b5cf6, #7c3aed)",
                color: "#fff",
                borderRadius: "12px",
                textAlign: "center",
                fontSize: "15px",
                fontWeight: 700,
                textDecoration: "none",
                boxShadow: "0 4px 16px rgba(139,92,246,0.35)",
              }}
            >
              Let's talk →
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
