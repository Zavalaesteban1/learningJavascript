// Destructuring bind

let [a, b] = [15, 21, 32];
console.log(b);

let [c, [d, e]] = [15, [16, 'a', 'b'], 17];
console.log(e);


// using it on an object
let computer =
{
    cpu: 'xxxXXxxx',
    gpu: 'fastTown',
    ram: '420GB'
};

let {ram, gpu} = computer;
console.log(ram)
console.log(gpu);


function minMax(a)
{
    let min = 1;
    let max = 25; 

    return {min: min, max: max};
}

// you can send a whole arrary into the min max function just by putting it in there
let result = minMax([4, 5, 3, 420, 69]);
let {min, max} = minMax([3, 3, 2, 4,2 ]);

console.log(min);


function mock(gpu)
{
    console.log("your gpa is cool");
}

mock(computer.gpu);


//greatest syntax to maniuplate data in javascript
let colors = ['red', 'yellow', 'blue'];
let better_colers = [...colors, 'green', 'purple'];
console.log(better_colers);
let special_computer = {...computer, ram: '64GB', nic: '100GB'};
console.log(special_computer);