let name ='Sipuna';
let age=10;
const hashobbies=true;

age =30;
name='abc';
const summarizeUser=(userName,userAge,userHobby)=>{
    return (
        'Name of the user is '+ userName+ ' age is '+userAge+ ' user has hobbies '+userHobby
    );    
}

console.log(summarizeUser(name,age,hashobbies));