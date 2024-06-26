// class Customer{
//     name;
//     age;
//     address;

//     constructor(name, age, address){
//         this.name = name;
//         this.age = age;
//         this.address = address;
//     }

//     getName(){
//         return this.name;
//     }
// }

// let customer01 = new Customer("Eshan", 17, "Kegalle");

// console.log(customer01.getName());

let randomNumber = Math.floor((Math.random()*10)+1);
console.log(randomNumber);
function clickOnAction() {
    let number = Number(document.getElementById("number").value);
    let output = document.getElementById("output");

    let greater = number - randomNumber;
    let lesser = randomNumber - number;

    if (number==randomNumber) {
        output.innerHTML="You Won!";
    }else if(number > randomNumber) {
        output.innerHTML = "Greater Than "+greater;
    }else{
        output.innerHTML = "Less Than "+lesser;
    }
}