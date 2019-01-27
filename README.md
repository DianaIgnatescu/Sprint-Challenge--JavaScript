# Sprint Challenge: JavaScript Fundamentals

This challenge allows you to practice the concepts and techniques learned over the past week and apply them in a survey of problems. This Sprint explored JavaScript Fundamentals. During this Sprint, you studied variables, functions, object literals, arrays, this keyword, prototypes, and class syntax. In your challenge this week, you will demonstrate proficiency by completing a survey of JavaScript problems.

## Instructions

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the Sprint Challenge. However, you are encouraged to follow the twenty-minute rule and seek support from your PM and Instructor in your cohort help channel on Slack. Your work reflects your proficiency in JavaScript fundamentals.

You have three hours to complete this challenge. Plan your time accordingly.

## Commits

Commit your code regularly and meaningfully. This helps both you (in case you ever need to return to old code for any number of reasons) and your project manager.

## Description

You will notice there are several JavaScript files being brought into the index.html file.  Each of those files contain JavaScript problems you need to solve.  If you get stuck on something, skip over it and come back to it later.

In meeting the minimum viable product (MVP) specifications listed below, you should have a console full of correct responses to the problems given.

## Self-Study Questions

Demonstrate your understanding of this week's concepts by answering the following free-form questions.

Edit this document to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read by your project manager

1. Describe the biggest difference between `.forEach` & `.map`.
   
   The biggest difference between `.forEach` & `.map()` is that `.map()` returns a new array of elements whereas `.forEach()` iterates over a list of data but doesn't return anything.

2. What is the difference between a function and a method?

   The main difference between a function and a method is the fact that a method is just a function inside an object. For instance, console.log() is just a function inside an object called `console`.

3. What is closure?

   Closures represent the combination of a function, and the lexical environment within which that function was declared. When a function is declared, a functional scope is created giving variables or functions declared within that function the ability to reach outside of that function for context.

4. Describe the four rules of the 'this' keyword.

   I. Window Binding - whenever none of the below rules apply, the value of 'this' is going to default to the window object.

   II. Implicit Binding - is the most common rule and occurs when dot notation is used to invoke a function. As a rule, whatever is to the left of the dot at call time becomes the context for 'this'.

   III. New Binding - states that when a function is invoked with the 'new' keyword, the 'this' keyword inside that function is bound to the new object being constructed.

   IV. Explicit Binding - allows us to explicitly state what the 'this' keyword is going to be in any given function invocation using .call(), .apply() or.bind(). As a rule, .call() and .apply() behave in a similar way, only with .call() you pass the arguments one by one, and with .apply() you pass them in an array. .bind() is the same as .call() except instead of returning the function, it will create a new function that can be invoked at a later time.

5. Why do we need super() in an extended class?

   The super() function abstracts away any of the syntax that was used to bind an object's prototypes to one another, meaning that if we use super() inside a child class, then there is no need to use Object.create(this, Class) syntax any longer.

### Git Set up

* [ ] Fork the project into your GitHub user account
* [ ] Clone the forked project into a directory on your machine
* [ ] Create a pull request before you start working on the project requirements.  You will continuously push your updates throughout the project.
* [ ] You are now ready to build this project with your preferred IDE

## Minimum Viable Product

Your finished project must include all of the following requirements:

**Pro tip for this challenge: If something seems like it isn't working locally, copy and paste your code up to codepen and take another look at the console.**

## Task 1: Objects and Arrays
Test your knowledge of objects and arrays. 
* [ ] Use the [objects-arrays.js](challenges/objects-arrays.js) link to get started.  Read the instructions carefully!

## Task 2: Functions
This challenge takes a look at callbacks and closures as well as scope. 
* [ ] Use the [functions.js](challenges/functions.js) link to get started. Read the instructions carefully!

## Task 3: Prototypes
Create constructors, bind methods, and create cuboids in this prototypes challenge.
* [ ] Use the [prototypes.js](challenges/prototypes.js) link to get started. Read the instructions carefully!

## Task 4: Classes
Once you have completed the prototypes challenge, it's time to convert all your hard work into classes.
* [ ] Use the [classes.js](challenges/classes.js) link to get started. Read the instructions carefully!

In your solutions, it is essential that you follow best practices and produce clean and professional results. Schedule time to review, refine, and assess your work and perform basic professional polishing including spell-checking and grammar-checking on your work. It is better to submit a challenge that meets MVP than one that attempts too much and does not.

## Stretch Problems

There are a few stretch problems found throughout the files, don't work on them until you are finished with MVP requirements!