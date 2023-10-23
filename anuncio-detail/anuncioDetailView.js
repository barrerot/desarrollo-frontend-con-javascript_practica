export const buildAnuncio = (anuncio) => {
  let anuncioTemplate = `
  <span>${anuncio.nombre}</span>
  <p>${anuncio.descripcion}</p>
  <span>${anuncio.tipo}</span>
  <span>${anuncio.categoria}</span>
  <span>${anuncio.precio}</span>

  <img src="${anuncio.imagen}" alt="Texto alternativo" width="300" height="200">
  `;

  /*if (anuncio.likes.length > 0) {
    anuncioTemplate += `<p> estos usuarios: ${anuncio.likes.join(', ')} han dado like al anuncio</p>`;
  }*/

  return anuncioTemplate;
}
