// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
// global scope variable for current date
var today = dayjs();

// attaching current date to header paragraph with id currentDay
$('#currentDay').text(today.format('dddd, MMMM D'));

// variable for selecting class time-block
var saveDiv = document.querySelector('.time-block')

// creating variables for current time and subtracting 8 hours for PST
$(function () {
  var date = new Date();
  var currentTime = date.getUTCHours() - 8;

  //if statement. When it is outside work hours add class future to all my divs class row.
  if (currentTime > 17 || currentTime < 9) {

    $(".row").addClass("future").removeClass("past");
  }

  // setting conditions for each hour to keep up with current time and change color accordingly.
  if (currentTime >= 9 && currentTime < 10) {

    $('#hour-9').addClass("present").removeClass("past");

    $('#hour-10').addClass("future").removeClass("past");

    $('#hour-11').addClass("future").removeClass("past");

    $('#hour-12').addClass("future").removeClass("past");

    $('#hour-13').addClass("future").removeClass("past");

    $('#hour-14').addClass("future").removeClass("past");

    $('#hour-15').addClass("future").removeClass("past");

    $('#hour-16').addClass("future").removeClass("past");

    $('#hour-17').addClass("future").removeClass("past");

  }

  if (currentTime >= 10 && currentTime < 11) {

    $('#hour-10').addClass("present").removeClass("past");

    $('#hour-11').addClass("future").removeClass("past");

    $('#hour-12').addClass("future").removeClass("past");

    $('#hour-13').addClass("future").removeClass("past");

    $('#hour-14').addClass("future").removeClass("past");

    $('#hour-15').addClass("future").removeClass("past");

    $('#hour-16').addClass("future").removeClass("past");

    $('#hour-17').addClass("future").removeClass("past");



  }

  if (currentTime >= 11 && currentTime < 12) {

    $('#hour-11').addClass("present").removeClass("past");

    $('#hour-12').addClass("future").removeClass("past");

    $('#hour-13').addClass("future").removeClass("past");

    $('#hour-14').addClass("future").removeClass("past");

    $('#hour-15').addClass("future").removeClass("past");

    $('#hour-16').addClass("future").removeClass("past");

    $('#hour-17').addClass("future").removeClass("past");



  }

  if (currentTime >= 12 && currentTime < 13) {

    $('#hour-12').addClass("present").removeClass("past");

    $('#hour-13').addClass("future").removeClass("past");

    $('#hour-14').addClass("future").removeClass("past");

    $('#hour-15').addClass("future").removeClass("past");

    $('#hour-16').addClass("future").removeClass("past");

    $('#hour-17').addClass("future").removeClass("past");



  }

  if (currentTime >= 13 && currentTime < 14) {

    $('#hour-13').addClass("present").removeClass("past");

    $('#hour-14').addClass("future").removeClass("past");

    $('#hour-15').addClass("future").removeClass("past");

    $('#hour-16').addClass("future").removeClass("past");

    $('#hour-17').addClass("future").removeClass("past");



  }

  if (currentTime >= 14 && currentTime < 15) {

    $('#hour-14').addClass("present").removeClass("past");

    $('#hour-15').addClass("future").removeClass("past");

    $('#hour-16').addClass("future").removeClass("past");

    $('#hour-17').addClass("future").removeClass("past");



  }

  if (currentTime >= 15 && currentTime < 16) {

    $('#hour-15').addClass("present").removeClass("past");

    $('#hour-16').addClass("future").removeClass("past");

    $('#hour-17').addClass("future").removeClass("past");



  }

  if (currentTime >= 16 && currentTime < 17) {

    $('#hour-16').addClass("present").removeClass("past");

    $('#hour-17').addClass("future").removeClass("past");



  }

  if (currentTime >= 17 && currentTime < 18) {

    $('#hour-17').addClass("present").removeClass("past");



  }

  
// creating event listener that take the text value and does something with it when save button is clicked.
  var Btn = document.querySelectorAll(".saveBtn")
  for (let index = 0; index < Btn.length; index++) {
    Btn[index].addEventListener("click", function (event) {
      event.preventDefault();
      localStorage.setItem("notes", JSON.stringify(Btn));
      document.querySelectorAll(".saveBtn").innerHtml = localStorage.getItem("notes");
      console.log($(this).siblings("textarea").val());
    });
  }
   
  

  









    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? It references the object that is receiving the event. How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.
  });
