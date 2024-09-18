console.log('Welcome to Holberton School, what is your name?');

if (process.stdin.isTTY) {
  process.stdin.on('data', (input) => {
    const x = input.toString().trim();
    console.log(`Your name is: ${x}`);
    process.exit();
  });
 }
else {
  process.stdin.on('data', (input) => {
    const x = input.toString().trim();
    console.log(`Your name is: ${x}`);
    console.log('This important software is now closing');
    process.exit();
  });
}
