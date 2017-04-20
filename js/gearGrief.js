
function BikeData() {

}
  BikeData.prototype.getData = function() {
    $.get('http://project529.com/garage/api/public/bikes')
    .then(function(response) {
      console.log(response);
    })
  };

exports.thingy = BikeData;
