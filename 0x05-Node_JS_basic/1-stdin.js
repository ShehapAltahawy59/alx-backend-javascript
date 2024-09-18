console.log('Welcome to Holberton School, what is your name?');
process.stdin.on("data",(input) => {
    const x = input.toString().trim();
    console.log(`Your name is: ${x}`);
    console.log('This important software is now closing');
    process.exit();
})
