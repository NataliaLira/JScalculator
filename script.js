let buttons = document.querySelectorAll(".buttons");
let ceButton = document.querySelector('#ce');
let screen = document.querySelector(".screen-text");

//------------stylizing buttons
for (let i = 0; i < buttons.length; i++) {
    buttons[i].onmouseover = function (){
        //---debugging console.log("mouse_over");
        this.style.border = "solid black 2px";
        if (this == buttons[3]){
            this.style.background = "#831a1a";
        }else{
        this.style.background = "#6d7279";
        }
        this.onmouseout = function (){
            //---debugging console.log("mouse_out");
            this.style.border = "solid #172837 2px";
            if (this == buttons[3]){
                this.style.background = "#a32222";
            }else{
            this.style.background = "#7a8289";
            }
        }
    }
    
    //----calculating
    if (buttons[i].textContent == "="){
        buttons[i].onclick = function (){
        screen.value = eval(screen.value);
        }
    } else if (buttons[i].textContent == "CE"){
        buttons[i].onclick = function (){
        screen.value = "";
        } 
    } else {
        buttons[i].onclick = function (){
        screen.value += this.textContent;    
        }
    }
}