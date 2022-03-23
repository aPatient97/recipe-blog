const fetchBlogs = () => {
  fetch("http://localhost:5000/blogdata")
    .then((res) => res.json())
    .then((data) => {
      console.log(data.blogs)
      for (let i = 0; i < data.blogs.length; i++) {
        //Creating elements
        const grid = document.querySelector(".grid")
        const title = document.createElement("h2")
        const date = document.createElement("p")
        const content = document.createElement("p")
        const div = document.createElement("div")

        //Adding in text content
        title.textContent = data.blogs[i].title // add relevant classes here
        date.textContent = data.blogs[i].date //add classes here
        content.textContent = data.blogs[i].content //add classes here

        //adding class to the div
        div.classList.add("grid-item")

        //adding classes to title/date/content

        //adding the blog to the div
        div.append(title)
        div.append(date)
        div.append(content)
        //adding div to the grid
        grid.append(div)
      }
    })
}
fetchBlogs()


//form new blog creation
const form = document.querySelector("form")
// we fetch a post request to the blogdata API with the new blog content
form.addEventListener("submit", (e) => {
  e.preventDefault()
  console.log('running!')
  let formData = Object.fromEntries(new FormData(e.target))
  if ((formData.title !== '') && (formData.content !== '') && (formData.date !== '') && (formData.content.length < 200 )) {
    fetch("http://localhost:5000/blogdata", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: { "Content-Type": "application/json" },
      })
        // .then((r) => {
        //   r.json()
        //   console.log(r)
        // })
        // .then((data) => {
        //   console.log(data)
        // })

  } else {
      alert('Please ensure all fields are filled in and that the content field is 200 characters or less.')
  }
})


