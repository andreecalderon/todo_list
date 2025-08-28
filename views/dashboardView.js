import { header } from "../components/header/headercomponentes.js";
import { footer } from "../components/footer/footercomponentes.js";
import { Tareas } from "../components/tareas/TareasComponentes.js";
import { informacion } from "../components/informacion/indormacionComponentes.js";


export async function dashboard() {

    try {
        // base de datos
        const resultado = await fetch("http://localhost:3000/tareas")
        const datos = await resultado.json();
        let tareasDb = datos;
        console.log(tareasDb);


        let dashboard = document.createElement('section');
        dashboard.className = "dashboard";

        // header
        dashboard.appendChild(header());

        //seccion1
        let seccion1 = document.createElement('section');
        seccion1.className = "seccion-1"
        seccion1.appendChild(Tareas(tareasDb));
        seccion1.appendChild(informacion(tareasDb[0]));
        dashboard.appendChild(seccion1);
        
        //footer
        dashboard.appendChild(footer());

        return dashboard;
    } catch (error) {
        console.error("error: ", error);
    }
    
}

dashboard().then(elemento => {
    document.body.appendChild(elemento);
})
