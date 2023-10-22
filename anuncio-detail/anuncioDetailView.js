export const buildTweet = (tweet) => {
  let tweetTemplate = `
  <span>${tweet.nombre}</span>
  <p>${tweet.descripcion}</p>
  <span>${tweet.tipo}</span>
  <span>${tweet.categoria}</span>
  <span>${tweet.precio}</span>

  <img src="${tweet.imagen}" alt="Texto alternativo" width="300" height="200">
  `;

  /*if (tweet.likes.length > 0) {
    tweetTemplate += `<p> estos usuarios: ${tweet.likes.join(', ')} han dado like al tweet</p>`;
  }*/

  return tweetTemplate;
}
