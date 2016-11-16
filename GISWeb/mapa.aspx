<%@ Page Language="C#" AutoEventWireup="true"  MasterPageFile="~/Site.Master" CodeBehind="mapa.aspx.cs" Inherits="GISWeb.mapa" %>

<asp:Content runat="server" ContentPlaceHolderID="head">
         <title>Leaflet</title>
    <link rel="stylesheet" href="http://cdn.leafletjs.com/leaflet/v0.7.7/leaflet.css" />
    <script src="http://cdn.leafletjs.com/leaflet/v0.7.7/leaflet.js"></script>
    <script type="text/javascript" src="http://code.jquery.com/jquery-1.9.1.js"></script>
    <script src="Scripts/jquery.js" type="text/javascript"></script>
    <script type="text/javascript" src="../dist/Leaflet.Coordinates-0.1.5.min.js"></script>
	<link rel="stylesheet" href="../dist/Leaflet.Coordinates-0.1.5.css"/>
  <%--   <script src="../lib/require.js" data-main="app"></script>
  
    <link rel="stylesheet" type="text/css" href="../lib/leaflet.css"/>--%>
    <script src="/dist/Leaflet-WFST.src.js"></script>
    <script src="src/L.TileLayer.BetterWMS.js"></script>
    <%--<script src="src/leaflet.wms.js"></script>--%>
   
    
   
    <style>
        
            html, body, #map {
            margin: 0;
             height: 100%;
             width: 100%; 
            

             }
           
    </style>
    </asp:Content>

    


    <asp:Content runat="server" ContentPlaceHolderID="body">
         <form autocomplete="off" runat="server" class="form-inline" style="width: 100%;" name="myForm" novalidate>
             </form>

       
             <div id="map"style="width:100%;"></div>
            
       

    <script>

        var marker1 = new Array();
        var ilum = L.layerGroup();


       mapLink = '<a href="http://www.esri.com/">Esri</a>';
        wholink = 'i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community';
        var esri = L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
            attribution: '&copy; ' + mapLink + ', ' + wholink,
            maxZoom: 22,
        })

        var grayscale = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
            maxZoom:18
        });

        var mbAttr = 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
				'<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
				'Imagery © <a href="http://mapbox.com">Mapbox</a>'
        var mbUrl = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpandmbXliNDBjZWd2M2x6bDk3c2ZtOTkifQ._QA7i5Mpkd_m30IGElHziw';


        streets = L.tileLayer(mbUrl, { id: 'mapbox.streets', attribution: mbAttr });

        var marker = L.marker([-19.951013, -44.026161]);


        var map = L.map('map', {
            layers: esri,
           
        }).setView([-19.0000, -43.0000], 8);


        getPontos("TESTE");


        var url = 'http://www.aryagis.com/arcgis/services/CLI008/16008A/MapServer/WMSServer';

        var codemig=L.tileLayer.betterWms(url, {
            layers: '1',
            transparent: true,
            attribution: "Ortofoto",
            format: 'image/png',
            tiled: true,
            maxZoom: 22
            
        }).addTo(map);
       


        //var codemig = L.tileLayer.wms("http://demo.opengeo.org/geoserver/wms", {
        //    layers: 'topp:tasmania_state_boundaries',
        //    format: 'image/png',
        //    version: '1.1.0',
        //    transparent: true,
        //    attribution: "Arya Inventário Territorial",
        //    tiled: true
        //}).addTo(map);


        /////////////////////////ICON

        var greenIcon = L.icon({
            iconUrl: 'lib/images/marker-icon-green.png',
            shadowUrl: 'lib/images/marker-shadow.png',

            iconSize: [20, 35], // size of the icon
            shadowSize: [25, 40], // size of the shadow
            iconAnchor: [20, 35], // point of the icon which will correspond to marker's location
            shadowAnchor: [4, 40],  // the same for the shadow
            popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
        });
        var redIcon = L.icon({
            iconUrl: 'lib/images/marker-icon-red.png',
            shadowUrl: 'lib/images/marker-shadow.png',

            iconSize: [20, 35], // size of the icon
            shadowSize: [25, 40], // size of the shadow
            iconAnchor: [20, 35], // point of the icon which will correspond to marker's location
            shadowAnchor: [4, 40],  // the same for the shadow
            popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
        });




        //////////////////////
      

     

   
        var roads = new L.WFS({
                url: 'http://demo.opengeo.org/geoserver/ows',
                typeNS: 'topp',
                typeName: 'tasmania_roads',             
                geometryField: 'the_geom',
                style: {
                    color: 'blue',
                    weight: 2
                }
        }, new L.Format.GeoJSON({ crs: L.CRS.EPSG4326 }))
        .addTo(map);


        
        var baseMaps = {
            "OpenStreetMap": grayscale,
            "Streets": streets,
            "Esri": esri     

        };
        
       
        var overlayMaps = {
            "REMO ": ilum,
            //"WFS": boundaries,
            //"WFSLayer": WFSLayer
            "WMS": codemig,
            "Ruas_Taz":roads
        };
        L.control.scale().addTo(map);
        L.control.layers(baseMaps, overlayMaps).addTo(map);

       
        
        

        ///////////////////////////////////banco

        function getPontos(prefix) {

            $.ajax({
                url: '<%=ResolveUrl("~/service.asmx/GetIlu") %>',
                type: "POST",
                data: "{ 'prefix': '" + prefix + "'}",
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function (data) {
                    var parsed = $.parseJSON(data.d);

                    
                    $.each(parsed, function (i, jsondata) {
                        if (jsondata.COD_ILUM_FK != "" || jsondata.COD_ILUM_FK != "NULL")
                        {
                            var LamMarker = L.marker([jsondata.Y, jsondata.X], { id: jsondata.ID_ILUMINACAO_PUBLICA,icon: greenIcon}).on('click', markerOnClick).addTo(map);
                        }
                        else
                        {
                            var LamMarker = L.marker([jsondata.Y, jsondata.X], { id: jsondata.ID_ILUMINACAO_PUBLICA, icon: redIcon }).on('click', markerOnClick).addTo(map);
                        }
                       
                        //marker1.push(LamMarker);
                        ilum.addLayer(LamMarker);
                       
                        //tableProp += '<tr><td style="white-space: nowrap;padding-left: 10px; padding-right: 10px; border-right: 1px solid #cccccc;">' + jsondata.NOME + '</td ><td style="white-space: nowrap;padding-left: 10px; padding-right: 10px; border-right: 1px solid #cccccc; ">' + jsondata.CPF + '</td ><td style="white-space: nowrap;"><center><span style="cursor: pointer;" onClick="removeProp(' + jsondata.COD_PROPRIETARIO_PK + ',' + jsondata.COD_EMPRESA_PK + ',\'' + jsondata.CPF + '\')" class="glyphicon glyphicon-remove "></span></center></td></tr>';
                    });                   
                    map.addLayer(ilum);

                },
                error: function (XHR, errStatus, errorThrown) {
                    var err = JSON.parse(XHR.responseText);
                    errorMessage = err.Message;
                    alert(errorMessage);
                }
            });
        };

        function markerOnClick(e) {
            alert("Ta vendo é por que ta funcionando." + this.options.id + " MISERAVIII " + e.latlng);
        }
        function onClick(e) {
            alert(this.getLatLng());
            
        }

        L.control.coordinates().addTo(map);

        /////////////////////MOUSE MOVE
    
      
        /////////////////////////////////////////////

        
        //marker.on('click', function (e) {
        //    marker.bindPopup('Arya invetário Territorial.');
        //});
        
        //var popup = L.popup();
        ///////////////////////////////////click
        function onMapClick(e) {
           // document.getElementById('globespotterAPI').style.display = 'block';
           // $("#globespotterAPI").load("API/teste.html?latlng=" + e.latlng.lng + ',' + e.latlng.lat);
           // $("#globespotter").load("API/index.html?latlng=" + e.latlng.lng + ',' + e.latlng.lat);
            //window.open("API/index.html?latlng=" + e.latlng.lng + ',' + e.latlng.lat);
            popupwindow("API/index.html?latlng=" + e.latlng.lng + ',' + e.latlng.lat,"GlobeSpotter",650,500)
        }

        map.on('click', onMapClick);
       
        function popupwindow(url, title, w, h) {
            wLeft = window.screenLeft ? window.screenLeft : window.screenX;
            wTop = window.screenTop ? window.screenTop : window.screenY;

            var left = wLeft + (window.innerWidth / 2) - (w / 2);
            var top = wTop + (window.innerHeight / 2) - (h / 2);
            return window.open(url, title, 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left + ', screenX=' + left + ', screenY=' + top);
        }

    </script>
        </asp:Content>
   
    
