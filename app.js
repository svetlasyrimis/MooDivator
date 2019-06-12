let copiedArray;
let quoteScreen;
let quoteClear;
let timer = new Timer();

const apikey = "a085bc67c698a7064a5818cd2220822d";
axios.defaults.headers.common = { 'Authorization': `Token token=${apikey}` };


let urls = ["https://favqs.com/api/quotes/?filter=attitude&page=2", "https://favqs.com/api/quotes/?filter=goals&page=1", "https://favqs.com/api/quotes/?filter=life&page=1", "https://favqs.com/api/quotes/?filter=perseverance&page=1", "https://favqs.com/api/quotes/?filter=ambition&page=1", "https://favqs.com/api/quotes/?filter=faith&page=1", "https://favqs.com/api/quotes/?filter=future&page=2"];

let amrap = [
  {
    type: "AMRAP",
    instructions: "As many rounds as possible in 20min of:",
    ex: "20 Air Squats, 20 pushups, 20 Sit ups"
  },
  {
    type: "AMRAP",
    instructions: "As many rounds as possible in 12min of:",
    ex: "10 Burpees, 20 Air squats, 10 Burpees, 10 Pike push ups, 10 Burpees, 10 V ups"
  },
  {
    type: "AMRAP",
    instructions: "As many rounds as possible in 20min of:",
    ex: " 30 Air squats, 10 Pull ups, 30 Side lunges, 10 Pike push ups, 10 Knee raises, 30 Medicine ball twists"

  },
  {
    type: "AMRAP",
    instructions: "As many rounds as possible in 20min of:",
    ex: "20 Calorie Row, 20 Kettlebell Swings, 20 Burpees"
  },
  {
    type: "AMRAP",
    instructions: "As many rounds as possible in 20min of:",
    ex: "9 Deadlifts, 12 Burpees, 15 Box Jumps"
  },
  {
    type: "AMRAP",
    instructions: "As many reps as possible in 10min of:",
    ex: "Burpees"
  },
  {
    type: "AMRAP",
    instructions: "As many rounds as possible in 15 min of:",
    ex: "12 Burpees, 12 Thrusters"
  },
  {
    type: "AMRAP",
    instructions: "As many rounds as possible in 20 min of:",
    ex: "15 Squats, 15 Push-ups, 15 Sit-ups"
  },
  {
    type: "AMRAP",
    instructions: "As many rounds as possible in 15 min of:",
    ex: "20 Sit-up, 20 Alternate Lunges, 20 Pull-ups"
  },
  {
    type: "AMRAP",
    instructions: "As many rounds as possible in 20min of:",
    ex: "20 Box Jumps, 20 Dumbell Snatches, 20 Wall Ball Shots"
  }
];

let forTime = [
  {
    type: "For Time",
    instructions: "3 Rounds for Time:",
    ex: "30 Wall Ball Shots, 25 pull-ups, 500m Row"
  },
  {
    type: "For Time",
    instructions: "4 Rounds for Time:",
    ex: "21 deadlifts, 15 Kettlebell Swings, 9 Clean and Jerk"
  },
  {
    type: "For Time",
    instructions: "5 Rounds for Time:",
    ex: "10 Pistols, 15 Toes to Bar , 12 pull-ups"
  },
  {
    type: "For Time",
    instructions: "3 Rounds for Time:",
    ex: "500 m Calorie Row, 15 Burpee Pull-ups, 20 Med Ball Cleans"
  },
  {
    type: "For Time",
    instructions: "4 Rounds for Time:",
    ex: "10 kcal Calorie Row, 20 Double Unders, 15 Burpees"
  },
  {
    type: "For Time",
    instructions: "5 Rounds for Time:",
    ex: "21 bench presses, 15 pull-ups, 400m run"
  },
  {
    type: "For Time",
    instructions: "3 Rounds for Time:",
    ex: "15 cleans, 15 thrusters, 1000m row"
  },
  {
    type: "For Time",
    instructions: "3 Rounds for Time:",
    ex: "12 left-hand Turkish get-ups, 12 right-hand Turkish get-ups, 3 rope climbs (15-ft. rope)"
  },
  {
    type: "For Time",
    instructions: "5 Rounds for Time (choose a moderate/heavy load):",
    ex: "9 deadlifts, 5 squat cleans, 3 thrusters"
  },
  {
    type: "For Time",
    instructions: "3 Rounds for Time",
    ex: "12 Front Squats, 12 One-arm Kettlebel Snatch, 12 Alternating Jumping lunges"
  },
];

