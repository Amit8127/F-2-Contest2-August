const form = document.getElementsByTagName("form")[0];
let x = 0;

let Students = [];
// eventName = "submit"
const table = document.getElementById("table");
form.addEventListener("submit", (event) => {
    event.preventDefault(); // stops the default behavious
    x = x + 1;
    const myname = form["myname"].value; //
    const email = form["email"].value;
    const GPA = form["GPA"].value;
    const Age = form["Age"].value;
    const Degree = form["Degree"].value;
    const tableRow = document.createElement("tr");

    let newStudent = {};

    const id = document.createElement("td");
    id.innerText = x;
    newStudent.id = id.innerText;

    const nameCell = document.createElement("td");
    nameCell.innerText = myname;
    newStudent.name = myname; 

    const emailCell = document.createElement("td");
    emailCell.innerText = email;
    newStudent.email = email;

    const gPACell = document.createElement("td");
    gPACell.innerText = GPA;
    newStudent.gpa = GPA;

    const ageCell = document.createElement("td");
    ageCell.innerText = Age;
    newStudent.age = Age;

    const degreeCell = document.createElement("td");
    degreeCell.innerText = Degree;
    newStudent.degree = Degree;

    // Students.push(newStudent);

    tableRow.append(id, nameCell, emailCell, gPACell, ageCell, degreeCell);
    table.appendChild(tableRow);

    // console.log(Students);
});


