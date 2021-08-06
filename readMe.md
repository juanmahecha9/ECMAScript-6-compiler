# Compilador de ECMAScript 6 y versiones posteriores

Este programa esta diseñado para generar la transcripción de codigo de ECMAScript 6 y sus versiones posteriores con el fin de generar codigo de JavaScript comprendible por el navegador usando un transcompilador de JS gratuito y de código abierto conocido como **Babel**, esta herramienta se utiliza principalmente para convertir codigo de ECMAScript 2015+ a una versión de JS la cual sera interpretada por motores de busqueda que no son 100% compatibles con las nuevas actualizacione del mismo lenguaje.

··························


## ¿Cómo usar?

El programa requiere para ser inicializado lo siguiente:
 - Al descargar o clonar el repositorio instalar las dependencias con el comando `npm i`o con el script download.sh usando el comando `sh download.sh`el cual ejecutara por primera vez el compilador para poder visualizar el funcionamiento del mismo programa, donde se compila el ejemplo, y al tiempo se puede ver visualizado por consola el programa de ejemplo el cual muestra a travez del uso de clases un mensaje por consola.
Una vez descargado el repositorio ¿Qué comandos se deben ejecutar?
 - `npm run build`, este codigo compila el o los código(s) ingresados sean en el archivo index o en diferentes archivos que se alojen en la carpeta src, de igual forma se puede ejecutar el archivo compile.sh con el comando `sh compile.sh`.
 - `npm run clean`, este comando ejecuta una dependencia npm llamda rimraf que es similar al comando rm -rf el cual permite eliminar un directorio con archivos dentro, en este caso elemina el directorio dist que es creado con la compilación, o de igual manera se puede usar el archivo clean.sh usando el comando `sh clean.sh`.
