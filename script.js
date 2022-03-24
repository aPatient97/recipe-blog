let thumbsUpEmoji = document.getElementsByClassName("thumbsUpEmoji");
let thumbsUpInt = document.getElementsByClassName("thumbsUpNumber");

for (let i = 0; i < thumbsUpInt.length; i++) {
  thumbsUpEmoji[i].addEventListener("click", () => {
      let thumbsUpInteger = 0;
      thumbsUpInteger += 1;
      thumbsUpInt[i].innerHTML = thumbsUpInteger;
  });
}


let heartEmoji = document.getElementsByClassName("heartEmoji");
let heartInt = document.getElementsByClassName("heartNumber");

for (let i = 0; i < heartInt.length; i++) {
  heartEmoji[i].addEventListener("click", () => {
    let heartInteger = 0;
    heartInteger += 1;
    heartInt[i].innerHTML = heartInteger;
  });
}


let laughEmoji = document.getElementsByClassName("laughEmoji");
let laughInt = document.getElementsByClassName("laughNumber");

for (let i = 0; i < laughInt.length; i++) {
  laughEmoji[i].addEventListener("click", () => {
    let laughInteger = 0;
    laughInteger += 1;
    laughInt[i].innerHTML = laughInteger;
  });
}

