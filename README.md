
---


# Minkea - Hackathon BCP

## 🚀 Visión General
Minkea es una Web App responsiva diseñada para revitalizar la participación comunitaria juvenil. Inspirada en la tradición andina de la *Minka*, la plataforma utiliza el deseo de conexión social (networking) como motor principal, recompensando el impacto comunitario con beneficios en el ecosistema BCP/Yape.

**Nota para el Agente de Desarrollo:** Este proyecto es un prototipo para una presentación (Hackathon). **No se requiere backend funcional.** Toda la data debe ser mockeada eficientemente en el frontend para simular una experiencia completa y fluida.

---

## 🎨 Lineamientos de UI/UX

*   **Enfoque:** Mobile-First, pero perfectamente escalable a vistas de escritorio.
*   **Paleta de Colores Principal:** 
    *   Uso predominante de gradiente: `linear-gradient(to right, #de6161, #2657eb)` para botones de acción principal (CTAs), encabezados destacados y elementos de carga.
    *   Fondos limpios (blancos/grises claros) para contrastar con la intensidad del gradiente.
*   **Tipografía:** Limpia, sans-serif, moderna (ej. Inter o Roboto). Textos altamente legibles para una navegación rápida.

---

## 🏗️ Arquitectura del Proyecto

El código debe seguir los principios de Clean Architecture para asegurar escalabilidad y orden, separando claramente las responsabilidades y evitando componentes "God Object" (Single Responsibility Principle - SRP).

```text
/src
  /domain       # Interfaces, tipos de datos (Minkas, Usuarios, Recompensas) y casos de uso.
  /infrastructure # Data mockeada (JSONs/arrays) y servicios simulados (ej. fetchMinkas).
  /web          # UI Components, hooks de React, layouts y vistas.
    /components # Componentes reutilizables (Botones, Tarjetas de Minka, Avatares).
    /views      # Vistas principales del flujo (Feed, Detalle, Recompensa).

```

---

## 📱 Flujo de Pantallas (Happy Path)

El flujo omite la autenticación para ir directo al núcleo de la experiencia.

### 1. Home / Feed de Descubrimiento (`/feed`)

* **Contenido:** Un dashboard visual que muestra una lista de tarjetas de "Minkas" disponibles cerca de la ubicación del usuario (ej. "Limpieza de Playa Agua Dulce", "Visita al Asilo San José").
* **Elementos clave:**
* Filtros rápidos (Ambiental, Social, Salud).
* En cada tarjeta: Título, fecha, ubicación, recompensa en Puntos Yape y un "stack" de avatares mostrando quiénes ya se unieron.



### 2. Detalle de la Minka (`/minka/[id]`)

* **Contenido:** Vista ampliada de la misión seleccionada.
* **Elementos clave:**
* Descripción del impacto a lograr.
* Sección de "Comunidad": Cuadrícula con los perfiles/fotos de los jóvenes que asistirán (fomentando el networking).
* **CTA Principal:** Botón ancho con el gradiente `#de6161` a `#2657eb` que diga "Unirme a la Minka".



### 3. Orquestación y Logística (`/minka/[id]/active`)

* **Contenido:** Pantalla post-inscripción para gestionar la asistencia.
* **Elementos clave:**
* Mapa embebido (simulación de Google Maps) con el punto de encuentro exacto.
* Botón "Añadir a Google Calendar".
* Botón "Ir al grupo de WhatsApp" para coordinar con el *squad*.
* **CTA de Acción:** "Confirmar Asistencia en el Lugar" (simulando que ya llegó al evento).



### 4. Validación y Recompensa (`/reward`)

* **Contenido:** Pantalla de éxito post-actividad.
* **Elementos clave:**
* Animación de celebración.
* Mensaje: "¡Minka completada! Gracias por tu impacto."
* Tarjeta visual tipo Yape anunciando: "+50 Puntos Minkea acreditados".
* Botón secundario: "Ver beneficios BCP" o "Volver al Feed".





## 🛠️ Requisitos Técnicos para el Prototipo

* **Stack Sugerido:** React o Next.js con Tailwind CSS para un estilado rápido y eficiente de los gradientes y el responsive design.
* **Mocks:** Crear un archivo `data.ts` o `data.json` en `infrastructure/` que contenga un arreglo de al menos 5 Minkas pre-pobladas con descripciones variadas y datos de usuarios ficticios para la sección de comunidad.
* **Despliegue:** Preparado para despliegue rápido (ej. Vercel) para que el equipo pueda mostrarlo en vivo desde cualquier dispositivo durante el pitch.
* 
---
