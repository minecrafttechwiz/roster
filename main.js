function Roster(lastName, firstName) {
	this.lastName = lastName;
	this.firstName = firstName;
	this.print = function() {
		document.write(lastName + ", " + firstName)
		document.write("<br>");
	};
}

var teacher = prompt("Teacher:");
document.write(teacher);
document.write("<br>");
document.write("<br>");

j = prompt("How many students to add to your roster?");
while (j != parseInt(j)) {
	alert("This isn't a number, please try again.")
	j = prompt("How many students to add to your roster?");
}

for (i = 0; i < j; i++) {
	var lastName1 = prompt("Last Name: ");
	var firstName1 = prompt("First Name: ");
	var student = new Roster(lastName1, firstName1);
	student.print();
}
