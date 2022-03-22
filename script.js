const fetchBlogs = () => {
  fetch("http://localhost:3000/blogs")
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

        //Adding in text content from
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

form.addEventListener("submit", (e) => {
  e.preventDefault()
  let formData = Object.fromEntries(new FormData(e.target))
  //if formData.title || formData.content || formData.date !== '' && formData.content.length > 200 
  //do below
  //else alert (please enter all fields)

  if ((formData.title || formData.content || formData.date !== '') && (formData.content.length < 200) ) {
    fetch("http://localhost:3000/blogs", {
        method: "POST",
        body: JSON.stringify(Object.fromEntries(new FormData(e.target))),
        headers: { "Content-Type": "application/json" },
      })
        .then((r) => {
          r.json()
          console.log(r)
        })
        .then((data) => {
          console.log(data)
        })
      alert("Blog submitted!")

  } else {
      alert('Please ensure all fields are filled in and that the content field is 200 characters or less.')
  }

  


})
