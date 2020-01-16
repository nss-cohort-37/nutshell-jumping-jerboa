const Friend = (friend) => {
    return `
    <section class="friend__card">
        <div class="friend__name">${friend.name}</div>
        <button class="friend__add">add friend</button>
        <button class="message__friend">message</button>
    </section>
    `

}

export default Friend