



const messageCard = (messageObject) => {

  const currentUser = parseInt(sessionStorage.getItem("activeUser"), 10)
    if(currentUser === messageObject.userId) {
   
  return `
    
    <section class="card message__card">
            
              <div> ${messageObject.message}</div>
              <button> ${messageObject.user.name}</button>
              <button id="editMessage--${messageObject.id}">Edit</button>
            </section>
            
            `
            
    } else {
    return `
    
    <section class="card message__card">
            
              <div> ${messageObject.message}</div>
              <button id="message--user${messageObject.id}"> ${messageObject.user.name}</button>
                
            </section>
            
            `


}
}

export default messageCard

