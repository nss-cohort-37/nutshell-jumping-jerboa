

const messageCard = (messageObject) => {
    return `
    
    <section class="message__card">
            
              <div> Message: ${messageObject.message}</div>
              <button id="message--user${messageObject.id}"> ${messageObject.user.name}</button>
              <button id="editMessage--${messageObject.id}">Edit</button>
            </section>
            
            `
            
    
    
}

export default messageCard