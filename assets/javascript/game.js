//Functions Needed

random_result = Math.floor(Math.random() * 102)+18;
console.log(random_result)

$("#result").html('Hola! Random Number = ' + random_result);
for (var i = 0; i < 4; i++) {

    var random = Math.floor(Math.random() * 13);
    console.log(random)

    var crystal = $("<div>");
    crystal.attr({
        "class": 'crystal',
        "random-box": random
    });

    $(".fourCrystals").append(crystal);
    console.log("Hola again");
}

var randomNum;
var loss;
var win;







//FUNCTIONS NEEDED-->
//Declare variables needed-->
//Main Number: var randomNum;-->
//Crystal Number 1: var randomNum;-->
//Crystal Number 2: var randomNum;-->
//Crystal Number 3: var randomNum;-->
//Crystal Number 4: var randomNum;-->
//Track Loss: var loss;-->
//Track Win: var win-->
