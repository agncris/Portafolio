import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx,js,jsx}",
		"./components/**/*.{ts,tsx,js,jsx}",
		"./app/**/*.{ts,tsx,js,jsx}",
		"./src/**/*.{ts,tsx,js,jsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				sans: ['Poppins', 'sans-serif'], // Clean and modern font
				serif: ['Playfair Display', 'serif'], // Elegant serif font
				mono: ['Fira Code', 'monospace'], // Monospace for code blocks
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: {
					DEFAULT: 'hsl(var(--background))',
					light: '#f9f9f9', // Light background
					dark: '#1a1a1a', // Dark background
					accent: '#f3f4f6', // Subtle accent background
				},
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: '#6a11cb', // Vibrant purple
					light: '#9b4dff', // Lighter purple
					dark: '#4a0d9e', // Darker purple
					foreground: '#ffffff', // Text color for primary
				},
				secondary: {
					DEFAULT: '#ff6f61', // Warm coral
					light: '#ff8a7a', // Lighter coral
					dark: '#cc574d', // Darker coral
					foreground: '#ffffff', // Text color for secondary
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: '#d1d5db', // Muted gray
					foreground: '#6b7280', // Muted text
				},
				accent: {
					DEFAULT: '#ffd700', // Gold accent
					foreground: '#000000', // Text color for accent
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: '#ffffff', // Card background
					dark: '#2a2a2a', // Card background in dark mode
					highlight: '#fef3c7', // Highlighted card background
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				custom: {
					DEFAULT: 'hsl(var(--custom))',
					foreground: 'hsl(var(--custom-foreground))'
				},
				highlight: {
					DEFAULT: '#34d399', // Green highlight
					secondary: '#60a5fa', // Blue highlight
				},
			},
			borderRadius: {
				lg: '1rem', // Large border radius
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
				xl: '2rem', // Extra-large border radius
				'2xl': '3rem', // Even larger for cards
				full: '9999px', // Fully rounded
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				'slide-in': {
					'0%': { transform: 'translateX(-50px)', opacity: '0' },
					'100%': { transform: 'translateX(0)', opacity: '1' },
				},
				'pulse': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.5' },
				},
				'pulse-highlight': {
					'0%, 100%': { backgroundColor: 'rgba(106, 17, 203, 0.5)' },
					'50%': { backgroundColor: 'rgba(37, 117, 252, 0.5)' },
				},
				'rotate-slow': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.8s ease-out',
				'slide-in': 'slide-in 0.6s ease-out',
				'pulse': 'pulse 2s infinite',
				'pulse-highlight': 'pulse-highlight 2s infinite',
				'rotate-slow': 'rotate-slow 10s linear infinite',
			},
			gradientColorStops: {
				'primary-gradient': ['#6a11cb', '#2575fc'], // Purple to blue gradient
				'secondary-gradient': ['#ff6f61', '#ffd700'], // Coral to gold gradient
			},
			boxShadow: {
				'custom-light': '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.06)',
				'custom-dark': '0 4px 6px rgba(0, 0, 0, 0.3), 0 1px 3px rgba(0, 0, 0, 0.2)',
				'glow': '0 0 15px rgba(106, 17, 203, 0.5)', // Glow effect for highlights
			},
			spacing: {
				'72': '18rem', // Custom spacing for large gaps
				'84': '21rem',
				'96': '24rem',
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
