const express = require("express")
const app = express()
const cors = require("cors")
const port = process.env.PORT || 5000;
const bodyParser = require("body-parser")
const fs = require('fs')
const blogdata = require("./blogdata.json")

app.use(cors())

app.use(bodyParser.json())

app.get("/", (req, res) => {
  res.send('Welcome to Anonoblog')
})

app.get("/blogdata", (req, res) => {
  res.send(blogdata)
})

//we recieve the new blog data and push it to the blogdata json
app.post("/blogdata", (req, res) => {
  const newBlog = req.body
    fs.readFile('./blogdata.json', 'utf-8', (err, data) => {
      if (err) {
          console.log(`Error reading file: ${err}`)
      } else {

          //parse json string to json object

          const blogdata = JSON.parse(data)

          //add a new record

          blogdata.blogs.push(newBlog)

          //write new data back to the file

          fs.writeFile('./blogdata.json', JSON.stringify(blogdata, null, 2), (err) => {
              if (err) {
                  console.log(`Error writing file: ${err}`)
              }
          })
      }
  })
})

app.listen(port, function () {
  console.log(`server is up and running on port ${port}`)
})
