@idP AS varchar(50)
@idP = (SELECT id FROM Producto)
SELECT nombre
FROM Productos
WHERE id = (TOP 1 producto FROM Bodega ORDER BY existencia ASC);