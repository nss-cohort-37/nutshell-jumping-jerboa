

const messageCard = (messageObject) => {
    return `
    
    <section class="message__card">
            
            <div class="messageName" id="message--user${messageObject.id}"> ${messageObject.user.name} </div>
              <div> -"${messageObject.message}"</div>
              <div class="edit" id="editMessage--${messageObject.id}">edit</div>
            </section>
            
            `
            
    
    
}

export default messageCard