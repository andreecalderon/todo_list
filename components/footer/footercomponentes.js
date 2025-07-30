export function footer() {
    // Crear el elemento footer
    let footer = document.createElement('footer');

    // Línea separadora
    let hr = document.createElement('hr');
    footer.appendChild(hr);

    // Contenedor principal
    let divContenido = document.createElement('div');
    divContenido.className = "footer-contenido";

    // Texto vacío a la izquierda (para centrar mejor)
    let spanVacio = document.createElement('span');
    divContenido.appendChild(spanVacio);

    // Enlace de GitHub
    let enlace = document.createElement('a');
    enlace.className = "footer-github";
    enlace.href = "https://github.com/andreecalderon/todo_list"; // Cambia esta URL si es necesario
    enlace.innerText = "@github";
    enlace.target = "_blank"; // Abrir en otra pestaña
    divContenido.appendChild(enlace);

    // Agregar el contenedor al footer
    footer.appendChild(divContenido);

    return footer;
}
