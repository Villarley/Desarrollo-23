SELECT Producto.nombre from Producto, bodega where Bodega.Max(existencia) and
Bodega.producto == Producto.id