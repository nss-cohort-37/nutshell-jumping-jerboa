

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".register__container")

const registerFormList = () => {
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

export default registerFormList