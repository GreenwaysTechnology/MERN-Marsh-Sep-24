//strings

let firstName = "Subramanian"
let lastName = 'Murugan';
console.log(firstName + lastName)
//back tick notation:
//for string concatnation
let fullName = firstName + lastName //old way
fullName = `${firstName} ${lastName}`
console.log("Name " + fullName)
console.log("Name", fullName)
console.log(`Name ${fullName}`)

//multi line strings
let doc = `
   <html>
      <head>
          <title></title>
      </head>
    <body>
    </body>
 </html>
`
console.log(doc)