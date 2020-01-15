let friends = []

export const useFriends = () => friends.slice()

export const getFriends = () => fetch("http://localhost:8088/friends")
    .then(res => res.json())
    .then(parsedFriends => friends = parsedFriends)