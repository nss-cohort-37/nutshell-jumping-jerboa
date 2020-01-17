import registerFormList from "./login/registerForm.js";
import loginFormList from "./login/loginForm.js";
import { LoginFormButton } from "./login/dialogLogin.js";
import { RegisterButton } from "./login/dialogRegister.js";
import { getUsers } from "./users/usersProvider.js";
<<<<<<< HEAD
import { getEvents, useEvents } from "./events/eventsProvider.js";
import eventComponent from "./events/events.js";
import EventsListComponent from "./events/eventsList.js";
=======
import friendsList from "./friends/friendsList.js";
>>>>>>> master


getUsers()
    .then(loginFormList)
    .then(registerFormList)
<<<<<<< HEAD
getEvents()
    .then(useEvents)
    .then(eventComponent)
    .then(EventsListComponent)
=======
    .then(friendsList)
   


>>>>>>> master
