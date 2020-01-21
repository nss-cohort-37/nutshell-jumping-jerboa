let events = [];

export const useEvents = () => events.slice();

export const getEvents = () =>
  fetch(`http://localhost:8088/events?_expand=user`)
    .then(res => res.json())
    .then(parsedEvents => (events = parsedEvents));

export const editEvents = eventsObject => {
  return fetch(`http://localhost:8088/events/${eventsObject.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(eventsObject)
  }).then(getEvents);
};

export const deleteEvents = eventsId => {
  return fetch(`http://localhost:8088/events/${eventsId}`, {
    method: "DELETE"
  }).then(getEvents);
};

export const saveEvents = events => {
  return fetch("http://localhost:8088/events", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(events)
  }).then(getEvents);
};
