//your JS code here. If required.
function inc(){
    let p = document.getElementById("counter");
    alert(p.innerText);
    p.innerText = parseInt(p.innerText) + 1;
}

let btn = document.getElementById("incrementBtn");
btn.addEventListener("click",inc)