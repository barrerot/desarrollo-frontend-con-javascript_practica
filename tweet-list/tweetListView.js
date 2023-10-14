export const buildTweet = (tweet) => {
  return `
  <span>${tweet.handler}</span>
  <span>${tweet.date}</span>
  <img src="${tweet.photo}" alt="tweet image">
  <p>${tweet.message}</p>
  <p>${tweet.likes} likes</p>
`;
}

export const emptyTweets = () => {
  return `<h3>No hay tweets disponibles, disculpa las molestias.</h3>`
}
