import { notificationsController } from "./notifications/notificationsController.js";
import { tweetListController } from "./tweet-list/tweetListController.js";

const notifications = document.getElementById('notifications');

const showNotification = notificationsController(notifications);

document.addEventListener('DOMContentLoaded', () => {
  const tweetList = document.getElementById('tweets');
  tweetListController(tweetList);

  tweetList.addEventListener('tweetsLoaded', (event) => {
    showNotification(event.detail.message, event.detail.type)
  })
})


window.addEventListener('offline', () => {
  showNotification('Se ha perdido la conexión', 'error');
})
