
 var pageOpen = (function () {
    $("body").addClass("line");
    $("nav , .container , footer").animate({
      marginTop:"0",
      opacity:1
    },500);
  });

  var pageClose = (function (link) {
   var link = link;
   if(!link || link == "#" )
     return false;
     $("body").animate({
       marginTop:"+100px",
       opacity:0
     },500,function(){
       window.location.href = link;
     });
   });

    Pace.on("done",function(){
      pageOpen();
      Materialize.toast('Yeeeeey Page Loaded &nbsp;<i class="material-icons">done</i>', 1500,"teal lighten-1 white-text");
      reDesignrow();
      $(".dropdown-button").dropdown();
      $('.button-collapse').sideNav();
      $('.tooltipped').tooltip({delay:0});
      $('#add').leanModal({
          dismissible:true,
          complete:function(a){
            _this = $("#add");
            changeEase(_this, "linear", 200);
            _this.css({
              'transform':"rotate(0)",
            });
          },
          ready:function(a){
            _this = $("#add");
            _this.css({
              'transform':"rotate(45deg)",
            });
          }
      });

    });

  function reDesignrow(){
    $(".timeline > .row > .t-row:nth-of-type(even)").each(function () {
          var prev = $(this).prev("div");
          if(prev.hasClass("t-row")){
            var prevHeight = parseInt(prev.height(),10);
            $(this).css({
                marginTop: prevHeight / 2 + "px",
                });
          }
    });
  }

    $("a").each(function(e){
      $(this).on("click",function(event){
        var href = $(this).attr("href");
        event.preventDefault();
        pageClose(href);
      });
    });
    /* $(".timeline > .row > div:last-child").css({
          marginBottom: $(".timeline > .row > div:last-child").height()*0.50,
    }); */

    var fabStatus = false;
    $(document).on("click",function(){
      if(fabStatus){
        $(".fabMore > a.red").trigger("click");
      }
    });

    $(".fabMore > a.red").on("click",function(e){
      e.stopPropagation();
      button = $(this);
      if(fabStatus){
        fabStatus = false;
        button.css({
          'transform':"rotate(0deg)"
        });
        $(".fabMore").closeFAB();

        setTimeout(function () {
          $(".fab_in").css('display','none');
        }, 250);

          $(".fab_in > li > a").off("click");
      }
      else{
        $(".fab_in").css({
          display:"inherit",
        });
        button.css({
          'transform':"rotate(90deg)"
        });
        fabStatus = true;
        $(".fab_in > li > a").on("click",function(){
          $(".fabMore > a").trigger("click");
        });

        $(".fabMore").openFAB();
      }

    });

    function isInView(ele) {
        var $ele = $(ele);
        var $window = $(window);

        var ViewTop = $window.scrollTop();
        var ViewBottom = ViewTop + $window.height();

        var eleTop = $ele.offset().top;
        var eleBottom = eleTop + $ele.height();
        var eleCenter = (eleTop + eleBottom) / 2;

        return (eleCenter >= ViewTop && eleCenter <= ViewBottom)
    }

    function changeEase(element, ease, animSpeed) {
        $element = $(element);
        allin = "all " + animSpeed + "ms " + ease;
        $element.css({
            WebkitTransition: allin,
            MozTransition: allin,
            MsTransition: allin,
            OTransition: allin,
            transition: allin,
        });
    }

    function showElements() {
        $(".row > .col").each(function () {
            _this = $(this);
            changeEase(_this, "cubic-bezier(0.175, 0.885, 0.320, 1.275)", 500);
            if (isInView(_this)) {
                _this.css({
                    "-ms-transform": "scale(1)",
                    /* IE 9 */
                    "-webkit-transform": "scale(1)",
                    /* Safari */
                    "transform": "scale(1)",
                })
            } else {
                _this.css({
                    "-ms-transform": "scale(0)",
                    /* IE 9 */
                    "-webkit-transform": "scale(0)",
                    /* Safari */
                    "transform": "scale(0)",
                })
            }
        })
    }

    // $(window).on("scroll , touchmove",function () {
    //     showElements();
    // });
