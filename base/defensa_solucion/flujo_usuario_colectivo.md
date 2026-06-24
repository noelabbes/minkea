# Pregunta: El Flujo de Usuario y del Colectivo (UX / User Journey)

El jurado enfocado en diseño de producto y operaciones (como Carlos Roca-Rey y Gustavo Jiménez) querrá evaluar el detalle operativo y la experiencia de usuario: **"En el pitch se enfocan mucho en el concepto y el impacto, pero no muestran el flujo de uso. ¿Cómo es exactamente el viaje del usuario (joven) desde que entra por primera vez hasta que cobra su recompensa? ¿Y cómo es el flujo administrativo para el colectivo que organiza el evento?"**

---

## 1. El Detalle del User Journey (Core Loop)

Minkea opera bajo un marketplace bilateral con flujos diferenciados e integrados para asegurar fricción cero en el frontend y seguridad automatizada en el backend:

### A. El Viaje del Voluntario (Joven)
1. **Acceso con Yape Login (Fricción Cero):** El joven abre la Web App (Fase 1) o accede desde la pestaña Yape (Fase 3). Inicia sesión mediante **Yape Login (OAuth 2.0)** en un toque. No crea contraseñas nuevas; heredamos su identidad validada y número de celular de forma segura.
2. **Descubrimiento Inteligente:** Configura en 5 segundos sus tres "Pasiones" (ej. Medio Ambiente, Educación, Animales). El feed principal le presenta misiones geolocalizadas prioritariamente dentro de su celda hexagonal H3 (vecindario).
3. **Inscripción y Squads:** Selecciona una misión y se inscribe. En esa misma pantalla, la app le permite presionar "Minkear con amigos", generando un enlace dinámico para compartir por WhatsApp. Sus amigos se inscriben en el mismo "Squad" de forma agrupada.
4. **Acción en Campo (Check-In/Out):**
   * **Check-In:** Al llegar al lugar, el GPS de la app valida su presencia dentro de la celda de geocerca hexagonal. Escanea el **QR Dinámico** (cambia en tiempo real cada 15 segundos en el móvil del líder).
   * **Check-Out:** Al finalizar, realiza un segundo escaneo rápido para verificar las horas de permanencia.
5. **Recompensa y Trascendencia:** Recibe una notificación de felicitación en pantalla. Los puntos Yape ganados se acreditan a su balance virtual y su perfil de competencias blandas actualiza dinámicamente sus barras en el **Currículum Cívico**.

### B. El Viaje del Colectivo / Organización
1. **Onboarding B2B Automatizado:** La organización ingresa al portal de gestión. Se valida su personería jurídica de forma inmediata cruzando su RUC con la API de SUNARP o el padrón oficial de SENAJU.
2. **Creación de Misión:** Completa un formulario guiado de 4 campos: Categoría (ODS), Ubicación, Fecha/Hora y Vacantes. El backend calcula y asigna automáticamente el costo en puntos que se entregará a los usuarios, descontándose de su límite asignado en su Sandbox de confianza progresivo.
3. **Gestión de Campo:** En el evento, el líder de la organización abre su panel móvil y proyecta el QR Dinámico para que los voluntarios registren su asistencia. Visualiza en tiempo real la lista de check-ins exitosos.
4. **Evaluación de Squads y Cierre:** Al finalizar, el líder califica el desempeño grupal (1 a 5 estrellas) y valida si hubo bajas en la minka. Al guardar, el backend libera los puntos a los voluntarios y actualiza el **Dashboard de Impacto ESG** del colectivo con métricas auditables de horas de impacto.

---

## 2. El Marco de Respuesta (Enfoques)

### Alternativa A: Enfoque de Experiencia WoW y Carga Cognitiva Mínima (Ideal para Jurado de Producto / CIX BCP)
* **Enfoque:** Resaltar la simplicidad móvil, el uso de OAuth (Yape Login) para evitar formularios de registro pesados y el diseño visual intuitivo.
* **Respuesta:**
  > "Diseñamos el flujo de Minkea enfocándonos en la **reducción de la carga cognitiva** y la velocidad de conversión digital-a-física. El registro se resuelve en un clic gracias a la integración del **Yape Login**. El descubrimiento de misiones funciona como un feed dinámico similar a las interacciones de redes sociales que el joven ya domina (TikTok/Instagram), en lugar de un directorio plano. Gamificamos el paso de mayor fricción, que es la asistencia presencial, mediante el check-in en 'Squads': la sensación de completar un logro en equipo con amigos diluye la percepción de control de asistencia tradicional."

### Alternativa B: Enfoque de Consistencia Operativa y Robustez B2B (Ideal para Jurado de Negocios y Operaciones)
* **Enfoque:** Destacar el control administrativo de los colectivos, la automatización del control del fraude y los entregables de valor para el patrocinio corporativo.
* **Respuesta:**
  > "Nuestra prioridad en el flujo B2B es la **autonomía descentralizada**. Las organizaciones no dependen de que un administrador de Minkea apruebe manualmente sus voluntariados. La validación automática de SUNARP en el onboarding y los límites progresivos del Sandbox técnico garantizan la seguridad operativa desde el primer minuto. Cerramos el flujo administrativo proveyéndoles valor inmediato al colectivo: el backend procesa automáticamente los check-ins y les genera un Reporte de Impacto Social listo para auditoría, eliminando sus horas de papeleo en Excel."

---

## 3. Réplica Esperada del Jurado y Contra-defensa

* **Jurado:** *"Exigir un check-in y un check-out con QR dinámico y GPS genera demasiada fricción. El voluntario se olvidará de marcar la salida y el sistema quedará inconsistente."*
* **Defensa:**
  > "Diseñamos un mecanismo de incentivo natural para asegurar el check-out. Los puntos Yape y la actualización de su Currículum Cívico no se liberan con la llegada (check-in), sino que se encuentran **retenidos en custodia** hasta que se marca la salida (check-out). El interés del joven en obtener su recompensa y la validación de sus horas universitarias es el motor que asegura el cumplimiento del flujo completo de manera orgánica. Adicionalmente, el backend envía una alerta push de recordatorio si el GPS detecta que el usuario se aleja del hexágono del evento sin haber marcado su check-out."
