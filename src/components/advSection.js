import {advantages} from "../data.js"
import advArticle from "./advArticle.js"
import "./advSection.scss"

//console.log(advantages)

let advSection = function() {

    let element = document.createElement('div')
    element.classList.add("article-advantages")

    advantages.forEach(advantage => {
        //console.log(advantage)

        element.append(advArticle(advantage))   //advantage sender hele object indholdet med
        })
    return element
}

export default advSection