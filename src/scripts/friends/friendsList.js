import { useUsers } from "../users/usersProvider.js";
import Friend from "./friends.js";
import { saveFriends } from "./friendsProvider.js";


const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".friendsList__container")
const currentUser = parseInt(sessionStorage.getItem("activeUser"), 10)
console.log(currentUser);





const friendsList = () => {
    
    const users = useUsers()
    const render = (users) => {

        // const users = useUsers()
        console.log(users)
    
        contentTarget.innerHTML = `
        <div class="search">
        <div>search users:</div>
        <input type="text" id="friend__searchBox">
        <button id="reset__friendSearch">reset search</button>
        <button id="show__userFriends"Show Friends</button>
        </div>
        ${users.map(
            user => Friend(user)
        ).join("")}
        
        `
    }
    eventHub.addEventListener("keypress", event => {
        if (event.keyCode === 13) {
          if (event.target.id === "friend__searchBox") {
              console.log("search initiated");
              
            const searchValue = event.target.value
            const message = new CustomEvent("friend__searchInitiated", {
              detail: {
                search: searchValue
              }
            })
            eventHub.dispatchEvent(message)
          }
        }
      })

      eventHub.addEventListener("friend__searchInitiated", event => {
        const searchTerm = event.detail.search.toUpperCase()
        const users = useUsers()
         const matchingUsers = users.filter(user => {
           if (user.name.toUpperCase().includes(searchTerm) || user.email.includes(searchTerm)) {
             return user
           }
         })
         if (matchingUsers.length > 0) {
           render(matchingUsers)
         } else {
           contentTarget.innerHTML = "oops! no matching friends..."
         }
      })

    eventHub.addEventListener("click", event => {
        if(event.target.id === "reset__friendSearch"){
            console.log("resetting search");
            render(users)
            
        }
    })
    // eventHub.addEventListener("click", event => {
    //     if(event.target.id === "")
    // })
    
    eventHub.addEventListener("click", event => {
        if(event.target.id.startsWith("friendAdd--")){
            console.log("addfriend clicked")
            const [deletePrefix, friendId] = event.target.id.split("--")
            const friendToSave = {
                friendId: parseInt(friendId, 10),
                userId: currentUser
            }
         
                     const friendAddedEvent = new CustomEvent("friendAddedButtonClicked", {
                         detail: {
                             friendId: parseInt(friendId, 10),
                             userId: currentUser
                         }
                     })
                
                    eventHub.dispatchEvent(friendAddedEvent)
                    saveFriends(friendToSave)

            
        }
    })

    
    render(users)
}


export default friendsList