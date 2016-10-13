// **************************************************************************************************
// Various constants used by the GlobeSpotter API
// **************************************************************************************************

// Types used with the "setApplicationParameter" function.
var APP_PARAM_TYPE_URL_RECORDING_LOCATION_SERVICE = 1;
var APP_PARAM_TYPE_URL_ADDRESS_SERVICE = 2;
var APP_PARAM_TYPE_URL_TILE_SERVICE = 3;
var APP_PARAM_TYPE_SRS_NAME_MAP = 4;
var APP_PARAM_TYPE_API_KEY = 5;

// Viewer click modes used with the setViewerClickMode function.
var VIEWER_CLICK_MODE_X_Y = 1;
var VIEWER_CLICK_MODE_H_V = 2;
var VIEWER_CLICK_MODE_VECTOR = 3;

// The various drawing modes used to draw markers on a drawing layer of a
// specific viewer.
var DRAWING_MODE_POINT = 1;
var DRAWING_MODE_URL_IMAGE = 2;
var DRAWING_MODE_CROSS_HAIR = 3;

// Useful definitions for parsing entity data objects.
var ENTITY_TYPE_HEIGHT = "heightEntityType";
var ENTITY_TYPE_AREA = "areaEntityType";
var ENTITY_TYPE_VOLUME = "volumeEntityType";

// Defines the window layout
var VIEWER_WINDOW_LAYOUT_HORIZONTAL = 1;
var VIEWER_WINDOW_LAYOUT_VERTICAL = 2;

// Useful definitions for parsing entity data objects.
var ENTITY_TYPE_POINT = "pointEntityType";
var ENTITY_TYPE_LINE = "lineEntityType";

// Defines for the map click mode.
var MAP_CLICK_MODE_WORLD_X_Y = 1;
var MAP_CLICK_MODE_X_Y = 2;

var MAP_BASE_LAYER_WMS_TYPE = 1;
var MAP_BASE_LAYER_WFS_TYPE = 2;
var MAP_BASE_LAYER_OSM_TYPE = 3;

var ABS_MAX_VIEWERS = 6;


// **************************************************************************************************
// Common input
// **************************************************************************************************

var SRS_NAME_VIEWER = "EPSG:4326";
var SRS_NAME_ADDRESS = "EPSG:4326";
var SRS_NAME_MAP = "EPSG:4326";

var ADDRESS_LANGUAGE_CODE = "pt";
var ADDRESS_DATABASE = "cmdatabase";

// **************************************************************************************************
// Utility functions
// **************************************************************************************************

function ViewerParameters(yaw, pitch, hFov, dateFrom, dateTo) {
    this.yaw = yaw;
    this.pitch = pitch;
    this.hFov = hFov;
    this.dateFrom = dateFrom;
    this.dateTo = dateTo;
}

function Point2D(x, y) {
    this.x = x;
    this.y = y;
}

/**
 * Representation of a 3D point, referenced in the coordinate system used by the
 * API.
 */
function Point3D(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
}

function Extent(
    xmin,
    ymin,
    xmax,
    ymax
) {
    this.xmin = xmin;
    this.ymin = ymin;
    this.xmax = xmax;
    this.ymax = ymax;
}

function WMS(
    url,
    layers,
    version,
    transparent,
    tiled,
    bgColor,
    maxExtent,
    maxResolution,
    maxZoomLevel,
    featureZoomLevel
) {
    this.url = url;
    this.layers = layers;
    this.version = version;
    this.transparent = transparent;
    this.tiled = tiled;
    this.bgColor = bgColor;
    this.maxExtent = maxExtent;
    this.maxResolution = maxResolution;
    this.maxZoomLevel = maxZoomLevel;
    this.featureZoomLevel = featureZoomLevel;
}

function OSM(
    url,
    maxExtent,
    maxResolution,
    maxZoomLevel,
    featureZoomLevel
) {
    this.url = url;
    this.maxExtent = maxExtent;
    this.maxResolution = maxResolution;
    this.maxZoomLevel = maxZoomLevel;
    this.featureZoomLevel = featureZoomLevel;
}

/**
 * Random color.
 *
 * @param minChannelIntensity
 *            Optional paramater that defines the minimum intensity for each color channel.
 */
function randomColor() {
    var min = arguments.length == 1 ? arguments[0] : 0;
    var r = min + Math.round((255 - min) * Math.random());
    var g = min + Math.round((255 - min) * Math.random());
    var b = min + Math.round((255 - min) * Math.random());

    return r * 65536 + g * 256 + b;
}

function apiReady() {
    var api = $("#japi");
    var ready = api.getAPIReadyState();

    if (!ready) {
        alert("API not ready.");
    }

    return ready;
}