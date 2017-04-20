
function BikeData() {

}
  BikeData.prototype.getData = function(type, location) {
    $.get('https://bikeindex.org:443/api/v3/search?page=2&per_page=25&manufacturer=' + type + '&location=' + location + '&distance=1&stolenness=proximity')
    .then(function(response) {
      console.log(response);
    });
  };

exports.thingy = BikeData;


// ('https://bikeindex.org:443/api/v3/search?page=2&per_page=25&manufacturer=Schwinn&location=97224&distance=10&stolenness=stolen')
