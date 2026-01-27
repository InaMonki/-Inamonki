AOS.init();


// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();


//  owl carousel script
$(".owl-carousel").owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    navText: [],
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        500: {
            items: 2
        }
    }
});

//    end owl carousel script 



/** google_map js **/
function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(40.712775, -74.005973),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}

// Initialize a counter variable




let i = 0;
const intervalId = setInterval(() => {
  i++;
  $('#counter').html(i)
  if (i >= 99){
  requestAnimationFrame(() => {
  clearInterval(intervalId);
   $("#efectbox").css("border-color", "#00ff22");
   $("#progressbar").css("background-color", "#00ff22");
});
  }

}, 25);

$(document).ready(function(){
 $("#progressbar").animate({
      width: "+=130px"
    }, 3000, function() {
    });
})