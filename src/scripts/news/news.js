import {useNews,deleteNews,getNews} from "./newsProvider.js"
import { useUsers } from "../users/usersProvider.js";
import colorizeCurrentUserNews from "./newsComponent.js";

const contentTarget = document.querySelector(".news__container")
const eventHub = document.querySelector(".container")
const formTarget = document.querySelector(".editForm__container")
// const currentUser = parseInt(sessionStorage.getItem("activeUser"), 10)







export const NewsComponent = () => {

  eventHub.addEventListener("userLoggedIn", event => {


    const currentUser = parseInt(sessionStorage.getItem("activeUser"), 10)


        
        const theCurrentUsersNews = useNews()

        const render = (theNews) => {


          contentTarget.innerHTML = theNews.map(
            (newsObject) => {
              return `
            
            <section class="card news__card newsCard--${newsObject.user.id}" id="newsCard--${newsObject.id}">
            <div class="card-body">
            <h4 class="card-title">${newsObject.title}</h4>
            <div> ${newsObject.synopsis}</div>
            <div> ${newsObject.url}</div>
            <div class="card-subtitle mb-2 text-muted"> posted by ${newsObject.user.name} </div>
            <div class="card__buttons">
            <div class="edit" id="editNews--${newsObject.id}">edit</div>
            <div class="edit" id="deleteNews--${newsObject.id}">delete</div>
            </div>
            </div>
            
            
            </section>
            
            `
            }).join("")

        }

        render(theCurrentUsersNews)
        colorizeCurrentUserNews()
        eventHub.addEventListener("click", clickEvent => {
          if (clickEvent.target.id.startsWith("deleteNews--")) {

            const [prefix, newsId] = clickEvent.target.id.split("--")

            deleteNews(newsId).then(
              () => {


                const theNews = useNews()
                renderNewsAgain(theNews)





              })

          }

        })

        eventHub.addEventListener("click", clickEvent => {
          if (clickEvent.target.id.startsWith("editNews--")) {
            {
              formTarget.innerHTML = `
        
        
        <label for="newTitle">Title:</label>
        
        <input type="hidden" id="news-id" />
        <input type="text" name="title" id="news-title">
    
        <label for="newsSynopsis">Synopsis:</label>
        <input type="text" name="Synopsis" id="news-synopsis">
  
        <label for="newsUrl">Url:</label>
        <input type="text" name="url" id="news-url">
        
        
        <button class='saveNews' id="saveNews">Save News</button>
        
        `
            }

            const [deletePrefix, newsId] = clickEvent.target.id.split("--")
            const editNews = new CustomEvent("editButtonClicked", {
              detail: {
                newsId: newsId

              }

            })
            eventHub.dispatchEvent(editNews)
          }

        })


        const renderNewsAgain = () => {
          getNews(currentUser).then(
            () => {

              const allTheNews = useNews()
              render(allTheNews)

            }
          )
        }

        eventHub.addEventListener("newsCreated", event => {
          renderNewsAgain()

        })

        eventHub.addEventListener("newsHasBeenEdited", event => {
          renderNewsAgain()
        })

        
        
      

  })

  // console.log(NewsDated())
}