import { useUsers } from "../users/usersProvider.js";


const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".login__container")
const eraseForm = document.getElementById("login__form")
const loadPage = document.getElementById("content")

const loginFormList = () => {

    eventHub.addEventListener("click", event =>
    {
        if(event.target.id === "login__link") {

            eraseForm.classList.remove("erase__form")

            contentTarget.innerHTML =

            `
            <section class="card login__card">
            <div class="form-group">
            
                <label for="username">email: </label>
                <input  type="text" name="username" id="loginUsername__form">
                
            </div>
            <div class="form-group">
                <label  for="loginpassword">Password:</label>
                <input  type="password" name="loginpassword" id="loginPassword__form">
            
            </div>
                
                <div class="error"></div>
                <button class="btn btn-outline-primary btn-lg" id="login__button">Log In</button>
            </section>
        `
        }
    })
    
    eventHub.addEventListener("click", event => {
            if (event.target.id === "login__button") {
                
                eraseForm.classList.remove("erase__form")
                const error = document.querySelector(".error")

                const users = useUsers()
                const loginEmail = document.querySelector("#loginUsername__form").value
                const loginPW = document.querySelector("#loginPassword__form").value
                if (document.querySelector("#loginUsername__form").value === '' || document.querySelector("#loginPassword__form").value === '') {
                    error.innerHTML = "please fill out all fields"
                    error.classList.add("alert")
                    error.classList.add("alert-danger")
                } else {
                    try {
                        const theUser =users.find(user =>{
                            if(user.email === loginEmail && user.password === loginPW) {
                                return user
                            }
                        })

                        sessionStorage.setItem("activeUser", theUser.id)
                        console.log(sessionStorage.getItem("activeUser"))
                        const eraseForm = document.getElementById("login__form")
                        eraseForm.classList.add("erase__form")
                        loadPage.classList.remove("hide__content")
                        const message = new CustomEvent("userLoggedIn")
                        eventHub.dispatchEvent(message)
                        
                    }
                        catch {
                           error.innerHTML="Your email or password is incorrect"
                        } 
                }

            }
        
    })



}

export default loginFormList