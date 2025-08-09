export function formulario() {
    const contenedorPrincipal = document.querySelector(".div-tareas1");

    if (!contenedorPrincipal || document.querySelector(".form-modal")) return;

    const overlay = document.createElement('div');
    overlay.className = "form-overlay";

    const form = document.createElement('form');
    form.className = "form-modal";

    form.innerHTML = `
        <h2>Nueva Tarea</h2>
        <label>Nombre de la tarea:<br>
            <input type="text" name="nombre" required>
        </label><br>

        <label>Descripción:<br>
            <textarea name="descripcion" rows="3" required></textarea>
        </label><br>

        <label>Fecha de asignación:<br>
            <input type="date" name="fechaAsignacion" required>
        </label><br>

        <label>Fecha de entrega:<br>
            <input type="date" name="fechaEntrega" required>
        </label><br>

        <label>Integrantes (separa con coma):<br>
            <input type="text" name="integrantes" placeholder="😀, 😎, 🧑‍💻">
        </label><br>

        <div class="form-buttons">
            <button type="submit">Guardar</button>
            <button type="button" id="cancelar">Cancelar</button>
        </div>
    `;

    form.querySelector('#cancelar').addEventListener('click', () => {
        overlay.remove();
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const data = new FormData(form);
        const nuevaTarea = {
            titulo: data.get("nombre"),
            descripcion: data.get("descripcion"),
            fechaAsignacion: data.get("fechaAsignacion"),
            fechaEntrega: data.get("fechaEntrega"),
            listaIntegrantes: data.get("integrantes").split(',').map(i => i.trim()),
            estado: "pendiente"
        };
        console.log("Tarea creada:", nuevaTarea);
        overlay.remove();
        // Aquí puedes insertar código para renderizar la nueva tarjeta
    });

    overlay.appendChild(form);
    contenedorPrincipal.appendChild(overlay);
}
