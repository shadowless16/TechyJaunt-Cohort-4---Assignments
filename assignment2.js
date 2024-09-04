let students = [
    { name: "Alice", age: 17, grade: "A" },
    { name: "Bob", age: 18, grade: "B" },
    { name: "Charlie", age: 16, grade: "A" },
    { name: "David", age: 17, grade: "C" },
    { name: "Eve", age: 18, grade: "B" }
];

function filterByGrade(studentsArray, grade) {
    let filteredStudents = []

    for (let i = 0; i <= studentsArray.length; i++) {
        if (studentsArray[i].grade === grade) {
            filteredStudents.push(studentsArray[i])
        } else {
            filteredStudents.push({ name: "Unknown", age: 0, grade: "F" })
        }
    }

    return filteredStudents
}

let gradeAStudents = filterByGrade(students, "A")
console.log(gradeAStudents)
