import { useEvents, deleteEvents, getEvents } from "./eventsProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".events__container")

const EventsListComponent = () => {

    eventHub.addEventListener("userLoggedIn", event => {
        const currentUser = parseInt(sessionStorage.getItem("activeUser"), 10)

        console.log("listing the events")

        eventHub.addEventListener("eventHasBeenEdited", event => {
            const updatedEvents = useEvents()
            render(updatedEvents)
        })

        eventHub.addEventListener("click", clickEvent => {
            if (clickEvent.target.id.startsWith("editEvent__")) {
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
                        render(theNewEvents)
                    }
                )
            }
        })

        const renderEventsAgain = () => {
            const allTheEvents = useEvents()
            render(allTheEvents)

        }

        eventHub.addEventListener("eventCreated", event => {
            renderEventsAgain()
        })

        eventHub.addEventListener("showEventButtonClicked", event => {
            renderEventsAgain()
        })

        getEvents(currentUser).then(
            () => {


                const eventsCollection = useEvents()

                const render = (eventsCollection) => {
                    contentTarget.innerHTML = eventsCollection.map(
                        (individualEvent) => {
                            return `
                    <section class="event">
                        <div>${individualEvent.name}</div>
                        <div>Location: ${individualEvent.location}</div>
                        <div>Date of Event: ${individualEvent.date}</div>
                        <button id="deleteEvent__${individualEvent.id}">Delete Event</button>
                        <button id="editEvent__${individualEvent.id}">Edit Event</button>

                    
                    <section>                
                `
                        }
                    ).join("")
                }

                render(eventsCollection)

            })
    })
    }

export default EventsListComponent