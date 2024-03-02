// WRITE YOUR CODE HERE
/* initialize and load array with sample student names */
let students = ["Josie", "Anu", "Shandy", "Preston", "Sam"];

/* log number of students to console */
console.log("The number of students: " + students.length);

/* loop thru array printing each student name */
for (let x = 0; x < students.length; x++) {
    console.log("Great to see you, " + students[x]);
}

/* use for-of loop to print greeting to each student */
console.log("use for-of");
for (let student of students) {
    console.log("Great to see you, " + student);
}





