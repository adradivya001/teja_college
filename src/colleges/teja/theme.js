const tejaTheme = {
  motif: "shield",
  colors: {
    // Primary Brand Accents
    primary: "#E9007F",        // TEJA MAGENTA
    primaryHover: "#B8005F",   // DARK MAGENTA
    primaryGlow: "rgba(233, 0, 127, 0.12)",
    secondary: "#35106F",      // DEEP PURPLE (Used for headings, brand authority, footer)
    secondaryHover: "#E9007F",
    accentYellow: "#F5C400",   // GOLD ACCENT
    accentCyan: "#00AEEF",     // CYAN ACCENT
    
    // Light Theme Surfaces (70% White / Off-white / Light Pink)
    background: "#FFFCFE",     // MAIN LIGHT BACKGROUND
    bgAlt: "#FFF5FA",          // ALTERNATE SECTION BACKGROUND
    softPurple: "#F3EDFA",     // SOFT PURPLE SURFACE
    softGold: "#FFF8D9",       // SOFT GOLD
    cardBg: "#FFFFFF",         // CARD / SURFACE
    cardBorder: "#EDE3EA",     // SUBTLE BORDER
    borderLight: "#EDE3EA",
    bgLight: "#FFFFFF",
    surface: "#FFFFFF",
    
    // Typography Contrast (WCAG AA Compliant)
    text: "#241C2B",           // PRIMARY TEXT
    textMuted: "#665B6B",      // SECONDARY TEXT
    textSubtle: "#8A7E8F",
    textDark: "#241C2B",
    textDarkMuted: "#665B6B",
    textDarkSubtle: "#8A7E8F"
  },
  typography: {
    headingFont: "'Outfit', 'Plus Jakarta Sans', sans-serif",
    bodyFont: "'Plus Jakarta Sans', 'Inter', sans-serif",
    monoFont: "'Space Grotesk', monospace"
  },
  radius: {
    sm: "8px",
    md: "14px",
    lg: "20px",
    xl: "24px",
    full: "9999px"
  }
};

export default tejaTheme;
