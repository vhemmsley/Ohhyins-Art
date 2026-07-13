// tailwind.config.js

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],

  theme: {
    extend: {
      colors: {
        // ===========================
        // Primary Brand Colors
        // ===========================
        forest: '#214D35',
        botanical: '#3D6B4F',
        sage: '#7C8762',
        olive: '#66704A',

        // ===========================
        // Accent Colors
        // ===========================
        gold: '#B08A45',
        champagne: '#D5BF88',
        bronze: '#947042',

        // ===========================
        // Backgrounds
        // ===========================
        ivory: '#FAF7F2',
        linen: '#F2EEE7',
        gallery: '#F8F5EF',
        parchment: '#EFE8DD',

        // ===========================
        // Typography
        // ===========================
        charcoal: '#2D2D2D',
        muted: '#666666',
        soft: '#8E8E8E',

        // ===========================
        // Borders
        // ===========================
        border: '#E6DED1',
        lightBorder: '#F1ECE3',
      },

      fontFamily: {
        heading: ['Cormorant Garamond', 'serif'],

        body: ['Inter', 'sans-serif'],

        quote: ['Cormorant Garamond', 'serif'],
      },

      boxShadow: {
        soft: '0 8px 30px rgba(33,77,53,.08)',

        card: '0 10px 35px rgba(0,0,0,.06)',

        gallery: '0 20px 60px rgba(0,0,0,.08)',

        button: '0 8px 20px rgba(176,138,69,.20)',
      },

      borderRadius: {
        xl: '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },

      letterSpacing: {
        elegant: '.08em',
        gallery: '.18em',
      },

      maxWidth: {
        gallery: '1600px',
      },

      transitionTimingFunction: {
        elegant: 'cubic-bezier(.22,.61,.36,1)',
      },

      transitionDuration: {
        400: '400ms',
        600: '600ms',
        800: '800ms',
        1200: '1200ms',
      },

      backgroundImage: {
        hero: 'linear-gradient(to right, rgba(250,247,242,.95), rgba(250,247,242,.55))',

        gallery: 'linear-gradient(180deg,#FAF7F2 0%,#F2EEE7 100%)',

        botanical: 'linear-gradient(135deg,#214D35,#3D6B4F)',

        gold: 'linear-gradient(135deg,#D5BF88,#B08A45)',

        paper: 'linear-gradient(to bottom,#FAF7F2,#F8F5EF)',
      },

      keyframes: {
        fadeUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },

        fadeIn: {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          },
        },

        slowZoom: {
          '0%': {
            transform: 'scale(1)',
          },
          '100%': {
            transform: 'scale(1.08)',
          },
        },

        floatLeaf: {
          '0%,100%': {
            transform: 'translateY(0px)',
          },
          '50%': {
            transform: 'translateY(-8px)',
          },
        },

        slideUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(50px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },

      animation: {
        fadeUp: 'fadeUp .8s ease-out forwards',

        fadeIn: 'fadeIn .8s ease',

        slowZoom: 'slowZoom 18s ease-in-out infinite alternate',

        floatLeaf: 'floatLeaf 6s ease-in-out infinite',

        slideUp: 'slideUp .8s ease forwards',
      },
    },
  },

  plugins: [],
}
