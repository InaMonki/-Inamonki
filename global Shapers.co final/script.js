$("document").ready(function(){
$("#pageonecont").animate({
    height:"100vh"
},600)
$("#locationIcon").click(function(){
    $("#location").slideToggle(100)
})

var counter = 1;
$("#newsandinsightsbtn").click(function(){
    counter = counter+=1;
    if(counter % 2 == 0){
        $("#newsandinsightsbtn").text("Finish Reading!")
        $("#newsandinsights").slideDown(200)
    }else{
        $("#newsandinsightsbtn").text("Read More!")
        $("#newsandinsights").slideUp(200)
    };

});




































})