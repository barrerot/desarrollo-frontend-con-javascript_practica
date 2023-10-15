const transformTweets = (tweets) => {
  return tweets.map(tweet => ({
    handler: tweet.name,
    date: new Date().toISOString(),
    message: tweet.description,
    likes: tweet.price,
    photo: tweet.picture,
  }))
}

export const getTweets = async () => {
  const url = "http://localhost:8000/api/items";
  let parsedTweets = [];

  try {
    const response = await fetch(url);
    const tweets = await response.json();
    parsedTweets = transformTweets(tweets)
    
  } catch (error) {
    throw error;
  }
  
  return parsedTweets;
}
