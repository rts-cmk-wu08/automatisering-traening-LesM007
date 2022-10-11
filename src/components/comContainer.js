import comSection from "./comSection.js"
import {sites} from "../data.js"

let section = function() {

    let element = document.createElement('section')
    element.classList.add('com-section__header')

    element.innerHTML =`
        <h1>${sites.headline}</h1>
        <p class="com-section__text">${sites.text}</p>
        <a class="com-section__link"><i class="fa-solid fa-play"></i>Start</a>
        `

    element.append(comSection())

    return element
}

export default section