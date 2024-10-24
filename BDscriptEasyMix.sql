CREATE DATABASE IF NOT EXISTS easyMix;
USE easyMix;

-- Tabla Usuario
CREATE TABLE usuario (
    id INT AUTO_INCREMENT,
    nombre VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    contrasena VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);

-- Tabla Proveedor
CREATE TABLE proveedor(
	id INT auto_increment,
    nombre VARCHAR(255) NOT NULL,
    contacto varchar(255) NOT NULL,
    PRIMARY KEY(id)
);

-- Tabla Producto
CREATE TABLE producto (
    id INT AUTO_INCREMENT,
    nombre VARCHAR(255) NOT NULL,
    descripcion VARCHAR(255),
    tipo VARCHAR(255),
    precio DOUBLE,
    marca VARCHAR(255),
    presentacion VARCHAR(255),
    cantidad DOUBLE,
    medida VARCHAR(255),
    usuario_id INT,
    proveedor_id INT,
    PRIMARY KEY (id),
    FOREIGN KEY (usuario_id) REFERENCES usuario(id),
    FOREIGN KEY (proveedor_id) REFERENCES proveedor(id)
);

-- Tabla Receta
CREATE TABLE receta (
    id INT AUTO_INCREMENT,
    nombre VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);

-- Tabla Receta_Ingredientes
CREATE TABLE receta_ingredientes (
	id INT AUTO_INCREMENT,
	producto_id INT,
    receta_id INT,
    cantidad DOUBLE NOT NULL,
    medida VARCHAR(255) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (receta_id) REFERENCES receta(id),
    FOREIGN KEY (producto_id) REFERENCES producto(id)
);

-- Tabla Produccion
CREATE TABLE produccion (
    id INT AUTO_INCREMENT,
    cantidad_producida INT NOT NULL,
    fecha_inicio DATE NOT NULL,
    fecha_fin DATE NOT NULL,
    estado VARCHAR(255),
    producto_id INT,
    PRIMARY KEY (id),
    FOREIGN KEY (producto_id) REFERENCES producto(id)
);

-- Tabla Produccion_Insumos
CREATE TABLE produccion_insumos (
	id INT auto_increment,
    produccion_id INT,
    producto_id INT,
    cantidad_requerida DOUBLE NOT NULL,
    suficiente BOOLEAN NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (produccion_id) REFERENCES produccion(id),
    FOREIGN KEY (producto_id) REFERENCES producto(id)
);

-- Tabla Inventario
CREATE TABLE inventario (
    id INT AUTO_INCREMENT,
    cantidad_disponible INT NOT NULL,
    fecha_registro DATE NOT NULL,
    producto_id INT,
    PRIMARY KEY (id),
    FOREIGN KEY (producto_id) REFERENCES producto(id)
);

use easyMix;

INSERT INTO usuario (nombre, email, contrasena) VALUES
('Ana García', 'ana.garcia@example.com', 'AnaG1234'),
('Carlos Pérez', 'carlos.perez@example.com', 'Carlo5678'),
('Lucía Rodríguez', 'lucia.rodriguez@example.com', 'Luci7890'),
('Javier López', 'javier.lopez@example.com', 'Javie4321'),
('María Torres', 'maria.torres@example.com', 'MariA0987');

INSERT INTO proveedor (nombre, contacto) VALUES
('Alimentos Naturales S.A.', 'Tel: 123456789, Email: contacto@alimentosnaturales.com'),
('NutriPet S.L.', 'Tel: 987654321, Email: ventas@nutripet.com'),
('Fábrica de Comida Animal, S.A.', 'Tel: 234567890, Email: info@fabricaanimal.com'),
('ProAlimentos, Ltda.', 'Tel: 345678901, Email: contacto@proalimentos.com'),
('Granos y Semillas, S.A.', 'Tel: 456789012, Email: ventas@granosysemillas.com');

