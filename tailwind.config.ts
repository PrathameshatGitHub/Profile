import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        paper: "#F4F5F7",
        surface: "#FFFFFF",
        ink: "#12172B",
        inkmuted: "#565C72",
        line: "#DBDEE4",
        teal: "#2F6F5E",
        tealsoft: "#E4EEEA",
        amber: "#C77D2E",
        ambersoft: "#F5E9DA",
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
        mono: ["var(--font-mono)"],
      },
      maxWidth: {
        content: "920px",
      },
    },
  },
  plugins: [],
};
export default config;
