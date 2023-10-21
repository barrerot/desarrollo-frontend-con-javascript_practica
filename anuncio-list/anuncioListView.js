export const buildanuncio = (anuncio) => {

  return `
  <a href="./anuncioDetail.html?id=${anuncio.id}">
  <img src="${anuncio.imagen}" alt="{anuncio.name}" width="300" height="200">

    <span>${anuncio.name}</span>
    <span>${anuncio.date}</span>
    <p>${anuncio.descripcion}</p>
    <span>${anuncio.categoria}</span>
    <span>${anuncio.tipo}</span>
    <span>${anuncio.precio}</span>
  </a>
  

`;
}

export const emptyanuncio = () => {
  return `<h3>No hay anuncios disponibles, disculpa las molestias.</h3>`
}
