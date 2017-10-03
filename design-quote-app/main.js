//when the the element with the id 'get-a-quote is clicked on, it will run the function(e)...'
$('#get-a-quote').on('click', function(e) {
  // //preventing the default
  // e.preventDefault();
  //
  $.ajax( {
    url: 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
    success: function(data) {
      // Get the first post from the array of posts.
      var post = data.shift();
      $('#person').text(post.title);
      $('#quote-content').html(post.content);
      //when the the element with the id 'get-a-quote is clicked on, it will run the function below and change the background color to a random color
      $('body').css('background-color', `${colorSurprise()}`);

      // If the Source is available, use it. Otherwise hide it.
      if (typeof post.custom_meta !== 'undefined' && typeof post.custom_meta.Source !== 'undefined') {
        $('#source').html('source: ' + post.custom_meta.Source);
      } else {
        $('#quote-source').text('');
      }
    },
    cache: false
  });
});

// the random color function called above
function colorSurprise(){
  // an inner helper function to select a random color
  function randomizer(){
    return Math.floor(Math.random() * 200); // I limited the color range to avoid colors close to white
  }
  return `rgb(${randomizer()}, ${randomizer()}, ${randomizer()})`
}
