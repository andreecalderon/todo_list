export function tarea(indice, titulo, estado, fechasAs, fechaEn, listaIntegrantes) {
    let div = document.createElement('div');
    div.className = "tarea";

    // Número de la tarea
    let divNumero = document.createElement('div');
    divNumero.className = "div-numero";
    divNumero.textContent = indice;
    div.appendChild(divNumero);

    // Título de la tarea
    let h3Titulo = document.createElement('h3');
    h3Titulo.className = "titulo-tarea";
    h3Titulo.textContent = titulo;
    div.appendChild(h3Titulo);

    // Estado de la tarea
    let divEstado = document.createElement('div');
    divEstado.className = "estado-tarea";
    divEstado.textContent = estado; // Ej: "completado"
    divEstado.style.backgroundColor = estado === "completado" ? "#b4f4c2" : "#f4e2b4";
    div.appendChild(divEstado);

    // Fecha de asignación
    let spanAsig = document.createElement('span');
    spanAsig.className = "fecha-asignacion";
    spanAsig.textContent = fechasAs;
    div.appendChild(spanAsig);

    // Fecha de entrega
    let spanEnt = document.createElement('span');
    spanEnt.className = "fecha-entrega";
    spanEnt.textContent = fechaEn;
    div.appendChild(spanEnt);

    // Lista de integrantes
    let divIntegrantes = document.createElement('div');
    divIntegrantes.className = "integrantes";
    listaIntegrantes.forEach(integrante => {
        let spanEmoji = document.createElement('span');
        spanEmoji.className = "emoji-integrante";
        spanEmoji.textContent = "👤"; // o algún emoji diferente si lo deseas
        divIntegrantes.appendChild(spanEmoji);
    });
    div.appendChild(divIntegrantes);

    // Botón eliminar
    let btnEliminar = document.createElement('div');
    btnEliminar.className = "btn-eliminar";
    btnEliminar.textContent = "🗑️";
    btnEliminar.style.cursor = "pointer";
    btnEliminar.addEventListener("click", () => {
        div.remove();
    });
    div.appendChild(btnEliminar);

    return div;
}
