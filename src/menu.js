import { divContent } from "./index.js";

export function menuDisplay(){

    //remove all content 
    divContent.innerHTML = ""

    for(let i = 0; i < 5; i++){
        //create menuTitle element
        let menuTitle = document.createElement("h1")
        menuTitle.classList.add("menuTitle")
        menuTitle.textContent = "French Toast: $10"
        divContent.append(menuTitle)

        //create position element
        let about = document.createElement("p")
        about.classList.add("about")
        about.textContent = "Two slices of the best french toast you will ever eat, served with our locally sourced maple syrup."
        divContent.append(about)
    }
}