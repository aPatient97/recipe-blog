//commentbox
const HDC_EL = {
    comment: document.getElementById("hdc_comment_input"),
    reactions: document.getElementsByClassName("hdc_reaction"),
    submit: document.getElementById("hdc_submit"),
};

let canSubmit = false;
let reaction = null;

function hdc_submit(){
    if(canSubmit){
        let comment = {
            comment : HDC_EL.comment.value.trim(),
            reaction : reaction
        };
        console.log(comment)
        hdc_disable_submit();
    }
}

function hdc_can_submit(){
    let comment = HDC_EL.comment.value.trim();
    if(comment.length>4){
        HDC_EL.submit.classList.add("hdc_submit_enabled");
        HDC_EL.submit.disabled = false;
        canSubmit = true
    } else {
        hdc_disable_submit()
    }
}

function hdc_disable_submit(){
    HDC_EL.submit.classList.remove("hdc_submit_enabled");
    HDC_EL.submit.disabled = true;
    canSubmit = false;
}

function hdc_select_reaction(){
    reaction = this.getAttribute("data-reaction");
    let prev = document.getElementsByClassName("hdc_reaction_selected")[0];
    if (prev){
        prev.classList.remove("hdc_reaction_selected")
    }
    this.classList.add("hdc_reaction_selected")
}


function hdc_set_event_lisiteners(){
    HDC_EL.submit.addEventListener("click",hdc_submit)
    HDC_EL.comment.addEventListener("keyup",hdc_can_submit);
    for (let i = 0; i < HDC_EL.reactions.length; i++){
        HDC_EL.reactions[i].addEventListener("click", hdc_select_reaction);
    }
}

hdc_set_event_lisiteners();



//Giphy
let APIKEY = "6qchMslgoViWSmMbZI8Ze39WfzEUHZZW";
// you will need to get your own API KEY
// https://developers.giphy.com/dashboard/
document.addEventListener("DOMContentLoaded", init);
function init() {
  document.getElementById("btnSearch").addEventListener("click", ev => {
    ev.preventDefault(); //to stop the page reload
    let url = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&limit=1&q=`;
    let str = document.getElementById("search").value.trim();
    url = url.concat(str);
    console.log(url);
    fetch(url)
      .then(response => response.json())
      .then(content => {
        //  data, pagination, meta
        console.log(content.data);
        console.log("META", content.meta);
        let fig = document.createElement("figure");
        let img = document.createElement("img");
        let fc = document.createElement("figcaption");
        img.src = content.data[0].images.downsized.url;
        img.alt = content.data[0].title;
        fc.textContent = content.data[0].title;
        fig.appendChild(img);
        fig.appendChild(fc);
        let out = document.querySelector(".out");
        out.insertAdjacentElement("afterbegin", fig);
        document.querySelector("#search").value = "";
      })
      .catch(err => {
        console.error(err);
      });
  });
}
