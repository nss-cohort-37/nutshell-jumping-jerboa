import registerFormList from "./login/registerForm.js";
import loginFormList from "./login/loginForm.js";
import { LoginFormButton } from "./login/dialogLogin.js";
import { RegisterButton } from "./login/dialogRegister.js";
import { getUsers } from "./users/usersProvider.js";


getUsers().then(
    loginFormList
)
registerFormList()
LoginFormButton()

RegisterButton()


