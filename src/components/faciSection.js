import {facilities.options} from "../data.js"
import faciArticle from "./faciArticle.js"
import "./faciSection.scss"

console.log(facilities.options)

let faciSection = function() {

    let element = document.createElement('div')
    element.classList.add("article-facilities")

    facilities.forEach(facility => {

    element.append(faciArticle(facility))
    })

    return element
}

export default faciSection