-- Inserción de Datos de Productos (Insumos)
INSERT INTO producto (nombre, descripcion, tipo, precio, marca, presentacion, cantidad, medida, usuario_id, proveedor_id) VALUES
('Pollo Deshidratado', 'Proteína de pollo deshidratada para mascotas', 'insumo', 20.00, 'PetNutrient', 'Bolsa', 5, 'kg', 1, 1),
('Arroz Integral', 'Arroz integral para la mezcla de alimentos', 'insumo', 1.50, 'GranosAndes', 'Saco', 25, 'kg', 2, 2),
('Zanahoria Deshidratada', 'Zanahoria deshidratada en trozos', 'insumo', 15.00, 'VeggiePets', 'Bolsa', 2, 'kg', 3, 3),
('Aceite de Salmón', 'Aceite de salmón para un pelaje brillante', 'insumo', 30.00, 'HealthyFur', 'Botella', 1, 'L', 4, 4),
('Harina de Pescado', 'Harina de pescado rica en omega 3', 'insumo', 22.00, 'SeafoodDelight', 'Saco', 25, 'kg', 5, 5);


-- Inserción de Datos de Recetas (Productos Finales)
INSERT INTO receta (nombre) VALUES
('Croquetas de Pollo y Arroz'),
('Snacks de Zanahoria y Salmón'),
('Comida Húmeda para Perros con Pollo'),
('Alimento Seco de Pescado'),
('Galletas de Pollo y Zanahoria');

INSERT INTO receta_ingredientes (producto_id, receta_id, cantidad, medida) VALUES
(1, 1, 3.0, 'kg'),  -- Pollo Deshidratado
(2, 1, 2.0, 'kg'),  -- Arroz Integral
(3, 2, 0.5, 'kg'),  -- Zanahoria Deshidratada
(4, 2, 0.1, 'L'),   -- Aceite de Salmón
(1, 3, 2.0, 'kg'),  -- Pollo Deshidratado
(4, 3, 0.2, 'L'),   -- Aceite de Salmón
(1, 4, 3.0, 'kg'),  -- Harina de Pescado
(4, 4, 0.1, 'L'),   -- Aceite de Salmón
(1, 5, 1.0, 'kg'),  -- Pollo Deshidratado
(3, 5, 0.5, 'kg');  -- Zanahoria Deshidratada

-- Inserción de Datos de Producción
INSERT INTO produccion (cantidad_producida, fecha_inicio, fecha_fin, estado, producto_id) VALUES
(200, '2024-10-01', '2024-10-02', 'completada', 1),  -- Croquetas de Pollo y Arroz
(150, '2024-10-03', '2024-10-04', 'completada', 2),  -- Snacks de Zanahoria y Salmón
(100, '2024-10-05', '2024-10-06', 'completada', 3),  -- Comida Húmeda para Perros
(250, '2024-10-07', '2024-10-08', 'completada', 4),  -- Alimento Seco de Pescado
(300, '2024-10-09', '2024-10-10', 'completada', 5);  -- Galletas de Pollo y Zanahoria

-- Inserción de Datos de Inventario
INSERT INTO inventario (cantidad_disponible, fecha_registro, producto_id) VALUES
(200, '2024-10-02', 1), -- Croquetas de Pollo y Arroz
(150, '2024-10-04', 2), -- Snacks de Zanahoria y Salmón
(100, '2024-10-06', 3), -- Comida Húmeda para Perros
(250, '2024-10-08', 4), -- Alimento Seco de Pescado
(300, '2024-10-10', 5); -- Galletas de Pollo y Zanahoria

-- Inserción de Productos Producidos en la Tabla Producto
INSERT INTO producto (nombre, descripcion, tipo, precio, marca, presentacion, cantidad, medida, usuario_id, proveedor_id) VALUES
('Croquetas de Pollo y Arroz', 'Alimento balanceado para perros con pollo y arroz', 'producido', 63.00, 'PetNutrient', 'Unidad', 1, 'kg', 1, 1),
('Snacks de Zanahoria y Salmón', 'Deliciosos snacks de zanahoria y salmón', 'producido', 10.50, 'VeggiePets', 'Unidad', 1, 'kg', 2, 2),
('Comida Húmeda para Perros', 'Comida húmeda de pollo para perros', 'producido', 46.00, 'HealthyFur', 'Unidad', 1, 'kg', 3, 3),
('Alimento Seco de Pescado', 'Alimento seco de pescado rico en omega 3', 'producido', 69.00, 'SeafoodDelight', 'Unidad', 1, 'kg', 4, 4),
('Galletas de Pollo y Zanahoria', 'Galletas saludables de pollo y zanahoria', 'producido', 27.50, 'PetNutrient', 'Unidad', 1, 'kg', 5, 5);

