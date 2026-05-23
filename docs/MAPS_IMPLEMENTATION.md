# Plan de Implementación: Mapa de Punto de Encuentro Estilo Airbnb

Este documento detalla los pasos para integrar Google Maps en el proyecto Minkea con una estética similar a la de Airbnb, tal como se muestra en `docs/maps.PNG`.

## 1. Configuración del Entorno
*   **Variable de Entorno**: Asegurar que `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` esté configurada en el archivo `.env`.
*   **Instalación de Dependencias**:
    ```bash
    npm install @vis.gl/react-google-maps
    ```

## 2. Creación del Componente `MeetingPointMap`
Se creará un nuevo componente en `src/web/components/MeetingPointMap.tsx`.

### Características Principales:
*   **API**: Utilizar `@vis.gl/react-google-maps` para una integración moderna y eficiente.
*   **Marker Personalizado**:
    *   Diseñar un marker que sea un círculo negro con un punto blanco central.
    *   Incluir una etiqueta "Meeting point" con tipografía en negrita debajo del marcador.
*   **Controles de UI**:
    *   Deshabilitar la UI por defecto de Google Maps (`disableDefaultUI: true`).
    *   Implementar controles personalizados de zoom (+ / -) y pantalla completa en el lado derecho.
    *   Añadir un botón de búsqueda/reciente en la esquina superior izquierda si es necesario.
*   **Estilo del Mapa**:
    *   Configurar un `mapId` (si se dispone de uno en la consola de Google) o aplicar un estilo JSON para simplificar los colores y eliminar puntos de interés innecesarios.
*   **Interactividad**:
    *   Zoom adecuado (nivel 15-16 aprox.) centrado en las coordenadas del punto de encuentro de la Minka.

## 3. Integración en la Página de Detalle (`MinkaDetailPage`)
*   Reemplazar el `iframe` actual por el nuevo componente `MeetingPointMap`.
*   Pasar las coordenadas (`lat`, `lng`) y la dirección desde el objeto `minka`.

## 4. Diseño y Estética
*   **Contenedor**: Esquinas redondeadas (`rounded-2xl` o `rounded-3xl`).
*   **Sombra**: Sombra suave (`minkea-shadow`).
*   **Overlay**: Asegurar que los controles personalizados floten sobre el mapa con un diseño limpio (blanco, bordes redondeados, iconos de Lucide).

## 5. Pasos de Ejecución
1.  **Instalar** la librería `@vis.gl/react-google-maps`.
2.  **Configurar** el `APIProvider` en un nivel superior (ej. `layout.tsx` o envolviendo el componente).
3.  **Desarrollar** el componente `MeetingPointMap` con el marker estilo Airbnb.
4.  **Sustituir** el iframe en `src/app/minka/[id]/page.tsx`.
5.  **Validar** el funcionamiento y el zoom en diferentes dispositivos.
