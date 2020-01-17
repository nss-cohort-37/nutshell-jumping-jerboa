import { saveEvents, useEvents, editEvents } from "./eventsProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".newEvents__container")


const eventComponent = () => {

    
    eventHub.addEventListener("editButtonClicked", event => {
        const eventToBeEdited = event.detail.eventId

        const allEventsArray = useEvents()

        const foundEvent = allEventsArray.find(
            (currentEventObject) => {
                return currentEventObject.id === parseInt(eventToBeEdited, 10)
            }
        )

        document.querySelector("#event__id").value = foundEvent.id
        document.querySelector("#event__name").value = foundEvent.name
        document.querySelector("#event__location").value = foundEvent.location
        document.querySelector("#event__date").value = foundEvent.date

    })


    eventHub.addEventListener("click", clickEvent => {
        if (clickEvent.target.id === "saveEvent") {

            const hiddenInputValue = document.querySelector("#event__id").value

            if (hiddenInputValue !== "") {
                const editedEvent = { 
                    id: parseInt(document.querySelector("#event__id").value, 10),
                    name: document.querySelector("#event__name").value,
                    location: document.querySelector("#event__location").value,
                    date: document.querySelector("#event__date").value
                }
                
                editEvents(editedEvent).then(() => {
                    eventHub.dispatchEvent(new CustomEvent("eventHasBeenEdited"))
                })
            } else {
                
                const newEvent = {
                    name: document.querySelector("#event__name").value,
                    location: document.querySelector("#event__location").value,
                    date: document.querySelector("#event__date").value
                }

                saveEvents(newEvent).then(
                    () => {
                        const message = new CustomEvent("eventCreated")
                        eventHub.dispatchEvent(message)
                    }
                )
            }
        }
    })



    const render = () => {
        contentTarget.innerHTML = `

                <input type="hidden" id="event__id" />

                <div class="event__field">
                    event: <input type="text" id="event__name" />
                </div>

                <div class="event__field">
                    Location: <input type="text" id="event__location" />
                </div>
                <div class="event__field">
                    Date: <input type="text" id="event__date" />
                </div>

                <button class="event__field" id="saveEvent">New Event</button>

                
        `
    }

    render()
}


export default eventComponent