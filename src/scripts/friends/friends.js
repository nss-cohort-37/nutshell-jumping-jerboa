const Friend = (friend) => {
    return `
    <section class="card friend__card">
        <div class="friend__name">${friend.name}</div>
        <button class="btn btn-outline-primary btn-sm" id="friendAdd--${friend.id}">add friend</button>
    </section>
    `

}

export default Friend