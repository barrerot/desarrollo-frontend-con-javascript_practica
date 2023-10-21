import { getanuncios } from "./anuncioListModel.js";
import { buildanuncio, emptyanuncio } from "./anuncioListView.js";

export const anuncioListController = async (tweetList) => {
  tweetList.innerHTML = '';
  let anuncios = [];

  try {
    dispatchEvent('startLoadingTweets', null, tweetList);
    anuncios = await getanuncios();
  } catch (error) {
    const event = createCustomEvent('error', 'Error cargando tweets')
    tweetList.dispatchEvent(event);
  } finally {
    dispatchEvent('finishLoadingTweets', null, tweetList);
  }
//console.log(anuncios);
  if (anuncios.length === 0) {
    tweetList.innerHTML = emptyanuncio();
  } else {
    renderanuncios(anuncios, tweetList);

    const event = createCustomEvent('success', 'Tweets cargados correctamente');
    tweetList.dispatchEvent(event);
  }
  
}

const renderanuncios = (anuncios, tweetList) => {
  anuncios.forEach(anuncio => {
    const tweetContainer = document.createElement('div');
    tweetContainer.classList.add('tweet');
    
    tweetContainer.innerHTML = buildanuncio(anuncio);

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

const dispatchEvent = (eventName, data, element) => {
  const event = new CustomEvent(eventName, {
    detail: data
  });

  element.dispatchEvent(event);
}
