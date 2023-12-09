Desafío:
- Crear una aplicación React que permita:
  - Listar productos. Para la construcción del listado de los productos, utilizar el JSON adjunto. Cada producto debe tener una opción para agregar al carrito de compras junto con la cantidad respectiva a agregar.
  - Disponer de un carrito de compras que muestre los productos agregados y el total correspondiente a la compra.
  - Debe tener un botón "comprar" que actualice la cantidad correspondiente de cada producto según lo comprado.
  - El carrito de compras debe tener un botón "limpiar" que vacíe los productos agregados al carrito.
  - Contar con una página que permita agregar nuevos productos.

Requisitos técnicos:
- Usar Sass para crear estilos, compilar archivos Sass a CSS localmente y agregarlos al proyecto (solo se revisarán los archivos Sass).
- Contar con un diseño responsive.
- Realizar pruebas unitarias.

Plus:
- Al realizar uno o todos los puntos siguientes, se otorgarán puntos extras al calificar el resultado de la prueba:
  - Si se recarga la página y se tenían productos agregados al carrito, estos se deben conservar.
  - Agregar una opción de Modo Oscuro.

Test de lógica:
- Dada una cadena que contiene un carácter especial junto con letras (de la 'a' a la 'z' y de la 'A' a la 'Z'), invertir la cadena de manera que los caracteres especiales no se vean afectados.
  - Ejemplos:
    - Entrada: str = "a,b$c"
      Salida: str = "c,b$a"
      Tenga en cuenta que $ y , no se mueven a ningún lado. Solo se invierte la subsecuencia "abc".
    - Entrada: str = "Ab,c,de!$"
      Salida: str = "ed,c,bA!$"
      Enlace al recurso: [Invertir una Cadena sin Afectar Caracteres Especiales](https://www.geeksforgeeks.org/reverse-a-string-without-affecting-special-characters/)

Modalidad de entrega:
- Repositorio público subido a Github, Gitlab, Bitbucket.
- Enlace de la aplicación funcionando.

Conceptos a evaluar:
- Consumo de APIs externas (representada por el JSON).
- Modularización de componentes reutilizables.
- Conocimientos en CSS y sus distintos pseudo selectores.
- Diseño responsive.
- Uso de librerías externas.
- Captura de eventos de elementos HTML.
- Manejo del estado en React a través de estados globales (Context, Redux, etc).
- Styled Components.
- Conocimiento en pruebas unitarias.
- Conocimiento de build y despliegue en un host.
- Entendimiento de negocio y prevención de casos límite que puedan romper la lógica de negocio o la aplicación (permite agregar más productos aunque ya no tengan inventario o no tener en cuenta evitar agregar productos con ID repetido a un producto ya existente).