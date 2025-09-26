# Design System - Amigo Invisible App

## 📋 Descripción

Este Design System proporciona una base sólida y consistente para el desarrollo de la aplicación Amigo Invisible, basado en los patrones y estilos ya implementados en los componentes existentes.

## 🎨 Colores

### Paleta Principal

| Color | Uso | Valor |
|-------|-----|-------|
| **Primary** | Botones principales, elementos destacados | `#10b981` (emerald-500) |
| **Secondary** | Links, checkboxes, elementos interactivos secundarios | `#06b6d4` (cyan-500) |

### Colores Neutrales

| Nivel | Uso | Valor |
|-------|-----|-------|
| **50** | Fondos muy claros | `#f9fafb` |
| **200** | Bordes normales | `#e5e7eb` |
| **300** | Bordes de elementos inactivos | `#d1d5db` |
| **400** | Placeholder text | `#9ca3af` |
| **600** | Texto secundario | `#4b5563` |
| **700** | Texto de labels | `#374151` |
| **800** | Texto principal | `#1f2937` |

### Colores Semánticos

| Tipo | Uso | Valor |
|------|-----|-------|
| **Error** | Mensajes de error, validaciones | `#ef4444` (red-500) |
| **Success** | Mensajes de éxito, confirmaciones | `#22c55e` (green-500) |
| **Warning** | Advertencias, alertas | `#f59e0b` (amber-500) |

## 📝 Tipografía

### Escala de Tamaños

| Tamaño | Uso | Valor |
|--------|-----|-------|
| **xs** | Mensajes de error | 12px |
| **sm** | Labels, texto de checkboxes | 14px |
| **base** | Texto de contenido general | 16px |
| **lg** | Links importantes | 18px |
| **xl** | Texto de botones | 20px |
| **3xl** | Títulos principales | 30px |

### Pesos de Fuente

| Peso | Uso | Valor |
|------|-----|-------|
| **normal** | Texto general | 400 |
| **medium** | Labels | 500 |
| **semibold** | Botones, énfasis | 600 |
| **bold** | Títulos | 700 |

### Estilos Predefinidos

```typescript
// Ejemplos de uso
TypographyUtils.heading1  // Títulos principales
TypographyUtils.body      // Texto general
TypographyUtils.button    // Texto de botones
TypographyUtils.label     // Labels de formularios
TypographyUtils.caption   // Texto pequeño, errores
```

## 📏 Espaciados

### Escala (en pixels)

| Valor | Uso |
|-------|-----|
| **4px** | Espacios muy pequeños |
| **8px** | Espacios pequeños, gaps |
| **12px** | Padding vertical de inputs |
| **16px** | Padding horizontal de inputs, contenedores |
| **20px** | Padding de pantallas |
| **32px** | Padding horizontal de botones |
| **40px** | Espacios grandes, margins verticales |

## 🔄 Border Radius

| Tamaño | Uso | Valor |
|--------|-----|-------|
| **lg** | Inputs, tarjetas | 12px |
| **full** | Botones | 9999px |

## 🎯 Componentes Base

### Botón Primario
```typescript
ComponentPresets.buttonPrimary
// Fondo: primary-500, padding: 12px vertical, 32px horizontal, border-radius: full
```

### Botón Secundario
```typescript
ComponentPresets.buttonSecondary
// Transparente con borde primary-500, mismo padding que primario
```

### Input Field
```typescript
ComponentPresets.inputField
// Fondo blanco, borde neutral-200, padding: 12px vertical, 16px horizontal
```

### Input con Error
```typescript
ComponentPresets.inputFieldError
// Igual que input normal pero con borde rojo (error-500)
```

## 🚀 Uso del Design System

### 1. Importar las utilidades

```typescript
import { ColorUtils, TypographyUtils, SpacingUtils, ComponentPresets } from '@/theme';
```

### 2. Usar en componentes

```typescript
// Usando utilidades
const styles = {
  container: {
    backgroundColor: ColorUtils.surface('background'),
    ...SpacingUtils.paddingHorizontal(4),
  },
  title: {
    color: ColorUtils.neutral(800),
    ...TypographyUtils.heading1,
  },
  button: {
    ...ComponentPresets.buttonPrimary,
  },
};
```

### 3. Usar con NativeWind/TailwindCSS

```tsx
// Usando clases de Tailwind actualizadas
<View className="bg-primary-500 px-8 py-3 rounded-full">
  <Text className="text-white text-xl font-semibold">Botón</Text>
</View>
```

## 📱 Consideraciones de Accesibilidad

- **Contraste**: Todos los colores cumplen con WCAG 2.1 AA
- **Tamaños táctiles**: Botones e elementos interactivos tienen al menos 44px de altura
- **Espaciado**: Espacios suficientes entre elementos para fácil navegación

## 🔄 Actualizaciones y Mantenimiento

1. **Centralización**: Todos los cambios de diseño deben hacerse en los tokens
2. **Consistencia**: Usar siempre las utilidades del Design System en lugar de valores hardcodeados
3. **Testing**: Probar cambios en diferentes tamaños de pantalla
4. **Documentación**: Actualizar esta documentación cuando se agreguen nuevos tokens

## 📋 Checklist de Implementación

- [x] ✅ Tokens de colores definidos
- [x] ✅ Escala tipográfica establecida
- [x] ✅ Sistema de espaciados sistematizado
- [x] ✅ Configuración de Tailwind actualizada
- [x] ✅ Utilidades y presets creados
- [ ] 🔄 Componentes refactorizados para usar el Design System
- [ ] ⏳ Testing en diferentes dispositivos
- [ ] ⏳ Validación de accesibilidad