

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
                <button class='button--close' id="button--close">Close</button>
            
        </dialog>
    </section>

    `
    
}

export default loginFormList