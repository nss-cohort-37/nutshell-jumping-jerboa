import registerFormList from "./login/registerForm.js";
import loginFormList from "./login/loginForm.js";
import { LoginFormButton } from "./login/dialogLogin.js";
import { RegisterButton } from "./login/dialogRegister.js";
import { getTasks } from "./tasks/tasksProvider.js";
import TaskFormComponent from "./tasks/tasksComponent.js";
import TaskListComponent from "./tasks/tasksList.js";



registerFormList()
loginFormList()
LoginFormButton()
RegisterButton()
TaskFormComponent()
TaskListComponent()
getTasks()

