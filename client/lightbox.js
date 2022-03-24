const lightbox = document.createElement('div')
lightbox.id = 'lightbox'
document.body.appendChild(lightbox)



document.addEventListener("DOMContentLoaded", function(e) {
    const articles = document.getElementsByTagName('article')
    console.log(articles)
    console.log(articles.length)
    
    Array.from(articles, function mapFn(art) {
        console.log(art)
        art.addEventListener('click', () => {
            console.log("hello")
            lightbox.classList.add('active')
            let article = document.createElement('article')
            article.innerText = art.innerText
            while (lightbox.firstChild){
            lightbox.removeChild(lightbox.firstChild)}
            lightbox.appendChild(article)
        })
    })
})


















// articles.forEach(art => {
//     art.addEventListener('click', e => {
//         console.log("hello")
//         lightbox.classList.add('active')
//         let article = document.createElement('article')
//         article.innerText = art.innerText
//         while (lightbox.firstChild){
//         lightbox.removeChild(lightbox.firstChild)}
//         lightbox.appendChild(article)
//     })
// })
lightbox.addEventListener('click', e => {
    if (e.target !== e.currentTarget) return
    lightbox.classList.remove('active')
})
