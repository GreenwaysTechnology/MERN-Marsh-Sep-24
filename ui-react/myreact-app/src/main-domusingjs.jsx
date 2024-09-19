//dom using plain js

function createDOM() {
    //create H1 object 
    const Heading = document.createElement('h1')
    //set properties on h1
    Heading.innerHTML = 'Hello'
    Heading.style.color = 'red'
    //get container element on which you attach this h1
    const rootElemement = document.getElementById('root')
    //attach Heading with rootEleemtn
    rootElemement.appendChild(Heading)

}
createDOM()
