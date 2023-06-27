SELECT Producto.nombre from Producto, Factura where Factura.fecha between
'12/31/2011' and '01/01/2013' and Factura.producto = Producto.id