//object.create(objectname) creates another object similar like a prototpye

let studen={
    name:"nasir",
    Course:"mern"
}

let cfi=Object.create(studen)
console.log(cfi.name); //key value of studen is created for cfi named object
console.log(cfi.Course);
