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
                                <section class="event__card" id="eventsCard--${individualEvent.id}">
                                <div>${individualEvent.name}</div>
                                <div>Location: ${individualEvent.location}</div>
                                <div>Date of Event: ${individualEvent.date}</div>
                                <div class="edit" id="deleteEvent__${individualEvent.id}">delete</div>
                                <div class="edit" id="editEvent__${individualEvent.id}">edit</div>
                                
                                
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