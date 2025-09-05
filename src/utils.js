// utils.js
//  this file is just for saving stuff to localStorage
// like your quiz answers and wishlist ❤️

export const saveAnswer = (key, value) => {
    // Get the old answers or start with empty object
    const data = JSON.parse(localStorage.getItem('quizAnswers')) || {};
    data[key] = value; // save/update this question's answer
    localStorage.setItem('quizAnswers', JSON.stringify(data)); // put it back in localStorage
  };
  
  export const getAnswers = () => {
    // grab all saved answers, or empty if nothing there
    return JSON.parse(localStorage.getItem('quizAnswers')) || {};
  };
  export const clearAnswers = () => {
    localStorage.removeItem('quizAnswers'); // or whatever key you used
  };
  