SELECT factura.cantidad * producto.precio FROM factura, producto 
WHERE factura.producto_id = factura.id