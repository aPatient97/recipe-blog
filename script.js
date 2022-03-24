let thumbsUpEmoji = document.getElementsByClassName("thumbsUpEmoji");
let thumbsUpInt = document.getElementsByClassName("thumbsUpNumber");

for (let i = 0; i < thumbsUpInt.length; i++) {
  thumbsUpEmoji[i].addEventListener("click", () => {
      let thumbsUpInteger = 0;
      thumbsUpInteger += 1;
      thumbsUpInt[i].innerHTML = thumbsUpInteger;
  });
}

// const calloncethumbsUp = () => {
//       let thumbsUpInteger = 0;
//       thumbsUpInteger += 1;
//       thumbsUpInt.innerHTML = thumbsUpInteger;
// };

// thumbsUpEmoji.addEventListener("click", calloncethumbsUp);




let heartEmoji = document.getElementsByClassName("heartEmoji");
let heartInt = document.getElementsByClassName("heartNumber");

for (let i = 0; i < heartInt.length; i++) {
  heartEmoji[i].addEventListener("click", () => {
    let heartInteger = 0;
    heartInteger += 1;
    heartInt[i].innerHTML = heartInteger;
  });
}

// const emojis = document.getElementsByClassName('heartEmoji')
// emojis.forEach(emojibtn => {
//   emojibtn.addEventListener('click', e => {

//   })

//   })

let laughEmoji = document.getElementsByClassName("laughEmoji");
let laughInt = document.getElementsByClassName("laughNumber");

for (let i = 0; i < laughInt.length; i++) {
  laughEmoji[i].addEventListener("click", () => {
    let laughInteger = 0;
    laughInteger += 1;
    laughInt[i].innerHTML = laughInteger;
  });
}


// const lightbox = document.createElement('div')
// lightbox.id = 'lightbox'
// document.body.appendChild(lightbox)

// const articles = document.querySelectorAll('article')
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
// lightbox.addEventListener('click', e => {
//     if (e.target !== e.currentTarget) return
//     lightbox.classList.remove('active')
// })

// //Giphy
//  let APIKEY = "6qchMslgoViWSmMbZI8Ze39WfzEUHZZW";
//       // you will need to get your own API KEY
//       // https://developers.giphy.com/dashboard/
//       document.addEventListener("DOMContentLoaded", init);
//       function init() {
//         document.getElementById("btnSearch").addEventListener("click", ev => {
//           ev.preventDefault(); //to stop the page reload
//           let url = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&limit=1&q=`;
//           let str = document.getElementById("search").value.trim();
//           url = url.concat(str);
//           console.log(url);
//           fetch(url)
//             .then(response => response.json())
//             .then(content => {
//               //  data, pagination, meta
//               console.log(content.data);
//               console.log("META", content.meta);
//               let fig = document.createElement("figure");
//               let img = document.createElement("img");
//               let fc = document.createElement("figcaption");
//               img.src = content.data[0].images.downsized.url;
//               img.alt = content.data[0].title;
//               fc.textContent = content.data[0].title;
//               fig.appendChild(img);
//               fig.appendChild(fc);
//               let out = document.querySelector(".out");
//               out.insertAdjacentElement("afterbegin", fig);
//               document.querySelector("#search").value = "";
//             })
//             .catch(err => {
//               console.error(err);
//             });
//         });
//       }

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
