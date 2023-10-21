import { notificationsController } from "./notifications/notificationsController.js";
import { anuncioListController } from "./anuncio-list/anuncioListController.js";
import { sessionController } from "./session/sessionController.js";
import { loaderController } from "./loader/loaderController.js";

const notifications = document.getElementById('notifications');


const showNotification = notificationsController(notifications);
const loader = document.getElementById('loader');
const { show, hide } =  loaderController(loader);

document.addEventListener('DOMContentLoaded', () => {
  const anuncioList = document.getElementById('anuncios');
  
  anuncioList.addEventListener('anunciosLoaded', (event) => {
    showNotification(event.detail.message, event.detail.type)
  })
  anuncioList.addEventListener('startLoadinganuncios', () => {
    show();
  })
  anuncioList.addEventListener('finishLoadinganuncios', () => {
    hide();
  })

  anuncioListController(anuncioList);

  const session = document.getElementById('session');
  sessionController(session);
  
})


window.addEventListener('offline', () => {
  showNotification('Se ha perdido la conexión', 'error');
})
