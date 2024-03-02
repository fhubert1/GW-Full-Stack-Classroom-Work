// WRITE YOUR CODE HERE
/* initialize and load array with sample student names */
let myStudents = ["Fred", "Josie", "Khalil", "Anu"];

/* log number of students to console */
console.log("The number of students: " + myStudents.length);

/* loop thru array printing each student name */
for (let x = 0; x < myStudents.length; x++) {
    console.log("Welcome to the class, " + myStudents[x]);
}

/* replace first student name */
let newStudent = "Daniel";
myStudents[0] = newStudent;

/* check students list to make sure new student added */
if (myStudents[0] == newStudent) {
    console.log(myStudents[0] + " is in class");
} else {
    console.log(newStudent + " is not in class");
}

console.log(myStudents);



