/**
 * Design System Tokens
 * Definición centralizada de todos los valores de diseño
 */

// 🎨 COLORES
export const colors = {
  // Primary (basado en emerald-500 encontrado en Button)
  primary: {
    50: "#ecfdf5",
    100: "#d1fae5",
    200: "#a7f3d0",
    300: "#6ee7b7",
    400: "#34d399",
    500: "#10b981", // emerald-500 principal
    600: "#059669",
    700: "#047857",
    800: "#065f46",
    900: "#064e3b",
  },

  // Secondary (basado en cyan-500 encontrado en links y Checkbox)
  secondary: {
    50: "#ecfeff",
    100: "#cffafe",
    200: "#a5f3fc",
    300: "#67e8f9",
    400: "#22d3ee",
    500: "#06b6d4", // cyan-500 principal
    600: "#0891b2",
    700: "#0e7490",
    800: "#155e75",
    900: "#164e63",
  },

  // Neutrals (basado en grays encontrados)
  neutral: {
    50: "#f9fafb",
    100: "#f3f4f6",
    200: "#e5e7eb", // border-gray-200
    300: "#d1d5db", // border-gray-300
    400: "#9ca3af", // placeholderTextColor
    500: "#6b7280",
    600: "#4b5563", // text-gray-600
    700: "#374151", // text-gray-700
    800: "#1f2937", // text-gray-800
    900: "#111827",
  },

  // Semantic Colors
  semantic: {
    error: {
      50: "#fef2f2",
      100: "#fee2e2",
      200: "#fecaca",
      300: "#fca5a5",
      400: "#f87171",
      500: "#ef4444", // red-500 para errores
      600: "#dc2626",
      700: "#b91c1c",
      800: "#991b1b",
      900: "#7f1d1d",
    },
    success: {
      50: "#f0fdf4",
      100: "#dcfce7",
      200: "#bbf7d0",
      300: "#86efac",
      400: "#4ade80",
      500: "#22c55e", // green-500 para éxito
      600: "#16a34a",
      700: "#15803d",
      800: "#166534",
      900: "#14532d",
    },
    warning: {
      50: "#fffbeb",
      100: "#fef3c7",
      200: "#fde68a",
      300: "#fcd34d",
      400: "#fbbf24",
      500: "#f59e0b", // amber-500 para advertencias
      600: "#d97706",
      700: "#b45309",
      800: "#92400e",
      900: "#78350f",
    },
  },

  // Surface Colors
  surface: {
    background: "#ffffff", // bg-white
    backgroundSecondary: "#f9fafb", // bg-gray-50
    paper: "#ffffff",
    overlay: "rgba(0, 0, 0, 0.5)",
  },
} as const;

// 📝 TIPOGRAFÍA
export const typography = {
  // Font Families
  fontFamily: {
    default: "System", // React Native default
  },

  // Font Sizes (basado en los encontrados)
  fontSize: {
    xs: 12, // text-xs para errores
    sm: 14, // text-sm para labels y checkboxes
    base: 16, // tamaño base
    lg: 18, // text-lg para links
    xl: 20, // text-xl para botones
    "2xl": 24,
    "3xl": 30, // text-3xl para títulos
    "4xl": 36,
    "5xl": 48,
  },

  // Font Weights (basado en los encontrados)
  fontWeight: {
    normal: "400",
    medium: "500", // font-medium
    semibold: "600", // font-semibold
    bold: "700", // font-bold
    extrabold: "800",
  },

  // Line Heights
  lineHeight: {
    none: 1,
    tight: 1.25,
    snug: 1.375,
    normal: 1.5,
    relaxed: 1.625,
    loose: 2,
  },
} as const;

// 📏 ESPACIADOS
export const spacing = {
  // Basado en los espaciados encontrados
  0: 0,
  1: 4, // space-y-1
  2: 8, // gap-2, space-y-2
  3: 12, // py-3
  4: 16, // px-4, gap-4, p-4
  5: 20, // p-5, space-y-5, my-5
  6: 24, // mb-6
  8: 32, // px-8
  10: 40, // space-y-10, my-10, mb-10
  12: 48,
  16: 64,
  20: 80,
  24: 96,
  32: 128,
} as const;

// 🔄 BORDER RADIUS
export const borderRadius = {
  none: 0,
  sm: 4,
  base: 8, // rounded-lg
  md: 8,
  lg: 12,
  xl: 16,
  full: 9999, // rounded-full para botones
} as const;

// 🎯 SHADOWS
export const shadows = {
  none: "none",
  sm: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  base: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  md: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 4,
  },
  lg: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 8,
  },
} as const;

// 📐 BREAKPOINTS (para responsive si es necesario)
export const breakpoints = {
  sm: 320,
  md: 768,
  lg: 1024,
  xl: 1280,
} as const;

// Export types para TypeScript
export type ColorPalette = typeof colors;
export type Typography = typeof typography;
export type Spacing = typeof spacing;
export type BorderRadius = typeof borderRadius;
export type Shadows = typeof shadows;
