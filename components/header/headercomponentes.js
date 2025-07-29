export function header() {

    let header = document.createElement('header');
    
    let h1 = document.createElement('h1');
    h1.innerText = "Todo-List";
    header.appendChild(h1);

    let divTareas = document.createElement('div');
    divTareas.className = "div-tareas";

    let divParrafo = document.createElement('div');
    divParrafo.className = "div-parrafo";
    divParrafo.innerText = "Tareas Pendientes"

    let divNtareas= document.createElement('div')
    divNtareas.className = "numero-tareas"
    divNtareas.innerText = "9";

    divTareas.appendChild(divParrafo);  // Primero el texto
    divTareas.appendChild(divNtareas);  // Luego el número
    header.appendChild(divTareas);      // Luego agregas todo al header


    let divLogoUsuario = document.createElement('div');
    divLogoUsuario.className = "div-logo-usuario"
    let img1 = document.createElement('img');
    img1.className = "imagen-logo"
    img1.src = "https://static.vecteezy.com/system/resources/previews/002/318/271/non_2x/user-profile-icon-free-vector.jpg"
    divLogoUsuario.appendChild(img1);
    header .appendChild(divLogoUsuario);

    return header
}