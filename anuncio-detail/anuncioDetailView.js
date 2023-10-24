export const buildAnuncio = (anuncio) => {
  let anuncioTemplate = `
  <h2>${anuncio.nombre}</h2>
  <b>Descripción:</b><p>${anuncio.descripcion}</p><br>
  Este artículo está en:<span>${anuncio.tipo}</span><br>
  <b>Categoría:</b><span>${anuncio.categoria}</span><br>
  <b>Precio:</b><span>${anuncio.precio}</span><br>

  <img src="${anuncio.imagen}" alt="Texto alternativo" width="450" height="150"><br>
  `;


  return anuncioTemplate;
}
