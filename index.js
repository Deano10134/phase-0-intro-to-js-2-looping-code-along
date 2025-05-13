// Code your solutions in this file
const writeCards = (names, event) => {
    const messages = []
    for (let i = 0; i < names.length; i++) {
        messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    }
    return messages
}
const countDown = (num) => {
    let i = num
    while (i >= 0) {
        console.log(i)
        i--
    }
}
// Test the functions
const names = ["Alice", "Bob", "Charlie"]
const event = "birthday"
const messages = writeCards(names, event)
console.log(messages)
countDown(10)
// The writeCards function takes an array of names and an event as arguments.
// It returns an array of thank-you messages for each name.
// The countDown function takes a number as an argument and logs a countdown from that number to 0.
// The code uses a for loop in writeCards to iterate over the names array and create messages.
// It uses a while loop in countDown to log the countdown.
// The code is a simple demonstration of using loops in JavaScript.