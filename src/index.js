import faciContainer from "./components/faciContainer.js"
import comContainer from "./components/comContainer.js"
import advContainer from "./components/advContainer.js"


let element = document.querySelector(".wrapper")
element.append(faciContainer())
element.append(comContainer())
element.append(advContainer())
