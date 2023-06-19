#VEHICULO: CLIENTE, REPUESTO, CITA, MECANICO
#VEHICULO: PLACA, MARCA, MODELO, ANNO, COMBUSTIBLE, KILOMETRAJE, NUMERODEPUERTAS
#PESO, LITROSDECOMBUSTIBLE
#CLIENTE: CEDULA, NOMBRECOMPLETO, TELEFONO, CORREO
#REPUESTO: CODIGO, NOMBRE, DESCRIPCION, PRECIOXUNIDAD
#MECANICO: CEDULA, NOMBRECOMPLETO, TELEFONO, CORREO, SALARIOXHORA
#CITA: VEHICULO, CLIENTE, MECANICO, FECHA, HORA
#FACTURA: CITA, HORASTRABAJADAS, REPUESTOS, MONTOFINAL, IMPUESTOVENTA

#Vehiculos
class Vehiculo():
    placa = ''
    marca = ''
    modelo = ''
    anno = ''
    combustible = ''
    numpuertas = 0
    peso = 0
    kilometros = 0
    litrosdecombustible = 0

#Clase padre para las diferentes personas dentro del codigo
class Persona():
    cedula = ''
    nombreCompleto = ''
    telefono = ''
    correo = ''

#Clientes
class Cliente(Persona):
    tipo = ''

#Mecanicos
class Mecanico(Persona):
    salarioxhora = 0

class Repuesto():
    codigo = ''
    nombre = ''
    descripcion = ''
    precioxunidad = 0

class Cita():
    vehiculo = Vehiculo()
    cliente = Cliente()
    mecanico = Mecanico()
    fecha = ''
    hora = ''

class Factura():
    cita = Cita()
    repuestos = []
    horasTrabajadas = 0
    montoFinal = 0
    impuestoVenta = 0
    def CalcularMontoFinal(self):
    # Esta función calcula el monto final a pagar
        sumadecostosderepuestos = 0
        # Inicializa una variable para almacenar la suma de los costos de los repuestos
        for obj in self.repuestos:
            # Recorre cada objeto en la lista de repuestos
            # y realiza una suma acumulativa de los costos por unidad
            sumadecostosderepuestos = sumadecostosderepuestos + obj.precioxunidad
        calculodecostoxmecanico = self.horasTrabajadas * self.cita.mecanico.salarioxhora
        # Calcula el costo total de mano de obra multiplicando las horas trabajadas por el salario por hora del mecánico asignado a la cita
        sumademontofinal = sumadecostosderepuestos + calculodecostoxmecanico
        # Calcula la suma total de los costos de repuestos y el costo de mano de obra
        calculodeimpuesto = sumademontofinal * (self.impuestoVenta/100)
        # Calcula el impuesto sobre el monto final multiplicando el monto final por el porcentaje de impuesto sobre ventas
        self.montoFinal = sumademontofinal + calculodeimpuesto
        # Calcula el monto final a pagar sumando el monto total y el impuesto
        print('Monto a pagar: ' + str(self.montoFinal))
        # Imprime el monto final a pagar en la consola

ClienteNuevo = Cliente()
ClienteNuevo.cedula = input('Por favor ingrese la cedula del cliente')
ClienteNuevo.correo = input('Por favor ingrese el correo del cliente')
ClienteNuevo.nombreCompleto = input('Por favor ingrese el nombre del cliente')
ClienteNuevo.telefono = input('Por favor ingrese el telefono del cliente')

MecanicoNuevo = Mecanico()
MecanicoNuevo.cedula = input('Por favor ingrese la cedula del mecanico')
MecanicoNuevo.correo = input('Por favor ingrese el correo del mecanico')
MecanicoNuevo.nombreCompleto = input('Por favor ingrese el nombre del mecanico')
MecanicoNuevo.telefono = input('Por favor ingrese el telefono del mecanico')
MecanicoNuevo.salarioxhora = float(input('Por favor ingrese el salario x hora del mecanico'))

VehiculoNuevo = Vehiculo()
VehiculoNuevo.anno = int(input('Por favor ingrese el anno del vehiculo'))
VehiculoNuevo.combustible = input('Por favor ingrese el tipo de combustible del vehiculo')
VehiculoNuevo.kilometros = int(input('Por favor ingrese los kilometros del vehiculo'))
VehiculoNuevo.litrosdecombustible = int(input('Por favor ingrese los litros de combustible del vehiculo'))
VehiculoNuevo.marca = input('Por favor ingrese la marca del vehiculo')
VehiculoNuevo.modelo = input('Por favor ingrese el modelo del vehiculo')
VehiculoNuevo.numpuertas = int(input('Por favor ingrese la placa del vehiculo'))

RepuestoUno = Repuesto()
RepuestoUno.codigo = input('Por favor ingrese el codigo del repuesto')
RepuestoUno.precioxunidad = input('Por favor ingrese el precio unitario del repuesto')

Repuestodos = Repuesto()
Repuestodos.codigo = input('Por favor ingrese el codigo del repuesto')
Repuestodos.precioxunidad = input('Por favor ingrese el precio unitario del repuesto')

CitaActual = Cita()
CitaActual.fecha = input('Por favor ingrese la fecha de la cita')
CitaActual.hora = input('Por favor ingrese la hora de la cita')
CitaActual.mecanico = MecanicoNuevo
CitaActual.vehiculo = VehiculoNuevo
CitaActual.cliente = ClienteNuevo

FacturaCobrar = Factura()
FacturaCobrar.cita = CitaActual
FacturaCobrar.horasTrabajadas = 6
FacturaCobrar.impuestoVenta = 2
FacturaCobrar.repuestos.append(RepuestoUno)
FacturaCobrar.repuestos.append(Repuestodos)
FacturaCobrar.calcularMontoFinal()

