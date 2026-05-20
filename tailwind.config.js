/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "secondary-fixed-dim": "#8ecdff",
        "on-surface-variant": "#404752",
        "secondary-container": "#2cb2fd",
        "tertiary": "#495e84",
        "tertiary-container": "#61779e",
        "surface-container": "#ebeef0",
        "on-secondary-fixed-variant": "#004b71",
        "on-error": "#ffffff",
        "secondary-fixed": "#cbe6ff",
        "primary-fixed-dim": "#a3c9ff",
        "outline-variant": "#c0c7d4",
        "surface-variant": "#e0e3e5",
        "on-secondary-fixed": "#001e30",
        "inverse-surface": "#2d3133",
        "surface-tint": "#0060ab",
        "surface": "#f7fafc",
        "primary-container": "#0078d4",
        "secondary": "#006494",
        "on-secondary-container": "#004163",
        "primary": "#005faa",
        "surface-container-high": "#e5e9eb",
        "tertiary-fixed-dim": "#b1c7f2",
        "outline": "#717783",
        "surface-dim": "#d7dadc",
        "on-background": "#181c1e",
        "surface-container-lowest": "#ffffff",
        "inverse-on-surface": "#eef1f3",
        "on-primary-fixed-variant": "#004883",
        "on-tertiary-fixed": "#001b3d",
        "surface-container-low": "#f1f4f6",
        "error": "#ba1a1a",
        "on-secondary": "#ffffff",
        "on-primary-container": "#ffffff",
        "error-container": "#ffdad6",
        "background": "#f7fafc",
        "on-primary": "#ffffff",
        "inverse-primary": "#a3c9ff",
        "surface-bright": "#f7fafc",
        "tertiary-fixed": "#d6e3ff",
        "on-tertiary-fixed-variant": "#31476b",
        "primary-fixed": "#d3e3ff",
        "on-error-container": "#93000a",
        "surface-container-highest": "#e0e3e5",
        "on-tertiary-container": "#ffffff",
        "on-primary-fixed": "#001c39",
        "on-tertiary": "#ffffff",
        "on-surface": "#181c1e"
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px"
      },
      spacing: {
        "margin-mobile": "16px",
        "margin-desktop": "64px",
        "container-max": "1200px",
        gutter: "24px",
        unit: "4px"
      },
      fontFamily: {
        caption: ["Inter"],
        "body-md": ["Inter"],
        "headline-lg-mobile": ["Inter"],
        "headline-md": ["Inter"],
        "headline-lg": ["Inter"],
        "display-lg": ["Inter"],
        "body-lg": ["Inter"],
        "label-mono": ["JetBrains Mono"]
      },
      fontSize: {
        caption: ["12px", { lineHeight: "1.4", letterSpacing: "0.01em", fontWeight: "500" }],
        "body-md": ["16px", { lineHeight: "1.6", fontWeight: "400" }],
        "headline-lg-mobile": ["24px", { lineHeight: "1.3", fontWeight: "600" }],
        "headline-md": ["24px", { lineHeight: "1.4", fontWeight: "600" }],
        "headline-lg": ["32px", { lineHeight: "1.3", fontWeight: "600" }],
        "display-lg": ["48px", { lineHeight: "1.2", letterSpacing: "-0.02em", fontWeight: "700" }],
        "body-lg": ["18px", { lineHeight: "1.6", fontWeight: "400" }],
        "label-mono": ["14px", { lineHeight: "1.5", fontWeight: "500" }]
      }
    }
  },
  plugins: []
};
