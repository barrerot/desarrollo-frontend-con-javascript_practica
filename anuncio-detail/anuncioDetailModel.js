import { sparrestApi } from "../utils/sparrestApi.js";

const parseAnuncio = (anuncio) => {
  return {
    nombre: anuncio.nombre,
    descripcion: anuncio.descripcion,
    tipo:anuncio.tipo,
    categoria: anuncio.categoria,
    precio:anuncio.precio,
    imagen: anuncio.imagen,
    userId: anuncio.user.id,
    id: anuncio.id
  }
}

export const getAnuncio = async (anuncioId) => {
  const endpoint = `api/anuncios/${anuncioId}?_expand=user`;

  const anuncio = await sparrestApi().get(endpoint)

  return parseAnuncio(anuncio);
}

export const deleteAnuncio = async (anuncioId) => {
  const endpoint = `api/anuncios/${anuncioId}`;
  
  await sparrestApi().delete(endpoint);
}
