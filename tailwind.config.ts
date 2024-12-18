import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

export default {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FFFFFF',
          dark: '#E5E5E5',
          light: '#F5F5F5',
        },
        secondary: {
          DEFAULT: '#CCCCCC',
          dark: '#999999',
          light: '#EEEEEE',
        },
        accent: {
          DEFAULT: '#808080',
          dark: '#666666',
          light: '#999999',
        },
        neutral: {
          50: '#FFFFFF',
          100: '#FAFAFA',
          200: '#F5F5F5',
          300: '#E5E5E5',
          400: '#D4D4D4',
          500: '#A3A3A3',
          600: '#737373',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        },
        success: {
          DEFAULT: '#CCCCCC',
          dark: '#999999',
        },
        error: {
          DEFAULT: '#A3A3A3',
          dark: '#737373',
        },
        warning: {
          DEFAULT: '#808080',
          dark: '#666666',
        },
        info: {
          DEFAULT: '#D4D4D4',
          dark: '#A3A3A3',
        },
      },
      maxWidth: {
        'content': '1200px',
      },
      animation: {
        "float": "float 6s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "fade-up": "fadeUp 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards",
        'pulse-slow': 'pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        "float-slow": "float 3s ease-in-out infinite",
        "glow": "glow 2s ease-in-out infinite",
        "rotate-gradient": "rotateGradient 3s linear infinite",
        'slide-in': 'slideIn 0.5s ease-out forwards',
      },
      keyframes: {
        float: {
          "0%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
          "100%": { transform: "translateY(0px)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        glow: {
          "0%, 100%": { 
            boxShadow: "0 0 5px rgba(255,255,255,0.5), 0 0 20px rgba(255,255,255,0.2)" 
          },
          "50%": { 
            boxShadow: "0 0 20px rgba(255,255,255,0.5), 0 0 50px rgba(255,255,255,0.2)" 
          },
        },
        rotateGradient: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        slideIn: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-separator': 'linear-gradient(90deg, transparent, var(--tw-gradient-stops), transparent)',
      },
      perspective: {
        '1000': 'perspective(1000px)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [animate],
} satisfies Config;