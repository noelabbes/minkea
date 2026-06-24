# Análisis de Contraste: Pitch en Video vs. Preguntas del Jurado (Rúbrica BCP)

Este documento realiza un análisis comparativo entre el guion del pitch en video ([transcripcion.md](file:///D:/minkea/base/transcripcion.md)) y las preguntas previamente formuladas por GPT y Gemini. El objetivo es identificar **brechas críticas de defensa** (declaraciones hechas en el video que no están cubiertas por las preguntas de IA pero que el jurado del BCP atacará) y estructurar las preguntas basándose estrictamente en los criterios de evaluación de los Términos y Condiciones del Hackathon ([bcp_rubrica.pdf](file:///D:/minkea/base/bcp_rubrica.pdf)).

---

## 1. Matriz de Contraste y Análisis de Brechas (Gap Analysis)

El jurado evaluará el proyecto según lo que escuche y vea en el video. A continuación, contrastamos las secciones del guion con los criterios de la rúbrica y las preguntas preexistentes para identificar los vacíos de preparación:

| Sección del Video | Declaración / Promesa Clave en el Pitch | Criterio de Rúbrica Relacionado | ¿Cubierto por GPT/Gemini? | Brecha de Defensa (El "Ángulo Muerto" del Jurado) |
| :--- | :--- | :--- | :--- | :--- |
| **Dramatización** (Líneas 1-11) | Cristian expresa desconfianza porque "la ayuda no llega a quienes lo necesitan". | **Participación y Ciudadanía Activa** | Parcialmente (Fraude general) | **El dilema de la corrupción:** Si el problema de Cristian es la transparencia de las ONG, ¿cómo asegura Minkea que el dinero/ayuda de la organización llegue realmente al beneficiario final y no se quede en gastos administrativos o desvíos? El match de intereses no soluciona la corrupción estructural de una organización. |
| **Acceso a Yape** (Línea 23) | "Además, se podrá acceder a Minkea directamente desde Yape." | **Solución (35%)** (Funcionalidad) | No | **Viabilidad de Integración Core:** Esta es una promesa masiva. El jurado técnico preguntará: ¿Minkea es un Mini-App nativo de Yape o solo un enlace externo? ¿Qué impacto tiene en la seguridad, autenticación (OAuth) e infraestructura de Yape procesar miles de misiones geolocalizadas? |
| **Demanda Laboral al BCP** (Línea 30) | "...este currículum cívico deberá ser tomado en cuenta para la participación en las convocatorias laborales del BCP." | **Empleabilidad Juvenil** / **Originalidad (35%)** | Parcialmente (Valor corporativo general) | **Viabilidad Operativa en HR:** El pitch usa el término imperativo *"deberá"*. El jurado de Gestión de Talento del BCP preguntará: ¿Cómo se integra técnicamente con el ATS (Applicant Tracking System) de reclutamiento del banco? ¿Qué peso porcentual tiene frente a la evaluación técnica? ¿No expone al BCP a demandas por discriminación al priorizar candidatos según su tiempo libre para voluntariado? |
| **Acceso a Créditos BCP** (Línea 30) | "Este historial también funcionará como un respaldo de confianza, permitiendo a los jóvenes entrar con menos barreras al ecosistema de préstamos bancarios." | **Solución (35%)** / **Inclusión Financiera** | Parcialmente (Riesgo y scoring general) | **Cumplimiento Regulatorio SBS:** La SBS tiene normas estrictas sobre evaluación de capacidad de pago. El jurado financiero preguntará: ¿Cómo justifica el BCP ante la SBS la reducción de barreras de riesgo para microcréditos basándose en "horas de voluntariado"? ¿Cuál es el modelo actuarial de pérdida esperada que respalda esto? |
| **Aval de Marca BCP** (Línea 30) | "Las publicaciones digitales, generadas automáticamente por la aplicación, deberán estar avaladas y respaldadas por el banco." | **Presentación (10%)** (Branding) / **Riesgo** | No | **Riesgo Reputacional Directo:** Si una publicación automatizada con la marca BCP muestra fotos o textos de un evento con tintes políticos, ilegales o controvertidos (un riesgo real en voluntariados vecinales), el daño a la marca del banco es crítico. ¿Cómo automatizas un aval de marca sin control manual previo? |
| **Métrica de Impacto** (Línea 32) | "Esperamos activar al 23.8% de esta población juvenil." | **Escalabilidad (20%)** (Medible) | Parcialmente (Procedencia del número) | **Sostenibilidad Financiera del Costo de Puntos:** Si se activa al 23.8% de los jóvenes peruanos (~1.5 millones de usuarios) y cada uno canjea puntos mensuales, ¿quién financia la tienda de recompensas? Si el BCP asume el costo, el impacto en su presupuesto de RSE sería insostenible. |
| **Fase 4: Sostenibilidad** (Línea 42) | "Fase 4: Respaldo Gubernamental. Buscaremos el apoyo del Estado para lograr la viabilidad financiera a largo plazo." | **Escalabilidad (20%)** (Sostenible) | No | **Dependencia de Subsidios:** Si la viabilidad financiera de largo plazo depende del respaldo del gobierno, el modelo de negocio no es autosostenible de manera privada. ¿Qué pasa si el Estado no aprueba el presupuesto o cambia la política pública? |

---

## 2. Formulación de Preguntas Ácidas (Directas del Script y Rúbrica)

A continuación, estructuramos las preguntas que el jurado formulará específicamente a partir del video, clasificadas bajo los criterios oficiales de la rúbrica de [bcp_rubrica.pdf](file:///D:/minkea/base/bcp_rubrica.pdf).

### A. Solución y Capacidad Operativa (35% de la Rúbrica)

> [!IMPORTANT]
> El jurado buscará comprobar si la solución es realmente funcional, segura y ejecutable en el corto plazo, especialmente en sus claims de integración con Yape.

*   **P1: La Viabilidad Técnica de la Integración con Yape**
    *   *Pregunta del Jurado:* "En el video mencionan categóricamente que *'se podrá acceder a Minkea directamente desde Yape'*. Yape opera con una arquitectura cerrada y sumamente sensible por temas de transacciones monetarias. ¿Tienen un pre-acuerdo o viabilidad técnica conversada con el equipo de arquitectura de Yape para integrarse como un Mini-App nativo, o están asumiendo que el BCP les abrirá su API core de buenas a primeras?"
    *   *Ángulo de ataque:* Evalúa el realismo técnico de la propuesta y si el equipo comprende la complejidad de integrar código de terceros en una app financiera con 15 millones de usuarios.
*   **P2: El Filtro de la Desconfianza en la Práctica**
    *   *Pregunta del Jurado:* "El personaje 'Cristian' en su video señala que desconfía de los voluntariados porque *'algunos lo hacen para beneficio propio'*. Minkea promete 'garantizar transparencia antes, durante y después'. ¿Cómo audita técnicamente Minkea que una organización no gubernamental registrada en su app no esté malversando los fondos de sus donantes o explotando a sus voluntarios, más allá de que el usuario haga check-in con un QR?"
    *   *Ángulo de ataque:* Apunta al valor de la "transparencia". El check-in valida asistencia, pero no soluciona el problema de fondo del desvío de ayuda mencionado en la dramatización.

---

### B. Originalidad e Innovación (35% de la Rúbrica)

> [!TIP]
> Aquí el jurado retará la viabilidad de usar variables cualitativas (reputación cívica) en procesos corporativos rígidos y regulados (reclutamiento BCP y créditos bancarios).

*   **P3: La Factibilidad Normativa y el Scoring de Riesgos (SBS)**
    *   *Pregunta del Jurado:* "Afirman que el historial de Minkea permitirá a los jóvenes *'entrar con menos barreras al ecosistema de préstamos bancarios'*. El BCP, al estar regulado por la SBS, no puede flexibilizar sus modelos de admisión de riesgos por criterios puramente cívicos o de voluntariado si no hay capacidad de pago demostrada. ¿Cómo planean ponderar el 'currículum cívico' dentro del motor de decisiones de crédito sin violar la normativa de provisiones y sobreendeudamiento de la SBS?"
    *   *Ángulo de ataque:* Desafía la viabilidad regulatoria y financiera del proyecto. El civismo no paga deudas; el jurado financiero será implacable aquí.
*   **P4: La Integración Real en los Procesos de Reclutamiento del BCP**
    *   *Pregunta del Jurado:* "Dicen que el currículum cívico *'deberá ser tomado en cuenta para la participación en las convocatorias laborales del BCP'*. Los procesos de selección del BCP están altamente automatizados (usando ATS y evaluaciones por competencias). ¿Cómo planean estructurar esa información para que sea legible y valorada objetivamente por el equipo de Gestión del Talento? ¿Qué peso real tendrá frente a un título universitario o experiencia técnica?"
    *   *Ángulo de ataque:* Pone a prueba el alineamiento de la solución con el reto de **Empleabilidad juvenil** de la rúbrica, retando la practicidad del "currículum cívico".
*   **P5: El Peligro del Aval de Marca Automatizado**
    *   *Pregunta del Jurado:* "Mencionan en el video que las publicaciones digitales automatizadas *'deberán estar avaladas y respaldadas por el banco'*. Si un usuario genera contenido sobre un evento de voluntariado que, a pesar de los filtros, resulta tener discursos de odio, proselitismo político encubierto o actividades peligrosas, la marca BCP se vería directamente afectada. ¿Cómo mitigan este riesgo reputacional sin requerir un equipo masivo de moderación manual por parte del banco?"
    *   *Ángulo de ataque:* El riesgo reputacional es uno de los mayores temores de una entidad financiera.

---

### C. Escalabilidad y Sostenibilidad Financiera (20% de la Rúbrica)

> [!WARNING]
> Este bloque cuestiona la coherencia de la hoja de ruta y la estructura de costos de los incentivos en un escenario de escala real.

*   **P6: La Sostenibilidad del Modelo de Incentivos (Costo de Puntos)**
    *   *Pregunta del Jurado:* "Su meta es activar al *23.8% de la población juvenil*. Hablamos de más de 1.5 millones de jóvenes en el Perú. Si logran esa escala y cada joven redime mensualmente puntos Yape equivalentes a un beneficio de S/ 10, esto representaría un costo de S/ 15 millones mensuales. ¿Quién absorbe ese costo? Si son marcas privadas (Fase 3), ¿qué incentivo comercial tienen para financiar esta magnitud en lugar de usar publicidad tradicional?"
    *   *Ángulo de ataque:* Cuestiona la viabilidad financiera del core de incentivos de la solución.
*   **P7: La Contradicción de la Viabilidad en la Fase 4**
    *   *Pregunta del Jurado:* "En su roadmap de escalabilidad, indican que en la Fase 4 buscarán *'el apoyo del Estado para lograr la viabilidad financiera a largo plazo'*. Si la sostenibilidad de Minkea depende de fondos gubernamentales a futuro, ¿significa que el modelo de negocio privado con sponsors y el BCP no es rentable por sí mismo? ¿Qué pasa si el Estado decide no financiar la plataforma?"
    *   *Ángulo de ataque:* Un proyecto para ser ganador debe demostrar sostenibilidad comercial sin depender de subsidios del gobierno.
*   **P8: La Brecha Operativa entre las Fases del Roadmap**
    *   *Pregunta del Jurado:* "En la Fase 2 proponen realizar la validación y certificación de la participación de forma estándar, pero recién en la Fase 3 integran Blockchain e IA para la validación automática y seguridad. ¿Cómo evitarán que durante toda la Fase 2 (que puede durar un año o más) los usuarios exploten y defrauden el sistema de puntos mediante simulación de asistencia al no contar aún con la tecnología de seguridad avanzada?"
    *   *Ángulo de ataque:* Retar la lógica secuencial del roadmap técnico.

---

### D. Presentación y Enfoque en el Desafío (10% de la Rúbrica)

> [!NOTE]
> Evalúa la pertinencia del guion y si responde directamente a los desafíos del concurso (Empleabilidad y Ciudadanía Activa).

*   **P9: La Incongruencia entre los Problemas del Guion y la Solución Tecnológica**
    *   *Pregunta del Jurado:* "En la dramatización de su video, el personaje 'José' dice que no puede participar porque no tiene tiempo los domingos. Su app propone 'flexibilidad y match inteligente'. Pero si las organizaciones solo programan eventos los domingos porque es cuando sus líderes están libres, ¿cómo soluciona su app la falta de oferta en días de semana? ¿Minkea genera oferta de voluntariado o solo es un canal de visualización?"
    *   *Ángulo de ataque:* Desafía si la app realmente resuelve los dolores del usuario que dramatizaron al inicio.

---

## 3. Estrategias de Defensa y Alineación con el [marco_de_respuestas.md](file:///D:/minkea/base/marco_de_respuestas.md)

Para blindar al equipo durante la ronda de preguntas, se deben estructurar las respuestas utilizando los pilares clave del marco estratégico:

### Defensa para la integración con Yape (P1)
*   **Enfoque:** *Minkea no requiere modificar el core de Yape de inmediato*. En la Fase 1 (MVP), Minkea opera como una plataforma web/móvil independiente que se conecta a la API pública de Yape/BCP únicamente para la dispersión de puntos/beneficios y validación de identidad (Yape Login). La integración como "Mini-App" dentro del menú de Yape es un objetivo de escala (Fase 3) sustentado por las métricas de tracción y retención obtenidas en el piloto inicial.

### Defensa para el Scoring de Créditos y Regulación SBS (P3)
*   **Enfoque:** *No se reemplaza el análisis de capacidad de pago, se complementa.* El Currículum Cívico no se utiliza para evaluar capacidad de pago (requisito SBS), sino como un **multiplicador de confianza** y factor de pre-aprobación para el segmento *Thin File* (jóvenes sin historial). Funciona reduciendo la tasa de interés preferencial (bajo un programa de fomento de inclusión respaldado por el área de Sostenibilidad del BCP) y reduciendo el requerimiento de documentación física. El riesgo crediticio de base sigue estando cubierto por los modelos tradicionales y el respaldo del capital de trabajo del banco.

### Defensa para la Sostenibilidad Financiera y Costo de Puntos (P6 y P7)
*   **Enfoque:** *El costo se financia por el valor del CAC y presupuestos ESG corporativos.* El costo de los descuentos y beneficios de la tienda virtual de Minkea no es una pérdida para el BCP, sino una inversión en la adquisición de clientes jóvenes con un CAC (Costo de Adquisición de Clientes) significativamente menor al de campañas tradicionales de marketing. Además, en la Fase 3, los sponsors corporativos financian los descuentos no como donación, sino a cambio de la data auditada de impacto ambiental y social (ESG) requerida para sus reportes regulatorios. El respaldo del gobierno en la Fase 4 no es para subsistir, sino para convalidar las horas cívicas en programas públicos (como créditos del PRONABEC o servicio civil).
    *   *Ver detalle de marco de defensa y alternativas directas para P7 (Fase 4):* [respaldo_gubernamental_convalidacion.md](../defensa_gobierno/respaldo_gubernamental_convalidacion.md).


---

> [!TIP]
> **Recomendación para el ensayo del Pitch:**
> El equipo debe ensayar las transiciones de respuesta utilizando la técnica de *"Puente hacia el Foco"*, devolviendo al jurado al concepto central: **"Minkea es una plataforma de inclusión financiera juvenil habilitada por la conducta cívica"**, para evitar que el jurado disperse el debate en los detalles técnicos de Blockchain o en temas administrativos de recursos humanos del banco.

---
*Este análisis se ha generado para contrastar de manera directa las declaraciones de [transcripcion.md](file:///D:/minkea/base/transcripcion.md) con las exigencias de la rúbrica de la Hackathon BCP.*
