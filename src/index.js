import faciContainer from "./components/faciContainer.js"
import comContainer from "./components/comContainer.js"
import advContainer from "./components/advContainer.js"
import serContainer from "./components/serContainer.js"


let element = document.querySelector(".wrapper")
let header = document.createElement("header")
let main = document.createElement("main")
element.append(main)
main.append(serContainer(), faciContainer(), comContainer(), advContainer())
