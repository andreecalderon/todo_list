import { tarea } from "../../modules/itemTarea/itemTarea.js";

export function Tareas(tareasDb) {
    let div = document.createElement('div');
    div.className = "div-tareas1";

    tareasDb.forEach((e) => {
        div.appendChild(tarea(
            e.indice,
            e.titulo,
            e.estado,
            e.fechasAs,
            e.fechaEn,
            e.listaIntegrantes
        ));
    });

    return div;
}
