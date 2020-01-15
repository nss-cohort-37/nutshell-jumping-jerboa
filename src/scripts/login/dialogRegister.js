const eventHub = document.querySelector(".container")




export const RegisterButton = () => {

  eventHub.addEventListener("click", clickEvent => {
  console.log("click")
    if (clickEvent.target.id === "register__button") {
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