import { useNews, editNews, saveNews, getNews } from "./newsProvider.js"
import colorizeCurrentUserNews from "./newsComponent.js";


const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".news__container")
const entryLog = document.querySelector(".newsForm__container")


export const NewsListComponent = () => {
  
  eventHub.addEventListener("userLoggedIn", event => {


    const currentUser = parseInt(sessionStorage.getItem("activeUser"), 10)
  
  
        eventHub.addEventListener("editButtonClicked", event => {
          const newsToBeEdited = event.detail.newsId
          const allNewsArray = useNews()
          const theFoundedNews = allNewsArray.find(
            (currentNews) => {
              return currentNews.id === parseInt(newsToBeEdited, 10)
            }
          )
      
          document.querySelector("#news-url").value = theFoundedNews.url
          document.querySelector("#news-id").value = theFoundedNews.id
          document.querySelector("#news-synopsis").value = theFoundedNews.synopsis
          document.querySelector("#news-title").value = theFoundedNews.title
      
        })
      
        
        eventHub.addEventListener("click", clickEvent => {
          if (clickEvent.target.id === "saveNews") {debugger
           
            const hiddenInputValue = document.querySelector("#news-id").value
      
            if (hiddenInputValue !== "") {
              const editedNews = {
                id: parseInt(document.querySelector("#news-id").value, 10),
                title: document.querySelector("#news-title").value,
                synopsis: document.querySelector("#news-synopsis").value,
                url: document.querySelector("#news-url").value,
                userId: currentUser
              }
            
            editNews(editedNews).then(() => {
              colorizeCurrentUserNews()
              eventHub.dispatchEvent(new CustomEvent("newsHasBeenEdited"))
      
            })
            } else {
              const newNews = {
                  title: document.querySelector("#news-title").value,
                  synopsis: document.querySelector("#news-synopsis").value,
                  url: document.querySelector("#news-url").value,
                  userId: currentUser,
                  date: Date.now()
      
              }
      
              saveNews(newNews).then(
                () => {
                  colorizeCurrentUserNews()
                  const message = new CustomEvent("newsCreated")
                  eventHub.dispatchEvent(message)
                }
      
              )
            }
            document.querySelector(".newsForm__container").innerHTML = " ",
            document.querySelector(".editForm__container").innerHTML = " "
          }
      
        })
       
        eventHub.addEventListener("click", event => {
          if (event.target.id === ("news__button")) {
            entryLog.innerHTML = `
            
            
            <label for="newTitle"></label>
            
            <input type="hidden" id="news-id" />
            <input type="text" name="title" id="news-title" placeholder="Title...">
        
            <label for="newsSynopsis"></label>
            <input type="text" name="Synopsis" id="news-synopsis" placeholder="Synopsis...">
      
            <label for="newsUrl"></label>
            <input type="text" name="url" id="news-url" placeholder="URL">
            
            
            <button class='saveNews' id="saveNews">Save News</button>
            
            `
          }
      
        })
      
      
      
    }
      )
        
        
  
}