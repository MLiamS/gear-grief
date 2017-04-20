var BikeData = require('./../js/gearGrief.js').thingy;


$(function(){
  var newBike = new BikeData();
  $("#bike-form").submit(function(event){
    event.preventDefault();
    var type = $("#bikeType").val();
    var location = $("#bikeLocation").val();
    console.log(type,location);
    newBike.getData(type, location);
  });

  console.log(newBike);
});
