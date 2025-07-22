export function dashboard(){
    let section = document.createElement('seccion');

    let h1 = document.createElement('h1');
    h1.innerText = "Hola mundo"
    seccion.appendChield(h1)

    return seccion;
}

document.body.appendChild(dashboard());
