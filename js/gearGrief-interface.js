var BikeData = require('./../js/gearGrief.js').thingy;

$(function(){
  var newBike = new BikeData();

  newBike.getData();
  console.log(newBike);
});
