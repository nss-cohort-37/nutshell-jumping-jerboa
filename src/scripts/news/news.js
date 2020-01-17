import { useNews, deleteNews } from "./newsProvider.js"
const contentTarget = document.querySelector(".news__container")
const eventHub = document.querySelector(".container")
const formTarget = document.querySelector(".editForm__container")






export const NewsComponent = () => {
const newsCollection = useNews()

eventHub.addEventListener("click", clickEvent => {
      if(clickEvent.target.id.startsWith("deleteNews--")) {

        const [prefix, newsId] = clickEvent.target.id.split("--")
        
        deleteNews(newsId).then(
          () => {
              const theNews = useNews()
                render(theNews)
            
  
          })

      }
      
  })

eventHub.addEventListener("click", clickEvent => {
  if(clickEvent.target.id.startsWith("editNews--")) {
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

const NewsDated = () => {
const theNews = useNews()
const sortedByDate = theNews.sort(
        (currentEntry, nextEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
    return sortedByDate
}
  

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
  


  const render = (theNews) => {
    
    
    contentTarget.innerHTML = theNews.map(
      (newsObject) => {
        return `
        
        <section 
        
          <div> Title: ${newsObject.title}</div>
          <div> Summary: ${newsObject.synopsis}</div>
          <div> Url: ${newsObject.url}</div>
          <button id="editNews--${newsObject.id}">Edit</button>
          <button id="deleteNews--${newsObject.id}">Delete</button>
        
        
        </section>
        
        `
      }).join("")
  }
  render(NewsDated())
  console.log(NewsDated())

}








