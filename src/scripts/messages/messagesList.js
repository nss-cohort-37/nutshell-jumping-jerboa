import {useMessages, getMessages, saveMessages, editMessages} from "./messagesProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".messageForm__container")







export const MessageListComponent = () => {
  
  eventHub.addEventListener("userLoggedIn", event => {


    const currentUser = parseInt(sessionStorage.getItem("activeUser"), 10)
  
  
    getMessages(currentUser).then(
      ()=>{


        eventHub.addEventListener("editMessageClicked", event => {
          const messageToBeEdited = event.detail.messageId
          const allMessagesArray = useMessages()
          const theFoundedMessage = allMessagesArray.find(
            (currentMessage) => {
              return currentMessage.id === parseInt(messageToBeEdited, 10)
            }
          )
      
          document.querySelector("#message").value = theFoundedMessage.message,
          document.querySelector("#message-id").value = theFoundedMessage.id
          
      
        })
      
        
        eventHub.addEventListener("click", clickEvent => {
          if (clickEvent.target.id === "saveMessage") {debugger
           
            const hiddenInputValue = document.querySelector("#message-id").value
      
            if (hiddenInputValue !== "") {
              const editedMessage = {
                id: parseInt(document.querySelector("#message-id").value, 10),
                message: document.querySelector("#message").value,
                
                userId: currentUser
              }
            
            editMessages(editedMessage).then(() => {
              eventHub.dispatchEvent(new CustomEvent("messageHasBeenEdited"))
      
            })
            } else {
              const newMessage = {
                  message: document.querySelector("#message").value,
                  userId: currentUser,
                  date: Date.now()
      
              }

              
      
              saveMessages(newMessage).then(
                () => {
                  const message = new CustomEvent("messageCreated")
                  eventHub.dispatchEvent(message)
                }
      
              )
            // }
            // document.querySelector(".newsForm__container").innerHTML = " ",
            // document.querySelector(".editForm__container").innerHTML = " "
          }
      
        }})


        // eventHub.addEventListener("click", event => {
        //   if (event.target.id.startsWith("message__")) {
        //     contentTarget.innerHTML = `
            
            
            
            
        //     <input type="hidden" id="message-id" />
        //     <input type="text" name="title" id="message">
        //     <button id="saveMessage">Save Message</button>
        
            
            
            
           
            
        //     `
        //   }
      
        // })
      })
    })}
      