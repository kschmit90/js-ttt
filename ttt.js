window.onload = function(){
  
  // Collection of all squares on the board.
  var squares = document.getElementsByTagName('td');
  
  var turn = "X";
  var count = 0
  
  function add_mark(){
	  if(count % 2 === 0){
		  this.innerHTML = "X";
	  }
	  else {
		  this.innerHTML = "O";
	  }
  }
  
  var isWinningGame = function (){
	  if( (squares[0].innerHTML != "-" && squares[1].innerHTML != "-" && squares[2].innerHTML != "-") && (squares[0].innerHTML === squares[1].innerHTML && squares[0].innerHTML === squares[2].innerHTML) ){
		  alert("This works.");
	  }
	  else if( (squares[3].innerHTML != "-" && squares[4].innerHTML != "-" && squares[5].innerHTML != "-") && (squares[3].innerHTML === squares[4].innerHTML && squares[3].innerHTML === squares[5].innerHTML) ){
		  alert("This also works.");
	  }
	  else if( (squares[6].innerHTML != "-" && squares[7].innerHTML != "-" && squares[8].innerHTML != "-") && (squares[6].innerHTML === squares[7].innerHTML && squares[6].innerHTML === squares[8].innerHTML) ){
		  alert("This works too.");
	  }
	  else if( (squares[0].innerHTML != "-" && squares[3].innerHTML != "-" && squares[6].innerHTML != "-") && (squares[0].innerHTML === squares[3].innerHTML && squares[0].innerHTML === squares[6].innerHTML) ){
		  alert("This works as well.");
	  }
	  else if( (squares[1].innerHTML != "-" && squares[4].innerHTML != "-" && squares[7].innerHTML != "-") && (squares[1].innerHTML === squares[4].innerHTML && squares[1].innerHTML === squares[7].innerHTML) ){
		  alert("This should work.");
	  }
	  else if( (squares[2].innerHTML != "-" && squares[5].innerHTML != "-" && squares[8].innerHTML != "-") && (squares[2].innerHTML === squares[5].innerHTML && squares[2].innerHTML === squares[8].innerHTML) ){
		  alert("This definitely works.");
	  }
	  else if( (squares[0].innerHTML != "-" && squares[4].innerHTML != "-" && squares[8].innerHTML != "-") && (squares[0].innerHTML === squares[4].innerHTML && squares[0].innerHTML === squares[8].innerHTML) ){
		  alert("Check.");
	  }
	  else if( (squares[2].innerHTML != "-" && squares[4].innerHTML != "-" && squares[6].innerHTML != "-") && (squares[2].innerHTML === squares[4].innerHTML && squares[2].innerHTML === squares[6].innerHTML) ){
		  alert("Affirmative.");
	  }
	  else{
		  alert("Error.")
	  }
  }
  
  function increment_count() {
	  count++;
  }
  
  for(var i = 0; i < squares.length; i++) {
    // When you click a square, runs the `add_mark` method.
    squares[i].addEventListener("click", add_mark);
	squares[i].addEventListener("click", increment_count);
  }

}	
