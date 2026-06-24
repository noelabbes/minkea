# Pregunta 10: Metodología de Verificación de Participación

El jurado cuestionará: **"¿Cómo verifican que alguien realmente participó? De esto dependen los puntos Yape, el currículum y los microcréditos."**

---

## 1. El Marco de Respuesta (Enfoques)

Dependiendo del perfil del jurado que realice la pregunta, se proponen dos alternativas estructuradas de respuesta:

### Alternativa A: Enfoque de Seguridad Técnica Multi-capa (Ideal para CIX BCP)
* **Enfoque:** Resaltar la validación empírica, la eficiencia operativa de adquisición, la escalabilidad y las métricas ágiles del producto.
* **Respuesta:**
  > "La verificación no depende de la palabra del usuario. Implementamos un flujo de validación cruzada digital-física en tres pasos: 1) Geolocalización obligatoria en campo mediante indexación espacial H3 de Uber, validando que el GPS del dispositivo se encuentre en el hexágono del evento; 2) Escaneo presencial de un código QR Dinámico generado por el líder del evento que cambia cada 15 segundos; y 3) Foto de evidencia grupal en campo con metadatos de hora y georreferencia no editables."

### Alternativa B: Enfoque de Corresponsabilidad y Auditoría Comunitaria (Ideal para Patronato BCP)
* **Enfoque:** Resaltar la psicología de comportamiento, la movilidad social, el impacto ético en comunidad y la empleabilidad a largo plazo.
* **Respuesta:**
  > "La validación se basa en la corresponsabilidad. El líder de la organización aliada (cuyo perfil tiene reputación auditada por Minkea) actúa como el validador oficial del evento en campo al firmar digitalmente la asistencia en su panel B2B. A esto sumamos la validación social cruzada: los usuarios del mismo 'Squad' deben confirmar la asistencia de sus compañeros. Si hay discrepancias, el sistema retiene los puntos y activa una revisión de consistencia en el backend."

---

## 2. Réplica Esperada del Jurado y Contra-defensa

* **Jurado:** *"El líder del evento podría confabularse con sus amigos para registrar asistencias falsas."*
* **Defensa:**
  > "Para mitigar eso, el backend analiza la consistencia geográfica de todos los check-ins en un evento. Si un líder valida a 20 personas pero el GPS de 10 de ellas se ubica fuera del área de impacto de la celda hexagonal del evento, el sistema bloquea automáticamente la distribución de puntos del lote y genera una alerta de auditoría por posible fraude de colusión."
