

//pure function or not : impure function
// function updateProfile(profile, city) {
//     //update 
//     profile.city = city
//     return profile
// }

//apply immutablity logic: create new object every time whenever you change the data.

function updateProfile(profile, city) {
    //create new object every time ; there are many ways
    // //way 1
    // return {
    //     name: profile.name,
    //     city: city
    // }
    //way 2:
    // return Object.assign({}, profile, { city: city })

    //way 3:
    return { ...profile, city: city }
}
let profile = {
    name: 'subramaian',
    city: 'chennai'
}

console.log('Before Update', profile)
const result = updateProfile(profile, 'coimbatore')
//test whether pure or not
console.log(profile === result ? "Same Object" : "Different Object")
console.log('After update', result)