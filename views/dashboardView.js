import { header } from "../components/header/headercomponentes.js";
import { footer } from "../components/footer/footercomponentes.js";

export function dashboard(){
    let seccion = document.createElement('section');


    //header
    seccion.appendChild(header());
    seccion.appendChild(footer());

    return seccion;
}

document.body.appendChild(dashboard());
