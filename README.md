# Moodifier
## GA Project 1

**_MooDivator_** is a web app that generates a random CrossFit workout for the user and helps him/her to get through the intense Crossfit workout by displaying random motivational quotes using FavQs API. **_Moodifier_**'s main goal is to deliver unique user experience by generating  random empowering quotes that should encourage maximum physical performance.

## Features: 
1. **Dropdown Select menu** to choose a type of workout.
2. **GO button** to generate a truly random workout from the selected type.
3. **Timer**(with milliseconds) to keep track of the time while user is doing the workout.
4. **Quotes** appearing on the screen once the timer is started on a set interval of 1min or less.

## Technologies: HTML, CSS, Javascript, AJAX
### EasyTimer.js library - https://albert-gonzalez.github.io/easytimer.js/ 


## Stretch goals: 
1. Feature to save completed workouts to user's browser.
2. Adding a second API to generate images along with the quotes.

### 06/13/2019 

## Approach 
I hardcoded all data(workouts) as objects in different arrays based on workout type. Along with that I built a different array with workout description which was to be displayed based on user input and control(select Button). Next step of the process included building few different functions to handle randomizing the workout, based on selected value, and rendering content on the display. They were all used in the main function generateWorkout, triggered by the GO-button click event, which also sets the timer ready. Once the user is ready to start the workout, start button is in charge of start running the timer and rendering quotes on the screen at a set interval of time(8 sec). I got the quotes by using FavQs API, using hardcoded relevant keywords and doing parallel get requests, then sorting the received data by quotes' length. Later on the sorted data(an array) was accessed with another async/await function and produced/rendered a random quote on the screen if called once. I then set up window events on the start and stop button respectively; start click starts the timer, resets the timer, if workout is switched, and displays a quote every 8 sec(+2 sec delay on the first quote), while stop button stops quotes and timer.

## Link: http://moodivator.surge.sh/

## Installation Instructions: 
1. Fork and clone this repo.
2. Open **index.html** in the browser and enjoy your workout.

## Unsolved problems:
I wanted to include a fade-in-out animation on each quote. However, the quotes are now switching every 8 seconds so animations are not really necessary for the purpose of the user being able to read them as they appear on the screen.
My stretch goal to include a second API to generate images along with the quotes didn't really make a lot of sense since the main goal of the app is to motivate the user with quotes not to distract him/her with images popping up on the screen on a set interval of time. 
