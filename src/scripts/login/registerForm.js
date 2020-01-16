import { saveUsers } from "../users/usersProvider.js";

// const resetTarget = document.querySelector(".account__container")
const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".login__container")
const eraseForm = document.getElementById("login__form")

const registerFormList = () => {
      eventHub.addEventListener("click", event => {
        if (event.target.id === "register__link") {
          eraseForm.classList.remove("erase__form")
          contentTarget.innerHTML = 
    
        `
        
        <section>
        
            <button id="register__button">Register Account</button>
            
            <dialog id="registerInfo" class="registerInfo">
                
          `
          <section>
          
              
              
                  <section class="register__card">
  
                  <div class="formLabel">
                    <label for="name">Name:</label>
                    <input type="text" name="name" id="registerName__form">
                  </div>
  
                  <div class="formLabel">
                    <label for="username">email:</label>
                    <input type="text" name="username" id="registerUsername__form">
                  </div>
  
                  <div class="formLabel">
                    <label for="password">Password:</label>
                    <input type="password" name="password" id="registerPassword__form">
                  </div>
  
                  </section>
                  
                    <label for="password__confirm">Confirm Password:</label>
                    <input type="password" name="confrimPassword" id="registerConfrimPassword__form">
                  
  
                  <div class="error"></div>
                  <button id="createAccount__button">Create Account</button>
                  
      
              
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
            
            if(userPW === confirmPW){
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

              saveUsers(newUserObject).then(
                  ()=>{
                      console.log("saving user");
                      
                   eventHub.dispatchEvent(new CustomEvent("newAccountRegistered"))
                  }
              )

              
              sessionStorage.setItem("activeUser", newUserObject.id)
              console.log(sessionStorage.getItem("activeUser"))


              eraseForm.classList.add("erase__form")
              

            }
    
              
            }
          }
        
      })

}

export default registerFormList


