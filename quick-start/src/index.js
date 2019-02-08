// import _ from "underscore";
// import "./style.css";
// import picUrl from "./assets/1.jpeg";
import printMe from "./scripts/print";

function component() {
    var element = document.createElement("span");
    // element.innerHTML = _([['Hello', 'webpack'], "yeah"]).join(" ");
    element.classList.add("hello");
    return element;
}

function imageComponent() {
    var element = new Image();
    element.src = picUrl;
    element.onload = function(){
        document.getElementsByClassName("copy")[0].appendChild(element);
    }
}

function buttonComponent(){
    var btn = document.createElement("button");
    btn.innerHTML = "click me and check the console";
    btn.onclick = printMe;
    return btn;
}

document.getElementsByClassName("text")[0].appendChild(component());
imageComponent();
document.getElementsByClassName("btn-group")[0].appendChild(buttonComponent());
