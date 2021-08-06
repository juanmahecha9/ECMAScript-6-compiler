#!/bin/bash

## intalar las dependicias, borrar carpeta dist si existe, ejecutar la compilación del codigo y ejecutar el ejemplo sin compilar
function main() {
    npm install --save
    npm run clean
    npm run build
    npm run example
}
 
main