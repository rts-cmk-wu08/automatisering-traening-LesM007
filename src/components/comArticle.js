
let comArticle = function(site) {

    let element = document.createElement('article')
    element.classList.add('com-article')

    element.innerHTML =`
        <img class="com-article__img" src="${site.places}" alt="profileimg">
        <h1 class="com-article__heading">${site.name}</h1>
        <p class="com-article__location">${site.city}</p>
        <a class="com-article__link">View the Site</a>
        `

    return element
}

export default comArticle