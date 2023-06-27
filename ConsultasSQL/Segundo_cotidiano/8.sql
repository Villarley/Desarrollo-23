CREATE TRIGGER TR_Factura
ON CUENTAS
AFTER INSERT INTO facturas
AS
BEGIN
SET NOCOUNT ON;
UPDATED bodega SET existencia - 1 where bodega.producto = facturas.producto
FROM INSERTED
END