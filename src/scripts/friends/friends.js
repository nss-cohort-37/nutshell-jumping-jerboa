const Friend = (friend) => {
    return `
    <section class="friend__card">
        <div class="friend__name">${friend.name}</div>
        <button id="friendAdd--${friend.id}">add friend</button>
        <button id="message__friend--${friend.id}">message</button>
    </section>
    `

}

export default Friend