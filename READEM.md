# Trabajo práctico 01
## Descripción
realizamos un programa en donde se pueda ver datos del juego, plataformas de jugabilidad, datos de la empresa que lo creo y se genero una ficha donde se guardo como archivo de texto
## Cómo ejecutar
para ejecutar el proyecto, introducir en el powershell:
 node index.js
 opcional con el nombre
 node index.js mario
 Para ejecutar el programa del Event Loop:
node orden-event-loop.js
## Archivo generado
se creo la ruta y carpeta SALIDA y dentro de la misma se creo el archivo txt `ficha-videojuego.txt` 
## Conceptos
 ¿Qué diferencia existe entre JavaScript, V8 y el runtime de Node.js? javascript es lenguaje nativo del programa , V8 seria el motor que mueve ese programa , y node.js es el entorno en donde se ejecuta javascrip no es un lenguaje nuevo ni un firware sino que es un runtime

  ¿Por qué el callback de setTimeout(..., 0) se ejecuta después del código principal?
  es una tarea que queda programada para ejecutar luego de que termine de leer el codigo principal

  ¿Cuál es la diferencia general entre I/O bloqueante y no bloqueante?
  Una operación de I/O bloqueante hace que el programa tenga que esperar a que termine la operación antes de continuar.

  Una operación no bloqueante permite que el programa continúe mientras la operación se realiza y procese el resultado luego de leido el codigo
  
  ¿Qué responsabilidades cumplen node:path y node:fs en index.js ?
  `node:path` se utiliza para construir y trabajar con rutas de archivos y carpetas. `node:fs` permite trabajar con el sistema de archivos, por ejemplo crear carpetas y escribir archivos.