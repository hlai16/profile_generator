const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// question = {
//   1: rl.question('What\'s your name? Nicknames are also acceptable :) ', (answer) => {
//     console.log(`Hello ${answer}`);

//     rl.close();
//   }),

//   2: rl.question('What\'s an activity you like doing? ', (answer) => {
//     console.log(`Cool! ${answer} is my favorite activity too :)`);

//     rl.close();
//   })
// }
rl.question('What\'s your name? Nicknames are also acceptable :) ', (answer) => {
  console.log(`Hello ${answer}`);

  rl.question('What\'s an activity you like doing? ', (answer) => {
    console.log(`Cool! ${answer} is my favorite activity too :)`);

    rl.question('What do you listen to while doing that?', (answer) => {
      console.log(`${answer} is a good taste of music choice 😁`);
    
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.)', (answer) => {
        console.log(`${answer} is an essential meal 😋`);
      
        rl.question('What\'s your favourite thing to eat for that meal?', (answer) => {
          console.log(`${answer} is my favorite food too! 😋`);

          rl.question('Which sport is your absolute favourite?', (answer) => {
            console.log(`We should have a ${answer} match together. 😎`);
          
            rl.question('What is your superpower? In a few words, tell us what you are amazing at!', (answer) => {
              console.log(`${answer} is such a cool superpower!! 🦹‍♀️`);
            
              rl.close();
            });
          });
        });
      });
    });
  });
  
});






