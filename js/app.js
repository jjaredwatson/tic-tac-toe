// wait for the DOM to finish loading
$(document).ready(function() {
  // all code to manipulate the DOM
  // goes inside this function

$('.box').on('click', function toggleMarkSpace(event){
    newMove = ('<p>' + currentPlayer + '</p>');
    $(this).html(newMove);
    $(this).addClass("box-selected");
});


/*
function toggleMarkSpace(event){
    newMove = ('<p>x</p>');
    $('.box').html(newMove);
    $(this).addClass("box-selected");
}

*/





















});
