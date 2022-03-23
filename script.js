let thumbsUpAdd = document.getElementById('thumbsUpEmoji')
let thumbsUpInt = document.getElementById('thumbsUpNumber')
let thumbsUpInteger = 0;

let calloncethumbsUp = (function() {
  let executed=false;
  return function() {
      if(!executed) {
          executed = true;
          thumbsUpInteger += 1
          thumbsUpInt.innerHTML = thumbsUpInteger;
      }
  }
})()

thumbsUpEmoji.addEventListener('click', calloncethumbsUp);


let heartAdd = document.getElementById('heartEmoji')
let heartInt = document.getElementById('heartNumber')
let heartInteger = 0;

let callonceheart = (function() {
    let executed=false;
    return function() {
        if(!executed) {
            executed = true;
            heartInteger += 1
            heartInt.innerHTML = heartInteger;
        }
    }
})()

heartEmoji.addEventListener('click', callonceheart);




let laughAdd = document.getElementById('laughEmoji')
let laughInt = document.getElementById('laughNumber')
let laughInteger = 0;

let calloncelaugh = (function() {
    let executed=false;
    return function() {
        if(!executed) {
            executed = true;
            laughInteger += 1
            laughInt.innerHTML = laughInteger;
        }
    }
})()

laughEmoji.addEventListener('click', calloncelaugh);