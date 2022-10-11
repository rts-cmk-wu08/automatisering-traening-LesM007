
let faciArticle = function(facility) {

    let element = document.createElement('article')
    element.classList.add('faci-article')

    element.innerHTML=`
        <img class="faci-article__icon"src="${facility.icon}" alt="icon">
        <h1 class="faci-article__heading">${facility.headline}</h1>
        <p class="faci-article__text">${facility.text}</p>
        <span class="faci-article__link">Show me more</span>
        `

    return element
}

export default faciArticle

