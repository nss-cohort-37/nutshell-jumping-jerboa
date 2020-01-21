import { useNews } from "./newsProvider.js";

const colorizeCurrentUserNews = () => {

    const currentUser = parseInt(sessionStorage.getItem("activeUser"), 10)
        const news = useNews()
        const currentUsersNews = news.filter(currentnews => currentnews.user.id === currentUser)
          console.log(currentUsersNews)
          currentUsersNews.map (news => {
              const element = document.getElementById(`newsCard--${news.id}`)

              element.classList.add("myNews")
              
          })
        
 }
      
export default colorizeCurrentUserNews
