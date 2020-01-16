import {useNews} from "./newsProvider.js"
import {NewsComponent} from "./news.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".news__container")
const entryLog = document.querySelector(".newsForm__container")




export const NewsListComponent = () => {
  const news = useNews ()

  eventHub.addEventListener("click", event => {
    if(event.target.id === ("news__button")) {
      entryLog.innerHTML = `
      
      <label for="username">Title:</label>
      <input type="text" name="username" id="loginUsername__form">
  
      <label for="loginpassword">Synopsis:</label>
      <input type="text" name="loginpassword" id="loginPassword__form">

      <label for="loginpassword">Url:</label>
      <input type="text" name="loginpassword" id="loginPassword__form">
      
      
      <button class='button--close' id="button--close">Close</button>
      
      `
    }

})


const render = (news) => {
  contentTarget.innerHTML = `
  <button id="news__button">New Article</button>
  

    ${news.map((currentNews) => {return NewsComponent(currentNews)}).join("")}.
  `


}
render(news)
console.log(news)
}