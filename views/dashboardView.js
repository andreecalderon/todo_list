import { header } from "../components/header/headercomponentes.js";
import { footer } from "../components/footer/footercomponentes.js";
import { Tareas } from "../components/tareas/TareasComponentes.js";
import { informacion } from "../components/informacion/indormacionComponentes.js";

export function dashboard(){
    let dashboard = document.createElement('section');
    dashboard.className = "dashboard";


    //header
    dashboard.appendChild(header());

    //seccion1
    let seccion1 = document.createElement('section');
    seccion1.className = "seccion-1"
    seccion1.appendChild(Tareas());
    seccion1.appendChild(informacion());
    dashboard.appendChild(seccion1);

    //footer
    dashboard.appendChild(footer());

    return dashboard;
}

document.body.appendChild(dashboard());
