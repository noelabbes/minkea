# Pregunta: Alcance y Funcionalidades del MVP (Lean Product Management)

El jurado experto en diseño de producto y metodologías ágiles (como Carlos Roca-Rey) querrá evaluar su criterio de priorización y enfoque en el MVP: **"¿Con cuántas y cuáles funcionalidades piensan arrancar el MVP de Minkea en la Fase 1? ¿Cómo decidieron el alcance y qué funcionalidades críticas dejaron deliberadamente fuera de esta fase inicial para evitar sobrecargar al usuario y simplificar la operación?"**

---

## 1. El Alcance del MVP: Las 4 Funcionalidades Core

Bajo principios de **Lean Startup** y **YAGNI (You Aren't Gonna Need It)**, el MVP de la Fase 1 se limita estrictamente a validar nuestra hipótesis de comportamiento más crítica: *¿Los jóvenes realmente convertirán su interés cívico digital en asistencia física a cambio de puntos Yape, expandir su red social y reconocimiento reputacional?* 

Para validar esto de la forma más rápida y barata en un plazo de 90 días, el MVP arranca únicamente con **4 funcionalidades esenciales**:

1. **Yape Login (Autenticación Simplificada):** Enlace instantáneo de identidad y número de celular mediante OAuth 2.0. Elimina la fricción de registros tradicionales y creación de contraseñas.
2. **Feed de Descubrimiento Geolocalizado:** Una vista móvil simple de actividades comunitarias cercanas, ordenadas por geolocalización hexagonal base (H3 index) y fecha.
3. **Check-In/Out por QR Dinámico y GPS:** Sistema básico de validación cruzada para certificar la presencia en el evento y registrar las horas efectivas en campo.
4. **Perfil Cívico y Tienda Virtual Simple:** Un dashboard básico del Currículum Cívico (insignias, horas y puntos) y una interfaz de redención manual de vales promocionales co-financiados con sponsors en Yape Promos.

---

## 2. Funcionalidades Diferidas (Deliberadamente Fuera del MVP)

Para evitar la sobrecarga cognitiva del usuario, mitigar riesgos operativos de seguridad y acelerar el Time-to-Market, dejamos fuera de la Fase 1 las siguientes funcionalidades complejas:

* **Modelos de Microcréditos y Scoring Alternativo (Diferido a Fase 3):** No otorgamos préstamos ni reducimos tasas de interés en la Fase 1. Sería irresponsable y de alto riesgo financiero arriesgar capital sin haber calibrado el algoritmo con datos reales de comportamiento cívico. El MVP se enfoca en **capturar la data cívica inicial** durante 6 meses.
* **Blockchain y Credenciales Verificables (Diferido a Fase 3):** En el MVP, los logros se registran en una base de datos relacional tradicional (PostgreSQL) segura del banco. La descentralización en red Blockchain se implementará en la fase de escala B2B masiva.
* **Inteligencia Artificial para Recomendación y Moderación (Diferido a Fase 3):** El match de pasiones se realiza mediante tags manuales de categorías y la auditoría de fotos se maneja mediante revisiones manuales aleatorias (muestreo de control), eliminando el costo de desarrollo de visión computacional y modelos predictivos iniciales.
* **Plataforma Auto-gestionada de Sponsors B2B (Diferido a Fase 3):** Las promociones y descuentos en la tienda se cargan de forma manual y centralizada por nuestro equipo; no se implementará el dashboard de auto-servicio de marcas aliadas en el MVP.

---

## 3. El Marco de Respuesta (Enfoques)

### Alternativa A: Enfoque de Time-to-Market y Validación Lean (Ideal para Jurado de Producto / CIX BCP)
* **Enfoque:** Resaltar la eficiencia en el uso de recursos, la rapidez de lanzamiento para ganar tracción y la eliminación de la sobre-ingeniería inicial.
* **Respuesta:**
  > "Nuestra estrategia de producto es lanzar rápido para aprender rápido. Al limitar el MVP a las 4 funciones core (Yape Login, feed geolocalizado, QR dinámico y Currículum base), reducimos el Time-to-Market de 12 meses a solo 90 días con un equipo ágil pequeño. Dejar fuera la Blockchain, la IA y los microcréditos nos permite enfocarnos al 100% en refinar el Core Loop de asistencia física y retención de usuarios en campo antes de construir infraestructura de escala compleja."

### Alternativa B: Enfoque de Mitigación de Riesgos y Calibración de Datos (Ideal para Jurado de Finanzas / Riesgos)
* **Enfoque:** Enfatizar la prudencia financiera, el cumplimiento regulatorio progresivo y la recopilación de datos histórica previa a la admisión crediticia.
* **Respuesta:**
  > "El alcance del MVP fue definido para **proteger los activos del banco y mitigar riesgos**. Lanzar el scoring de microcréditos preferenciales desde el día uno, sin contar con un histórico sólido de datos cívicos de comportamiento de los usuarios, expondría al BCP a pérdidas de cartera y trabas con la SBS. El MVP actúa como nuestra rampa de acumulación de datos conductuales seguros; una vez que logremos calibrar el score cívico frente a la consistencia real de los jóvenes en la Fase 1 y 2, abriremos el flujo crediticio de la Fase 3 con un modelo de riesgo validado."

---

## 4. Réplica Esperada del Jurado y Contra-defensa

* **Jurado:** *"Si quitan los microcréditos y la Inteligencia Artificial de la Fase 1, su MVP es solo una app de voluntariado genérica sin valor financiero diferencial para el BCP."*
* **Defensa:**
  > "Entendemos la preocupación, pero el verdadero valor diferencial del BCP no es la tecnología sofisticada por sí misma, sino el **moat de datos**. Una app genérica de voluntariado no tiene conexión con la identidad digital ni el sistema de incentivos financieros transaccionales. Minkea sí. Nuestro MVP valida la rampa de adquisición (Yape) y el motor de generación de data de comportamiento de bajo costo. Prometer IA y Blockchain sin usuarios en el MVP es solo inyectar buzzwords. Demostrar que captamos usuarios de por vida con un flujo simple de 4 pantallas y que esa data es auditable en base de datos es la base real sobre la cual se escala el modelo financiero."