let benchmarks = [
  {
    type: `"Annie"`,
    instructions: "As many round as possible in 20 min of:",
    ex: "50 Double Unders, 50 Sit-ups"
  },
  {
    type: `"Karen"`,
    instructions: "For Time: ",
    ex: "150 Wall Ball Shots"
  },
  {
    type: `"Kelly"`,
    instructions: "5 Rounds For Time:",
    ex: "400 meters Run, 30 Box Jump, 30 Wall Ball Shots"
  },
  {
    type: `"Nancy"`,
    instructions: "5 Rounds For Time:",
    ex: "400m Run, 15 Overhead Squats "
  },
  {
    type: `"Isabel"`,
    instructions: "For Time:",
    ex: "30 Snatches (choose a challenging weight) "
  },
  {
    type: `"Grace"`,
    instructions: "For Time:",
    ex: "30 Clean and Jerk (choose a challenging weight)"
  },
  {
    type: `"Fran"`,
    instructions: "For Time (perform the exercises one after another until you complete the prescribed number of rounds.): ",
    ex: "21-15-9 Thrusters & Pull ups"
  },
  {
    type: `"Cindy"`,
    instructions: "As many round as possible in 20 min of:",
    ex: "5 Pull-ups, 10 Push-ups, 15 Air Squats"
  },

];

let mixed = [
  {
    type: "Chipper",
    instructions: "Complete the reps in the order below:",
    ex: "100 Double Unders, 50 Wall balls, 40 Kettlebell Swings, 30 calorie row, 20 burpees, 10 thrusters"
  },
  {
    type: "AMRAP",
    instructions: "Every 5 Minutes, for 4 rounds:",
    ex: "300m Row, 20 Hang Dumbell Snatch and Max Push-ups w/ remaining time"
  },
  {
    type: "For Time",
    instructions: "5 Rounds For Time of:",
    ex: "200m Run, 15 Wall ball Shots,10 Dumbell Snatch, 10 Burpees Over the Bar, 1 Squat Snatch @ 80% 1 rep max."

  },
  {
    type: "AMRAP",
    instructions: "Every 3 Minutes, for 5 rounds:",
    ex: "8 Calorie Assault Bike, 3 Hang Squat Cleans, 6 Front Squats (choose as weight in which can you can complete the reps unbroken)"
  },
  {
    type: "AMRAP",
    instructions: "As many rounds as possible in 10 minutes of:",
    ex: "200m Farmer's Carry, 5 Box Jump Over, 5 Toes to Bar"
  },
  {
    type: "EMOM 15min",
    instructions: "Every Minute on the Minute for 5 rounds:",
    ex: "200m Row, 12 Dumbell Snatch 12 Max Pull-ups"
  },
  {
    type: "EMOM 16 min",
    instructions: "Every Minute on the Minute for 8 Rounds:",
    ex: "8 Deadlifts, 6 Burpees"
  },
  {
    type: "EMOM 15min",
    instructions: "Every Minute on The Minute for 5 rounds:",
    ex: "12 Box Jumps, 14 Kettlebell Swings, 10 Box Step Overs"
  },
  {
    type: "EMOM 10 min",
    instructions: "Every Minute on the Minute for 5 rounds:",
    ex: "15 Squats, 10 Burpees"
  }
];


let workoutDescriptions = {
  "amrap": "AMRAP is abbreviation for 'as many rounds/reps as possible'.The main goal of an AMRAP workout is to do a set list of moves, mostly bodyweight exercises, as many times as you can in a set amount of time.",
  "forTime": "For Time workouts, as the name suggests, are to be performed as fast as possible. Usually they include bodyweight exercises combined with weightlifting and powerlifting components.",
  "benchmarks": "The Crossfit Girls are benchmark workouts designed to take a snapshot of your current fitness level. These workouts are intense,If you are a beginner, we suggest you first try AMRAP category.",
  "mixed": "This category contains a list with a combination of AMRAP, For Time and EMOM workouts. EMOM stands for 'every minute on the minute' and is a type of interval workout where you perform a specific exercise at the start of every minute and the goal is to complete the reps within that minute."

};


const getQuotes = async () => {
  const completeQuotesArray = [];
  // Request all URLs in parallels to get all the data at the same time
  const quotesPromises = await Promise.all(urls.map(url => axios.get(url)));

  // This is the returned array with resolved (or rejected) promise values (array of objects)
  for (const promiseValues of quotesPromises) {
    const quotesArray = promiseValues.data.quotes;
    //collect all the quotes and store them in array
    for (let i = 0; i < quotesArray.length; i++) {
      const quote = quotesArray[i].body;
      if (quote.length < 120) {
        completeQuotesArray.push(quote);
      }
    }
  }
  return completeQuotesArray;
};

//renderQuote function to display a random quote from the list with quotes
const renderQuote = async () => {
  //try and catch - catching the errors if too many API requests are made
  try {
    //collecting the quotes 
    const quotes = await getQuotes();
    //set up the display
    let quoteDisplay = document.getElementById("quoteDisplay");

    quoteDisplay.classList.add("quotes");
    //write a separate function to cycle through the array(initally I had it set up recursion but I realised this is not what I wanted)
    const randomQuote = () => {
      let randomIndex = Math.floor(Math.random() * quotes.length);
      console.log(randomIndex);

      quoteDisplay.innerHTML = `"${quotes[randomIndex]}"`;
    };

    randomQuote();
  } catch (e) {
    console.log(e)
  }

};

