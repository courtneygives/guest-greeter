#!/usr/bin/env node

var readline = require('readline');
var Message = require('../app/Message.js');
var Search = require('../app/Search.js');

const read = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var guestResult = {};
var companyResult = null;
var messageResult = null;

// TODO:
// callback hell ---> move to promises
// prompt tests

read.question("\n1. Press ENTER for 'The Heartbreak Hotel' or enter a company name:  ", (input) => {

  var companyInput = (input == '' ? 'The Heartbreak Hotel' : input);

  try {
    companyResult = Search.searchCompany(companyInput);
    console.log('-----> Selecting company:   ' + companyResult);
  }
  catch(err) {
    console.log('There was a problem...\n' + err);
    process.exit();
  }

  read.question("\n2. Press ENTER for 'Preston' or search for a guest's first or last name:   ", (input) => {

    var guestSearchInput = (input == '' ? 'Preston' : input);

    try {
      guestResult = Search.searchGuest(guestSearchInput);
      // returns a whole Guests object
      console.log('-----> Selecting guest:   ' + guestResult.firstName + ' ' + guestResult.lastName);
    }
    catch(err) {
      console.log('There was a problem...\n' + err);
      process.exit();
    }

    read.question("\n3. USAGE: Use the following '[X]' placeholders inside your message.\n[N] = guest's first name\n[C] = hotel name\n[R] = room number\nPress ENTER to use the predefined message, or create a custom message:\n", (input) => {

      try {
        messageResult = input;
        var message = new Message(guestResult, companyResult, messageResult);

        read.close();

        console.log('\nFinal message:\n----------------------');
        console.log(message.generateMessage());
        console.log('----------------------');
      }
      catch(err) {
        console.log('There was a problem...\n' + err);
        process.exit();
      }

    });
  });
});
