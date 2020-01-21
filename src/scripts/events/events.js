// tyler - to render the events form and to run thte fuctionality of it.

import { saveEvents, useEvents, editEvents } from "./eventsProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".newEvents__container")
const entryLog = document.querySelector(".newEvents__container")

export const eventComponent = () => {
    
    
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
            
            const currentUser = parseInt(sessionStorage.getItem("activeUser"), 10)
            
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
                    date: document.querySelector("#event__date").value,
                    userId: currentUser
                }

                saveEvents(newEvent).then(
                    () => {
                        const message = new CustomEvent("eventCreated")
                        eventHub.dispatchEvent(message)
                    }
                )
            }
            
            document.querySelector(".newEvents__container").innerHTML = " ",
            document.querySelector(".editEvents__container").innerHTML = " "

        }
    })



    eventHub.addEventListener("click", event => {
        if (event.target.id === ("events__button")) {
          entryLog.innerHTML = `

          <div class="input-group mb-3">
                <input type="hidden" id="event__id" />

                <div class="card-body">
                  
                
                    <input type="text" id="event__name" placeholder="Title..."/>
                    
                    <input type="text" id="event__location" placeholder="Location..."/>
                    
                    <input type="text" id="event__date"  placeholder="Date..."/>
                    
                </div>

                <div class="input-group-append">
                <button class="btn btn-outline-primary" id="saveEvent">Save</button>
                </div>
    
            </div>
                
                
                
        `


        }
    })


}