let buttons = document.querySelectorAll(".buttons");
let screen = document.querySelector(".screen-text");

for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function (){
        console.log("funfou");
        screen.append(this.innerText);    
    }
}
