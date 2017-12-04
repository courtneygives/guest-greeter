# Guest Greeter (V2)

## Instructions
- You need Node (say that five times fast), and NPM. Then, `npm install`
- Run the tests: `npm test`
- Use the CLI: `npm run greet`

## Design
This is a command line interface app built as a coding challenge. I ported version one, then version two from a private repository elsewhere. The app reads hotel guest information from a json file, and prints a greeting message using their data.

## Wishlist for this app
- Improve the search capability to be smarter: be insensitive to case, and allow for partial word matches
- Take the timezone of the hotel into account when choosing a greeting (currently it converts to the local time of the computer). UTC would probably work well.
- Write tests for the CLI portion
- Change CLI callbacks to be promises
