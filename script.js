let buttons = document.querySelectorAll(".buttons");
let ceButton = document.querySelector('#ce');
let screen = document.querySelector(".screen-text");

for (let i = 0; i < buttons.length; i++) {
    buttons[i].onmouseover = function (){
        console.log("funfou");
        this.style.border = "solid black 2px";
        if (this == buttons[3]){
            this.style.background = "#831a1a";
        }else{
        this.style.background = "#6d7279";
        }
        this.onmouseout = function (){
            console.log("aeeeee rapaziada");
            this.style.border = "solid #172837 2px";
            if (this == buttons[3]){
                this.style.background = "#a32222";
            }else{
            this.style.background = "#7a8289";
            }
        }

    }
    buttons[i].onclick = function (){
        console.log("funfou");
        screen.append(this.innerText);    
    }
}


