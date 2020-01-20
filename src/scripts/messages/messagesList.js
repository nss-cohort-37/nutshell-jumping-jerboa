import {useMessages, getMessages, saveMessages} from "./messagesProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".messageForm__container")







export const MessageListComponent = () => {
  
  eventHub.addEventListener("userLoggedIn", event => {


    const currentUser = parseInt(sessionStorage.getItem("activeUser"), 10)
  
  
    getMessages(currentUser).then(
      ()=>{


        // eventHub.addEventListener("editButtonClicked", event => {
        //   const newsToBeEdited = event.detail.newsId
        //   const allNewsArray = useNews()
        //   const theFoundedNews = allNewsArray.find(
        //     (currentNews) => {
        //       return currentNews.id === parseInt(newsToBeEdited, 10)
        //     }
        //   )
      
        //   document.querySelector("#news-url").value = theFoundedNews.url
        //   document.querySelector("#news-id").value = theFoundedNews.id
        //   document.querySelector("#news-synopsis").value = theFoundedNews.synopsis
        //   document.querySelector("#news-title").value = theFoundedNews.title
      
        // })
      
        
        eventHub.addEventListener("click", clickEvent => {
          if (clickEvent.target.id === "saveMessage") {
           
            // const hiddenInputValue = document.querySelector("#news-id").value
      
            // if (hiddenInputValue !== "") {
            //   const editedNews = {
            //     id: parseInt(document.querySelector("#news-id").value, 10),
            //     title: document.querySelector("#news-title").value,
            //     synopsis: document.querySelector("#news-synopsis").value,
            //     url: document.querySelector("#news-url").value,
            //     userId: currentUser
            //   }
            
            // editNews(editedNews).then(() => {
            //   eventHub.dispatchEvent(new CustomEvent("newsHasBeenEdited"))
      
            // })
            // } else {
              const newMessage = {
                  Message: document.querySelector("#message").value,
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
      
        })


        eventHub.addEventListener("click", event => {
          if (event.target.id.startsWith("message__")) {
            contentTarget.innerHTML = `
            
            
            
            
            <input type="hidden" id="message-id" />
            <input type="text" name="title" id="message">
        
            
            
            
            <button class='saveMessage' id="saveMessage">Save Message</button>
            
            `
          }
      
        })
      })
    })}
      