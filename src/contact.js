import { divContent } from "./index.js";

export function contactDisplay(){

    //create contact element 
    divContent.innerHTML = ""
    let contact = document.createElement("div")
    contact.classList.add("contact")
    contact.textContent = "Manager: 555-555-5555; perfectlyRealEmail@notFake.com"
    divContent.append(contact)
}