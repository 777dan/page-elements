$(document).ready(function(){
    $("#setDarkTheme").click(function(){
      $("body, html").addClass("darkThemeBody");
      $("h1, h2, p").addClass("darkThemeText");
    });
    $("#setLightTheme").click(function(){
        $("body, html").removeClass("darkThemeBody");
        $("h1, h2, p").removeClass("darkThemeText");
      });
  });