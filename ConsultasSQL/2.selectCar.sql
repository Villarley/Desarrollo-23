SELECT PASILLO.NOMBRE 
FROM PASILLO, PRODUCTO 
WHERE PASILLO.NUMERO = PRODUCTO.NUMERO_PASILLO 
AND PASILLO.NOMBRE LIKE 'car%';