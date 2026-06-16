# 🧪 Laboratorio 05 - Pruebas Unitarias Automatizadas con TDD

## 📋 Información General

| Campo | Detalle |
|---------|---------|
| Facultad | Ingeniería de Minas, Geología y Civil |
| Escuela Profesional | Ingeniería de Sistemas |
| Asignatura | IS-489 Pruebas y Aseguramiento de Calidad de Software |
| Docente | Ing. Lizbeth Jaico Quispe |
| Semestre | 2026-I |
| Sistema Analizado | Bruno Ferrini (E-commerce de moda y calzado) |
| Módulo Evaluado | Procesamiento de Pago y Envío (Checkout) |
| Metodología | Test Driven Development (TDD) |

---

# 📖 Descripción del Sistema

**Bruno Ferrini** es una plataforma de comercio electrónico enfocada en la venta de:

- 👞 Calzado de cuero
- 👔 Ropa
- 👜 Accesorios de moda

La plataforma permite a los clientes:

- Visualizar productos
- Gestionar un carrito de compras
- Aplicar cupones promocionales
- Seleccionar métodos de envío
- Realizar pagos seguros con tarjetas bancarias

---

# 🎯 Módulo Seleccionado

## Checkout (Procesamiento de Pago y Envío)

Se seleccionó este módulo por ser el núcleo transaccional del sistema.

### Justificación

Un error en este proceso puede afectar:

- 💰 Las finanzas de la empresa
- 🛒 La experiencia del cliente
- 📦 La gestión de pedidos

La automatización de pruebas permite evitar regresiones futuras y garantizar la estabilidad del sistema.

---

# ✅ Criterios de Aceptación

### CA-01
Permitir la compra únicamente cuando:

- Existan productos en el carrito
- Dirección válida
- Teléfono válido
- Tarjeta de 16 dígitos

### CA-02
Rechazar compras menores a **S/. 50.00**

### CA-03
Validar cupones:

- Longitud mínima: 5 caracteres
- Longitud máxima: 10 caracteres
- Existencia en base de datos

### CA-04
Validar teléfono:

- Exactamente 9 dígitos
- Solo números

---

# 🧪 Casos de Prueba Implementados

| ID | Caso de Prueba | Técnica | Estado |
|------|------|------|------|
| TC-01 | Compra exitosa estándar | Clase Válida | ✅ PASS |
| TC-02 | Cupón con longitud mínima válida | Clase Válida | ✅ PASS |
| TC-03 | Dirección vacía | Edge Case | ✅ PASS |
| TC-04 | Teléfono con caracteres especiales | Edge Case | ✅ PASS |
| TC-05 | Carrito vacío | Clase Inválida | ✅ PASS |
| TC-06 | Tarjeta incompleta | Clase Inválida | ✅ PASS |
| TC-07 | Monto menor a S/.50 | Clase Inválida | ✅ PASS |
| TC-08 | Cupón inexistente | Clase Inválida | ✅ PASS |
| TC-09 | Cupón menor a 5 caracteres | Valores Límite | ✅ PASS |
| TC-10 | Cupón mayor a 10 caracteres | Valores Límite | ✅ PASS |

---

# 🔄 Aplicación de TDD

## 🔴 Fase RED

Primero se desarrollaron las pruebas unitarias utilizando Jest antes de implementar la lógica del sistema.

### Tecnologías utilizadas

- Node.js
- Jest

### Configuración

```json
{
  "scripts": {
    "test": "jest",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage"
  }
}
```

---

## 🟢 Fase GREEN

Posteriormente se implementó la lógica mínima necesaria para que todas las pruebas fueran exitosas.

### Validaciones implementadas

- Carrito no vacío
- Dirección obligatoria
- Teléfono de 9 dígitos
- Tarjeta de 16 dígitos
- Monto mínimo de compra
- Validación de cupones
- Verificación de existencia de cupones

---

# 📂 Estructura del Proyecto

```text
bruno-ferrini-checkout-tdd/
│
├── src/
│   └── checkout/
│       └── checkoutBrunoFerrini.js
│
├── tests/
│   └── checkoutBrunoFerrini.test.js
│
├── package.json
│
└── README.md
```

---

# 🚀 Ejecución del Proyecto

## Instalar dependencias

```bash
npm install
```

## Ejecutar pruebas

```bash
npm test
```

## Ejecutar pruebas en modo observación

```bash
npm run test:watch
```

## Generar reporte de cobertura

```bash
npm run test:coverage
```

---

# 📊 Resultados Obtenidos

```bash
PASS tests/checkoutBrunoFerrini.test.js

Test Suites: 1 passed, 1 total
Tests:       10 passed, 10 total
Snapshots:   0 total
Time:        0.612 s
```

### Resumen

- ✅ 1 Suite ejecutada
- ✅ 10 pruebas exitosas
- ✅ 0 errores
- ✅ 100% de cumplimiento de los casos definidos

---

# 🏆 Conclusiones

1. La metodología **Test Driven Development (TDD)** permitió diseñar primero los requisitos funcionales mediante pruebas automatizadas, promoviendo un desarrollo más estructurado y modular.

2. El uso de **Jest** redujo significativamente el tiempo de validación de reglas de negocio complejas, facilitando su integración en procesos de **Integración Continua (CI/CD)**.

3. Las pruebas automatizadas ayudan a prevenir regresiones futuras y aumentan la confiabilidad del sistema ante modificaciones o refactorizaciones del código.

---

# 👨‍💻 Autor

**Manuel Elias Ore Huasaja**
**Yordi Ajeo Atao Huaman**

Curso: IS-489 Pruebas y Aseguramiento de Calidad de Software  
Universidad Nacional de San Cristóbal de Huamanga