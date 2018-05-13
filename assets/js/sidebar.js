$(document).ready(function() {
    function closeSidebar() {
        $("#sidebar").animate({
          right:(-$("#sidebar").width())+"",
        }, 200, function() {
          $("#sidebar").css("display", "none");
          $("#menu-dropdown").show(150);
        });
    }

    $("#menu-dropdown").on("click", function(event) {
        event.stopPropagation();

        $("#menu-dropdown").css("display", "none");
        $("#sidebar").css("display", "inline-block");
       $("#sidebar").animate({
            right:0
          }, 200, function() {
            // Animation complete.
          });
    });

    $("#sidebar-top-close").on("click", function() {
       closeSidebar();
    });

    $("body").on("click", function(event) {
      if ($("#sidebar").css("display") != "none") {
        closeSidebar();
      }
    });

    $("#nba_blog_block").click(function(){
        window.location = $("#nba_btn").attr("href");
    });

    $("#highlight_tool_block").click(function(){
        window.location = $("#highlight_tool_btn").attr("href");
    });
  }
);