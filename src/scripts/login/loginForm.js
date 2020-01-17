import { useUsers } from "../users/usersProvider.js";


const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".login__container")
const eraseForm = document.getElementById("login__form")


const loginFormList = () => {

    eventHub.addEventListener("click", event =>
    {
        if(event.target.id === "login__link") {

            eraseForm.classList.remove("erase__form")

            contentTarget.innerHTML =

            `
            <section>
                <label for="username">email:</label>
                <input type="text" name="username" id="loginUsername__form">
                <form>
                    <label for="loginpassword">Password:</label>
                    <input type="password" name="loginpassword" id="loginPassword__form">
                </form>
                <div class="error"></div>
                <button id="login__button">Log In</button>
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
                        
                    }
                        catch {
                           error.innerHTML="Your email or password is incorrect"
                        } 
                }

            }
        
    })



}

export default loginFormList