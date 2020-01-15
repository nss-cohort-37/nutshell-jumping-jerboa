
let events = []

export const useEvents = () => events.slice()

export const getEvents = () => fetch("http://localhost:8088/events")
    .then(res => res.json())
    .then(parsedEvents => events = parsedEvents)