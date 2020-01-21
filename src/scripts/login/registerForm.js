import { saveUsers, getUser, getUsers, useUsers } from "../users/usersProvider.js";

// const resetTarget = document.querySelector(".account__container")
const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".login__container")
const eraseForm = document.getElementById("login__form")
const loadPage = document.getElementById("content")


const registerFormList = () => {
      eventHub.addEventListener("click", event => {
        if (event.target.id === "register__link") {
          eraseForm.classList.remove("erase__form")
          contentTarget.innerHTML = 
          `
            <section class="register__card">

            <div class="form-group">
              <label for="name">Name:</label>
              <input type="text" name="name" id="registerName__form">
            </div>

            <div class="form-group">
              <label for="username">email:</label>
              <input type="text" name="username" id="registerUsername__form">
            </div>

            <div class="form-group">
              <label for="password">Password:</label>
              <input type="password" name="password" id="registerPassword__form">
            </div>
            <div class="form-group">

            
            
              <label for="password__confirm">Confirm Password:</label>
              <input type="password" name="confrimPassword" id="registerConfrimPassword__form">
        </div>
            <div class="error"></div>
            <button class="btn btn-outline-primary btn-lg" id="createAccount__button">Create Account</button>
          </section>
      
          `

        }
      })
        
    eventHub.addEventListener("click", event => {
          if (event.target.id === "createAccount__button") {
            const error = document.querySelector(".error")
            const userName = document.querySelector("#registerName__form").value
            const userEmail = document.querySelector("#registerUsername__form").value
            const userPW = document.querySelector("#registerPassword__form").value
            const confirmPW = document.querySelector("#registerConfrimPassword__form").value
            
            getUser(userEmail).then(
              email => {
                if(email.length > 0){
                  error.innerHTML="email taken"
                } else if(userPW === confirmPW){
                  console.log("new account created");
                  
   
               if (userEmail === "" ) {
                 error.innerHTML = "please enter your email"
               } else
               if (userName === "")
                 {error.innerHTML = "please enter your name"}
                 else
               if (userPW === "")
                 {error.innerHTML = "please enter your password"}
               else {
                 const newUserObject = {
                      name: userName,
                      email: userEmail,
                      password: userPW
                 }
   
                 saveUsers(newUserObject).then(getUsers).then(
                     ()=>{
                       const users = useUsers()
                         console.log("saving user");
                         const currentUser = users.find(user=> {return user.email=== userEmail})
                         sessionStorage.setItem("activeUser", currentUser.id)
                         console.log(sessionStorage.getItem("activeUser"))
           
           
                         eraseForm.classList.add("erase__form")
                         loadPage.classList.remove("hide__content")
                      eventHub.dispatchEvent(new CustomEvent("newAccountRegistered"))
                     }
                 )
               }
               }
              }
            )
          }
      })
}

export default registerFormList




