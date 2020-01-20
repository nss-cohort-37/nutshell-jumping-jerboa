import { getMessages, useMessages } from "./messagesProvider.js"

const contentTarget = document.querySelector(".message__list")
const eventHub = document.querySelector(".container")






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
      
        eventHub.addEventListener("messageCreated", event => {
          renderMessagesAgain()
      
        })


        const render = (theMessage) => {

debugger
          contentTarget.innerHTML = theMessage.map(
            (messageObject) => {
              return `
            
            <section class="message__card">
            
              <div> Message: ${messageObject.Message}</div>
              
              
            
            
            </section>
            
            `
            }).join("")

        }
        render(theCurrentUsersMessages)


      })
  })

}

