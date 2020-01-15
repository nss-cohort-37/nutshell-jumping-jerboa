

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".register__container")

const registerFormList = () => {
    const render = () => {

        contentTarget.innerHTML = 
    
        `
        <section>
        
            <button id="register__button">Register Account</button>
            
            <dialog id="registerInfo" class="registerInfo">
                
                    <label for="name">Name:</label>
                    <input type="text" name="name" id="registerName__form">
                
                    <label for="username">username or email:</label>
                    <input type="text" name="username" id="registerUsername__form">
                
                    <label for="password">password:</label>
                    <input type="text" name="password" id="registerPassword__form">
                
                    <label for="password__confirm">confirm password:</label>
                    <input type="text" name="confrimPassword" id="registerConfrimPassword__form">
                    <button class='button--close' id="button--close">Close</button>
    
            </dialog>
        </section>
    
        `
        
    }
    render()

    eventHub.addEventListener("keypress", event => {
        if (event.keyCode === 13) {
          if (event.target.id === "registerConfrimPassword__form") {
            if(event.target.value === document.querySelector("#registerPassword__form").value ){
               console.log("new account created");
               
               const userName = document.querySelector("#registerName__form").value
               const userEmail = document.querySelector("#registerUsername__form").value
               const UserPW = document.querySelector("#registerPassword__form").value

               const newUserObject = {
                    name: userName,
                    email: userEmail,
                    password: UserPW
               }

               saveUser(newUserObject).then(
                   ()=>{
                    eventHub.dispatchEvent(new CustomEvent("newAccountRegistered"))
                   }
               )

        
    
              
            }
          }
        }
      })

}

export default registerFormList