let students=["Elen","Sam","Piolo","Dingdong","Pia","Barbie","Jessie","Luis","Robi","Marian"];

//loop
for(let i=0;i<students.length;i++){
    console.log(students[i]);
}

//or
for(let i in students){
    console.log(students[i]);
}

//remove
students.splice(8,1);
console.log(students);

//indexOf
let result=students.indexOf("Pia");
console.log(result);


//Add a new student
students.push("Fey");
console.log(students)

//return girls 
const girls=["Elen","Pia","Barbie","Jessie","Marian"]
const boys=["Sam","Piolo","Dingdong","Luis","Robi"]

const student=girls.concat(boys)
console.log(student)