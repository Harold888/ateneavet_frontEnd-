//1. Obtener los datos del formularop
//2. conectarnos a la ruta de la API
//3. Mostrar los mensaje correspondientes 

class EspecieAPI{

    //Metodo guardarEspecie ()

    async guardarEspecie(){
        //Paso uno obtner los datos del formulario;
        const nombre = document.getElementById("nombre").value;
        // TO DO validar datos 
        const clasificacion= document.getElementById("clasificacion").value;
        const esperanza_vida = parseInt(document.getElementById("esperanza_vida").value);
        const peso_promedio = parseFloat(document.getElementById("peso_promedio").value);

        //Crear un json con esos datos

        const datos = {
          nombre : nombre,
          clasificacion : clasificacion,
          esperanza_vida : esperanza_vida,
          peso_promedio : peso_promedio
        };
       

        //TO DO : Falta gestionar errores 

        await fetch (
            "http://localhost:3000/crear_especie",
            {
                method:"POST",
                body:JSON.stringify(datos),
                headers:{
                    "Content-Type":"application/json"
                }
            }
        );

        console.log("El registro se insertó correctamente");
    }

    async listarEspecies(){
        //Paso 1 conectarnos a la api
        //TO DO: La api no deberia estar sin proteccion 
        let especies = await fetch(
            "http://localhost:3000/listar_especies");
        especies = await especies.json();
        //Paso 2 recorrer el json 

        const miTabla = document.getElementById("tabla_especies");
        especies.forEach((especie)=>{
            //Paso 2.1 Agregar filas a la tabla con los datos que llegan en formato json
            const fila = miTabla.insertRow();
            fila.insertCell().innerText = especie.id_especie;
            fila.insertCell().innerText = especie.nombre;
            fila.insertCell().innerText = especie.clasificacion;
            fila.insertCell().innerText = especie.esperanza_vida;
            fila.insertCell().innerText = especie.peso_promedio;
        })
    }
}

//Convertir esta clase en un módulo 

export default EspecieAPI;