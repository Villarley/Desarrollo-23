Declare @producto int, @cantidad int

Declare ej CURSOR for 
SELECT product.cantidad FROM facturas

OPEN ej

FETCH ej into @producto, @cantidad

WHILE (@@FETCH_STATUS = 0)

BEGIN
 declare @diezporciento decimal(10, 5)

 set @diezporciento = @cantidad * 0.1

 SELECT producto from bodega WHERE existencia > @diezporciento and producto = @producto