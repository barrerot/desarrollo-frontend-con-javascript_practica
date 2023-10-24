export const buildanuncio = (anuncio) => {

  return `
  <a href="./anuncioDetail.html?id=${anuncio.id}">
  <img src="${anuncio.imagen}" alt="{anuncio.name}" width="200" height="100">

    <span>${anuncio.name}</span><br></a>

    <b>descripción:</b><p>${anuncio.descripcion}</p><br>
    <b>Categoría:</b> <span>${anuncio.categoria}</span><br>
    este artículo es de <span>${anuncio.tipo}</span><br>
    <b>Precio:</b><span>${anuncio.precio}€</span>
  
  

`;
}

export const emptyanuncio = () => {
  return `<h3>No hay anuncios disponibles, disculpa las molestias.</h3>`
}
