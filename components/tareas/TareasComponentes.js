import { tarea } from "../../modules/itemTarea/itemTarea.js";

export function Tareas(tareasDb) {
    let div = document.createElement('div');
    div.className = "div-tareas1";

    tareasDb.forEach((e) => {
        div.appendChild(tarea(
            1,
            e.nombre,
            e.estado_tarea,
            e.fechas_asignada,
            e.fecha_entrega,
            []
        ));
    });

    return div;
}
