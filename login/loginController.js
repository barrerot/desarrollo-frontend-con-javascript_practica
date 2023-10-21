import { dispatchEvent } from "../utils/dispatchEvent.js";
import { loginUser } from "./loginModel.js";

export const loginController = (loginForm) => {
  
  loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    submitLogin(loginForm)
  })

}

const submitLogin = async (loginForm) => {
  
  const { email, password } = getLoginData(loginForm);
  try {
    dispatchEvent('startLoginUser', null, loginForm)
    const jwt = await loginUser(email, password)
    
    localStorage.setItem('token', jwt);
    window.location = './index.html';
    
  } catch (error) {
    dispatchEvent('userloged', {
      type: "error",
      message: error,
    }, loginForm);
    //alert(error);
    
  } finally {
    
  }
}

const getLoginData = (loginForm) => {
  const formData = new FormData(loginForm);
  const email = formData.get('email');
  const password = formData.get('password');

  return {
    email: email,
    password: password
  }
}
