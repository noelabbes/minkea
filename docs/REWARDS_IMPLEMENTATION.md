# Plan de Implementación: Refactorización de Pantalla de Recompensas

Este documento detalla el plan para rediseñar la pantalla de "Misión Cumplida" (Rewards) siguiendo las observaciones de UI/UX para maximizar la viralidad y el "Shareability" del impacto social.

## 1. Objetivos del Rediseño
*   **Priorizar el "Voucher"**: Mostrar visualmente el logro alcanzado antes de pedir al usuario que lo comparta.
*   **Claridad en CTAs**: Diferenciar claramente la acción principal (compartir) de la secundaria (volver al inicio).
*   **Reducir Fricción**: Facilitar el compartido en redes sociales específicas (LinkedIn, Instagram/TikTok).
*   **Jerarquía Visual**: Reorganizar los elementos para que el flujo sea: Celebración -> Recompensa (Yape) -> Logro Visual (Voucher) -> Compartir -> Beneficios Adicionales -> Salida.

## 2. Cambios en el Layout (`src/app/reward/page.tsx`)

### A. Bloque de Recompensas (Yape)
*   Reducir el tamaño del contenedor de puntos.
*   Mantener el estilo "Yape Acreditados" pero con un padding más compacto.

### B. Miniatura del Voucher (Nuevo)
*   Insertar un contenedor con la imagen `@public/assets/mcompletada_lomas.png`.
*   Diseño: Bordes redondeados, sombra suave, y un tamaño que ocupe gran parte del ancho en móvil para que sea legible.

### C. Grupo de Acciones de Compartir (Nuevo)
*   **LinkedIn**: Botón principal con color corporativo `#0A66C2`.
*   **TikTok/Instagram**: Botones secundarios o iconos agrupados.
*   **Descargar**: Icono de descarga (Lucide `Download`) para guardar en la galería.

### D. Beneficios BCP
*   Transformar los botones actuales en un banner o sección más sutil en la parte inferior.

### E. Navegación de Salida
*   Cambiar el botón "Volver al Inicio" por un *Ghost Button* (solo texto, color `#6B7280`).

## 3. Guía de Estilos y Colores
*   **LinkedIn Blue**: `#0A66C2`
*   **Ghost Text**: `#6B7280`
*   **Voucher Shadow**: `0 20px 25px -5px rgb(0 0 0 / 0.1)`

## 4. Pasos de Ejecución
1.  **Preparar los componentes**: Asegurar que `lucide-react` tenga los iconos necesarios (`Linkedin`, `Instagram`, `Download`, `Share2`).
2.  **Actualizar `RewardPage`**:
    *   Modificar el bloque de "Yape Acreditados".
    *   Añadir la sección de miniatura del voucher.
    *   Implementar el grupo de botones de redes sociales.
    *   Rediseñar la sección de Beneficios BCP.
    *   Cambiar el botón de cierre.
3.  **Validación**: Revisar el diseño en dispositivos móviles (responsive).

## 5. Consideración Futura
*   Integrar `html2canvas` para generar el voucher dinámicamente con el nombre y foto del usuario real (actualmente se usará un asset estático para la demo).
