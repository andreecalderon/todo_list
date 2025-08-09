import { header } from "../components/header/headercomponentes.js";
import { footer } from "../components/footer/footercomponentes.js";
import { Tareas } from "../components/tareas/TareasComponentes.js";
import { informacion } from "../components/informacion/indormacionComponentes.js";



export function dashboard(){

    //data
// data
let tareasDb = [
    {
        indice: 1,
        titulo: "Hola mundo1",
        estado: "completado",
        fechasAs: "17/07/2025",
        fechaEn: "30/07/2025",
        listaIntegrantes: ["😎", "😍", "🧐"]
    },
    {
        indice: 2,
        titulo: "Hola mundo2",
        estado: "pendiente",
        fechasAs: "20/07/2025",
        fechaEn: "05/08/2025",
        listaIntegrantes: ["😐", "😅"]
    },
    {
        indice: 3,
        titulo: "Hola mundo3",
        estado: "en progreso",
        fechasAs: "22/07/2025",
        fechaEn: "08/08/2025",
        listaIntegrantes: ["🤓", "🧐", "😁"]
    }
];

    let dashboard = document.createElement('section');
    dashboard.className = "dashboard";


    //header
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
}

document.body.appendChild(dashboard());
