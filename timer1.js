/*

PROBLEM: Implement an alarm clock/timer which will beep after a specified amount of time has passed. The user can specify an unlimited number of alarms using command line arguments

INPUT into Terminal: 
node timer1.js 10 3 5 15 9

*/

const delays = process.argv.slice(2);

const timer1 = function(delays) {
  for (let index of delays) {
    if (index === delays[index]) {
      process.stdout.write('\x07');
      counter = 0; 
    } else {
      setTimeout(() => {
        process.stdout.write('\x07');
      }, (index * 1000));
    }
  }
};

timer1(delays);
