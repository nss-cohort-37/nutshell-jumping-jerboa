import { getMessages, useMessages } from "./messagesProvider.js"
import messageCard from "./messageCard.js";

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
            {
              formTarget.innerHTML = `
            
          
            <input type="hidden" id="message-id" />
            <input type="text" name="title" id="message">
        
            <button class='saveNews' id="saveMessage">Save Message</button>
            
            `
            }
      
            const [deletePrefix, messageId] = clickEvent.target.id.split("--")
            const editMessage = new CustomEvent("editMessageClicked", {
              detail: {
                messageId: messageId
      
              }
      
            })
            eventHub.dispatchEvent(editMessage)
          }
      
        })
        
        eventHub.addEventListener("editMessageClicked", event => {
          renderMessagesAgain()
        })

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
            <button class='saveNews' id="saveMessage">Save Message</button> 

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

