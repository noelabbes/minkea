# Pregunta 48: Prevención de Organizaciones y Eventos Fraudulentos (Falsos)

El jurado cuestionará: **"¿Cómo evitan organizaciones y actividades fraudulentas (falsos colectivos o eventos fantasma en la app)?"**

---

## 1. El Marco de Respuesta (Enfoques)

Dependiendo del perfil del jurado que realice la pregunta, se proponen dos alternativas estructuradas de respuesta:

### Alternativa A: Enfoque de Sandbox de Reputación Progresiva B2B (Ideal para CIX BCP)
* **Enfoque:** Resaltar la validación empírica, la eficiencia operativa de adquisición, la escalabilidad y las métricas ágiles del producto.
* **Respuesta:**
  > "Toda nueva organización que se registra entra automáticamente en un estado 'semi-verificado' o 'Sandbox de Confianza'. Inicialmente, solo pueden publicar misiones con un aforo limitado de participantes y con recompensas bajas de puntos. Sus límites en la base de datos se incrementan de forma automatizada únicamente si completan misiones exitosas con calificaciones positivas de los usuarios y sin reportes de anomalías, asegurando que un colectivo fantasma nunca pueda desplegar fraudes masivos."

### Alternativa B: Enfoque de Validación Cruzada por Datos de Registro Oficial (Ideal para Patronato BCP)
* **Enfoque:** Resaltar la psicología de comportamiento, la movilidad social, el impacto ético en comunidad y la empleabilidad a largo plazo.
* **Respuesta:**
  > "El onboarding exige validación de identidad digital de los líderes a través de la integración con APIs de RENIEC y SUNARP para verificar la existencia legal de la organización y el DNI de los representantes legales que asumen la responsabilidad legal de la cuenta. Además, se realizan convenios con gobiernos locales (municipalidades) que actúan como padrinos de confianza para validar la existencia física y formal de los comedores populares o colectivos locales de sus distritos."

---

## 2. Réplica Esperada del Jurado y Contra-defensa

* **Jurado:** *"Un colectivo real podría volverse fraudulento de un día para otro o ser hackeado."*
* **Defensa:**
  > "Por eso aplicamos un monitoreo constante del comportamiento transaccional en el backend. Si un colectivo verificado cambia bruscamente su patrón de uso (ej. publica un evento de alto aforo con un puntaje excesivamente alto de recompensas y en horarios inusuales), el sistema retiene la publicación preventivamente por anomalía de comportamiento y exige una re-verificación de doble factor (2FA) al administrador de la organización."
