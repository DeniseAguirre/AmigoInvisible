/**
 * Design System Utilities
 * Funciones y constantes para usar el Design System de manera consistente
 */

import { colors, typography, spacing, borderRadius, shadows } from "./tokens";

// 🎨 UTILIDADES DE COLORES
export class ColorUtils {
  // Obtener color primario por nivel
  static primary(level: keyof typeof colors.primary = 500) {
    return colors.primary[level];
  }

  // Obtener color secundario por nivel
  static secondary(level: keyof typeof colors.secondary = 500) {
    return colors.secondary[level];
  }

  // Obtener color neutral por nivel
  static neutral(level: keyof typeof colors.neutral = 500) {
    return colors.neutral[level];
  }

  // Obtener color semántico
  static error(level: keyof typeof colors.semantic.error = 500) {
    return colors.semantic.error[level];
  }

  static success(level: keyof typeof colors.semantic.success = 500) {
    return colors.semantic.success[level];
  }

  static warning(level: keyof typeof colors.semantic.warning = 500) {
    return colors.semantic.warning[level];
  }

  // Obtener color de superficie
  static surface(type: keyof typeof colors.surface = "background") {
    return colors.surface[type];
  }
}

// 📝 UTILIDADES DE TIPOGRAFÍA
export class TypographyUtils {
  // Crear estilo de texto completo
  static createTextStyle(
    size: keyof typeof typography.fontSize,
    weight: keyof typeof typography.fontWeight = "normal",
    lineHeight: keyof typeof typography.lineHeight = "normal"
  ) {
    return {
      fontSize: typography.fontSize[size],
      fontWeight: typography.fontWeight[weight],
      lineHeight: typography.fontSize[size] * typography.lineHeight[lineHeight],
    };
  }

  // Estilos predefinidos comunes
  static get heading1() {
    return this.createTextStyle("3xl", "bold", "tight");
  }

  static get heading2() {
    return this.createTextStyle("2xl", "bold", "tight");
  }

  static get heading3() {
    return this.createTextStyle("xl", "semibold", "snug");
  }

  static get body() {
    return this.createTextStyle("base", "normal", "normal");
  }

  static get bodySmall() {
    return this.createTextStyle("sm", "normal", "normal");
  }

  static get caption() {
    return this.createTextStyle("xs", "normal", "normal");
  }

  static get button() {
    return this.createTextStyle("xl", "semibold", "none");
  }

  static get label() {
    return this.createTextStyle("sm", "medium", "normal");
  }
}

// 📏 UTILIDADES DE ESPACIADO
export class SpacingUtils {
  // Obtener valor de espaciado
  static get(size: keyof typeof spacing) {
    return spacing[size];
  }

  // Crear padding uniforme
  static padding(size: keyof typeof spacing) {
    return {
      paddingTop: spacing[size],
      paddingRight: spacing[size],
      paddingBottom: spacing[size],
      paddingLeft: spacing[size],
    };
  }

  // Crear padding horizontal
  static paddingHorizontal(size: keyof typeof spacing) {
    return {
      paddingLeft: spacing[size],
      paddingRight: spacing[size],
    };
  }

  // Crear padding vertical
  static paddingVertical(size: keyof typeof spacing) {
    return {
      paddingTop: spacing[size],
      paddingBottom: spacing[size],
    };
  }

  // Crear margin uniforme
  static margin(size: keyof typeof spacing) {
    return {
      marginTop: spacing[size],
      marginRight: spacing[size],
      marginBottom: spacing[size],
      marginLeft: spacing[size],
    };
  }

  // Crear margin horizontal
  static marginHorizontal(size: keyof typeof spacing) {
    return {
      marginLeft: spacing[size],
      marginRight: spacing[size],
    };
  }

  // Crear margin vertical
  static marginVertical(size: keyof typeof spacing) {
    return {
      marginTop: spacing[size],
      marginBottom: spacing[size],
    };
  }

  // Crear margin específicos
  static marginTop(size: keyof typeof spacing) {
    return {
      marginTop: spacing[size],
    };
  }

  static marginBottom(size: keyof typeof spacing) {
    return {
      marginBottom: spacing[size],
    };
  }

  static marginLeft(size: keyof typeof spacing) {
    return {
      marginLeft: spacing[size],
    };
  }

  static marginRight(size: keyof typeof spacing) {
    return {
      marginRight: spacing[size],
    };
  }
}

// 🎯 UTILIDADES DE SOMBRAS
export class ShadowUtils {
  static get(type: keyof typeof shadows) {
    return shadows[type];
  }
}

// 🔄 UTILIDADES DE BORDER RADIUS
export class BorderUtils {
  static radius(size: keyof typeof borderRadius) {
    return borderRadius[size];
  }
}

// 🚀 PRESETS DE COMPONENTES COMUNES
export const ComponentPresets = {
  // Botón primario
  buttonPrimary: {
    backgroundColor: ColorUtils.primary(),
    ...SpacingUtils.paddingVertical(3),
    ...SpacingUtils.paddingHorizontal(8),
    borderRadius: BorderUtils.radius("full"),
    ...(ShadowUtils.get("sm") as object),
  },

  // Botón secundario
  buttonSecondary: {
    backgroundColor: "transparent",
    borderWidth: 2,
    borderColor: ColorUtils.primary(),
    ...SpacingUtils.paddingVertical(3),
    ...SpacingUtils.paddingHorizontal(8),
    borderRadius: BorderUtils.radius("full"),
  },

  // Input de formulario
  inputField: {
    backgroundColor: ColorUtils.surface("background"),
    borderWidth: 1,
    borderColor: ColorUtils.neutral(200),
    ...SpacingUtils.paddingVertical(3),
    ...SpacingUtils.paddingHorizontal(4),
    borderRadius: BorderUtils.radius("lg"),
    ...TypographyUtils.body,
  },

  // Input con error
  inputFieldError: {
    backgroundColor: ColorUtils.surface("background"),
    borderWidth: 1,
    borderColor: ColorUtils.error(),
    ...SpacingUtils.paddingVertical(3),
    ...SpacingUtils.paddingHorizontal(4),
    borderRadius: BorderUtils.radius("lg"),
    ...TypographyUtils.body,
  },

  // Contenedor principal
  container: {
    flex: 1,
    backgroundColor: ColorUtils.surface("background"),
    ...SpacingUtils.paddingHorizontal(4),
  },

  // Tarjeta
  card: {
    backgroundColor: ColorUtils.surface("paper"),
    borderRadius: BorderUtils.radius("lg"),
    ...SpacingUtils.padding(4),
    ...(ShadowUtils.get("base") as object),
  },
} as const;

// Export de todas las utilidades
export { colors, typography, spacing, borderRadius, shadows };
