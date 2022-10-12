import advSection from "./advSection.js"
import "./section.scss"

let section = function(){

    let element = document.createElement('section')
    element.classList.add("adv-section__header")

    element.innerHTML= `
        <h1>Our Advantages</h1>
    `
        element.append(advSection())

        return element
    }

export default section