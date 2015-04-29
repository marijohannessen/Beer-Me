$(document).ready(function(){

$('#beerName').click(function() {
    $(this).val('');
});

$('#beerResult').hide();
    
$('#searchButton').on('click', function() {
    
    $('#beerResult').empty();
    var beername = $('#beerName').val();
    var url = "http://api.openbeerdatabase.com/v1/beers.json?callback=?&query="+beername;
    $.getJSON(url, function(response) {
        $('#beerResult').show();
        $('#beerResult').append("<span><p>"+response.beers[0].abv+"%</p></span>");
        $('#beerResult').append("<h3>"+response.beers[0].name+"</h3>");
        $('#beerResult').append("<p id='brewery'>"+response.beers[0].brewery.name+"</p>"+"<p>"+response.beers[0].description+"</p>");
    });
              
    
   /* var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
    console.log(xhr.readyState);
    if (xhr.readyState === 4) {
        console.log('got here');
        var beerInfo = JSON.parse(xhr.responseText);
        console.log(beerInfo);
    }
    }
    var url = "http://api.openbeerdatabase.com/v1/beers.json?callback=?token=35f86cffee8127fd2fad1cd3f4f455cd71180de4f4cd27585e493664111cf2ff";
    xhr.open('GET', url);
    xhr.send();   */
    
});
});