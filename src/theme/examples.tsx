/**
 * Ejemplos de uso del Design System
 * Esta guía muestra cómo usar correctamente los tokens y utilidades
 */

import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import {
  ColorUtils,
  TypographyUtils,
  SpacingUtils,
  ComponentPresets,
} from "@/theme";

// 🎨 EJEMPLO 1: Usando utilidades de colores
const ColorExample = () => {
  return (
    <View>
      {/* Colores primarios */}
      <View style={{ backgroundColor: ColorUtils.primary() }}>
        <Text style={{ color: ColorUtils.surface("background") }}>
          Color primario
        </Text>
      </View>

      {/* Colores neutrales */}
      <Text style={{ color: ColorUtils.neutral(800) }}>Texto principal</Text>

      <Text style={{ color: ColorUtils.neutral(600) }}>Texto secundario</Text>

      {/* Colores semánticos */}
      <Text style={{ color: ColorUtils.error() }}>Mensaje de error</Text>
    </View>
  );
};

// 📝 EJEMPLO 2: Usando utilidades de tipografía
const TypographyExample = () => {
  return (
    <View>
      <Text style={TypographyUtils.heading1}>Título Principal</Text>

      <Text style={TypographyUtils.body}>
        Texto de párrafo normal con el tamaño y peso apropiados
      </Text>

      <Text style={TypographyUtils.caption}>
        Texto pequeño para captions o mensajes
      </Text>
    </View>
  );
};

// 📏 EJEMPLO 3: Usando utilidades de espaciado
const SpacingExample = () => {
  return (
    <View style={SpacingUtils.padding(4)}>
      <View style={SpacingUtils.marginVertical(2)}>
        <Text>Contenido con espaciado consistente</Text>
      </View>

      <View
        style={{
          ...SpacingUtils.paddingHorizontal(4),
          ...SpacingUtils.paddingVertical(2),
        }}
      >
        <Text>Combinando espaciados</Text>
      </View>
    </View>
  );
};

// 🚀 EJEMPLO 4: Usando presets de componentes
const ComponentExample = () => {
  return (
    <View>
      {/* Botón usando preset */}
      <TouchableOpacity style={ComponentPresets.buttonPrimary}>
        <Text style={TypographyUtils.button}>Botón Primario</Text>
      </TouchableOpacity>

      {/* Contenedor usando preset */}
      <View style={ComponentPresets.container}>
        <Text>Contenido de la aplicación</Text>
      </View>
    </View>
  );
};

// 🎯 EJEMPLO 5: Combinando todo - Componente completo
const CompleteExample = () => {
  return (
    <View
      style={{
        ...ComponentPresets.container,
        ...SpacingUtils.paddingVertical(5),
      }}
    >
      {/* Header */}
      <View style={SpacingUtils.marginBottom(4)}>
        <Text
          style={{
            ...TypographyUtils.heading1,
            color: ColorUtils.neutral(800),
            textAlign: "center",
          }}
        >
          Mi Aplicación
        </Text>
      </View>

      {/* Card */}
      <View
        style={{
          ...ComponentPresets.card,
          ...SpacingUtils.marginBottom(4),
        }}
      >
        <Text
          style={{
            ...TypographyUtils.heading2,
            color: ColorUtils.primary(),
            ...SpacingUtils.marginBottom(2),
          }}
        >
          Título de la Tarjeta
        </Text>

        <Text
          style={{
            ...TypographyUtils.body,
            color: ColorUtils.neutral(600),
          }}
        >
          Contenido de la tarjeta con texto descriptivo
        </Text>
      </View>

      {/* Botones */}
      <View style={SpacingUtils.marginTop(4)}>
        <TouchableOpacity
          style={{
            ...ComponentPresets.buttonPrimary,
            ...SpacingUtils.marginBottom(2),
          }}
        >
          <Text
            style={{
              ...TypographyUtils.button,
              color: ColorUtils.surface("background"),
            }}
          >
            Acción Principal
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={ComponentPresets.buttonSecondary}>
          <Text
            style={{
              ...TypographyUtils.button,
              color: ColorUtils.primary(),
            }}
          >
            Acción Secundaria
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// ✅ BUENAS PRÁCTICAS
/*
1. SIEMPRE usa las utilidades del Design System:
   ❌ backgroundColor: '#10b981'
   ✅ backgroundColor: ColorUtils.primary()

2. Combina utilidades para crear estilos complejos:
   ✅ style={{
     ...ComponentPresets.card,
     ...SpacingUtils.marginVertical(4),
   }}

3. Usa presets cuando sea posible:
   ✅ style={ComponentPresets.buttonPrimary}

4. Mantén consistencia en espaciados:
   ✅ SpacingUtils.padding(4) // 16px
   ❌ paddingTop: 16, paddingLeft: 18 // Inconsistente

5. Para casos especiales, extiende los presets:
   ✅ style={{
     ...ComponentPresets.inputField,
     height: 120, // Para textarea
   }}
*/

export {
  ColorExample,
  TypographyExample,
  SpacingExample,
  ComponentExample,
  CompleteExample,
};
