class Persona{
    constructor(_id,
        NOMBRE,
        APELLIDO,
        EMAIL,
        TIPOUSUARIO,
        PASSWORD,
        FOTO
    ){
        this.id = _id;
        this.NOMBRE = NOMBRE;
        this.APELLIDO = APELLIDO;
        this.EMAIL =EMAIL;
        this.TIPOUSUARIO = TIPOUSUARIO;
        this.PASSWORD = PASSWORD;
        this.FOTO = FOTO;
    }
    Guardar()
{
    let objetoenviar = this;
    return new Promise(function(resolve, reject) {
        try{
            let xhr = new XMLHttpRequest();
            xhr.open('PUT','/api/nuevapersona');
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.onload = function(){
                console.log(xhr.responseText);
                if (xhr.status === 200){
                    
                    resolve(JSON.parse(xhr.responseText));
                }
                else{
                    reject(xhr);
                }
            };
            xhr.send(JSON.stringify(objetoenviar));
        }
        catch(err){
            reject(err.message);
        }
    });
}
Login()
{
    let objetoenviar = this;
    return new Promise(function(resolve, reject) {
        try{
            let xhr = new XMLHttpRequest();
            xhr.open('POST',
            '/api/login');
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.onload = function(){
                if (xhr.status === 200){
                    alert('Guarda Funcion');
                    resolve(JSON.parse(xhr.responseText));
                }
                else{
                    reject(xhr);
                }
            };
            xhr.send(JSON.stringify(objetoenviar));
        }
        catch(err){
            reject(err.message);
        }
    });
}
Modificar() 
{
    let objetoenviar = this;

    return new Promise(function(resolve, reject) {
        try{
            let xhr = new XMLHttpRequest();
            xhr.open('POST', '/api/modificaPersona');
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.onload = function(){
                if(xhr.status === 200){
                    resolve(JSON.parse(xhr.responseText));
                }
                else{
                    reject(xhr);
                }
            };
            xhr.send(JSON.stringify(objetoenviar));
        }
        catch(err){
            reject(err.message);
        }
    });
    }
}