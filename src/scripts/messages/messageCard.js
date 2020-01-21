

const messageCard = (messageObject) => {
    return `
    
    <section class="card message__card">
            
            <div class="messageName" id="messageUser--${messageObject.userId}"> ${messageObject.user.name} </div>
            <img class="friend__icon" src="images/mlp2.png" alt="">
              <div> -"${messageObject.message}"</div>
              <div class="edit" id="editMessage--${messageObject.id}">edit</div>
            </section>
            
            `
            
    
    
}

export default messageCard