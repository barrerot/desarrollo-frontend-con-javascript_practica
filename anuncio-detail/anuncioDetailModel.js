import { sparrestApi } from "../utils/sparrestApi.js";

const parseTweet = (tweet) => {
  return {
    nombre: tweet.nombre,
    descripcion: tweet.descripcion,
    tipo:tweet.tipo,
    categoria: tweet.categoria,
    precio:tweet.precio,
    imagen: tweet.imagen,
    userId: tweet.user.id,
    id: tweet.id
  }
}

export const getTweet = async (tweetId) => {
  const endpoint = `api/anuncios/${tweetId}?_expand=user`;

  const tweet = await sparrestApi().get(endpoint)

  return parseTweet(tweet);
}

export const deleteTweet = async (tweetId) => {
  const endpoint = `api/anuncios/${tweetId}`;
  
  await sparrestApi().delete(endpoint);
}
