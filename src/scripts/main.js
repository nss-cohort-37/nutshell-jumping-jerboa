import registerFormList from "./login/registerForm.js";
import loginFormList from "./login/loginForm.js";
// import { LoginFormButton } from "./login/dialogLogin.js";
// import { RegisterButton } from "./login/dialogRegister.js";
import { getTasks } from "./tasks/tasksProvider.js";
import TaskFormComponent from "./tasks/tasksComponent.js";
import TaskListComponent from "./tasks/tasksList.js";
import tasksCollection from "./tasks/tasksList.js";

import { getUsers } from "./users/usersProvider.js";
import { getEvents, useEvents } from "./events/eventsProvider.js";
import {eventComponent} from "./events/events.js";
import EventsListComponent from "./events/eventsList.js";
import { getNews } from "./news/newsProvider.js";
import { NewsListComponent } from "./news/newsList.js";
import {NewsComponent} from "./news/news.js"
import friendsList from "./friends/friendsList.js";
import { getMessages } from "./messages/messagesProvider.js";
import {MessageComponent} from "./messages/messages.js"
import {MessageListComponent} from "./messages/messagesList.js"



getUsers().then(
    loginFormList
)
registerFormList()
// LoginFormButton()
// RegisterButton()

getTasks()
  .then(tasksCollection)
  .then(TaskFormComponent)
  .then(TaskListComponent)



getUsers()
    .then(loginFormList)
    .then(registerFormList)
getNews()
  .then(NewsListComponent)
  .then(NewsComponent)
getMessages()
  .then(MessageListComponent)
  .then(MessageComponent)
 

    .then(friendsList)
getEvents()
    .then(useEvents)
    .then(eventComponent)
    .then(EventsListComponent)

    
   


