let gender;
gender = "Male";
gender = "Female";
gender = "Third";
// gender="hello"
function process(id = "", age, gender) {
    console.log(id, age, gender);
}
process("133", 8, "Male");
process(34, 44, "Thrid");
