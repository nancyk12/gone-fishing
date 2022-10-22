const prompt = require('prompt-sync')();

// review todo cli app
// for foundational code!

//define variables for keeping track of total time/weight/value of fish caught
let current_time = 6; // 6 am
let total_weight = 0; // in lbs
let total_value = 0; 
let max_weight = 10;
let max_time = 12; // 12 pm (12:01 pm)
let caught_fish = [];

//print welcome message, calling the  function
welcomeMessage();


// put the next lines in a while loop 
// after each catch or releas, increment the current_time by 1 until we get to 12 pm
// then exit the program.
while(current_time <= max_time){

  //print current status of fish caught, total weight and total value;
  printTotals(current_time, total_weight, total_value, caught_fish);

  const fish = generateRandomFish();
  console.log(`You caught a ${fish.name} weighing ${fish.weight} lbs with a value of $${fish.value}!`);
  const response = catchOrRelease();

  //if catch
  if (response == "c") {

        if(fish.weight < max_weight){
          caught_fish.push(fish);
          total_weight += fish.weight;
          total_value  += fish.value;
        }

  // if release  
  }else if (response == "r") {

  }else {
    console.log("please enter a valid response! c or r");
  }
  console.log("\n==========================================\n");
  current_time += 1;


// if keeps fish , make sure the lbs don't exceed 10 and add the totals above i.e.

}



function printTotals(curr_time, weight, value, fish){
  console.log(`The time is ${curr_time}:00am. So far you've caught: ${fish.length} fish, ${weight} lbs, $${value}`);
}

// defining the function welcomeMessage
function welcomeMessage() {

console.log("You've gone fishing! Try to maximize the value of your caught fish."); 
console.log("You can fish for six hours (till 12:00pm) and can catch at most 10 lbs of fish.\n");
console.log("==========================================\n");

}
//defining function generateRandomFish
function generateRandomFish() {
    let fish = {};

    //generate random fish arrays (modify to your liking)
    let fish_adjs = ["blue","green", "pink"]; //adjectives
    let fish_adjs_2 = ["slimey", "scaley"]; // secondary adjectives
    let fish_types = ["bass","mackerel","catfish", "crown fish"]; //fishes
    
    //generate random fish name using arrays above
    let random_fish_adj = fish_adjs[getRandInt(fish_adjs.length)];
    let random_fish_adj2 = fish_adjs_2[getRandInt(fish_adjs_2.length)];
    let random_fish_type = fish_types[getRandInt(fish_types.length)]
    let fish_name =  random_fish_adj + "-" + random_fish_adj2 + "-" + random_fish_type;


    //generate random weight in lb (Math.Random() might help you here) 
    let random_weight = getRandInt(1000) / 100;
    let random_value = getRandInt(1000) / 100;
    //generate random value in $ 

    //update fish object with name
    fish.name = fish_name;

    //update fish.weight with weight
    fish.weight = random_weight;

    //update fish.value with value.
    fish.value  = random_value;

    return fish;

}

function catchOrRelease(){
  console.log("Your action: [c]atch or [r]elease?");
  return prompt(">");
}

// defininf function getRandInt
function getRandInt(max) {
    return Math.floor(Math.random() * max);
  }