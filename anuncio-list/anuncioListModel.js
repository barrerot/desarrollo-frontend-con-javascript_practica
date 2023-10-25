const transformanuncios = (anuncios) => {
  return anuncios.map(anuncio => ({
    handler: anuncio.user.username,
    date: new Date().toISOString(),
    descripcion: anuncio.descripcion,
    id: anuncio.id,
    name:anuncio.nombre,
    tipo:anuncio.tipo,
    precio:anuncio.precio,
    categoria:anuncio.categoria,
    imagen:anuncio.imagen
  }))
}

export const getanuncios = async (filter) => {
  const url = "http://localhost:8000/api/anuncios?_expand=user&q="+filter;
  let parsedanuncios = [];

  try {
    const response = await fetch(url);
    const anuncios = await response.json();
    parsedanuncios = transformanuncios(anuncios)
    
  } catch (error) {
    throw error;
  }
  
  return parsedanuncios;
}
