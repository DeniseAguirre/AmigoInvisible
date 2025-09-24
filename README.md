# Amigo Invisible App

Aplicación móvil desarrollada con React Native y Expo para organizar juegos de Amigo Invisible de manera sencilla y divertida.

## Tecnologías y Stack

### Base del Proyecto
- **React Native**: v0.81.4
- **Expo**: Framework para desarrollo simplificado de apps React Native
- **TypeScript**: Tipado estático para mayor seguridad y mejor DX

### Arquitectura y Estructura
- Arquitectura modular y escalable
- Separación clara de responsabilidades (componentes, screens, hooks, servicios)
- Clean Code y mejores prácticas de React/React Native

### Estructura de Carpetas
```
src/
├── components/     # Componentes reutilizables
├── screens/        # Pantallas de la aplicación
├── hooks/          # Hooks personalizados
├── services/       # Servicios y APIs
├── utils/         # Utilidades y helpers
├── types/         # Definiciones de TypeScript
└── context/       # Contextos de React
```

### Dependencias Principales
- `react-native-reanimated` (v4.1.0): Para animaciones fluidas
- `react-native-safe-area-context` (v5.6.0): Manejo de áreas seguras
- `nativewind`: Utilidades de estilo basadas en Tailwind
- `tailwindcss`: Framework de CSS utility-first

### Herramientas de Desarrollo
- ESLint: Linting de código
- Prettier: Formateo de código
- TypeScript: Verificación de tipos estática

## Scripts Disponibles

```bash
# Iniciar el proyecto
npm start

# Iniciar en iOS
npm run ios

# Iniciar en Android
npm run android

# Iniciar en web
npm run web

# Ejecutar linting
npm run lint

# Formatear código
npm run format
```

## Configuración del Proyecto

### Prerrequisitos
- Node.js (versión recomendada: ≥ 16.x)
- npm o yarn
- Expo CLI
- iOS Simulator (para desarrollo en iOS)
- Android Studio (para desarrollo en Android)

### Instalación

1. Clonar el repositorio:
```bash
git clone (https://github.com/DeniseAguirre/AmigoInvisible.git)
```

2. Instalar dependencias:
```bash
cd AmigoInvisible
npm install
```

3. Iniciar el proyecto:
```bash
npm start
```

### Configuración del Entorno

El proyecto utiliza varias herramientas de configuración:

- `babel.config.js`: Configuración de Babel
- `tsconfig.json`: Configuración de TypeScript
- `app.json`: Configuración de Expo
- `tailwind.config.js`: Configuración de TailwindCSS

## Características de la Aplicación

- Diseño moderno y responsive
- Soporte para temas claro/oscuro
- Arquitectura optimizada para rendimiento
- Soporte completo para iOS y Android

## Mejores Prácticas Implementadas

- Uso de TypeScript para type-safety
- Componentes funcionales y hooks
- Patrones de rendimiento optimizados
- Testing con Jest y React Native Testing Library
- Gestión eficiente del estado
- Código limpio y mantenible

## Contribución

1. Fork del repositorio
2. Crear una nueva rama (`git checkout -b feature/AmazingFeature`)
3. Commit de cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abrir un Pull Request

## Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE.md](LICENSE.md) para más detalles.

por Denise Aguirre