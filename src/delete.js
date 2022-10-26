let element = document.querySelector(".wrapper")
let main = document.createElement("main")

main.innerHTML=`
    <form class="deleteForm">
        <label for="resource">ID som skal slettes: </label>
        <input type="text" name="resource" id="resource">
        <button type="submit">DELETE!</button>
    </form>
    `
let deleteForm = main.querySelector(".deleteForm")

console.log(deleteForm)

element.append(main)