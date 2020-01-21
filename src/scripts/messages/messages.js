import {saveMessages, getMessages, useMessages } from "./messagesProvider.js"
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

        eventHub.addEventListener("click", event => { 
          if(event.target.id.startsWith("message--")){
            console.log("do you hear me")
              
              const [deletePrefix, messageId] = event.target.id.split("--")
              const friendConfirmation = {
                  messageId: parseInt(messageId, 10),
                  userId: currentUser
              }
           
                       const friendConfirmEvent = new CustomEvent("userAddedButtonClicked", {
                           detail: {
                               messageId: parseInt(messageId, 10),
                               userId: currentUser
                           }
                       })
                  
                      eventHub.dispatchEvent(friendConfirmEvent)
                      saveMessages(friendConfirmation)
  
              
          }
      })
  
      
      

       

      
        eventHub.addEventListener("click", clickEvent => {
<<<<<<< HEAD
          if (clickEvent.target.id.startsWith("editMessage--")) {debugger
           
      
=======
          if (clickEvent.target.id.startsWith("editMessage--")) {
           
>>>>>>> 21584983dfe60f59e5f1986a64c263817a8d9cda
            const [deletePrefix, messageId] = clickEvent.target.id.split("--")
            
            const editMessage = new CustomEvent("editMessageClicked", {
              detail: {
                messageId: messageId
      
              }
      
            })
            eventHub.dispatchEvent(editMessage)
          }
      
        })
        
<<<<<<< HEAD
       
=======
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
>>>>>>> 21584983dfe60f59e5f1986a64c263817a8d9cda

        eventHub.addEventListener("messageHasBeenEdited", event => {
          renderMessagesAgain()
        })


        eventHub.addEventListener("messageCreated", event => {
          renderMessagesAgain()
      
        })


        const render = (theMessage) => {


          contentTarget.innerHTML = 
          
          `
          <input type="hidden" id="message-id" />
          <input type="text" name="title" id="message">  
            <button class="saveMessage--button" id="saveMessage">Save Message</button> 

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

