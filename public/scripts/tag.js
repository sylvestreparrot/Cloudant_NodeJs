/**
 * Created by sylvestreparrot on 08/01/2017.
 */


var REST_DATA = 'api/favorites';
var KEY_ENTER = 13;
var defaultItems = [

];

function loadItems() {
    xhrGet(REST_DATA, function(data) {
        console.log(data);
        console.log("tag");

    }, function(err) {
        console.error(err);
    });
}
loadItems();

