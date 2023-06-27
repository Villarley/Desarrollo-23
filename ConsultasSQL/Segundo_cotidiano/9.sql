@IdFactura INT, @Producto INT, @Cantidad INT, @Fecha DATE, @Existencia INT
factura_cursor CURSOR FOR
SELECT idfactura, producto, cantidad, fecha
FROM Facturas
WHERE fecha >= DATEADD(MONTH, -1, GETDATE()) -- Último mes
OPEN factura_cursor
FETCH NEXT FROM factura_cursor INTO @IdFactura, @Producto, @Cantidad, @Fecha
WHILE @@FETCH_STATUS = 0
BEGIN
SELECT @Existencia = existencia
FROM Bodega
WHERE producto = @Producto
IF @Existencia < @Cantidad * 0.1
BEGIN
SELECT nombre
FROM Productos
WHERE id = @Producto
END
FETCH NEXT FROM factura_cursor INTO @IdFactura, @Producto, @Cantidad, @Fecha
END
CLOSE factura_cursor
DEALLOCATE factura_cursor