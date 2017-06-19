// $('#app')

$('#text').click('click', removeEnvelope);

function removeEnvelope(){
  $('body').empty();
  $('body').css('background', 'url("imgs/grid.jpg")');
  $('body').prepend('<div id="a-note"><p>Dear Dad,</p><p>I know you love a good solvable puzzle, so I got you one for Father\'s Day! &#x1F60A Have a lovely day!</p><p>Love,<br>Me</p></div>');
  $('body').append('<div id="sudoku"><iframe src="http://widget.websudoku.com/?level=3" width="200" height="270" scrolling="no" frameborder="0"></iframe></div>')
}
