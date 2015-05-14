//
// Parralax effect
// $(document).ready(function(){

//   $(window).scroll(function() {
//     var yPos = $(window).scrollTop();
//     var offset = -(yPos/3);
//     $("#header").css("background-position","0px "+offset+"px");
// });

//
// Analytics
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-62792522-2']);
_gaq.push(['_trackPageview']);

(function() {
  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
  ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();
