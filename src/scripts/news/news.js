import {
  useNews,
  deleteNews,
  getNews
} from "./newsProvider.js"

const contentTarget = document.querySelector(".news__container")
const eventHub = document.querySelector(".container")
const formTarget = document.querySelector(".editForm__container")
const currentUser = parseInt(sessionStorage.getItem("activeUser"), 10)







export const NewsComponent = () => {
eventHub.addEventListener("userLoggedIn", event => {
  const currentUser = parseInt(sessionStorage.getItem("activeUser"), 10)


  getNews(currentUser).then(
    ()=>{
      
      const theCurrentUsersNews = useNews()

      const render = (theNews) => {
        

      contentTarget.innerHTML = theNews.map(
        (newsObject) => {
          return `
            
            <section class="news__card">
            
              <div> Title: ${newsObject.title}</div>
              <div> Summary: ${newsObject.synopsis}</div>
              <div> Url: ${newsObject.url}</div>
              <button id="editNews--${newsObject.id}">Edit</button>
              <button id="deleteNews--${newsObject.id}">Delete</button>
            
            
            </section>
            
            `
        }).join("")
        
    }

    render(theCurrentUsersNews)

  })

})


  eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("deleteNews--")) {

      const [prefix, newsId] = clickEvent.target.id.split("--")

      deleteNews(newsId).then(
        () => {
          const theNews = useNews()
          render(theNews)


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
    const allTheNews = useNews()
    render(allTheNews)
  }

  eventHub.addEventListener("newsCreated", event => {
    renderNewsAgain()

  })

  eventHub.addEventListener("newsHasBeenEdited", event => {
    renderNewsAgain()
  })



 

  // console.log(NewsDated())


}