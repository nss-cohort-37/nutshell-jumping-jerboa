import registerFormList from "./login/registerForm.js";
import loginFormList from "./login/loginForm.js";

import { getUsers } from "./users/usersProvider.js";
import {NewsListComponent} from "./news/newsList.js"
import { getNews } from "./news/newsProvider.js";



getUsers().then(
    loginFormList
)
registerFormList()



getNews()
.then(NewsListComponent)



