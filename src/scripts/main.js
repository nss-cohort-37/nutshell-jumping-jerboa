import registerFormList from "./login/registerForm.js";
import loginFormList from "./login/loginForm.js";

import { getUsers } from "./users/usersProvider.js";
import { getNews } from "./news/newsProvider.js";
import { NewsListComponent } from "./news/newsList.js";
import {NewsComponent} from "./news/news.js"




getUsers()
    .then(loginFormList)
    .then(registerFormList)
getNews()
  .then(NewsListComponent)
  .then(NewsComponent)
 

   


