@idfactura AS varchar(50)
@idP AS varchar(50)
@idE AS varchar(50)
@idfactura = (SELECT idfactura FROM Factura)
@idP = (SELECT id FROM Producto)
@idE = (SELECT id FROM Empleado)
SELECT Empleado.nombrecompleto, (SELECT Factura.cantidad + Producto.precio
FROM Factura, Producto
WHERE Factura.empleado = idE AND Factura.producto = idP) AS

monto_total
FROM Empleado
ORDER BY monto_total DESC
LIMIT 1;