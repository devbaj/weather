function kelvinToCelsius(x){
    return (x-273);
}
function celsiusToFahr(x){
    return (x * (9/5)) + 32;
}

$(document).ready(function() {

    $('form').submit(function() {
        console.log("submitted")
        var url = "http://api.openweathermap.org/data/2.5/weather?q=" + $('input[type=text][name=city]').val() + "&&appid=e6c2cdf246401ea36c85ef3da3a5cc0a";
        $.get(url, function(res) {
            var htmlStr = "<h2>" + res.name + "</h2>";
            htmlStr += "<p>Temperature: " + 
                Math.trunc(celsiusToFahr(kelvinToCelsius(res.main.temp)))
                + " degrees Fahrenheit</p>";
            console.log(htmlStr);
            $('.output').html(htmlStr);
        }, "json");
        return false;
    })
});