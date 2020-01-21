// tyler - to render the events on the page when a user logs in and when new events are created, edited, deleted

import { useEvents, deleteEvents, getEvents } from "./eventsProvider.js"
import colorizeCurrentUserEvents from "./eventsComponent.js";

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".events__container")
const formTarget = document.querySelector(".editEvents__container")

const EventsListComponent = () => {

    eventHub.addEventListener("userLoggedIn", event => {
        const currentUser = parseInt(sessionStorage.getItem("activeUser"), 10)

        // console.log("listing the events")

        


                eventHub.addEventListener("eventHasBeenEdited", event => {
                    const updatedEvents = useEvents()
                   renderEventsAgain()
                })

                eventHub.addEventListener("click", clickEvent => {
                    if (clickEvent.target.id.startsWith("editEvent__")) {
                        {
                            formTarget.innerHTML = `

                          <input type="hidden" id="event__id" />
          
                              Event: <input type="text" id="event__name" />
          
                              Location: <input type="text" id="event__location" />
          
                              Date: <input type="text" id="event__date" />
          
                          <button class="event__field" id="saveEvent">Save Event</button>
                    
                    `
                        }
                        const [deletePrefix, eventId] = clickEvent.target.id.split("__")

                        const editEvent = new CustomEvent("editButtonClicked", {
                            detail: {
                                eventId: eventId
                            }
                        })

                        eventHub.dispatchEvent(editEvent)
                    }

                    if (clickEvent.target.id.startsWith("deleteEvent__")) {
                        const [deletePrefix, eventId] = clickEvent.target.id.split("__")

                        deleteEvents(eventId).then(
                            () => {
                                const theNewEvents = useEvents()
                                renderEventsAgain(theNewEvents)
                            }
                        )
                    }
                })

                const renderEventsAgain = () => {
                    getEvents().then(
                        () => {

                            const allTheEvents = useEvents()
                            render(allTheEvents)
                        }
                    )


                }

                eventHub.addEventListener("eventCreated", event => {
                    renderEventsAgain()
                })

                eventHub.addEventListener("showEventButtonClicked", event => {
                    renderEventsAgain()
                })


                    const eventsCollection = useEvents()
                    
                    const render = (eventsCollection) => {
                        contentTarget.innerHTML = eventsCollection.map(
                            (individualEvent) => {
                                return `
                                <section class="card event__card" id="eventsCard--${individualEvent.id}">
                                <h4 class="card-title">${individualEvent.name}</h4>
                                <div class="card-subtitle mb-2 text-muted"> ${individualEvent.location}</div>
                                <div>${individualEvent.date}</div>

                                <div class="card-subtitle mb-2 text-muted"> posted by ${individualEvent.user.name} </div>
                                <div class="card__buttons">
                                <div class="edit" id="deleteEvent__${individualEvent.id}">delete</div>
                                <div class="edit" id="editEvent__${individualEvent.id}">edit</div>
                                </div>
                                
                                
                                </section>                
                                `
                        }
                    ).join("")
                }
               

                        render(eventsCollection)
                        colorizeCurrentUserEvents()
                 
            
    })
}

export default EventsListComponent