$(function() {

  // hide the story from view
  $("#story").hide();
  $("#video").hide();

  // ---- event handler ---- //
  $("#btn-click").click(function(e) {


    // grab the values from the input boxes, then append them to the DOM
    $(".adjective").empty().append($("input.adjective").val());
    $(".verb").empty().append($("input.verb").val());
    $(".noun").empty().append($("input.noun").val());
    $(".noun3").empty().append($("input.noun3").val());
    $(".noun4").empty().append($("input.noun4").val());
    $(".food").empty().append($("input.food").val());
    $(".thought").empty().append($("input.thought").val());

    // show the story
    $("#story").show();
    $("#video").show();


    // the background video
    $(function() {
       var videobackground = new $.backgroundVideo($('#video'), {
         "align": "centerXY",
         "width": 1280,
         "height": 720,
         "path": "{{ site.url }}/assets/video/",
         "filename": "san-fran-port",
         "types": ["mp4","ogg","webm"],
         "z-index": -100,

       });
    });

    // empty the form's values
    $(':input').val('');

    // hide the questions
    $("#questions").hide();

  });

  $("#play-btn").click(function(e) {
    $("#questions").show();
    $("#story").hide();
    $("#video").hide();
  });



  // $(".required").click(function formcheck() {
  //     var fields = $(".required")
  //     console.log(fields);
  //   }

});
