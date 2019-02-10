// 先加载css文件
import "./assets/css/font.css";
// 插入一个icon字体图标
const iconNode = document.createElement("i");
iconNode.classList.add("iconfont");
iconNode.classList.add("icon-xiangji");
document.body.appendChild(iconNode);

// 再插入一张图片DOM节点
const postUrl = require("./assets/images/1.jpeg");
const imgNode = document.createElement("img");
imgNode.src = postUrl;
imgNode.onload = function () {
    document.body.appendChild(imgNode);
}
