import registerFormList from "./login/registerForm.js";
import loginFormList from "./login/loginForm.js";
import { LoginFormButton } from "./login/dialogLogin.js";
import { RegisterButton } from "./login/dialogRegister.js";
import { getTasks } from "./tasks/tasksProvider.js";
import TaskFormComponent from "./tasks/tasksComponent.js";
import TaskListComponent from "./tasks/tasksList.js";
import tasksCollection from "./tasks/tasksList.js";
import { getUsers } from "./users/usersProvider.js";



getUsers().then(
    loginFormList
)
registerFormList()
LoginFormButton()
RegisterButton()
TaskFormComponent()
TaskListComponent()
getTasks()
tasksCollection()


getUsers()
    .then(loginFormList)
    .then(registerFormList)
   


