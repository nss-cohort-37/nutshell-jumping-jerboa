import { useUsers } from "../users/usersProvider.js";


const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".login__container")

const loginFormList = () => {
    contentTarget.innerHTML =

        `
    <section>
        <button id="login__button">Login</button>
        <dialog id="loginDetail" class="loginDetail">
            
                <label for="username">username or email:</label>
                <input type="text" name="username" id="loginUsername__form">
            
                <label for="loginpassword">password:</label>
                <input type="text" name="loginpassword" id="loginPassword__form">
                <div class="error"></div>
                <button class='button--close' id="button--close">Close</button>
            
        </dialog>
    </section>

    `
    eventHub.addEventListener("keypress", event => {
        if (event.keyCode === 13) {
            if (event.target.id === "loginPassword__form") {
                if (document.querySelector("#loginUsername__form").value === '' || document.querySelector("#loginPassword__form").value === '') {
                    document.querySelector(".error").innerHTML = "please fill out all fields"
                } else {

                    const users = useUsers()
                    const loginEmail = document.querySelector("#loginUsername__form").value
                    const loginPW = document.querySelector("#loginPassword__form").value
                    
                    const theUser = users.find(

                        user => 
                            user.email == loginEmail && user.password === loginPW
                        
                    
                    )
                    console.log(theUser);

                    sessionStorage.setItem("activeUser", theUser.id)
                    

                }

            }
        }
    })



}

export default loginFormList