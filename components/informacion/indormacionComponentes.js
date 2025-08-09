import { formulario } from "../formulario/formulario.js";

export function informacion(tarea) {
    let div = document.createElement('div');
    div.className = "div-informacion";

    // Contenedor de botones
    let divBotones = document.createElement('div');
    divBotones.className = "div-botones";

    let btnTarea = document.createElement('button');
    btnTarea.textContent = "+ tarea";
    btnTarea.className = "btn-tarea";
    btnTarea.addEventListener('click', () => {
    formulario(); // Aquí se llama la función que genera la ventana emergente
});


    let btnArchivados = document.createElement('button');
    btnArchivados.textContent = "Archivados";
    btnArchivados.className = "btn-archivados";

    divBotones.appendChild(btnTarea);
    divBotones.appendChild(btnArchivados);
    div.appendChild(divBotones);

    // Contenedor individual
    let divInformacion = document.createElement('div');
    divInformacion.className = "div-contenido";

    // Estado
    let estado = document.createElement('div');
    estado.className = "estado";
    estado.textContent = tarea.estado;

    if (tarea.estado === "completado") {
        estado.style.backgroundColor = "#b4f4c2";
        estado.style.color = "#006400";
    } else if (tarea.estado === "pendiente") {
        estado.style.backgroundColor = "#fce4b4";
        estado.style.color = "#a85c00";
    } else {
        estado.style.backgroundColor = "#cce0ff";
        estado.style.color = "#004b9b";
    }

    divInformacion.appendChild(estado);

    let titulo = document.createElement('h3');
    titulo.textContent = tarea.titulo;
    divInformacion.appendChild(titulo);

    let descripcion = document.createElement('p');
    descripcion.textContent = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.";
    divInformacion.appendChild(descripcion);

    let subtitulo = document.createElement('h4');
    subtitulo.textContent = "Integrantes";
    divInformacion.appendChild(subtitulo);

    let integrantes = document.createElement('div');
    integrantes.className = "integrantes";
    tarea.listaIntegrantes.forEach(emoji => {
        let span = document.createElement('span');
        span.className = "emoji-integrante";
        span.textContent = emoji;
        integrantes.appendChild(span);
    });

    divInformacion.appendChild(integrantes);
    div.appendChild(divInformacion);

    return div;
}
