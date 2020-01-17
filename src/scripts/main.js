import registerFormList from "./login/registerForm.js";
import loginFormList from "./login/loginForm.js";
import { LoginFormButton } from "./login/dialogLogin.js";
import { RegisterButton } from "./login/dialogRegister.js";
import { getUsers } from "./users/usersProvider.js";
import eventsList from "./events/eventsList.js";
import { getEvents, useEvents } from "./events/eventsProvider.js";


getUsers()
    .then(loginFormList)
    .then(registerFormList)