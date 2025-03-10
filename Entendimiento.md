📌 Historia de Usuario: Crear una App para Pedidos de Restaurante
🏷 01_HU - Funcionalidad Base
Como cliente de la aplicación de pedidos para pizzas, Quiero seleccionar productos del menú y conocer el valor total de mi pedido, Para poder confirmar mi compra de manera informada.

🎯 Prioridad: Alta
🏆 Estimación: 8 puntos en Scrum
✅ Criterios de Aceptación
El cliente puede navegar por el menú y ver los productos disponibles.
El cliente puede agregar productos a su pedido.
El sistema muestra el valor total de la cuenta antes de confirmar el pedido.
El pedido solo se confirma si hay productos en el carrito.
Se muestra un mensaje de confirmación del pedido con el resumen de la compra.
📊 Modelo Relacional - App de Domicilios de Pizzas
🗂 Tablas Principales
1️⃣ Tabla usuarios
id_usuario (PK, serial)
nombre (varchar(100))
email (varchar(100))
contraseña (varchar(255))
tipo_usuario (varchar(20))
2️⃣ Tabla pedidos
id_pedido (PK, serial)
id_usuario (FK, integer)
total (numeric(10,2))
fecha_pedido (timestamp)
3️⃣ Tabla detalle_pedidos
id_detalle (PK, serial)
id_pedido (FK, integer)
id_producto (FK, integer)
cantidad (integer)
subtotal (numeric(10,2))
4️⃣ Tabla productos
id_producto (PK, serial)
nombre (varchar(100))
precio (numeric(10,2))
stock (integer)
5️⃣ Tabla facturas
id_factura (PK, serial)
id_pedido (FK, integer)
fecha_emision (timestamp)
total (numeric(10,2))
6️⃣ Tabla sugerencias_reclamos
id_sugerencia (PK, serial)
id_usuario (FK, integer)
mensaje (text)
estado (varchar(20))
fecha (timestamp)
7️⃣ Tabla inventario
id_insumo (PK, serial)
nombre (varchar(100))
cantidad (integer)
umbral_minimo (integer)
fecha_actualizacion (timestamp)
🔗 Relaciones Principales
usuarios → pedidos (1:N)
pedidos → detalle_pedidos (1:N)
detalle_pedidos → productos (N:1)
pedidos → facturas (1:1)
usuarios → sugerencias_reclamos (1:N)
inventario gestiona la cantidad de insumos disponibles.
📌 Análisis del Modelo de Base de Datos
1️⃣ Usuario
🏷 Atributos:
id_usuario: integer
nombre: string
email: string
contraseña: string
tipo_usuario: enum (cliente, cajero, domiciliario)
🛠 Métodos:
iniciarSesion()
registrarse()
enviarSugerencia(mensaje: string)
realizarPedido()
verHistorialPedidos()
2️⃣ Cajero (Extiende Usuario)
🏷 Atributos:
id_cajero: integer
🛠 Métodos:
tomarPedido()
generarFactura(id_pedido: integer)
procesarPago(id_pedido: integer)
3️⃣ Domiciliario (Extiende Usuario)
🏷 Atributos:
id_domiciliario: integer
🛠 Métodos:
verPedidosAsignados()
marcarPedidoEntregado(id_pedido: integer)
📌 Diagramas de Secuencia
1️⃣ Diagrama Secuencial - Usuario
Resumen:
Proceso desde el acceso al sistema hasta la generación de la factura.

Pasos:
Registro/Login
Selección de productos
Cálculo del total del pedido
Confirmación del pedido
Generación de factura
2️⃣ Diagrama Secuencial - Administrador
Resumen:
Interacción del Administrador con el Sistema y el Cliente.

Pasos:
Iniciar sesión
Consultar menú y disponibilidad
Confirmar y procesar pago
Generar factura electrónica
Registrar pedido del cliente
Notificar confirmación del pedido
Calcular total del pedido
Finalizar transacción
3️⃣ Diagrama Secuencial - Domiciliario
Resumen:
Interacción del domiciliario con el sistema en la entrega de pedidos.

Pasos:
Recibe notificación del pedido
Acepta pedido
Consulta detalles del pedido
Confirma recolección
Entrega el pedido
Confirma entrega y finaliza
🚀 Conclusión
Esta estructura define un sistema robusto para la gestión de pedidos, facturación e inventario en un restaurante. Se detallan las interacciones clave entre clientes, administradores y domiciliarios, garantizando eficiencia en el flujo de compra. 🎯