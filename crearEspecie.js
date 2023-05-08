import EspecieAPI from "./EspecieAPI.js";

    const miEspecie = new EspecieAPI();

    const miBoton = document.getElementById("btnProcesar");
    miBoton.addEventListener('click', 
    async (event) => {
            event.preventDefault();
            miBoton.disabled= true;
            await miEspecie.guardarEspecie();
        }
    );
