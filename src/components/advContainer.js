import advSection from "./advSection.js"
import "./section.scss"

let section = function(){

    fetch("http://localhost:4000/advantages")
        .then(response => response.json())
        .then(data => console.log("json server",data))

    let element = document.createElement('section')
    element.classList.add("adv-section__header")

    element.innerHTML= `
        <h1>Our Advantages</h1>
    `
        element.append(advSection())

        return element
    }

export default section