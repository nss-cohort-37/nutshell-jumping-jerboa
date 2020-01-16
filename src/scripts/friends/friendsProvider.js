let friends = [];

export const useFriends = () => friends.slice();

export const getFriends = () =>
  fetch("http://localhost:8088/friends")
    .then(res => res.json())
    .then(parsedFriends => (friends = parsedFriends));

export const deleteFriends = friendsId => {
  return fetch(`http://localhost:8088/friends/${friendsId}`, {
    method: "DELETE"
  }).then(getFriends);
};

export const saveFriends = friends => {
  return fetch("http://localhost:8088/friends", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(friends)
  }).then(getFriends);
};
