
let users = []

export const useUsers = () => users.slice()

export const getUsers = () => fetch("http://localhost:8088/users")
    .then(res => res.json())
    .then(parsedUsers => users = parsedUsers)

export const saveUsers = users => {
    return fetch('http://localhost:8088/users', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(users)
    })
        .then(getUsers)
}