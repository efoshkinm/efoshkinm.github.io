// Current Location Scripts
$(function () {

  var status = $('#status');

  (function getGeoLocation() {
    status.text('Getting Location...');
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        var lat = position.coords.latitude;
        var long = position.coords.longitude;

        // Call the getData function, send the lat and long
        getData(lat, long);

      });
    } else {
      status.text("Your browser doesn't support Geolocation or it is not enabled!");
    }

  })();

  // Get the data from the wunderground API
  function getData(lat, long){
    $.ajax({
	  url : 
	  'http://api.wunderground.com/api/Your_Key/geolookup/conditions/q/' + lat +',' + long + '.json',
	  dataType : "jsonp",
	  success : function(data) {
		  console.log(data);
	  var location = data['location']['city'] + ',' + data['location']['state'];
	  var temp = data['current_observation']['temp_f'];
	  var current = data ['current_observation']['weather'];
	  var tz_long = data ['nearby_weather_stations'] ['tz_long'];
	  var windchill_c = data ['current_observation'] ['windchill_c'];
	  var windchill_f = data ['current_observation'] ['windchill_f'];
	  var wind_mph = data ['current_observation'] ['wind_mph'];
	  
	  $('#cityDisplay').html('location');
	  $('#currentTemp').html('Math.round(temp)+"&#176;F"');
	  $('#summary').html(toTitleCase(current));
	  $('#add1').html('Time zone: ' + (tz_long));
	  $('#add2').html('Windchill in Celsius: ' + (windchill_c) + 'C');
	  $('#add3').html('Windchill in Farenheit: ' + (windchill_f) + '&#176;F');
	  $('#add3').html('Wind miles per hour: ' + (wind_mph) + 'mph');
	  
  }
  });


      $("#cover").fadeOut(250);
    }
 

  // A function for changing a string to TitleCase
  function toTitleCase(str){
    return str.replace(/\w+/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
  }
});