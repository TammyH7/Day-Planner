 // Wrap all code that interacts with the DOM in a call to jQuery to ensure that the code isn't run until the browser has finished rendering all the elements in the html.(Wait until the DOM is fully loaded before executing the code inside the function).

  //NOTE - REMEMBER: Call to JQUERY format: 
  $(function () {
    // TODO 1: Add a listener for click events on the save button.
    // This code should use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //
    // TODO 2: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
    // TODO 3: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO 4: Add code to display the current date in the header of the page.
  });

  //ASSIGNMENT:

  // NOTE - FUNCTION TO SAVE USER INPUT TO LOCAL STORAGE: 
  // This is a "function template" that will save the user's input in a textarea to localStorage when the corresponding "save button" has been clicked.
  function textEntry() {
    $('.saveBtn').on('click', function() {
      const key = $(this).parent().attr('id');
      const value = $(this).siblings('.description').val();
      localStorage.setItem(key, value);
    });
  }
   // TODO 1: Add a listener for click events on the save button.
   // textENTRY FUNCTION:
  function textEntry() {
    $('.saveBtn').on('click', function() {
      blockId = $(this).parent().attr('id');
      console.log(blockId);
      text = $(this).siblings('.description').val();
      console.log(text);
      localStorage.setItem(key, value);
    });
  }
  // NOTE: Use "CONST" instead of "LET" by default 
  // only use "let" when you know the variable's value will change. 
  // This helps make your code more readable and less error-prone.

  // textENTRY FUNCTION BREAKDOWN:
  const saveButton = $('.saveBtn');
  const timeBlock = $('.time-block');

  // To add a listener for click events on save buttons:
  saveButton.on('click', function () {
      
  // This gets the "id attribute of the parent element" (time-block) containing the clicked button:
  const blockId = $(this).parent().attr('id');
  console.log(blockId);

  // This selects the textarea element next to the clicked button (this) and retrieves its value:
  const text = $(this).siblings('.description').val();
  console.log(text);
    
  // This saves the text to local storage using the "id" as the key:
    localStorage.setItem(blockId, text);
  });

  // TODO 2: Add code to apply the past, present, or future class to each time block by comparing the "id to the current hour". HINTS: 1. How can the "id attribute" of each time-block be used to conditionally add or remove the past, present, and future classes? 2. How can Day.js be used to get the current hour in 24-hour time?

  // NOTE: day.js - 24 hour format: "H" ('YYYY-MM-DD HH:mm:ss')
  // Declaring the current time
  const currentHour = dayjs().hour('H');
  console.log(currentHour)


  // NOTE: ID ATTRIBUTE OF EACH TIME-BLOCK:
  timeBlock.each(function () {
    // Extract the hour number from the div's "id attribute"
    // $(this): refers to the current element being iterated over in the loop (each .time-block div).
    // .attr('id'): retrieves the value of the id attribute of the current element.
    // .split('-'): splits the "id" attribute value into an array using  "-"" as a separator. 
    //IF statement:
    // If the "id" is "hour-9",  it would result in an array ['hour', '9'].
    // [1] is second element of the array  
    // parseInt() converts the string (the hour) into an integer, which makes that hour as a number rather than a string (the string '9' to the integer 9.)

    const blockHour = parseInt($(this).attr('id').split('-')[1]);

    // PAST, PRESENT, FUTURE:
    // Compare blockHour with currentHour to determine past, present, or future
    if (blockHour < currentHour) {
      $(this).removeClass('present future').addClass('past');
    } else if (blockHour === currentHour) {
      $(this).removeClass('past future').addClass('present');
    } else {
      $(this).removeClass('past present').addClass('future');
    }
  });

  // TODO 3: Add code to get any user input that was saved in localStorage and set the values of the corresponding textarea elements. HINT: 1. How can the "id attribute" of each time-block be used to do this?
  timeBlock.each(function () {
    // .attr('id') is used to retrieve the value of the id attribute of the current element.
    // gets the ID attribute value of the current element in the loop. 
    // if $(this) represents one of the .time-block div elements, 
    // this line retrieves the value of the id attribute associated with that particular div.

    let blockId = $(this).attr('id');
    let savedInput = localStorage.getItem(blockId);

    // Check if there is saved text for this block
    if (savedInput !== null) {
      $(this).find('.description').val(savedInput);
    }
  });

    // TODO: Add code to display the current date in the header of the page.
    // current date in the header of the page.
    function displayTime() {
    let rightNow = dayjs().format('MMMM DD, YYYY  hh:mm:ss a');
    $('#currentDay').text(rightNow);
     }
    setInterval(displayTime, 1000);