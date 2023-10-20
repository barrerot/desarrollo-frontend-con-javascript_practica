import { deleteTweet, getTweet } from "./tweetDetailModel.js"
import { buildTweet } from "./tweetDetailView.js";
import { dispatchEvent } from "../utils/dispatchEvent.js";
import { decodeToken } from "../utils/decodeToken.js";

export const tweetDetailController = async (tweetDetail, tweetId) => {

  try {
    const tweet = await getTweet(tweetId);
    tweetDetail.innerHTML = buildTweet(tweet);
    handleDeleteTweet(tweet, tweetDetail);
  } catch (error) {
    dispatchEvent('tweetLoaded', { type: "error", message: "El tweet no existe" }, tweetDetail);
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
  deleteButton.textContent = 'Borrar tweet';
  deleteButton.addEventListener('click', async () => {
    if (confirm('¿Seguro que quieres borrar el tweet?')) {
      await deleteTweet(tweet.id);
      window.location = 'index.html';
    }
  })

  tweetDetail.appendChild(deleteButton);
}
