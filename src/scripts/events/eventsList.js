import { useEvents } from "./eventsProvider.js"
import { useUsers } from "../users/usersProvider.js"

// const eventsList = () => {
//     console.log("listing the events")
// }

// export default eventsList


const contentTarget = document.querySelector(".events__container")

export const EventList = () => {
    const events = useEvents()

    const render = () => {
        contentTarget.innerHTML = events.map(event => {
            const type = events.find(type => type.id === useUsers.eventsId)
        }).join("")
    }
    render()
}

export default EventList