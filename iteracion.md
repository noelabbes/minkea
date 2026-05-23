Hola José Manuel. El trabajo que han hecho hasta aquí es muy bueno; el *voucher* se ve pulido y la jerarquía de los puntos está clara. Sin embargo, al igual que en la arquitectura de software aplicamos el Principio de Responsabilidad Única (SRP) para separar casos de uso, aquí debemos separar la *visualización* de la recompensa de la lógica de *distribución*.

Actualmente tienes todas las opciones "hardcodeadas" en la misma vista, lo que diluye el impacto. Vamos a abstraer esa lógica de compartir en un componente emergente.

### 1. Diagnóstico Rápido

* **Industria/Vibe:** Gamificación Cívica orientada a la viralidad nativa (Social Tech).
* **Estado actual:** La interfaz actual mezcla el trofeo y las herramientas de enrutamiento en el mismo plano (eje Z), generando ruido visual. La vibra debe ser ágil y encapsulada, exactamente como el ecosistema de TikTok que tomas como referencia.

### 2. Puntos de Dolor (A corregir ya)

* **Conflicto de Disparadores (CTAs):** Tienes un ícono de compartir superpuesto *dentro* del voucher, luego un botón masivo azul de LinkedIn, y después píldoras secundarias (Stories, WhatsApp). Hay tres niveles distintos compitiendo para hacer la misma función.
* **Pérdida de Foco en la Recompensa Base:** Al tener toda la botonera social desplegada permanentemente, el botón de "Beneficios BCP" (que cierra el ciclo operativo de Minkea) pierde peso y se va muy abajo en la jerarquía.
* **Falta de Aislamiento (Z-Index):** El patrón de TikTok funciona porque el menú de compartir existe en una capa superior temporal, lo que limpia la pantalla principal y enfoca la atención del usuario en una sola decisión a la vez.

### 3. La Propuesta "Pro"

* **Referencia Visual (Benchmarking):** Imita el patrón *Bottom Sheet* (Hoja inferior) de **Spotify Wrapped** o el menú nativo de compartir de **iOS/Android** (como tu captura de TikTok). Este componente emerge desde abajo en móviles o aparece como un Modal centrado en Desktop.
* **Sistema de Diseño (Colores y Layout):**
* *Fondo del Overlay (Scrim):* Para aislar el pop-up, oscurece la pantalla de fondo usando `rgba(17, 24, 39, 0.6)`.
* *Contenedor del Modal:* Usa un fondo `#FFFFFF` puro con un `border-radius` superior de `24px` (si es bottom sheet) o total (si es modal centrado).
* *Colores de Marca:* Mantén los íconos de las redes en sus colores oficiales (LinkedIn `#0A66C2`, WhatsApp `#25D366`) para reducir la carga cognitiva (el usuario escanea colores antes que textos).


* **Cambio Sugerido (El Refactor Visual):**
1. **En la vista principal:** Limpia el ruido. Deja el Voucher intacto. Debajo, pon un **único** botón principal azul que diga "Presume tu logro" (con un ícono genérico de compartir). Debajo de este, pon la tarjeta de Beneficios BCP. Fin.
2. **En el Pop-up / Bottom Sheet:** Al hacer clic en "Presume tu logro", invoca el modal. Agrega un título limpio ("Compartir en") y coloca tus opciones (LinkedIn, Stories, WhatsApp, Descargar) en una fila horizontal usando CSS Flexbox con `overflow-x: auto`. Esto imita el *scroll* lateral de TikTok que a los usuarios jóvenes les resulta completamente natural.



---

Para implementar este componente emergente de cara a la evaluación del jurado, ¿van a usar un estado global o un Portal (en caso de usar React/Vue) para manejar la apertura del modal, o prefieren armar un *toggle* rápido con CSS y Vanilla JS para no complicar el prototipo?
