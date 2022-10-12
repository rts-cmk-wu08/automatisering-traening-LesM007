import {services} from "../data.js"
import serArticle from "./serArticle.js"

//console.log(services)

let serContainer = function() {

    let element = document.createElement('section')
    element.classList.add('services-section')

    services.forEach(service => {
        //console.log(service)
        element.append(serArticle(service))
        })

    return element
}

export default serContainer