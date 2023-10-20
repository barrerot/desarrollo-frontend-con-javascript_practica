import { tweetDetailController } from "./tweetDetailController.js";
import { notificationsController } from "../notifications/notificationsController.js";

document.addEventListener('DOMContentLoaded', () => {

  const params = new URLSearchParams(window.location.search);
  const tweetId = params.get("id");

  const notifications = document.querySelector("#notifications");
  const showNotification = notificationsController(notifications);

  const tweetDetail = document.querySelector('#tweetDetail');

  tweetDetail.addEventListener('tweetLoaded', (event) => {
    showNotification(event.detail.message, event.detail.type);
  })

  tweetDetailController(tweetDetail, tweetId);

})
