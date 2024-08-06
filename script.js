let singapore = [ 1.29,103.85]; // #1 Singapore latlng
let map = L.map('map').setView(singapore, 13); // #2 Set the center point

// setup the tile layers
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',
{ maxZoom: 19, attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>' }).addTo(map);

//create a singaporeMarker object and add it to the map
let singaporeMarker = L.marker([1.29, 103.85]);
singaporeMarker.addTo(map);
singaporeMarker.bindPopup("<p>Singapore</p>")

singaporeMarker.addEventListener('click', function(){
    alert("Singapore");
})

let circle = L.circle([1.35166526, 103.773663572], {
    color: 'red',
    fillColor:"orange",
    fillOpacity:0.5,
    radius: 500
})

// add it to the map
circle.addTo(map);

//create a Zoo object and add it to the map
let zooMarker = L.marker([1.4026483894, 103.788013515]);
zooMarker.addTo(map);
zoo.bindPopup("<p>Zoo</p>")
