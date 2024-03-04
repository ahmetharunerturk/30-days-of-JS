var personal = {
    firstName: "John",
    lastName: "Doe",
    age: 25,
    country: "USA",
    city: "New York"
};
  
localStorage.setItem("personal", JSON.stringify(personal));

var student = {
    name: "X",
    surname: "Y",
    age: 20,
    skills: ["JavaScript", "HTML", "CSS"],
    country: "Canada",
};
  
localStorage.setItem("studentInfo", JSON.stringify(student));
console.log(localStorage);