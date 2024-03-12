// 36. T-Shirt: Write a function called make_shirt() that accepts a size and the
// text of a message that should be printed on the shirt. The function should print
// a sentence summarizing the size of the shirt and the message printed on it.
// Call the function.
// solution=>
// function make_shirt(size: string, message: string): void {
//     console.log(`A ${size}-sized shirt will be printed with the message: "${message}".`);
// }
// // Call the function
// make_shirt('Large', 'Hello, World!');
function makeShirt(size, message) {
    console.log("A ".concat(size, "-sized shirt will be printed with the message: \"").concat(message, "\"."));
}
// call the function:
makeShirt("large", "Hasnain Abass");
