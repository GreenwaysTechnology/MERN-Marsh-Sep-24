//i want to use lodash lib
const _ = require('lodash')

//start using lib

function main() {
    const res = _.partition([1, 2, 3, 4], n => n % 2);
    console.log(res)
}
main()