import { tarea } from "../../modules/itemTarea/itemTarea.js";


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


export function Tareas() {
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
