

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".login__container")

const loginFormList = () => {
    contentTarget.innerHTML = 

    `
    <fieldset>
        <label for="username">username or email:</label>
        <input type="text" name="username" id="loginUsername__form">
    </fieldset>
    <fieldset>
        <label for="loginpassword">password:</label>
        <input type="text" name="loginpassword" id="loginPassword__form">
    </fieldset>
    <button id="login__button">Login</button>

    `
    
}

export default loginFormList