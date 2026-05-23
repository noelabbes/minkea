
---

# Documento Fundacional: Proyecto MINKEA

## 1. Visión y Esencia

**Minkea** trae al siglo XXI la antigua tradición andina de la *Minka* (trabajo comunitario para el beneficio mutuo). Es una plataforma social y operativa diseñada para transformar la apatía cívica en participación activa, utilizando el deseo intrínseco de los jóvenes por conectar socialmente como el motor principal para resolver problemas comunitarios.

No somos una plataforma de "voluntariado aburrido"; somos el punto de encuentro donde conocer gente nueva y generar impacto real suceden al mismo tiempo.

## 2. El Problema y Nuestra Hipótesis

* **El Problema:** La juventud peruana presenta bajos índices de participación comunitaria. La data nos dice que hay desconfianza y falta de tiempo.
* **El Insight:** El incentivo más poderoso para movilizar a un joven no es un certificado, es **conocer personas con intereses similares**.
* **La Hipótesis:** Si reducimos la fricción logística para encontrar actividades de impacto, facilitamos la conexión social previa y recompensamos financieramente la ejecución, los jóvenes priorizarán el trabajo comunitario dentro de su agenda.

## 3. Arquitectura del Flujo de Usuario (Core Loop)

El ciclo de vida del usuario en Minkea sigue el Principio de Responsabilidad Única: cada paso hace una sola cosa, sin fricción.

1. **Descubrimiento (Geosocial):** El usuario ingresa a la Web App y visualiza un feed/mapa con "Minkas" (misiones comunitarias) cercanas a su ubicación.
2. **Conexión (Networking):** Al revisar una misión, ve los perfiles de los otros jóvenes inscritos. Decide unirse ("Minkear").
3. **Orquestación Logística:** Se habilita la integración con Google Calendar (para bloquear la agenda) y Google Maps (para la ruta exacta). Se deriva la comunicación a un foro embebido o grupo temporal de WhatsApp.
4. **Acción (Trabajo en Campo):** Los jóvenes asisten, ejecutan la misión y, lo más importante, interactúan entre ellos.
5. **Recompensa (Ecosistema BCP):** Se valida la asistencia y el sistema inyecta "Puntos Minkea" en el ecosistema Yape/BCP del usuario, canjeables por beneficios, cerrando el ciclo y fomentando la retención.

## 4. Tipos de "Minkas" (Casos de Uso a prototipar)

Las misiones deben ser concretas, de alto impacto y duración controlada.

* **Ambientales:** Limpieza de playas, recojo de basura en ríos, plantación de árboles en parques distritales.
* **Sociales:** Visitas dinámicas a asilos de ancianos, apoyo en comedores populares, entrega de donaciones en grupo.
* **Salud y Bienestar:** Visitas de animación a pabellones pediátricos en hospitales, asistencia grupal a campañas de donación de sangre.

## 5. Alcance Técnico del Prototipo (Hackathon)

De cara a la evaluación del jurado, el alcance técnico **no** requiere un backend completo, sino una Web App interactiva (UI/UX) con datos mockeados que demuestre la viabilidad del flujo.

* **Front-end:** Interfaces limpias, amigables y enfocadas en la usabilidad móvil (Mobile First).
* **Simulación de Integraciones (Mockups):**
* *Google Maps:* Embebido visual para la ubicación del punto de encuentro.
* *Google Calendar:* Botón de "Agendar" simulado.
* *WhatsApp/Comunidad:* Botón de "Unirse al chat del squad".
* *Yape/BCP:* Pantalla de validación de impacto que muestre la conversión de la acción en puntos/descuentos Yape.



---
