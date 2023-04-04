class Camisa{
    constructor(_id,
        NOMBRE,
        COLOR1,
        COLOR2,
        COLOR3,
        LIKES,
        IMAGEN
    ){
        this.id = _id;
        this.NOMBRE = NOMBRE;
        this.COLOR1 = COLOR1;
        this.COLOR2 = COLOR2;
        this.COLOR3 = COLOR3;
        this.LIKES = LIKES;
        this.IMAGEN = IMAGEN;
    }

Guardar()
{
    let objetoenviar = this;
    return new Promise(function(resolve, reject) {
        try{
            let xhr = new XMLHttpRequest();
            xhr.open('PUT', '/api/nuevacamisa');
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
Seleccionartodos() 
{
    let objetoenviar = this;

    return new Promise(function(resolve, reject) {
        try{
            let xhr = new XMLHttpRequest();
            xhr.open('GET', '/api/todaslasCamisas');
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
Seleccionarporid() 
{
    let objetoenviar = this;

    return new Promise(function(resolve, reject) {
        try{
            let xhr = new XMLHttpRequest();
            xhr.open('POST', '/api/CamisasporId');
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
    Modificar() 
{
    let objetoenviar = this;

    return new Promise(function(resolve, reject) {
        try{
            let xhr = new XMLHttpRequest();
            xhr.open('POST', '/api/modificaCamisa');
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
    ActualizarLikes() 
    {
        let objetoenviar = this;
    
        return new Promise(function(resolve, reject) {
            try{
                let xhr = new XMLHttpRequest();
                xhr.open('POST', '/api/actualizaLikes');
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