export const createanuncio = async (nombre,descripcion, tipo,categoria, precio, imagen) => {
  //nombre,descripcion, tipo,categoria, precio, imagen)
  const url = "http://localhost:8000/api/anuncios";
  const token = localStorage.getItem('token');
  const body = {
    nombre:nombre,
    descripcion: descripcion,
    tipo: tipo,
    categoria:categoria,
    precio: precio,
    imagen: imagen
  }

  let response;
  try {
    response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        'Content-type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });
    
    if (!response.ok) {
      const data = await response.json()
      throw new Error(data.message);
    }
  } catch (error) {
    if (error.message) {
      throw error.message;
    } else {
      throw error;
    }
  }
}
