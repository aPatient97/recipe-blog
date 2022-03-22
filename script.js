const lightbox = document.createElement('div')
lightbox.id = 'lightbox'
document.body.appendChild(lightbox)

const articles = document.querySelectorAll('article')
articles.forEach(art => {
    art.addEventListener('click', e => {
        console.log("hello")
        lightbox.classList.add('active')
        let article = document.createElement('article')
        article.innerText = art.innerText
        while (lightbox.firstChild){
        lightbox.removeChild(lightbox.firstChild)}
        lightbox.appendChild(article)
    })
})
lightbox.addEventListener('click', e => {
    if (e.target !== e.currentTarget) return
    lightbox.classList.remove('active')
})


// //img
// const lightbox = document.createElement('div')
// lightbox.id = 'lightbox'
// document.body.appendChild(lightbox)

// const images = document.querySelectorAll('img')
// images.forEach(image => {
//   image.addEventListener('click', e => {
//     lightbox.classList.add('active')
//     const img = document.createElement('img')
//     img.src = image.src
//     while (lightbox.firstChild) {
//       lightbox.removeChild(lightbox.firstChild)
//     }
//     lightbox.appendChild(img)
//   })
// })

// lightbox.addEventListener('click', e => {
//   if (e.target !== e.currentTarget) return
//   lightbox.classList.remove('active')
// })
