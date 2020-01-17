import { useUsers } from "../users/usersProvider.js";
import Friend from "./friends.js";


const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".friendsList__container")





const friendsList = () => {
    
    const users = useUsers()
    const render = (users) => {

        // const users = useUsers()
        console.log(users)
    
        contentTarget.innerHTML = `
        <div class="search">
        <div>search entries:</div>
        <input type="text" id="friend__searchBox">
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
        const searchTerm = event.detail.search
        const users = useUsers()
         const matchingUsers = users.filter(user => {
           if (user.name.includes(searchTerm) || user.email.includes(searchTerm)) {
             return user
           }
         })
         if (matchingUsers.length > 0) {
           render(matchingUsers)
         } else {
           contentTarget.innerHTML = "oops! no matching friends..."
         }
      })
    render(users)
}


export default friendsList