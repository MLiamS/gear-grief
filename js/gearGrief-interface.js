var BikeData = require('./../js/gearGrief.js').thingy;
var currentBike = [];
console.log("currentBikeArrray1" , currentBike);

$(function(){


  var newBike = new BikeData();
  $("#bike-form").submit(function(event){
    event.preventDefault();
    var type = $("#bikeType").val();
    var location = $("#bikeLocation").val();
    console.log(type,location);
    currentBike.push(newBike.getData(type, location));
    console.log("currentBikeArrray" , currentBike);
  });


});
