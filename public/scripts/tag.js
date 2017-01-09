/**
 * Created by sylvestreparrot on 08/01/2017.
 */

var flag_marker = "";

var REST_DATA = 'api/favorites';

var flag_color = [false, false, false, false, false, false];
var Center = [];


    var myCenter = new google.maps.LatLng(48.847152,2.357426);
    var mapCanvas = document.getElementById("map");
    var mapOptions = {center: myCenter, zoom: 16};
    var map = new google.maps.Map(mapCanvas, mapOptions);


    var tag = [
        {name:'Tag0', lon: 48.84520, lat: 2.35725},
        {name:'Tag1', lon: 48.84690863622004, lat: 2.3604042778015355},
        {name:'Tag2', lon: 48.848631334377586, lat: 2.3558123359680394},
        {name:'Tag3', lon: 48.847388738384716, lat: 2.3538382301330785},
        {name:'Tag4', lon: 48.84644265030536, lat: 2.355125690460227},
        {name:'Tag5', lon: 48.846033143952106, lat: 2.3547394523620824},
    ];

    for(i=0; i<6; i++){
        Center[i] = new google.maps.LatLng(tag[i].lon,tag[i].lat);
    }

    var marker1 = new google.maps.Marker({ position: Center[0],icon: '/images/tag1_red.png',map: map });
    var marker2 = new google.maps.Marker({ position: Center[1],icon: '/images/tag2_red.png',map: map });
    var marker3 = new google.maps.Marker({ position: Center[2],icon: '/images/tag3_red.png',map: map });
    var marker4 = new google.maps.Marker({ position: Center[3],icon: '/images/tag4_red.png',map: map });
    var marker5 = new google.maps.Marker({ position: Center[4],icon: '/images/tag5_red.png',map: map });
    var marker6 = new google.maps.Marker({ position: Center[5],icon: '/images/tag6_red.png',map: map });



    var flightPath = new google.maps.Polyline({
        path: [Center[0]],
        strokeColor: "#0000FF",
        strokeOpacity: 0.8,
        strokeWeight: 2
    });

    flightPath.setMap(map);

    google.maps.event.addListener(marker1, 'click', function () {
        //Change the marker icon
        if(flag_color[0] == false){
            marker1.setIcon('/images/tag1_green.png');
            flag_color[0] = true;
        }else {
            marker1.setIcon('/images/tag1_red.png');
            flag_color[0] = false;
        }
    });

    google.maps.event.addListener(marker2, 'click', function () {
        //Change the marker icon
        if(flag_color[1] == false){
            marker2.setIcon('/images/tag2_green.png');

            var path = flightPath.getPath();
            path.push(Center[1]);
            flightPath.setPath(path);

            flag_color[1] = true;
        }else {
            marker2.setIcon('/images/tag2_red.png');
            flag_color[1] = false;
        }
    });

    google.maps.event.addListener(marker3, 'click', function () {
        //Change the marker icon
        if(flag_color[2] == false){
            marker3.setIcon('/images/tag3_green.png');
            var path = flightPath.getPath();
            path.push(Center[2]);
            flightPath.setPath(path);
            flag_color[2] = true;
        }else {
            marker3.setIcon('/images/tag3_red.png');
            flag_color[2] = false;
        }
    });

    google.maps.event.addListener(marker4, 'click', function () {
        //Change the marker icon
        if(flag_color[3] == false){
            marker4.setIcon('/images/tag4_green.png');
            var path = flightPath.getPath();
            path.push(Center[3]);
            flightPath.setPath(path);
            flag_color[2] = true;
            flag_color[3] = true;
        }else {
            marker4.setIcon('/images/tag4_red.png');
            flag_color[3] = false;
        }
    });

    google.maps.event.addListener(marker5, 'click', function () {
        //Change the marker icon
        if(flag_color[4] == false){
            marker5.setIcon('/images/tag5_green.png');
            var path = flightPath.getPath();
            path.push(Center[4]);
            flightPath.setPath(path);
            flag_color[2] = true;
            flag_color[4] = true;
        }else {
            marker5.setIcon('/images/tag5_red.png');
            flag_color[4] = false;
        }
    });

    google.maps.event.addListener(marker6, 'click', function () {
        //Change the marker icon
        if(flag_color[5] == false){
            marker6.setIcon('/images/tag6_green.png');
            var path = flightPath.getPath();
            path.push(Center[5]);
            flightPath.setPath(path);
            flag_color[2] = true;
            flag_color[5] = true;
        }else {
            marker6.setIcon('/images/tag6_red.png');
            flag_color[5] = false;
        }
    });

    //setMarkers(map);

function loadJson() {

    xhrGet(REST_DATA, function(data) {


        console.log(data);
        //flag_marker = data.payload.data;
        //console.log("load data");
        //console.log(flag_marker);
        console.log("load data");

    }, function(err) {
        console.error(err);
    });
}

loadJson();

/*
setInterval(function(){
    loadJson();
    console.log("...");
    if(flag_marker == "01020304"){
        marker2.setIcon('/images/tag2_green.png');
        console.log("on tag");
    }
    else{
        marker2.setIcon('/images/tag2_red.png');
        console.log("on tag pas");

    }
}, 10000)
*/
