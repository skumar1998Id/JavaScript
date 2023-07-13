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

const globalList = ["A","B","C","E","F","D"]
const numericList = [10,20,40,90,120,19]
function getSizeOfArray(){
    const list = ["A","B","D","C"]
    const list1 = ["E","F","G"]
    const list2 = list.concat(list1)
    console.log('Length : ' + list.length)
    console.log('To String : ' + list.toString())
    console.log('Pop : ' + list.pop())
    console.log(list)
    console.log('Push : ' + list.push("E"))
    console.log(list)
    console.log('Sift : ' + list.shift())
    console.log(list)
    console.log('Unshift : ' + list.unshift("1"))
    console.log(list)
    console.log('Append to List : ', list[list.length] = "2")
    console.log(list)
    console.log('Concat : ' + list2)
    console.log(list2.splice(7,0,"H","I","J"))
    /*The first parameter (7) defines the position where new elements should be added (spliced in).
    The second parameter (0) defines how many elements should be removed.
    The rest of the parameters ("H","I","J") define the new elements to be added.
    The splice() method returns an array with the deleted items*/
    console.log('splice : ', list2)
    const slicedList=list.slice(1)
    console.log('slice : ', slicedList)
}

function getSortArray(){
    console.log('sort : ', globalList.sort())
    console.log('reverse : ', globalList.reverse())
    console.log('Numeric Sort', numericList.sort(function (a,b){return a-b}))

}

function mapFunction(mapList){
    const flatMappedList = numericList.flatMap(m => m*2)
    console.log('flatMap: ', flatMappedList)
    return mapList * 2
}
const mapList = numericList.map(mapFunction)

console.log(mapList)

function forInObj(){
    const person = {name :'Santosh',age: '23'}
    let details ='';
    for (let p in person){
        details += person[p]
    }
    console.log(details)
}
const numbers = [1,2,3,4]
function forInArray(){
    let arrayNumber ='';
    for (let num in numbers){
        arrayNumber += numbers[num]
    }
    console.log(arrayNumber)
}

const points = [1,4,5,6]
let txt = "";
function arrayForEach(points){
    txt += points ;
}
points.forEach(arrayForEach);
console.log(txt)






