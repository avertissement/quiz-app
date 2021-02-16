/**
 * Example store structure
 */
const store = {
  // 5 or more questions are required
  questions: [
    {
      question: 'What color is broccoli?',
      answers: [
        'red',
        'orange',
        'pink',
        'green'
      ],
      correctAnswer: 'green'
    },
    {
      question: 'What is the current year?',
      answers: [
        '1970',
        '2015',
        '2019',
        '2005'
      ],
      correctAnswer: '2019'
    }
  ],
  quizStarted: false,
  questionNumber: 0,
  score: 0
};

/*
Technical Requirements:

- Must include a render() function that conditionally regenerates the view each time the store is updated
- Include single-purpose template generation functions
- Include single-purpose event handler functions
- Call all functions from a jQuery initializing function
- NOT add additional HTML elements to the boilerplate code’s index.html file (you may add attributes, i.e., classes and ids, to the existing HTML elements, or link stylesheets or additional scripts if necessary)
- Render answer choices in a <form>
- Use semantic HTML, along with CSS and jQuery
- Follow a11y best practices
- Be fully usable by keyboard (which will be easy enough if you start with a form)
- Use responsive design
*/


// - Design your app using HTML wireframes, which are HTML - and minimal CSS - only versions of the different screens in your app


/********** TEMPLATE GENERATION FUNCTIONS **********/

// These functions return HTML templates

/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)