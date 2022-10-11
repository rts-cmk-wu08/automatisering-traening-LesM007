import serContainer from "./serContainer"

let serArticle = function(service) {

    let element = document.createElement('article')
        element.classList.add('ser-article')
             element.innerHTML =`
            <img src="${service.illustration}" alt="">
            <h1>${service.headline}</h1>
            <p>${service.text}</p>
            <span>${service.linktext}</span>
            `

    return element
}

export default serArticle