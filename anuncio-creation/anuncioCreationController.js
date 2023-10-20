import { createanuncio } from "./anuncioCreationModel.js";
import { dispatchEvent } from "../utils/dispatchEvent.js";

export const anuncioCreationController = (anuncioCreation) => {

  anuncioCreation.addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData(anuncioCreation);
    const description = formData.get("descripcion")
  

    const type= formData.get("tipo");
    const nombre=formData.get("nombre");
    const price=formData.get("precio");
    const image=formData.get("imagen");

    try {
      await createanuncio(nombre,description, type, price, image);
      dispatchEvent('anuncioCreated', { type: "success", message: "Anuncio creado correctamente" }, anuncioCreation);
      setTimeout(() => {
        window.location = "index.html";
      }, 2000);
    } catch (error) {
      dispatchEvent('anuncioCreated', { type: "error", message: "Error creando anuncio" }, anuncioCreation);      
    }

  })
}
