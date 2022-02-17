//this file creates an object called student and
//assigns it three key/value pairs which each
//represent grades

function createStudent() {
    const student = {};
    return student;
}

function addMathGrade(obj) {
    obj.math = "B";
    return obj;
}

function addHistoryGrade(obj) {
    obj.history = "C";
    return obj;
}

function addScienceGrade(obj) {
    obj.science = "A";
    return obj;
}

const gradedStudent = addScienceGrade(addHistoryGrade(addMathGrade(createStudent())));

console.log(gradedStudent);