const event = (events) => {
    return `
        <section class="event">
            <div>
                the event is ${events.type}
            </div>
            <div>
                Location: ${events.location}
            </div>
        
        </section>
    
    `
}

export default event