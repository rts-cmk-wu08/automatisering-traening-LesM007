import {facilities.headline} from ".../data.js"
import faciSection from "./faciSection.js"

let section = function(facilities) {

let element = document.createElement('section')
element.classList.add("faci-section__header")

element.innerHTML =`
    <h1>${facilities.headline}</h1>
    `

    element.append(faciSection())

return element
}

export default section