/**
 * Design System - Index
 * Punto de entrada principal para el Design System de la aplicación
 */

// Exportar tokens
export * from "./tokens";

// Exportar utilidades
export * from "./utils";

// Exportar tipos útiles
export type {
  ColorPalette,
  Typography,
  Spacing,
  BorderRadius,
  Shadows,
} from "./tokens";

// Re-export de las clases utilitarias para fácil acceso
export {
  ColorUtils,
  TypographyUtils,
  SpacingUtils,
  ShadowUtils,
  BorderUtils,
  ComponentPresets,
} from "./utils";
