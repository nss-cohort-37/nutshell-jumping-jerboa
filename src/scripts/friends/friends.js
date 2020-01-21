const Friend = (friend) => {
    return `
    <section class="card friend__card">
        <div class="friend__name">${friend.name}</div>
        <img class="friend__icon" src="images/mlp.png" alt="">
        <button class="btn btn-outline-primary btn-sm" id="friendAdd--${friend.id}">add friend</button>
    </section>
    `

}

export default Friend