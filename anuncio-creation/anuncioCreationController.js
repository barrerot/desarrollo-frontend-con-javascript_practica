import { createanuncio } from "./anuncioCreationModel.js";
import { dispatchEvent } from "../utils/dispatchEvent.js";

export const anuncioCreationController = (anuncioCreation) => {

  anuncioCreation.addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData(anuncioCreation);
    const descripcion = formData.get("descripcion")
  

    const tipo= formData.get("tipo");
    const categoria= formData.get("categoria");
    const nombre=formData.get("nombre");
    const precio=formData.get("precio");
    const imagen=formData.get("imagen");

    try {
      await createanuncio(nombre,descripcion, tipo,categoria, precio, imagen);
      dispatchEvent('anuncioCreated', { type: "success", message: "Anuncio creado correctamente" }, anuncioCreation);
      setTimeout(() => {
        window.location = "index.html";
      }, 2000);
    } catch (error) {
      dispatchEvent('anuncioCreated', { type: "error", message: "Error creando anuncio" }, anuncioCreation);      
    }

  })
}
