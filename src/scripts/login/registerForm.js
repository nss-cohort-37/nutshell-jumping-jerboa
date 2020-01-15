

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".register__container")

const registerFormList = () => {
    contentTarget.innerHTML = 

    `
    <fieldset>
        <label for="name">Name:</label>
        <input type="text" name="name" id="registerName__form">
    </fieldset>
    <fieldset>
        <label for="username">username or email:</label>
        <input type="text" name="username" id="registerUsername__form">
    </fieldset>
    <fieldset>
        <label for="password">password:</label>
        <input type="text" name="password" id="registerPassword__form">
    </fieldset>
    <fieldset>
        <label for="password__confirm">confirm password:</label>
        <input type="text" name="confrimPassword" id="registerConfrimPassword__form">
    </fieldset>
    <button id="register__button">Register Account</button>

    `
    
}

export default registerFormList