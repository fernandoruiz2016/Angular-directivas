# Directivas - Angular 20

Este repositorio forma parte de una tarea del curso **Desarrollo de Interfaces 3**.

## Objetivo

Aplicar el uso de directivas estructurales y de atributo en Angular 20, así como comprender el ciclo de vida de los componentes.

---

## Contenido de la Actividad

### 1️⃣ Uso de *ngIf (@if) y *ngFor (@for)

- `@for` se utiliza para recorrer la lista de productos y mostrarlos dinámicamente en la vista.
- `@if` se utiliza para controlar qué elementos se renderizan, por ejemplo:
  - Mostrar solo productos con stock mayor a 0.
  - Mostrar un mensaje como **"Últimas unidades"** cuando el stock es menor a 5.

### 2️⃣ Uso de [ngClass] para destacar disponibilidad

Se utiliza [ngClass] para aplicar estilos dinámicos cuando el stock es menor a 5.

### 3️⃣ Uso de ngOnInit y ngOnDestroy
Se implementan los hooks del ciclo de vida para registrar eventos:

ngOnInit() → Se ejecuta cuando el componente se crea.
Se usa para cargar la lista de productos.

ngOnDestroy() → Se ejecuta cuando el componente se elimina.
Se usa para registrar en consola cuando el componente es destruido o limpiar recursos.