const lightbox = document.createElement('div')
lightbox.id = 'lightbox'
document.body.appendChild(lightbox)

const lightboxFunction = () => {
    const articles = document.getElementsByTagName('article')
    Array.from(articles, function mapFn(art) {
        art.addEventListener('click', () => {
            console.log("hello")
            lightbox.classList.add('active')
            let article = document.createElement('article')
            article.innerText = art.innerText
            article.nodeValue = art.nodeValue
            while (lightbox.firstChild){
            lightbox.removeChild(lightbox.firstChild)}
            lightbox.appendChild(article)
        })
    })
 }   

lightboxFunction()

document.addEventListener("DOMContentLoaded", function(e) {
    lightboxFunction()
})

lightbox.addEventListener('click', e => {
    if (e.target !== e.currentTarget) return
    lightbox.classList.remove('active')
})

module.exports = {lightboxFunction}
