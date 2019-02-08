import picUrl from "./assets/images/1.jpeg";
import "./assets/css/panel.css";
import "./assets/sass/layout.scss";

console.log(picUrl);

let img = new Image();
img.src = picUrl;
img.onload = function(){
    let imgNode = document.createElement("img");
    imgNode.src = picUrl;
    // document.getElementById("app").appendChild(imgNode);
    $("#app").append(imgNode);
}
