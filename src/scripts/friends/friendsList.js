import { useUsers } from "../users/usersProvider.js";
import Friend from "./friends.js";


const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".friendsList__container")
const users = useUsers()


const friendsList = () => {
    console.log("listing the friends")

    contentTarget.innerHTML = `

    ${users.map(
        user => {Friend(user)}
    )}
    
    `

    
}


export default friendsList