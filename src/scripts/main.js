import registerFormList from "./login/registerForm.js";
import loginFormList from "./login/loginForm.js";

import { getUsers } from "./users/usersProvider.js";
import { getEvents, useEvents } from "./events/eventsProvider.js";
import {eventComponent} from "./events/events.js";
import EventsListComponent from "./events/eventsList.js";
import { getNews } from "./news/newsProvider.js";
import { NewsListComponent } from "./news/newsList.js";
import {NewsComponent} from "./news/news.js"
import friendsList from "./friends/friendsList.js";


getUsers()
    .then(loginFormList)
    .then(registerFormList)
getNews()
  .then(NewsListComponent)
  .then(NewsComponent)
 

    .then(friendsList)
getEvents()
    .then(useEvents)
    .then(eventComponent)
    .then(EventsListComponent)
   


