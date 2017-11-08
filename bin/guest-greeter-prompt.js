#!/usr/bin/env node

var readline = require('readline');
var guestGreeter = require('../app/guest-greeter.js');

const read = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var companyQ = 'Press ENTER for "The Heartbreak Hotel" or enter a company name:  ';

var guestQ = 'Press ENTER for "Preston" or search for a guest\'s first or last name:   ';

var messageQ = '\nPress ENTER to use the predefined message, or enter a custom message.\n\nUsage: Exactly as written, place the placeholders [FIRSTNAME], [COMPANY], and [ROOMNUMBER] where you want those words to appear in your message (the program will replace them with the right information).\n\nEnter your message:  ';

read.question(companyQ, function(answer1) {
  var input1 = (answer1 == '' ? 'The Heartbreak Hotel' : answer1);
  try {
    var companyA = guestGreeter.selectCompany(input1);
  }
  catch(err) {
    console.log('There was a problem...\n' + err);
    process.exit();
  }

  read.question(guestQ, function(answer2) {
    var input2 = (answer2 == '' ? 'Preston' : answer2);
    try {
      var guestA = guestGreeter.findGuest(input2)
    }
    catch(err) {
      console.log('There was a problem...\n' + err);
      process.exit();
    }

    read.question(messageQ, function(answer3) {
      var messageA = answer3;

      read.close();

      console.log('\nFinal message:\n----------------------'); console.log(guestGreeter.fillInTheBlanks(guestA, companyA, messageA));
      console.log('----------------------');
    });
  });
});
