import "./index.css";
import html from "./part.html";

const galleryNode = document.createElement("div");
galleryNode.className = "gallery";
galleryNode.innerHTML = html;
document.body.appendChild(galleryNode)
