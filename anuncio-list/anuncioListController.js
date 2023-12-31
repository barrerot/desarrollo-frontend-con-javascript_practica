import { getanuncios } from "./anuncioListModel.js";
import { buildanuncio, emptyanuncio } from "./anuncioListView.js";

export const anuncioListController = async (anuncioList,filter) => {
  anuncioList.innerHTML = '';
  let anuncios = [];

  try {
    dispatchEvent('startLoadingAnuncios', null, anuncioList);
    if(filter==null){filter="";}
    anuncios = await getanuncios(filter);
  } catch (error) {
    const event = createCustomEvent('error', 'Error cargando anuncios')
    anuncioList.dispatchEvent(event);
  } finally {
    dispatchEvent('finishLoadingAnuncios', null, anuncioList);
  }

  if (anuncios.length === 0) {
    anuncioList.innerHTML = emptyanuncio();
  } else {
    renderanuncios(anuncios, anuncioList);

    const event = createCustomEvent('success', 'Anuncios cargados correctamente');
    anuncioList.dispatchEvent(event);
  }
  
}

const renderanuncios = (anuncios, anuncioList) => {
  anuncios.forEach(anuncio => {
    const anuncioContainer = document.createElement('div');
    anuncioContainer.classList.add('anuncio');
    
    anuncioContainer.innerHTML = buildanuncio(anuncio);

    anuncioList.appendChild(anuncioContainer)
  })
}

const createCustomEvent = (type, message) => {
  const event = new CustomEvent("anunciosLoaded", {
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
