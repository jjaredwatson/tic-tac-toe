var moves = 0;
var currentPlayer = "x";
var playerOne = "x";
var playerTwo = "o";



// wait for the DOM to finish loading
$(document).ready(function() {
  // all code to manipulate the DOM
  // goes inside this function

  $('.box').on('click', function newMove(event){
    // if a player chooses an occupied box, deny them
    if ($(this).hasClass("box-selected")){
         alert("Please choose an open space.");
         // place the player's mark on the the box
    } else {
          // set up the html to add the player's mark to the box
           var newMove = ('<p>' + currentPlayer + '</p>');
           // add the newMove Html String to to the box
           $(this).html(newMove);
           // add the box-selected class to the html to prevent further marking
           $(this).addClass("box-selected");
           // increase move count
           moves++;
           changePlayer();
           checkWin();
    }
  });

  function checkWin(){
    var $box1 = $('#box1').text();
    var $box2 = $('#box2').text();
    var $box3 = $('#box3').text();
    var $box4 = $('#box4').text();
    var $box5 = $('#box5').text();
    var $box6 = $('#box6').text();
    var $box7 = $('#box7').text();
    var $box8 = $('#box8').text();
    var $box9 = $('#box9').text();


// Horizontal Wins
    if (($box1 === 'x' && $box2 === 'x' ) && $box3 === 'x') {
      var xWins = ('<h2>X Wins</h2>');
      $('#heading').html(xWins);
      $('#heading').addClass("heading");
    }
    else if (($box1 === 'o' && $box2 === 'o' ) && $box3 === 'o') {
      var oWins = ('<h2>O Wins</h2>');
      $('#heading').html(oWins);
      $('#heading').addClass("heading");
    }
    else if (($box4 === 'x' && $box5 === 'x') && $box6 === 'x') {
      var xWins = ('<h2>X Wins</h2>');
      $('#heading').html(xWins);
      $('#heading').addClass("heading");
    }
    else if (($box4 === 'o' && $box5 === 'o') && $box6 === 'o') {
      var oWins = ('<h2>O Wins</h2>');
      $('#heading').html(oWins);
      $('#heading').addClass("heading");
    }
    else if (($box7 === 'x' && $box8 === 'x') && $box9 === 'x') {
      var xWins = ('<h2>X Wins</h2>');
      $('#heading').html(xWins);
      $('#heading').addClass("heading");
    }
    else if (($box7 === 'o' && $box8 === 'o') && $box9 === 'o') {
      var oWins = ('<h2>O Wins</h2>');
      $('#heading').html(oWins);
      $('#heading').addClass("heading");
    }
// Vertical Wins
    else if (($box1 === 'x' && $box4 === 'x') && $box7 === 'x') {
      var xWins = ('<h2>X Wins</h2>');
      $('#heading').html(xWins);
      $('#heading').addClass("heading");
    }
    else if (($box1 === 'o' && $box4 === 'o') && $box7 === 'o') {
      var oWins = ('<h2>O Wins</h2>');
      $('#heading').html(oWins);
      $('#heading').addClass("heading");
    }
    else if (($box2 === 'x' && $box5 === 'x') && $box8 === 'x') {
      var xWins = ('<h2>X Wins</h2>');
      $('#heading').html(xWins);
      $('#heading').addClass("heading");
    }
    else if (($box2 === 'o' && $box5 === 'o') && $box8 === 'o') {
      var oWins = ('<h2>O Wins</h2>');
      $('#heading').html(oWins);
      $('#heading').addClass("heading");
    }
    else if (($box3 === 'x' && $box6 === 'x') && $box9 === 'x') {
      var xWins = ('<h2>X Wins</h2>');
      $('#heading').html(xWins);
      $('#heading').addClass("heading");
    }
    else if (($box3 === 'o' && $box6 === 'o') && $box9 === 'o') {
      var oWins = ('<h2>O Wins</h2>');
      $('#heading').html(oWins);
      $('#heading').addClass("heading");
    }
// Diagonal Wins
    else if (($box1 === 'x' && $box5 === 'x') && $box9 === 'x') {
      var xWins = ('<h2>X Wins</h2>');
      $('#heading').html(xWins);
      $('#heading').addClass("heading");
    }
    else if (($box1 === 'o' && $box5 === 'o') && $box9 === 'o') {
      var oWins = ('<h2>O Wins</h2>');
      $('#heading').html(oWins);
      $('#heading').addClass("heading");
    }
    else if (($box3 === 'x' && $box5 === 'x') && $box7 === 'x') {
      var xWins = ('<h2>X Wins</h2>');
      $('#heading').html(xWins);
      $('#heading').addClass("heading");
    }
    else if (($box3 === 'o' && $box5 === 'o') && $box7 === 'o') {
      var oWins = ('<h2>O Wins</h2>');
      $('#heading').html(oWins);
      $('#heading').addClass("heading");
    }
// Scratch
    else if (moves === 9) {
      var scratch = ('<h2>Scratch</h2>');
      $('#heading').html(scratch);
      $('#heading').addClass("heading");
    }
  }

  $('button').click(function() {
       location.reload();
  });

});

function changePlayer(){
  if (currentPlayer===playerOne){
    currentPlayer = playerTwo;
  } else  {
     currentPlayer = playerOne;
  }
}

var xWins = ('<h2>X Wins<h2>');
$('#heading').html(xWins);
// add the box-selected class to the html to prevent further marking
$(this).addClass("heading");
