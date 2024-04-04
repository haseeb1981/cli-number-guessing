import inquirer from "inquirer";
// 1) computer will  generate a random number 
// 2) user input  for guesseing number
// 3) campare  user input with computer generated number and show result - done

const randomNumber = Math.floor(Math.random() * 6 + 1);

const answer = await inquirer.prompt([
    { 
        name: "userGuessedNumber" ,
        type: "number",
        message: " Please guess a number between 1-6:",
    },

]);
 if(answer.userGuessedNumber === randomNumber){
console.log("Congtratulation! you gassed right number.");
 }else{
console.log("you gassed wrong number");
 }