const sentence = "Hi, my name is Marcus and I'm a student at Lighthouse Labs!";

let timer = 0; // timer variable for storing time
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char); // printing each character
  }, timer); // prints first character on delay of timer
  timer += 50; // updates the time between each character by 50ms like in example. 
}
setTimeout(() => {
  process.stdout.write("\n"); // gets rid of pesky command line %
}, timer); // timer used to execute new line at end of for loop. 
  
