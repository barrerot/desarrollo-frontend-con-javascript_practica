import { getTweets } from "./tweetListModel.js";
import { buildTweet, emptyTweets } from "./tweetListView.js";

export const tweetListController = async (tweetList) => {
  tweetList.innerHTML = '';
  let tweets = [];

  try {
    tweets = await getTweets();
  } catch (error) {
    const event = createCustomEvent('error', 'Error cargando tweets')
    tweetList.dispatchEvent(event);
  }

  if (tweets.length === 0) {
    tweetList.innerHTML = emptyTweets();
  } else {
    renderTweets(tweets, tweetList);

    const event = createCustomEvent('success', 'Tweets cargados correctamente');
    tweetList.dispatchEvent(event);
  }
  
}

const renderTweets = (tweets, tweetList) => {
  tweets.forEach(tweet => {
    const tweetContainer = document.createElement('div');
    tweetContainer.classList.add('tweet');
    
    tweetContainer.innerHTML = buildTweet(tweet);

    tweetList.appendChild(tweetContainer)
  })
}

const createCustomEvent = (type, message) => {
  const event = new CustomEvent("tweetsLoaded", {
    detail: {
      type: type,
      message: message
    }
  });

  return event;
}
