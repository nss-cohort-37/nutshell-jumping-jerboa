

export const NewsComponent = (newsObject) => {
  return `
  <section>
  </section>
  <section 
  
    <div> Title: ${newsObject.title}</div>
    <div> Summary: ${newsObject.synopsis}</div>
    <div> Url: ${newsObject.url}</div>
    <button class="editNews">Edit</button>
    <button class="deleteNews">Delete</button>
  
  
  </section>
  
  `
}


