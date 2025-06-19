import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Cores da paleta original (v9) - Mantidas para a página principal
        "whatsapp-bg-light": "#E0FEE0",
        "whatsapp-bg-section": "#388E3C",
        "whatsapp-text-dark": "#075E54",
        "whatsapp-text-light": "#FFFFFF",
        "whatsapp-accent-main": "#25D366",
        "whatsapp-accent-dark": "#1DA851",
        "whatsapp-border-light": "#B0E0B0",
        "whatsapp-button-hover": "#1DA851",
        "page-bg-start": "#1A1A1A",
        "page-bg-end": "#1A1A1A",
        "whatsapp-light-green": "rgba(37, 211, 102, 0.2)",
        "whatsapp-blue-selected": "#0010FF",
        "whatsapp-pink-selected": "#FF0098",
        "muted-blue": "#000533",
        "muted-pink": "#33001F",

        // NOVAS CORES PARA O TEMA HACKING
        "hacking-primary": "#00FF00", // Verde neon vibrante
        "hacking-secondary": "#00BFFF", // Azul ciano vibrante
        "hacking-bg-dark": "#0A0A0A", // Fundo muito escuro
        "hacking-card-bg": "#1A1A1A", // Fundo para cards (levemente mais claro que o bg)
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "pulse-border": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
        "glow-pulse": {
          "0%, 100%": {
            boxShadow: "0 0 10px rgba(37, 211, 102, 0.5), 0 0 20px rgba(37, 211, 102, 0.3)",
          },
          "50%": {
            boxShadow: "0 0 20px rgba(37, 211, 102, 0.8), 0 0 40px rgba(37, 211, 102, 0.6)",
          },
        },
        "text-neon-pulse": {
          "0%, 100%": {
            textShadow: "0 0 5px rgba(252, 211, 77, 0.7), 0 0 10px rgba(252, 211, 77, 0.5)",
            opacity: "0.8",
          },
          "50%": {
            textShadow: "0 0 10px rgba(252, 211, 77, 1), 0 0 20px rgba(252, 211, 77, 0.8)",
            opacity: "1",
          },
        },
        "icon-neon-pulse": {
          "0%, 100%": {
            filter: "drop-shadow(0 0 2px rgba(252, 211, 77, 0.7)) drop-shadow(0 0 4px rgba(252, 211, 77, 0.5))",
            opacity: "0.8",
          },
          "50%": {
            filter: "drop-shadow(0 0 4px rgba(252, 211, 77, 1)) drop-shadow(0 0 8px rgba(252, 211, 77, 0.8))",
            opacity: "1",
          },
        },
        "subtle-glow": {
          "0%, 100%": {
            textShadow: "0 0 2px rgba(0, 255, 0, 0.5)",
            filter: "drop-shadow(0 0 1px rgba(255, 0, 0, 0.5))",
            opacity: "0.9",
          },
          "50%": {
            textShadow: "0 0 5px rgba(0, 255, 0, 0.8)",
            filter: "drop-shadow(0 0 2px rgba(255, 0, 0, 0.8))",
            opacity: "1",
          },
        },
        "intense-button-pulse": {
          "0%, 100%": {
            boxShadow: "0 0 40px var(--tw-colors-hacking-primary), 0 0 80px rgba(0, 255, 0, 0.8)",
            transform: "scale(1)",
          },
          "50%": {
            boxShadow: "0 0 60px var(--tw-colors-hacking-primary), 0 0 120px rgba(0, 255, 0, 1)",
            transform: "scale(1.02)",
          },
        },
        "subtle-button-pulse": {
          "0%, 100%": {
            transform: "scale(1)",
          },
          "50%": {
            transform: "scale(1.01)",
          },
        },
        "title-glow": {
          "0%, 100%": {
            textShadow: "0 0 8px rgba(37, 211, 102, 0.7), 0 0 15px rgba(37, 211, 102, 0.5)",
          },
          "50%": {
            textShadow: "0 0 12px rgba(37, 211, 102, 1), 0 0 25px rgba(37, 211, 102, 0.8)",
          },
        },
        "hacking-title-glow": {
          "0%, 100%": {
            textShadow: "0 0 10px var(--tw-colors-hacking-primary), 0 0 20px rgba(0, 255, 0, 0.8)",
          },
          "50%": {
            textShadow: "0 0 15px var(--tw-colors-hacking-primary), 0 0 30px rgba(0, 255, 0, 1)",
          },
        },
        "hacking-icon-glow-primary": {
          "0%, 100%": {
            filter: "drop-shadow(0 0 4px var(--tw-colors-hacking-primary)) drop-shadow(0 0 8px rgba(0, 255, 0, 0.7))",
          },
          "50%": {
            filter: "drop-shadow(0 0 6px var(--tw-colors-hacking-primary)) drop-shadow(0 0 12px rgba(0, 255, 0, 0.9))",
          },
        },
        "hacking-icon-glow-secondary": {
          "0%, 100%": {
            filter:
              "drop-shadow(0 0 4px var(--tw-colors-hacking-secondary)) drop-shadow(0 0 8px rgba(0, 191, 255, 0.7))",
          },
          "50%": {
            filter:
              "drop-shadow(0 0 6px var(--tw-colors-hacking-secondary)) drop-shadow(0 0 12px rgba(0, 191, 255, 0.9))",
          },
        },
        "progress-bar-fill": {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
        // Animação de glitch mais natural e errática
        "glitch-text": {
          "0%, 100%": {
            textShadow: "0 0 0px rgba(0, 255, 0, 0.7), 0 0 0px rgba(0, 191, 255, 0.7)",
            transform: "translate(0, 0)",
            opacity: "0.9", // Opacidade base um pouco menor
          },
          "5%": {
            textShadow: "1px 0 0px rgba(0, 255, 0, 0.7), -1px 0 0px rgba(0, 191, 255, 0.7)",
            transform: "translate(-0.5px, 0.5px)",
            opacity: "0.8",
          },
          "10%": {
            textShadow: "-1px 0 0px rgba(0, 255, 0, 0.7), 1px 0 0px rgba(0, 191, 255, 0.7)",
            transform: "translate(0.5px, -0.5px)",
            opacity: "0.7",
          },
          "15%": {
            textShadow: "2px 0 0px rgba(0, 255, 0, 0.7), -2px 0 0px rgba(0, 191, 255, 0.7)",
            transform: "translate(-1px, 1px)",
            opacity: "0.6",
          },
          "20%": {
            textShadow: "-2px 0 0px rgba(0, 255, 0, 0.7), 3px 0 0px rgba(0, 191, 255, 0.7)",
            transform: "translate(1px, -1px)",
            opacity: "0.5",
          },
          "25%": {
            textShadow: "3px 0 0px rgba(0, 255, 0, 0.7), -3px 0 0px rgba(0, 191, 255, 0.7)",
            transform: "translate(-1.5px, 1.5px)",
            opacity: "0.4",
          },
          "30%": {
            textShadow: "-3px 0 0px rgba(0, 255, 0, 0.7), 3px 0 0px rgba(0, 191, 255, 0.7)",
            transform: "translate(1.5px, -1.5px)",
            opacity: "0.3",
          },
          "35%": {
            opacity: "0.1", // Quase some
          },
          "40%": {
            opacity: "0.9", // Reaparece
          },
          "45%": {
            textShadow: "1px 0 0px rgba(0, 255, 0, 0.7), -1px 0 0px rgba(0, 191, 255, 0.7)",
            transform: "translate(-0.5px, 0.5px)",
            opacity: "0.8",
          },
          "50%": {
            textShadow: "-1px 0 0px rgba(0, 255, 0, 0.7), 1px 0 0px rgba(0, 191, 255, 0.7)",
            transform: "translate(0.5px, -0.5px)",
            opacity: "0.7",
          },
          "55%": {
            textShadow: "2px 0 0px rgba(0, 255, 0, 0.7), -2px 0 0px rgba(0, 191, 255, 0.7)",
            transform: "translate(-1px, 1px)",
            opacity: "0.6",
          },
          "60%": {
            textShadow: "-2px 0 0px rgba(0, 255, 0, 0.7), 2px 0 0px rgba(0, 191, 255, 0.7)",
            transform: "translate(1px, -1px)",
            opacity: "0.5",
          },
          "65%": {
            opacity: "0.05", // Quase some novamente
          },
          "70%": {
            opacity: "0.9", // Reaparece
          },
          "75%": {
            textShadow: "0 0 0px rgba(0, 255, 0, 0.7), 0 0 0px rgba(0, 191, 255, 0.7)",
            transform: "translate(0, 0)",
            opacity: "0.8",
          },
          "80%": {
            textShadow: "1px 0 0px rgba(0, 255, 0, 0.7), -1px 0 0px rgba(0, 191, 255, 0.7)",
            transform: "translate(-0.5px, 0.5px)",
            opacity: "0.7",
          },
          "85%": {
            textShadow: "-1px 0 0px rgba(0, 255, 0, 0.7), 1px 0 0px rgba(0, 191, 255, 0.7)",
            transform: "translate(0.5px, -0.5px)",
            opacity: "0.6",
          },
          "90%": {
            opacity: "0.2", // Mais uma falha rápida
          },
          "95%": {
            opacity: "0.9", // Volta ao normal
          },
        },
        // Nova animação para o brilho da barra de progresso
        "progress-bar-glow": {
          "0%, 100%": {
            boxShadow: "0 0 5px var(--tw-colors-hacking-primary), 0 0 10px rgba(0, 255, 0, 0.5)",
          },
          "50%": {
            boxShadow: "0 0 10px var(--tw-colors-hacking-primary), 0 0 20px rgba(0, 255, 0, 0.8)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "pulse-border": "pulse-border 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "glow-pulse": "glow-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "text-neon-pulse": "text-neon-pulse 2s ease-in-out infinite",
        "icon-neon-pulse": "icon-neon-pulse 2s ease-in-out infinite",
        "subtle-glow": "subtle-glow 2s ease-in-out infinite",
        "intense-button-pulse": "intense-button-pulse 2s ease-in-out infinite",
        "subtle-button-pulse": "subtle-button-pulse 2s ease-in-out infinite",
        "title-glow": "title-glow 2s ease-in-out infinite",
        "hacking-title-glow": "hacking-title-glow 2s ease-in-out infinite",
        "hacking-icon-glow-primary": "hacking-icon-glow-primary 2s ease-in-out infinite",
        "hacking-icon-glow-secondary": "hacking-icon-glow-secondary 2s ease-in-out infinite",
        "progress-bar-fill": "progress-bar-fill linear forwards",
        "glitch-text": "glitch-text 1.5s infinite ease-in-out",
        "progress-bar-glow": "progress-bar-glow 1.5s infinite alternate", // Aplicando a nova animação
      },
      backgroundImage: {
        "gradient-main":
          "linear-gradient(180deg, var(--tw-colors-page-bg-start) 0%, var(--tw-colors-page-bg-end) 100%)",
        "gradient-button":
          "linear-gradient(90deg, var(--tw-colors-whatsapp-accent-main) 0%, var(--tw-colors-whatsapp-accent-dark) 100%)",
        "gradient-card": "linear-gradient(135deg, rgba(37, 211, 102, 0.2) 0%, rgba(29, 168, 81, 0.2) 100%)",
        "gradient-border":
          "linear-gradient(90deg, var(--tw-colors-whatsapp-accent-main), var(--tw-colors-whatsapp-accent-dark))",
        "gradient-neon-border":
          "linear-gradient(90deg, var(--tw-colors-whatsapp-accent-main), var(--tw-colors-whatsapp-accent-dark))",
        "gradient-section-bg":
          "linear-gradient(180deg, var(--tw-colors-whatsapp-accent-dark) 0%, var(--tw-colors-whatsapp-bg-section) 100%)",
        // Novos gradientes para o tema hacking
        "gradient-hacking-progress-bar":
          "linear-gradient(90deg, var(--tw-colors-hacking-primary), var(--tw-colors-hacking-secondary))",
        "gradient-hacking-card-border":
          "linear-gradient(90deg, var(--tw-colors-hacking-primary), var(--tw-colors-hacking-secondary))",
      },
      boxShadow: {
        "selected-gender-glow": "0 0 15px rgba(37, 211, 102, 0.8), 0 0 30px rgba(37, 211, 102, 0.6)",
        "blue-glow": "0 0 15px rgba(0, 16, 255, 0.8), 0 0 30px rgba(0, 16, 255, 0.6)",
        "pink-glow": "0 0 15px rgba(255, 0, 152, 0.8), 0 0 30px rgba(255, 0, 152, 0.6)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
