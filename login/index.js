import { loginController } from "./loginController.js";
import { loaderController } from '../loader/loaderController.js';
import { notificationsController } from "../notifications/notificationsController.js";
const notificationsSection = document.querySelector('#notifications');
const loginForm = document.querySelector('#login');
const showNotification = notificationsController(notificationsSection);
document.addEventListener('DOMContentLoaded', () => {
  

  const loader = document.querySelector('#loader');
  const { show, hide } = loaderController(loader);

  loginForm.addEventListener('startLoginUser', () => {
    show();
  });
  loginForm.addEventListener('finishLoginUser', () => {
    hide();
  });

  loginController(loginForm);
})
loginForm.addEventListener('userloged', (event) => {
  showNotification(event.detail.message, event.detail.type)
})