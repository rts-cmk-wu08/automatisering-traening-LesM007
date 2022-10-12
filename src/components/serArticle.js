import serContainer from "./serContainer"

let serArticle = function(service) {

    let element = document.createElement('article')
        element.classList.add('ser-article')
             element.innerHTML =`
            <img class="ser-article__img" src="${service.illustration}" alt="illustration">
            <h1 class="ser-article__heading">${service.headline}</h1>
            <p class="ser-article__text">${service.text}</p>
            <span class="ser-article__link">${service.linktext}</span>
            `

    return element
}

export default serArticle