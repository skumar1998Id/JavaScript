function firstFunction(){
    document.getElementById("something").innerHTML="Function is working"
}

const user = {firstName: 'Santosh', lastName:'Kumar', age: '23', gender: 'Male',
    fullName(){
    return this.firstName + " " + this.lastName
    }
}

function fullName(firstName, lastName) {
    return `${firstName} ${lastName}`
}

function getUserDetails(){
    document.getElementById("user").innerHTML=user.name + " " +user.gender + " " + user.age
    document.getElementById("user").innerHTML=fullName("Santosh", "kumar");

}




