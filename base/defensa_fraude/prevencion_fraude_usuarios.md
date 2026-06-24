# Pregunta 47: Prevención de Fraude y Acumulación Falsa de Puntos

El jurado financiero y de tecnología atacará agresivamente la validez de los puntos Yape: **"Si los puntos equivalen a dinero real, la incentivación al fraude será masiva"**.

A continuación, se detallan **tres propuestas técnicas** que derivan y expanden el marco de seguridad inicial, preparadas para contrarrestar réplicas del jurado.

---

## Propuesta A: Validación Geográfica por Cohortes (H3 Spatial Grid + Peer Grouping)
*   **Enfoque:** En lugar de validar únicamente que el GPS individual caiga dentro del hexágono del evento (H3 de Uber), el backend exige una validación de "Cohorte" (co-presencia de pares).
*   **Mecanismo:** El check-in de un usuario solo se valida si coincide en tiempo y espacio (misma celda hexagonal H3) con al menos otros $N$ voluntarios registrados en la misma misión, además del líder comunitario.
*   **Réplica esperada del jurado:**
    *   *Jurado:* *"¿Qué pasa si un grupo de amigos se pone de acuerdo (colusión) para simular asistencia usando un GPS spoofer desde una casa?"*
    *   *Defensa:* *"La colusión se mitiga combinando la co-presencia con telemetría de red. Además de las coordenadas GPS (fácilmente alterables con Mock Location), el backend valida el ID de celda de torre de telecomunicaciones (Cell ID) y la dirección IP pública del dispositivo. Si el grupo está en una zona residencial a kilómetros del voluntariado real (ej. limpieza de playa), las celdas H3 no coincidirán con la ubicación del evento registrada por el líder."*

---

## Propuesta B: QR Criptográfico Dinámico Desconectado (Offline Dynamic QR + TOTP)
*   **Enfoque:** El líder del voluntariado muestra un código QR dinámico generado en su app (sin necesidad de internet en el sitio) que el voluntario debe escanear.
*   **Mecanismo:** El QR contiene un payload cifrado con una clave privada única del líder, que incluye: `ID_Mision + Timestamp + Hash_Secreto_TOTP`. El QR expira y cambia cada 15 segundos (usando el algoritmo de autenticación de dos factores TOTP estándar).
*   **Réplica esperada del jurado:**
    *   *Jurado:* *"Si el voluntariado es en un parque sin señal de internet, ¿cómo valida la app que el QR es correcto? Y si un voluntario le toma foto/video al QR y lo envía por WhatsApp a alguien en su casa, ¿cómo evitan que se registre desde lejos?"*
    *   *Defensa:* *"La validación funciona de forma offline porque tanto la app del líder como la del voluntario tienen el reloj del dispositivo sincronizado y la clave pública correspondiente. Al cambiar cada 15 segundos, cualquier foto o video enviado por WhatsApp expira antes de poder ser escaneado por el tercero. La validación real se encola en el dispositivo del voluntario y se transmite al servidor cuando recupera cobertura."*

---

## Propuesta C: Validación por Prueba de Impacto Cívico (Proof of Impact + Image Hash)
*   **Enfoque:** Condicionar la entrega de puntos no a la asistencia pasiva, sino a la entrega de una "evidencia de trabajo" física.
*   **Mecanismo:** Al finalizar la jornada, el voluntario debe subir una foto de su contribución (antes/después de la limpieza, árbol sembrado, plato servido en comedor) con los metadatos EXIF habilitados. El sistema realiza una validación rápida de hash de imagen en el servidor para evitar duplicados.
*   **Réplica esperada del jurado:**
    *   *Jurado:* *"Ese proceso requiere validación manual. ¿Cómo evitan que el equipo de Minkea pase horas revisando fotos, o que los voluntarios descarguen imágenes de internet?"*
    *   *Defensa:* *"El proceso está automatizado. Usamos una API ligera de visión computacional que extrae los metadatos EXIF de la imagen (verificando que la fecha, hora y ubicación GPS correspondan al evento) y compara el hash visual de la foto contra nuestra base de datos histórica. Si un usuario intenta subir una imagen ya existente en internet o reutiliza una foto previa del mismo evento, el sistema la rechaza inmediatamente por colisión de hash visual o inconsistencia EXIF."*

---

## Resumen de la Estrategia Defensiva para Q47
Al responder, el CTO debe decir:
> *"No dependemos de una sola cerradura. Nuestra arquitectura de seguridad es una **defensa en profundidad**: primero geolocalizamos con H3 pasivamente, luego verificamos presencia física con un QR dinámico TOTP, y finalmente auditamos la tarea con Prueba de Impacto basada en metadata y visión computacional. Esto hace que el costo técnico de hackear el sistema supere con creces el beneficio económico de los puntos obtenidos."*
