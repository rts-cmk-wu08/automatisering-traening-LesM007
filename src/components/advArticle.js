
let advArticle = function(advantage) {                  //hele objectet sendes med som argument/data

    let element = document.createElement('article')
    element.classList.add('adv-article')
    element.innerHTML =`
        <img class="adv-article__icon" src="${advantage.icon}" alt="icon">
        <h1 class="adv-article__heading">${advantage.headline}</h1>
        <p class="adv-article__paragraph">${advantage.text}</p>
    `

    return element
}

export default advArticle