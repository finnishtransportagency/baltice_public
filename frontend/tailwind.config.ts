import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor: {
        "baltice-blue": "#0165AF",
        "baltice-middle-blue": "#49C2F1",
        "baltice-light-blue": "#EEF9FF",
        "baltice-gray": "#FAFAFA",
      },
      colors: {
        "baltice-blue": "#0165AF",
        "baltice-middle-blue": "#49C2F1",
        "baltice-light-blue": "#EEF9FF",
        "baltice-medium-blue": "#009BE1",
      },
      maxWidth: {
        "1440": "90rem",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
export default config;
