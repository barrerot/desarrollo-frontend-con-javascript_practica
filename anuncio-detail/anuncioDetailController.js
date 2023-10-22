import { deleteTweet, getTweet } from "./anuncioDetailModel.js"
import { buildTweet } from "./anuncioDetailView.js";
import { dispatchEvent } from "../utils/dispatchEvent.js";
import { decodeToken } from "../utils/decodeToken.js";

export const tweetDetailController = async (tweetDetail, tweetId) => {

  try {
    const tweet = await getTweet(tweetId);
    tweetDetail.innerHTML = buildTweet(tweet);
    handleDeleteTweet(tweet, tweetDetail);
  } catch (error) {
    dispatchEvent('tweetLoaded', { type: "error", message: "El anuncio no existe" }, tweetDetail);
    setTimeout(() => {
      window.location = './index.html';
    }, 3000);
  }
  
}

const handleDeleteTweet = (tweet, tweetDetail) => {
  const token = localStorage.getItem('token');

  if (token) {
    const { userId } = decodeToken(token);

    if (userId === tweet.userId) {
      addDeleteTweetButton(tweet, tweetDetail);
    }
  }
}

const addDeleteTweetButton = (tweet, tweetDetail) => {
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Borrar anuncio';
  deleteButton.addEventListener('click', async () => {
    if (confirm('¿Seguro que quieres borrar el anuncio?')) {
      await deleteTweet(tweet.id);
      window.location = './index.html';
    }
  })

  tweetDetail.appendChild(deleteButton);
}
