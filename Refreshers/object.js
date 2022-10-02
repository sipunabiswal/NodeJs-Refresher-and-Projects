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

//Map : Map basically creates an edited array

console.log(hobbies.map(h=>'Hobby: '+ h));
console.log(hobbies);

