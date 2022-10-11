import {sites} from "../data.js"
import comArticle from "./comArticle.js"


console.log(sites.places)

let comSection = function() {

    let element = document.createElement('div')
    element.classList.add("community-article")

    sites.places.forEach(site => {

        element.append(comArticle(site))
        })

    return element
}

export default comSection