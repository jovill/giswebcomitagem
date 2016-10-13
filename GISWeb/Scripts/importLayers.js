function getbasemap(url,ref)
{
    var mapLink;
    var wholink;
    ///verifica qual é a referencia
    if (ref == "Esri")
    {
        mapLink = '<a href="http://www.esri.com/">Esri</a>';
        wholink = 'i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community';
        var esri = L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
            attribution: '&copy; ' + mapLink + ', ' + wholink,
            maxZoom: 18,
        })

        return esri;
    }
    else if(ref=="OpenStreetMap")
    {
        var open = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        });

        return open;
    }
    else if(ref=="Mapbox")
    {
        var mbAttr = 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' + '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' + 'Imagery © <a href="http://mapbox.com">Mapbox</a>';
        var mbUrl = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpandmbXliNDBjZWd2M2x6bDk3c2ZtOTkifQ._QA7i5Mpkd_m30IGElHziw';

        var streets = L.tileLayer(mbUrl, {
            id: 'mapbox.streets',
            attribution: mbAttr,



        });

        return streets
    }

  

   
}


function importMarker(lat,long,desc,map)
{
    var marker = L.marker([lat, long]).bindPopup(desc).openPopup().addTo(map);

}
function importMarker(lat, long, map) {
    var marker = L.marker([lat,long]);

}