const Person={
    name: 'Sipuna',
    age:20,
    greet(){
        console.log('Hi i am from Object');
    }
};

//working with object
//console.log(Person);
//Person.greet();

const hobbies=['Cricket', 'Coding', 'Cooking'];
//Simple way to retrive the value

for(let h of hobbies){
    console.log(h);
}

hobbies.push('Swiming');

//Map : Map basically creates an edited array
console.log(hobbies.map(h=>'Hobby: '+ h));
console.log(hobbies);

//Spread and rest
const copiedHobbies=[...hobbies,'Drawing'];//Spread: will pull out the values from array and copies into an new array with new value.
console.log(copiedHobbies);


const toArray=(...args)=>{////Rest, Will merge elements into array from arguments.
    return args;
}

console.log(toArray(1,2,3,4,5));