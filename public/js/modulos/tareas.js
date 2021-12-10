import axios from "axios";

const tareas = document.querySelector(".listado-pendientes");

if (tareas) {
  tareas.addEventListener("click", e => {
    //console.log(e.target.classList);
    if (e.target.classList.contains("fa-check-circle")) {
      //console.log("Actualizando ...");
      const icono = e.target;
      const idTarea = icono.parentElement.parentElement.dataset.tarea;
      //console.log(idTarea);

      // request hacia /tareas/:id
      const url = `${location.origin}/tareas/${idTarea}`;
      //console.log(url);
      axios.patch(url, { idTarea }).then(function (respuesta) {
        console.log(respuesta);
      });
    }
  });
}

export default tareas;
