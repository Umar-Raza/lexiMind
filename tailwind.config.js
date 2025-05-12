/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        accent: "var(--accent)",
        secondry: "var(--secondry)"
      },
      fontFamily: {
        'haddings': ['Open Sans'],
        'body': ['fira Sans'],
      }
    },
  },
  plugins: [require('daisyui')],
  // daisyui: {
  //   themes: [
  //     {
  //       mytheme: {
  //         background: "#121d21",
  //         foreground: "#f1f3f4",
  //         primary: "#20acdf",
  //         secondary: "#a1b6bd",
  //         accent: "#1d5063",
  //         neutral: "#ffffff",
  //         "base-100": "#111827",
  //         info: "#06b6d4",
  //         success: "#10b981",
  //         warning: "#d97706",
  //         error: "#e11d48",
  //       },
  //     },
  //   ],
  // },
}

