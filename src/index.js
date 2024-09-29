import "./style.css";
import { homeDisplay } from "./home";
import { menuDisplay } from "./menu";
import { contactDisplay } from "./contact";

const homeBtn = document.querySelector(".homeBtn")
const menuBtn = document.querySelector(".menuBtn")
const contactBtn = document.querySelector(".contactBtn")
export const divContent = document.getElementById("content")


homeBtn.addEventListener("click", () => {
    homeDisplay()
})

menuBtn.addEventListener("click", () => {
    menuDisplay()
})

contactBtn.addEventListener("click", () => {
    contactDisplay()
})      

