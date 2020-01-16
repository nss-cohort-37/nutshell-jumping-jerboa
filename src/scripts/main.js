import registerFormList from "./login/registerForm.js";
import loginFormList from "./login/loginForm.js";
import { LoginFormButton } from "./login/dialogLogin.js";
import { RegisterButton } from "./login/dialogRegister.js";
<<<<<<< HEAD
import { getTasks } from "./tasks/tasksProvider.js";
import TaskFormComponent from "./tasks/tasksComponent.js";
import TaskListComponent from "./tasks/tasksList.js";


=======
import { getUsers } from "./users/usersProvider.js";
>>>>>>> 38bff2b7f66368a84da934b3f83272836b7fcd74


getUsers().then(
    loginFormList
)
registerFormList()
LoginFormButton()
<<<<<<< HEAD
RegisterButton()
TaskFormComponent()
TaskListComponent()
getTasks()

=======

RegisterButton()
>>>>>>> 38bff2b7f66368a84da934b3f83272836b7fcd74
