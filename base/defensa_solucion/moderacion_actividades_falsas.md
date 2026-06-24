# Pregunta 13: Prevención de Actividades y Organizaciones Falsas

El jurado cuestionará: **"¿Qué impide que aparezcan actividades falsas en la plataforma? ¿Quién modera la veracidad de los eventos?"**

---

## 1. El Marco de Respuesta (Enfoques)

Dependiendo del perfil del jurado que realice la pregunta, se proponen dos alternativas estructuradas de respuesta:

### Alternativa A: Enfoque de Moderación de Contenido por Pipeline Automatizado (Ideal para CIX BCP)
* **Enfoque:** Resaltar la validación empírica, la eficiencia operativa de adquisición, la escalabilidad y las métricas ágiles del producto.
* **Respuesta:**
  > "Implementamos un pipeline de moderación de contenido automatizado en el backend. Toda nueva publicación pasa por un filtro de análisis de lenguaje natural (NLP) para detectar keywords sospechosas, contenido político extremo, comercial o spam. Además, limitamos la creación de eventos en la base de datos mediante cuotas: un colectivo nuevo solo puede publicar una misión activa a la vez y con recompensas bajas. Sus límites aumentan automáticamente según su reputación e historial sin requerir moderación manual masiva."

### Alternativa B: Enfoque de Gobernanza y Control Comunitario (Crowdsourcing) (Ideal para Patronato BCP)
* **Enfoque:** Resaltar la psicología de comportamiento, la movilidad social, el impacto ético en comunidad y la empleabilidad a largo plazo.
* **Respuesta:**
  > "La seguridad se apoya en un modelo de gobernanza comunitaria y reporte rápido. Si una organización publica un evento que resulta ser falso, peligroso o engañoso, los usuarios pueden reportarlo directamente desde la app en campo. Si un evento acumula tres reportes de usuarios con alto nivel de reputación en la plataforma, el evento es suspendido del feed de forma inmediata y preventiva en tiempo real, mientras la cuenta entra en auditoría de compliance por nuestro equipo."

---

## 2. Réplica Esperada del Jurado y Contra-defensa

* **Jurado:** *"Un grupo de usuarios maliciosos podría unirse para denunciar en masa un evento real y perjudicar a una organización legítima."*
* **Defensa:**
  > "El sistema pondera el reporte según la reputación del usuario que denuncia. La denuncia de un usuario nuevo o sin historial verificado tiene un peso mínimo, mientras que la de un usuario con rango 'Líder Cívico' tiene alta prioridad. Esto evita los ataques de reportes maliciosos en masa coordinados y asegura que la moderación comunitaria sea robusta y justa."
