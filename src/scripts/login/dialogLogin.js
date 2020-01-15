const eventHub = document.querySelector(".container")




export const LoginFormButton = () => {
  eventHub.addEventListener("click", clickEvent => {
  
    if (clickEvent.target.id === "login__button") {
      const dialogSiblingSelector = `#${clickEvent.target.id}+dialog`;
      const theDialog = document.querySelector(dialogSiblingSelector);
      theDialog.showModal();
    }

    if (clickEvent.target.id === "button--close") {
      const dialogElement = clickEvent.target.parentNode;
      console.log(dialogElement);
      dialogElement.close();
    }
  });
};