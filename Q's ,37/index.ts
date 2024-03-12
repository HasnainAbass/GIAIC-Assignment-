// 37. Large Shirts: Modify the make_shirt() function so that shirts are large
// by default with a message that reads I love TypeScript. Make a large shirt and a
// medium shirt with the default message, and a shirt of any size with a different
// message.

// solution=>


function makeShirt(size:string = "Large",message:string = "I Love typescript"){
console.log(`A ${size}-sized shirt will be printed with the message: "${message}".`);
}
 
// Large shirt with a default message:
makeShirt();

// medium shirt with a default message:
makeShirt("medium");

 // Create a shirt of any size with a different message:
 makeShirt("small","typescrit is awesome!");
 