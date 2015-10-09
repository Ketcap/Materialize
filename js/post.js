$(window).load(function() {

  $("#signup").on("click",function(){
    Materialize.toast('<b> Username or Password is Wrong </b>&nbsp;<i class="material-icons">error_outline</i>', 3000,"red lighten-1 white-text");

  });

  $("#login").on("click",function(){
    Materialize.toast('<b> Login Successfull </b>&nbsp;<i class="material-icons">done_all</i>', 1500,"green lighten-1 white-text",
    function(){
      pageClose("index.html");
    });
  });

  $(".logout").on("click",function(){
    Materialize.toast('<b> See you next time </b>&nbsp;<i class="material-icons">tag_faces</i>', 1500,"green lighten-1 white-text",
    function(){
      pageClose("login.html");
    });
  });


});
