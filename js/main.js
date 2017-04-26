//  Trigger map toggle on keydown

$(document).on("keydown.", function(event){
    //console.log(event.which);
    //console.log(event);

    if (event.which == 77){
        // M pressed
        console.log('M pressed');

        // toggle map
        toggleServerMap();

    }
});

$(document).on('click', '#server-map .map-controls a', function(e){
    destroyServerMap();
});


function toggleServerMap(){
    if ($('#server-map').length){
        console.log('map is open');
        destroyServerMap();
    } else {
        console.log('map is closed');
        createServerMap();
    }
}


function createServerMap(){
    console.log('creating map');

    var mapControls =
        "<div class='map-controls'>" +
            '<a href="javascript:void(0)">'+
                'Press "M" to close map' +
            '</a>' +
        "</div>";


    var map =
        "<div id='server-map'>" +
            mapControls +
            "<div class='map-inner'>" +
            "</div>" +
        "</div>";
    map = $( map );

    $('body').append(map);
}


function destroyServerMap(){
    console.log('destroying map');
    $( "#server-map" ).remove();
}