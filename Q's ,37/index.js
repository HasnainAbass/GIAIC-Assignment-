// 37. Large Shirts: Modify the make_shirt() function so that shirts are large
// by default with a message that reads I love TypeScript. Make a large shirt and a
// medium shirt with the default message, and a shirt of any size with a different
// message.
// solution=>
function makeShirt(size, message) {
    if (size === void 0) { size = "Large"; }
    if (message === void 0) { message = "I Love typescript"; }
    console.log("A ".concat(size, "-sized shirt will be printed with the message: \"").concat(message, "\"."));
}
// Large shirt with a default message:
makeShirt();
// medium shirt with a default message:
makeShirt("medium");
// Create a shirt of any size with a different message:
makeShirt("small", "typescrit is awesome!");
