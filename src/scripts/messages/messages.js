import { getMessages, useMessages } from "./messagesProvider.js"
import messageCard from "./messageCard.js";
import { useUsers } from "../users/usersProvider.js";

const contentTarget = document.querySelector(".message__list")
const eventHub = document.querySelector(".container")
const formTarget = document.querySelector(".editMessage__container")






export const MessageComponent = () => {

  eventHub.addEventListener("userLoggedIn", event => {


    const currentUser = parseInt(sessionStorage.getItem("activeUser"), 10)


    getMessages(currentUser).then(
      () => {
        const theCurrentUsersMessages = useMessages()


        const renderMessagesAgain = () => {
          getMessages(currentUser).then(
            () => {
    
              const allTheMessages = useMessages()
              render(allTheMessages)
    
            }
          )
        }
      
        eventHub.addEventListener("click", clickEvent => {
          if (clickEvent.target.id.startsWith("editMessage--")) {
           
            const [deletePrefix, messageId] = clickEvent.target.id.split("--")

            const editMessage = new CustomEvent("editMessageClicked", {
              detail: {
                messageId: messageId
      
              }
      
            })
            eventHub.dispatchEvent(editMessage)
          }
      
        })
        
       eventHub.addEventListener("click",  clickEvent => {
         if(clickEvent.target.id.startsWith("messageUser--")) {
          const users = useUsers()
          const [deletePrefix, messageUserId] = clickEvent.target.id.split("--")
          const nameofFriend = users.find(user => user.id === parseInt(messageUserId, 10))
          console.log(nameofFriend.name)
          confirm(`Would you like to add ${nameofFriend.name} as a friend?`)
         }
       }
       )

        eventHub.addEventListener("messageHasBeenEdited", event => {
          renderMessagesAgain()
        })


        eventHub.addEventListener("messageCreated", event => {
          renderMessagesAgain()
      
        })


        const render = (theMessage) => {


          contentTarget.innerHTML = 
          
          `
          <div class="search">

            <input type="hidden" id="message-id" />
            <input type="text" name="title" id="message" placeholder="sprinkle a message">  
            <div class="input-group-append">
              <button class="btn btn-outline-primary btn-lg saveMessage--button" id="saveMessage">Save Message</button> 
            </div>
          </div>
          


        

          ${
            theMessage.map(
              (messageObject) =>  messageCard(messageObject)
              
              
              
              ).join("")

          }`
          

        }
        render(theCurrentUsersMessages)


      })
  })

}

