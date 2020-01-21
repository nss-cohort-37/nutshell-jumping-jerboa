// mac - to map through the events and apply specific styling to the events created by the current user

import { useEvents } from "./eventsProvider.js";

const colorizeCurrentUserEvents = () => {

    const currentUser = parseInt(sessionStorage.getItem("activeUser"), 10)
        const Events = useEvents()
        const currentUsersEvents = Events.filter(currentEvents => currentEvents.user.id === currentUser)
          console.log(currentUsersEvents)
          currentUsersEvents.map (events => {
              const element = document.getElementById(`eventsCard--${events.id}`)

              element.classList.add("myNews")
              
          })
        
 }
      
export default colorizeCurrentUserEvents