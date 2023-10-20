export const buildTweet = (tweet) => {
  let tweetTemplate = `
  <span>${tweet.handler}</span>
  <p>${tweet.message}</p>
  `;

  if (tweet.likes.length > 0) {
    tweetTemplate += `<p> estos usuarios: ${tweet.likes.join(', ')} han dado like al tweet</p>`;
  }

  return tweetTemplate;
}
