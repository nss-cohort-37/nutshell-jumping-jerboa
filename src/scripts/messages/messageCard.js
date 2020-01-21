

const messageCard = (messageObject) => {
    return `
    
    <section class="card message__card">
            
            <div class="messageName" id="messageUser--${messageObject.userId}"> ${messageObject.user.name} </div>
              <div> -"${messageObject.message}"</div>
              <div class="edit" id="editMessage--${messageObject.id}">edit</div>
            </section>
            
            `
            
    
    
}

export default messageCard