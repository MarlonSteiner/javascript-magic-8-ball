// Enter Username
let userName = 'Stefan';

// Print Introduction
userName ? console.log(`Hello ${userName}!`)
  : console.log('Hello!');

const userQuestion = 'What is the meaning of life?';
console.log(`${userName} asked ${userQuestion}`);

let randomNumber = Math.floor(Math.random() * 8);

let eightBall = '';

switch (randomNumber)
{
  case 0:
    console.log(`${randomNumber}: It is certain`);
    break;
  case 1:
    console.log(`${randomNumber}: It is decidedly so`);
    break;
  case 2:
    console.log(`${randomNumber}: Reply hazy try again`);
    break;
  case 3:
    console.log(`${randomNumber}: Cannot predict now`);
    break;
  case 4:
    console.log(`${randomNumber}: Do not count on it`);
    break;
  case 5:
    console.log(`${randomNumber}: My sources say no`);
    break;
  case 6:
    console.log(`${randomNumber}: Outlook not so good`);
    break;
  case 7:
    console.log(`${randomNumber}: Signs point to yes`);
    break;
  case 8:
    console.log(`${randomNumber}: Talk to the hand`);
    break;
}
