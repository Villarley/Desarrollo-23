SELECT Empleado.salario + cantidad.factura*(Empleado.comisionporventa/100)
from Empleado, Factura where id Empleado.id = Factura.id