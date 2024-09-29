import { divContent } from "./index.js";

export function homeDisplay(){
    //Remove all content
    divContent.innerHTML = ""

    //Create title
    let barTitle = document.createElement("div")
    barTitle.classList.add("barTitle")
    barTitle.textContent = "Beary's Breakfast Bar"
    divContent.append(barTitle)

    //Create bar review
    let barReview = document.createElement("div")
    barReview.classList.add("barReview")
    barReview.textContent = "Beary's has the best porridge! The atmosphere and customer service make you feel like you are sitting in the middle of the woods, eating like a bear! This is exactly the kind of place that I like to return to again and again. Goldilocks"
    divContent.append(barReview)

    //Create bar hours
    let barHours = document.createElement("div")
    barHours.classList.add("barHours")
    barHours.textContent = `
        Sunday: 8am - 8pm

        Monday: 6am - 6pm

        Tuesday: 6am - 6pm

        Wednesday: 6am - 6pm

        Thursday: 6am - 10pm

        Friday: 6am - 10pm

        Saturday: 8am - 10pm`
    divContent.append(barHours)

    //Create bar location
    let barLocation = document.createElement("div")
    barLocation.classList.add("barLocation")
    barLocation.textContent = "Location: 123 Forest Drive, Forestville, Maine"
    divContent.append(barLocation)
}