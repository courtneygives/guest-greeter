# Guest Greeter (V2)

## Instructions
- You need Node (say that five times fast), and NPM. Then, `npm install`
- Run the tests: `npm test`
- Use the CLI: `npm run greet`

## Design
The design has been streamlined and simplified. Tests and code have been separated into more files for legibility and maintainability. I originally added a 'Guest' class/object with methods, but found it to be unnecessary in this situation. It currently has a Message object and a Search object, and the CLI ties it all together.

## Language
Despite learning Java pretty recently and talking to you folks about it, I am using Node.JS for this app. Java may have been a better choice, but I was ready to go with Node, having done a little unit testing with Mocha/Chai.js with Node in the past.

## Tests
The goal for this project was to use BDD practices. The 'pending' tests you see serve as something of a wishlist for the app-- the things that there wasn't time for.

## Wishlist for this app
- Improve the search capability to be smarter: be insensitive to case, and allow for partial word matches
- Take the timezone of the hotel into account when choosing a greeting (currently it converts to the local time of the computer). UTC would probably work well.
- Write tests for the CLI portion
- Change CLI callbacks to be promises
