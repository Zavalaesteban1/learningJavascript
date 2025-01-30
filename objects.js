// Objects, Dictionaries, and Associative Arrays


let computer =
{
    cpu: 'xxxXXxxx',
    gpu: 'fastTown',
    ram: '420GB'
};

// object vs. associative array notation
// Associative array notation 
console.log(computer['ram']);

// Object notation
console.log(computer.ram);
console.log();

// object 
computer.cpu = 'xxXXxx';
computer['cpu'] = 'xXx';
console.log(computer.notthere);
console.log();
computer.something = [17, 2, 3];

// object notation
console.log(`${(computer.something)}`);

// array notation
console.log(`${(computer['gpu'])}`);

console.log();

// for loops

// for in
console.log("for...in loop");
console.log();
for(let e in computer)
{
    console.log(e);
}

console.log();
// for of
console.log("for...of loop for object notation");
console.log();
// Using Object.values()
console.log("for...of loop with values");
for(let e of Object.values(computer)) {
    console.log(`${(e)}`);
}
console.log();
// Using Object.keys()
console.log("for...of loop with keys");
for(let e of Object.keys(computer)) {
    console.log(e);
}
// Outputs/shows the keys of an object
console.log(Object.keys(computer));
// Outputs/shows the values of an object
console.log(Object.values(computer));
// Outputs the whole list of objects
console.log(Object.entries(computer));