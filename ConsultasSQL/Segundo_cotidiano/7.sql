@idP AS varchar(50)
@idE AS varchar(50)
@idP = (SELECT id FROM Producto)
@idE = (SELECT id FROM Empleado)
SELECT Producto.nombre
FROM Producto, Factura, Empleado
WHERE idP = Factura.producto
AND Factura.empleado = Empleado.id
AND Empleado.comisionporventa = (
SELECT MAX (comisionporventa)
FROM Empleados
);