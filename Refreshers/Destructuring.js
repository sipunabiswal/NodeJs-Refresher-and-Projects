const Person={
    name: 'Sipuna',
    age:20,
    greet(){
        console.log('Hi i am from Object');
    }
};

//Object destructuring Const {}=Object; .

const {name}=Person;
console.log(name);

const printName=({name})=>{
    console.log('Hi, '+name);
}

printName(Person);

//Array destructuring const[]=Array;

const hobbies=['Coging','Cooking'];

const [hobby1,hobby2]=hobbies;
console.log(hobby1,hobby2);