//selectWorkout function 
const selectWorkout = () => {
  let workoutDescriptionDiv = document.getElementById('workoutDescription');

  let selectValue = document.getElementById("workoutSelector").value;
  copiedArray = undefined;


  workoutDescriptionDiv.classList.remove("hidden");

  //to switch between workout description and the workout + timer itself by using hidden class 
  let workoutDescription = document.getElementById("workoutType");
  let workoutInstructions = document.getElementById("workoutInstructions");
  let workoutExercise = document.getElementById("workoutExercise");
  let timerContainer = document.getElementById("timerContainer");
  workoutInstructions.classList.add("hidden");
  workoutExercise.classList.add("hidden");
  timerContainer.classList.add("hidden");

  switch (selectValue) {
    case "amrap":
      workoutDescription.innerHTML = workoutDescriptions.amrap;
      break;
    case "forTime":
      workoutDescription.innerHTML = workoutDescriptions.forTime;
      break;
    case "benchmarks":
      workoutDescription.innerHTML = workoutDescriptions.benchmarks;
      break;
    case "mixed":
      workoutDescription.innerHTML = workoutDescriptions.mixed;
      break;
    default:
      workoutDescription.innerHTML = "";
      workoutDescriptionDiv.classList.add("hidden");
      break;
  }
};


const renderWorkout = (workout) => {
  let workoutDescriptionDiv = document.getElementById('workoutDescription');


  if (workout === undefined) {
    workoutDescriptionDiv.classList.add("hidden");
  } else {
    workoutDescriptionDiv.classList.remove("hidden");

    let workoutDescription = document.getElementById("workoutType");
    let workoutInstructions = document.getElementById("workoutInstructions");
    let workoutExercise = document.getElementById("workoutExercise");
    let timerContainer = document.getElementById("timerContainer");

    workoutInstructions.classList.remove("hidden");
    workoutInstructions.style.fontStyle = "oblique";
    workoutInstructions.style.fontWeight = "bold";
    workoutExercise.classList.remove("hidden");
    timerContainer.classList.remove("hidden");

    workoutDescription.innerHTML = workout.type;
    workoutInstructions.innerHTML = workout.instructions;
    workoutDescription.innerHTML += `<hr>`;
    workoutExercise.innerHTML = workout.ex;

    setupTimerButtons();

  }
};


// copying the array and removing from it ensures you will experience all array items and by checking the last item ensures we won't have duplicate items between full loops

// last item to ensure there are no duplicates between runs
let lastItem;
const randomizer = (array) => {
  // copy the array if the array is empty
  if (copiedArray === undefined ||
    copiedArray.length === 0) {
    copiedArray = array.slice();
  }
  // get a random item from the array
  let randomIndex = Math.floor(Math.random() * copiedArray.length);
  let randomItem = copiedArray[randomIndex];

  // if the item is equal to the last item keep looking for a random item
  while (randomItem === lastItem) {
    randomIndex = Math.floor(Math.random() * copiedArray.length);
    randomItem = copiedArray[randomIndex];
  }
  // remove the random item from the copied array
  copiedArray.splice(randomIndex, 1);
  //Assign the value of randomItem to lastItem so we don't have duplicates between full loops
  lastItem = randomItem;
  return randomItem;
};

const generateWorkout = () => {

// reset timer values
  let div = document.getElementById('timerValues');
  div.innerHTML = timer.getTimeValues().toString(['hours', 'minutes', 'seconds', 'secondTenths']);
  

  let selectValue = document.getElementById("workoutSelector").value;

  switch (selectValue) {
    case "amrap":
      renderWorkout(randomizer(amrap));
      break;
    case "forTime":
      renderWorkout(randomizer(forTime));
      break;
    case "benchmarks":
      renderWorkout(randomizer(benchmarks));
      break;
    case "mixed":
      renderWorkout(randomizer(mixed));
      break;

    default:
      renderWorkout(undefined); // will display blank if no switch case is chosen or if the user is selecting a different option
      break;
  }

};

const goButton = document.querySelector("#go-btn");
goButton.addEventListener('click', generateWorkout);


// Reference to EasyTimer jq library -  https://albert-gonzalez.github.io/easytimer.js/
const setupTimerButtons = () => {

  let startTimerBtn = document.getElementById("start");
  let stopTimerBtn = document.getElementById("stop");

  startTimerBtn.addEventListener('click', (e) => {
    timer.stop();
    timer.start({ precision: 'secondTenths' });
    timer.addEventListener('secondTenthsUpdated', function (e) {
      let div = document.getElementById('timerValues');
      div.innerHTML = timer.getTimeValues().toString(['hours', 'minutes', 'seconds', 'secondTenths']);
    });
    // renderQuote();
    // randomQuote();
    window.clearInterval(quoteScreen);
    quoteScreen = window.setInterval(renderQuote, 8000);
  });

  stopTimerBtn.addEventListener('click', (e) => {
    timer.stop();
    quoteClear = window.clearInterval(quoteScreen);
  });


};







