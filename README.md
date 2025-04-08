# Triangle Validation

Este proyecto contiene una función escrita en Node.js que determina el tipo de triángulo dado tres lados, junto con pruebas unitarias usando **Jest**.

## 🧠 Lógica de la función

La función `triangleType(a, b, c)` clasifica un triángulo según sus lados:

- 📏 **Equilateral**: los tres lados son iguales.
- 📐 **Isosceles**: dos lados son iguales.
- 📊 **Scalene**: todos los lados son diferentes.
- ❌ **Invalid**: si los lados no forman un triángulo válido (por longitud o desigualdad triangular).

## 📁 Estructura del proyecto
- triangle.js         # Función principal
- triangle.test.js    # Pruebas unitarias con Jest
- package.json        # Configuración del proyecto

## ✅ Cómo ejecutar las pruebas

1. Instala las dependencias (Jest):

```bash
npm install
```
2.	Ejecuta los tests:
```bash
npm test
```

## 📚 Ejemplos de uso

```javascrpit
const triangleType = require('./triangle');

console.log(triangleType(3, 3, 3)); // "Equilateral"
console.log(triangleType(3, 4, 4)); // "Isosceles"
console.log(triangleType(3, 4, 5)); // "Scalene"
console.log(triangleType(1, 2, 3)); // "Invalid"
```
