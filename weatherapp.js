$(document).ready(function() {

  //API pulls my current locaiton
  $.getJSON('https://freegeoip.net/json/')
    .done(function(location) {

      $('#country').html(location.country_name);
      $('#country_code').html(location.country_code);
      $('#region').html('State: ' + location.region_name);
      $('#region_code').html(location.region_code);
      $('#city').html('City: ' + location.city);
      $('#latitude').html('Latitude: ' +location.latitude);
      $('#longitude').html('Longitude: ' +location.longitude);
      $('#timezone').html(location.time_zone);
      $('#ip').html(location.ip);
      // Created variables to equal the api calls
      //var cLat = location.latitude;
      //var cLong = location.longitude;
      var city = location.city;
      var state = location.region_code;

      var api = "http://api.wunderground.com/api/e965f90a6099f5ce/conditions/forecast/q/autoip.json";
      $.getJSON(api, function(data) {
          var tempswitch = true;
        //var r = parse(data)
       // $('#temp').html("Temperature: " + data.current_observation.temp_f)
        var tempf = data.current_observation.temp_f;
        var tempc = data.current_observation.temp_c;
        var lat = data.current_observation.observation_location.latitude;
        var long = data.current_observation.observation_location.longitude;
        var feelLikef = data.current_observation.feelslike_f;
        var feelLikec = data.current_observation.feelslike_c;

        var oTime = data.current_observation.observation_time;

        console.log(data.current_observation);
        $('#time').html(oTime);

        $('#state').html('State: ' + state)
        $('#temp').html("Current Temperature: " + tempf + "F")
        $('#feelL').html("Feels Like: " + feelLikef + "F")

        $('.btn').click(function(){
          if (tempswitch === false){
            $('#temp').html('Current Temperature: ' + tempc +"C");
            $('#feelL').html("Feels Like: " + feelLikec + "C")

            tempswitch = true;
          }else {
            $('#temp').html("Current Temperature: " + tempf +'F')
            $('#feelL').html("Feels Like: " + feelLikef +"F")

            tempswitch = false;
          }
        })

        /*$('#data').html(
          oTime+"<br>Latitude: "
        + cLat + " <br>Longitude: "
        + cLong + '<br>City: '
        + city + '<br>State: '
        + state + '<br>Temperature: '
        + tempf + "<br>Feels Like: "
        + feelLike)*/

        console.log(data.current_observation)
      });

    });
});
//dataType : "jsonp",
/*success : function(parsed_json) {
var location = parsed_json['location']['city'];
var temp_f = parsed_json['current_observation']['temp_f'];
alert("Current temperature in " + location + " is: " + temp_f);
}*/
