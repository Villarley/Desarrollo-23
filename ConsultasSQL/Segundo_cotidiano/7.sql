SELECT * FROM producto WHERE id IN(
    SELECT producto FROM factura WHERE empleado in(
        SELECT id from empleado where comisionporventa IN(
            SELECT MAX(comisionporventa) FROM factura
        )
    )
)