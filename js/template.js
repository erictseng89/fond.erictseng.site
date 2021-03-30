const mediaHeight = window.matchMedia('(max-height: 800px)');
const mediaWidth = window.matchMedia('(max-width: 950px)');


var logoFunc = function() {
  let y = window.scrollY;
  // alert("scrollY = " + y);
  if (mediaHeight.matches || mediaWidth.matches){
    if (y >= 120) { 
      // $("#nav_logo").css("display", "var(--display-navlogo)");
      $("#nav_logo").show(250);
      $(".horizontalNav").slideUp(100);
      $("nav").css("background-color", "transparent");
      // $("#nav_logo").addclass(logoSpinner);      
    }
    else {
      $("nav").css("background-color", "var(--color-banner_bottom)");
      $("#nav_logo").hide(100);
      $(".horizontalNav").slideDown(100);
      $(".sideMenu").hide(100);
      
      // $("#nav_logo").css('display','none');
      // $("#nav_logo").fadeOut(500);
    } 
  }
 
};

function sideMenuToggle() {
  let sm = $(".sideMenu");
    sm.toggle(400);
    sm.css("display","flex");
}

$('#nav_logo').bind('click', sideMenuToggle);
window.addEventListener("scroll", logoFunc);