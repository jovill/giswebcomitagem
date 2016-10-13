requirejs.config({
	'baseUrl': '../lib',
	'paths': {
		'leaflet.wms': '/leaflet.wms' //.js'
	}
});


define(['leaflet', 'leaflet.wms'],
function (L, wms) {

	var overlayMap = createMap('map', false);
	var tiledMap = createMap('tiled-map', true);

	function createMap(div, tiled) {
		// Map configuration
		var map = L.map(div);
		map.setView([45, -93.2], 6);

		var basemaps = {
			'Other': basemap("http://otile{s}.mqcdn.com/tiles/1.0.0/{type}/{z}/{x}/{y}.png", 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>', 'Tiles &copy; <a href="http://www.mapquest.com/" target="_blank">MapQuest</a> <img src="http://developer.mapquest.com/content/osm/mq_logo.png" />').addTo(map),
			'OpenStreetMap': basemap('http://{s}.tile.osm.org/{z}/{x}/{y}.png', '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors', ''),
			'Esri': basemap('http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', '<a href="http://www.esri.com/">Esri</a>', 'i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'),
			'Blank': blank()
		};

		// Add WMS source/layers
		var source = wms.source(
			"http://layers.aryagis.com:8080/geoserver/workareas/wms",
			{
				"format": "image/png",
				"transparent": "true",
				"version": '1.1.0',
				"attribution": "<a href='http://nationalatlas.gov'>NationalAtlas.gov</a>",
				"tiled": true
			}
		);

		var layers = {
			'workareas': source.getLayer("workareas:workareas_utm_wgs84"),

		};
		for (var name in layers) {
			layers[name].addTo(map);
		}

		// Create layer control
		L.control.layers(basemaps, layers).addTo(map);

		// Opacity slider
		var slider = L.DomUtil.get('range-' + div);
		L.DomEvent.addListener(slider, 'change', function () {
			source.setOpacity(this.value);
		});
		return map;
	}

	function basemap(mqcdn,osmAttr,mqTilesAttr) {
		// Attribution (https://gist.github.com/mourner/1804938)
		var mqcdn = "http://otile{s}.mqcdn.com/tiles/1.0.0/{type}/{z}/{x}/{y}.png";
		var osmAttr = 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>';
		var mqTilesAttr = 'Tiles &copy; <a href="http://www.mapquest.com/" target="_blank">MapQuest</a> <img src="http://developer.mapquest.com/content/osm/mq_logo.png" />';


		return L.tileLayer(mqcdn, {
			'subdomains': '1234',
			'type': 'map',
			'attribution': osmAttr + ', ' + mqTilesAttr
		});
	}

	function blank() {
		var layer = new L.Layer();
		layer.onAdd = layer.onRemove = function () { };
		return layer;
	}

	// Export maps for console experimentation
	return {
		'maps': {
			'overlay': overlayMap,
			
		}
	};

});

