<!--

// **************************************************************************************************
// API interface defined by major release version: v2.6 (rev 2736)
// **************************************************************************************************

// **************************************************************************************************
// "Constants"...
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

// The various drawing modes used to draw markers on a drawing layer of a specific viewer.
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
// General API.
//      Functions.
// **************************************************************************************************

    /**
     * Returns the language code used for address related image searches.
     *
     * @return code         A language code [String].
     */
    // var code = japi.getAddressLanguageCode();

    /**
     * Returns if the API is ready for general use.
     *
     * @return readyState   The ready state of the API [Boolean].
     */
    // var readyState = japi.getAPIReadyState();

    /**
     * Returns the minimum date from the enabled date range.
     *
     * @return dateFrom  An ISO8601 date time string [String].
     */
    // var dateFrom = japi.getDateFrom();

    /**
     * Returns the maximum date from the enabled date range.
     *
     * @return dateTo  An ISO8601 date time string [String].
     */
    // var dateTo = japi.getDateTo();

    /**
     * Returns the locale of the language used.
     *
     * @return locale       The locale of a language [String].
     */
    // var locale = japi.getLanguageLocale();

    /**
     * Returns the major release version of the current application. It indicates global changes within
     * the application and can be used for debugging purposes. Global changes may indicate a change in
     * the interface of the application.
     *
     * @return version      The major release version [String].
     */
    // var majorVersion = japi.getMajorVersion();

    /**
     * Returns the minor release version of the current application. It indicates minor changes within
     * the application and can be used for debugging purposes (specify bugs).
     *
     * @return version      The minor release version [String].
     */
    // var minorVersion = japi.getMinorVersion();

    /**
     * Returns the permissions of the user based on his/her credentials.
     *
     * @return permissions  Permissions of the user based on his/her credentials [Object].
     */
    // var permissions = japi.getPermissions();


    /**
     * Get the supported language locales of the API.
     *
     * @return locales      A list of supported language locales [Array].
     */
    // var locales = japi.getSupportedLanguageLocales();

    /**
     * Returns whether or not a date range is used with image searches or when viewing recording locations.
     *
     * @return useDateRangeEnabled state of using a date range [Boolean].
     */
    // var useDateRangeEnabled = japi.getUseDateRange();

    /**
    * The address language code determines the database used for address lookups.
    * <p/>
    * It is required when initializing the API and results in an API failed if an invalid code is set. It can be
    * changed even after the API has been initialized, potentially allowing lookups for multiple countries.
    *
    * @param code       The address language code.
    * @throws Error     If an invalid code is used.
    */
    // japi.setAddressLanguageCode(code);

    /**
    * Set the API key to identify the integrator of a GlobeSpotter API component.
    *
    * @param key        The API key.
    * @throws Error     If the API key is not valid.
    */
    // japi.setAPIKey(key);

    /**
    * Sets the minimum date for requesting images within a certain date range or viewing recording locations between
    * a certain date range. Its value has to be smaller than that of the <code>dateTo</code> and is not allowed to be
    * <code>null</code>.
    *
    * @param dateFrom   An ISO8601 date time string.
    */
    // japi.setDateFrom(dateFrom);

    /**
    * Sets the maximum date for requesting images within a certain date range or viewing recording locations between
    * a certain date range. Its value has to be larger than that of the <code>dateFrom</code>. It is allowed to be
    * <code>null</code> for requesting up until the current date time.
    *
    * @param dateTo   An ISO8601 date time string.
    */
    // japi.setDateTo(dateTo);

    /**
     * Set the language locale to be used by the API.
     *
     * @param locale        The locale of a language [String].
     * @return success      If the locale is supported [Boolean].
     */
    // var success = japi.setLanguageLocale(locale);

    /**
     * Set the value of an application parameter. These parameters are required in order to be able to
     * use the API. The type dictates which parameter is set:
     * <ul>
     * <li>
     * TYPE_URL_RECORDING_LOCATION_SERVICE<br>
     * This type is used to set the recording location service URL. This services is used to obtain
     * positioning meta data of an image and allows for various spatial data requests.
     * </li>
     * <li>
     * TYPE_URL_ADDRESS_SERVICE<br>
     * This type is used to set the address service URL. This service allows for various spatial requests
     * based on address data.
     * </li>
     * <li>
     * TYPE_URL_TILE_SERVICE<br>
     * This type is used to set the tile service URL. This service is used to obtain images.
     * </li>
     * </ul>
     *
     * @param value         The value of the parameter [String].
     * @param type          The parameter type specifies what the value parameter means [uint].
     * @throws Error        An error is thrown if an invalid value or type is entered.
     * @see com.cyclomedia.utils.ApplicationParameters
     */
    // japi.setServiceURL(url);

    // japi.setSRSNameAddress(srsName);

    /**
     * Set the viewer spatial reference system using an srs name (e.g. EPSG:28992).
     *
     * @param srsName       The name of a spatial reference system.
     * @throws Error        If null or "" is entered, or if the srsName is not supported.
     */
    // japi.setSRSNameViewer(srsName);

    /**
     * Set TID.
     *
     * @param TID           The temporary identification string.
     * @throws Error        If null or "" is entered.
     */
    // japi.setTID(TID);

    /**
    * The useDateRange property influences how images are requested and which recording locations can
    * be viewed within cycloramas and on the map. If set to true, images are only requested between a
    * set date range and recording locations can only shown if their recordedAt property falls within
    * the date range. If set to false, only the most recent recording locations are shown or used for
    * requesting images.
    * <p/>
    * The date range can be adjusted using the setDateFrom and setDateTo functions.
    *
    * @param useDateRange   Use a date range.
    */
    // japi.setUseDateRange(useDateRange);

    /**
     * Set user credentials.
     *
     * @param userName      The user name part of the credentials.
     * @param password      Password part of the credentials.
     * @throws Error        If null or "" is entered.
     */
    // japi.setUserNamePassword(userName, password);


    // **************************************************************************************************
    // General API.
    //      Events.
    // **************************************************************************************************

    /**
     * Indicates to the host that the API failed to initialize.
     */
    function hst_apiFailed() { }

    /**
     * Indicates to the host that the API is ready for use. Full API functionality should be available
     * based on the user's credentials.
     */
    function hst_apiReady() { }

    /**
     * Indicates to the host that the component is ready for use. After this event the user is able to
     * set various required application parameters to be able to use the components API functionality.
     */
    function hst_componentReady() { }


    // **************************************************************************************************
    // Opening images.
    //      Functions.
    // **************************************************************************************************

    /**
    * This function attempts to open an image using an image id. An initial yaw, pitch and horizontal
    * field of view can be set using a parameter object having the following properties:<br/>
    * <ol>
    * <li>yaw [float] in degrees</li>
    * <li>pitch [float] in degrees</li>
    * <li>hFov [float] in degrees</li>
    * </ol>
    *
    * @param imageID        The request value [String].
    * @param viewerParams   Details about how to open an image (optional)[Object]. Default is null.
    * @throws Error         If the value, type, or id parameters are invalid, or if the maximum amout of viewers is reached.
    * @see OpenImageType
    * @see ErrorType
    */
    // japi.openImage(imageID, viewerParams);

    /**
     * This function attempts to open an image via a coordinate or address.
     *
     * @param value          The request value [String].
     * @param count          The amount of viewer to open [int]
     * @throws Error         If the value, type, or id parameters are invalid, or if the maximum amout of viewers is reached.
     * @see ErrorType
     */
    // japi.openNearestImage(value, count);


    // **************************************************************************************************
    // Opening and closing images/viewers.
    //      Events.
    // **************************************************************************************************

    /**
     * Indicates to the host the result of an open image call failed
     *
     * @param request       The originating request [String] (input value of CALL_OPEN_IMAGE)
     */
    function hst_openImageFailed(request) { }

    /**
     * Indicates to the host the result of an open image call (see CALL_OPEN_IMAGE)
     *
     * @param request       The originating request [String] (input value of CALL_OPEN_IMAGE)
     * @param opened        Indicates of the request could be opened in a viewer window [Boolean].
     * @param imageID       The imageID that was to be opened [String].
     */
    function hst_openImageResult(request, opened, imageID) { }

    /**
     * Indicates to the host the result of an open image call (see CALL_OPEN_NEAREST_IMAGE)
     *
     * @param request       The originating request [String] (input value of CALL_OPEN_IMAGE)
     * @param opened        Indicates of the request could be opened in a viewer window [Boolean].
     * @param imageID       (Optional) The imageID that was to be opened (if available) [String].
     * @param position      (Optional) The position on which the nearest result is based (if
     * available). An object having <i>x</i> and <i>y<i/> and <i>z<i/> as properties [Object].
     */
    function hst_openNearestImageResult(request, opened, imageID, position) { }


    // **************************************************************************************************
    // Viewer properties and interaction.
    //      Functions.
    // **************************************************************************************************

    /**
     * Gets the gamma of a viewer.
     *
     * @param viewerID       The viewer id [uint].
     * @return gamma         A gamma value within the range of [0.1..3.0] [Number].
     * @throws Error         If the viewer id does not exist [Object].
     */
    // var gamma = japi.getBrightness(viewerID);

    /**
     * Gets the horizontal field of view in degrees.
     *
     * @param viewerID       The viewer id of which to obtain its meta data [uint].
     * @return hFov          The horizontal field of view in degrees [Number].
     * @throws Error         If the viewer id does not exist [Object].
     */
    // var hFov = japi.getHFov(viewerID);

    /**
     * Gets the image id of a viewer.
     *
     * @param viewerID       The viewer id of which to obtain its meta data [uint].
     * @return imageID       The id of the image or null if the viewer does not have an open image. [String].
     * @throws Error         If the viewer id does not exist [Object].
     */
    // var imageID = japi.getImageID(viewerID);

    /**
     * Gets the draw distance of the overlays on a viewer.
     *
     * @param viewerID       The viewer id. [uint].
     * @return distance      The distance in meters [Number].
     */
    // var distance = japi.getOverlayDrawDistance(viewerID);

    /**
     * Gets the vertical orientation of a view in degrees.
     *
     * @param viewerID       The viewer id of which to obtain its meta data [uint].
     * @return pitch         The vertical orientation of the view in degrees [Number].
     * @throws Error         If the viewer id does not exist [Object].
     */
    // var pitch = japi.getPitch(viewerID);

    /**
     * Gets the recording location meta data of an opened image by viewer id. The recording location is
     * returned as an object, having the following properties:
     * <ul>
     * <li>
     * id [String]<br/>
     * The recording location id, which is equal to the image id.
     * </li>
     * <li>
     * recordedAt [String]<br/>
     * The recording date and time as an ISO 8601 DateTime string.
     * </li>
     * <li>
     * usedInMeasurements [Boolean]<br/>
     * A value of false indicates that this recording location is not taken into account when calculating
     * the quality of a measurement. This means that it is not advised to manipulate measurement entities
     * in viewers for which its corresponding recording location has this flag set to false. DCR7 or newer
     * mobile recording systems have this value set to true.
     * </li>
     * <li>
     * x [Number]<br/>
     * The x-element of the recording location defined in the set srs name.
     * </li>
     * <li>
     * y [Number]<br/>
     * The y-element of the recording location defined in the set srs name.
     * </li>
     * <li>
     * z (optional)[Number]<br/>
     * The z-element of the recording location defined in the set srs name.
     * </li>
     * <li>
     * height (optional)[Number]<br/>
     * If the srs used by the API defines a 2D system, but the original data
     * comes from a 3D system, the z-element of the 3D system is added to
     * the recording location as a height element.
     * </li>
     * <li>
     * sx (optional)[Number]<br/>
     * The x-element of the recording location standard deviations in meters.
     * </li>
     * <li>
     * sy (optional)[Number]<br/>
     * The y-element of the recording location standard deviations in meters.
     * </li>
     * <li>
     * sz (optional)[Number]<br/>
     * The z-element of the recording location standard deviations in meters.
     * </li>
     * <li>
     * sHeight (optional)[Number]<br/>
     * The standard deviations in meters of the height element.
     * </li>
     * </ul>
     *
     * @param viewerID       The viewer id of which to obtain its meta data [uint].
     * @return recLoc        The recording location meta data as an object [Object].
     * @throws Error         If the viewer id does not exist [Object].
     * @see ExternalBAPI.CALL_SET_APPLICATION_PARAMETER
     */
    // var recLoc = japi.getRecordingLocation(viewerID);

    /**
     * Gets the color associated with the specified viewer window. The window colors provide a
     * visual reference between opened location features on the map and its respective
     * viewer window.
     *
     * @param viewerID       A reference to a viewer window [uint].
     * @return color         The color of the viewer window canvas as an RGB value. The two most significant bytes encode the color red [uint].
     * @throws Error         If the referenced viewer does not exist.
     */
    // var color = getViewerBorderColor(viewerID);

    /**
     * Gets the viewer click mode.
     *
     * @return clickMode    The click mode [uint].
     * @see ExternalBAPI.CALL_SET_VIEWER_CLICK_MODE
     */
    // var clickMode = getViewerClickMode();

    /**
     * Gets a screenshot of a viewer. The screenshot is returned as an object, containing a <i>width</i>, <i>height</i>
     * and <i>data</i> property.
     * <p/>
     * The <i>data</i> property consists of the base64 encoded pixel values of the image, where each pixel is
     * represented by a uint. Each uint holds an RGB value of which the two most significant bytes reference the
     * color red.
     * @param viewerID       The viewer that the viewshot is to be taken from [uint].
     * @return screenshot    An object containing screenshot data [Object].
     */
    // var screenshot = japi.getViewerScreenshot(viewerID);

    /**
     * Gets the horizontal orientation of a view in degrees.
     *
     * @param viewerID       The viewer id of which to obtain its meta data [uint].
     * @return yaw           The horizontal orientation of the view in degrees [Number].
     * @throws Error         If the viewer id does not exist [Object].
     */
    // var yaw = japi.getYaw(viewerID);

    /**
     * Centers the view direction of a viewer to a terrestrial coordinate as defined by the spatial
     * reference system used within the API.
     *
     * @param viewerID       The viewer of which to change its view direction [uint].
     * @param x              The x-element of a terrestrial coordinate [Number].
     * @param y              The y-element of a terrestrial coordinate [Number].
     * @param z              The z-element of a terrestrial coordinate (optional)[Number].
     * @throws Error         If the viewer id is incorrect.
     */
    // japi.lookAtCoordinate(viewerID, x, y , z);

    /**
     * Rotate a viewer downwards by a certain angle in degrees.
     *
     * @param viewerID       The viewer id of which to obtain its meta data [uint].
     * @param value          A rotation value in degrees [Number].
     * @throws Error         If the viewer id does not exist [Object].
     */
    // japi.rotateDown(viewerID, value);

    /**
     * Rotate a viewer to the left by a certain angle in degrees.
     *
     * @param viewerID       The viewer id of which to obtain its meta data [uint].
     * @param value          A rotation value in degrees [Number].
     * @throws Error         If the viewer id does not exist [Object].
     */
    // japi.rotateLeft(viewerID, value);

    /**
     * Rotate a viewer to the right by a certain angle in degrees.
     *
     * @param viewerID       The viewer id of which to obtain its meta data [uint].
     * @param value          A rotation value in degrees [Number].
     * @throws Error         If the viewer id does not exist [Object].
     */
    // japi.rotateRight(viewerID, value);

    /**
     * Rotate a viewer upwards by a certain angle in degrees.
     *
     * @param viewerID
     * @param value          A rotation value in degrees [Number].
     * @throws Error         If the viewer id does not exist [Object].
     */
    // japi.rotateUp(viewerID, value);

    /**
     * Sets the gamma of a viewer.
     *
     * @param viewerID       The viewer id. [uint].
     * @param gamma          A gamma value within the range of [0.1..3.0] [Number].
     * @throws Error         If the viewer id does not exist [Object].
     */
    // japi.setBrightness(viewerID, gamma);

    /**
     * Sets the horizontal field of view in degrees.
     *
     * @param viewerID       The viewer id of which to set its meta data [uint].
     * @param hFov           The horizontal field of view in degrees [Number].
     * @throws Error         If the viewer id does not exist [Object].
     */
    // japi.setHFov(viewerID, hFov);

    /**
     * Sets the draw distance of the overlays on a viewer
     *
     * @param viewerID       The viewer id. [uint].
     * @param distance       The distance in meters [Number].
     * @throws Error         If the viewer id does not exist [Object].
     */
    // japi.setOverlayDrawDistance(viewerID, distance);

    /**
     * Sets the vertical orientation of a view in degrees.
     *
     * @param viewerID       The viewer id of which to set its meta data [uint].
     * @param pitch          The vertical angle of the view [Number].
     * @throws Error         If the viewer id does not exist [Object].
     */
    // japi.setPitch(viewerID, pitch);

    /**
     * Sets the viewer click mode. The click mode defines the behaviour of the viewer clicked event. The
     * following modes are defined:
     * <ul>
     * <li>
     * X_Y=1<br>
     * The image coordinates within the current view. The center coordinate of the top left pixel is
     * defined to be (0.5, 0.5). The viewer clicked event returns x and y values.
     * </li>
     * <li>
     * H_V=2<br>
     * Horizontal and vertical spherical coordinates within the entire image (cyclorama). The center of
     * the image is defined to be (0.0, 0.0). The viewer clicked event returns H and V values.
     * </li>
     * <li>
     * VECTOR=3<br>
     * Unit vector x, y and z coordinates that define the location within the image. The center of the
     * image is defined to be (0.0, 1.0, 0.0). The viewer clicked event returns x, y and z values.
     * </li>
     * </ul>
     *
     * @param clickMode     The click mode [uint].
     * @throws Error        Type error if an invalid mode is set [Object].
     * @see ExternalBAPI.HST_EVENT_VIEWER_CLICKED
     */
    // japi.setViewerClickMode(clickMode);

    /**
     * Sets the horizontal orientation of a view in degrees.
     *
     * @param viewerID       The viewer id of which to set its meta data [uint].
     * @param yaw            The horizontal angle of the view [Number].
     * @throws Error         If the viewer id does not exist [Object].
     */
    // japi.setYaw(viewerID, yaw);

    /**
     * Opens 'Image information' dialog containing the metadata of the current image
     *
     * @param viewerID
     */
    // japi.showImageInformation(viewerID);

    /**
     * Centers the map on the viewer and indicates its location highlighting it.
     *
     * @param viewerID
     */
    // japi.showViewerLocationOnMap(viewerID);

    /**
     * Opens system print dialog for printing the current image
     *
     * @param viewerID
     */
    // japi.showViewerPrintDialog(viewerID);

    /**
     * Opens 'Save image as...' dialog
     *
     * @param viewerID
     */
    // japi.showViewerSaveDialog(viewerID);

    /**
     * Zoom the viewer to its maximum level.
     *
     * @param viewerID
     */
    // japi.zoomViewerToMaxLevel(viewerID);

    /**
     * Zoom the viewer to its medium level.
     *
     * @param viewerID
     */
    // japi.zoomViewerToMedLevel(viewerID);

    /**
     * Zoom the viewer to its minimum level.
     *
     * @param viewerID
     */
    // japi.zoomViewerToMinLevel();


    // **************************************************************************************************
    // Viewer properties and interaction.
    //    Viewer events.
    // **************************************************************************************************

    /**
     * Indicates to the host that the image was changed within a certain viewer. This event occurs after
     * the openImage function has been called, after clicking on a recording location, etc.
     *
     * @param viewerID       The id of the viewer of which its image changed.
     */
    function hst_imageChanged(viewerID) { }

    /**
     * Indicates to the host that the entire high resolution image has been loaded.
     *
     * @param viewerID       The id of the viewer that loaded the entire image.
     */
    function hst_imageCompleted(viewerID) { }

    /**
     * Indicates to the host that any part of the image could not be completely loaded. This means
     * that the event is dispatched when either the preview or any segment fails to load.
     *
     * @param viewerID       The id of the viewer that loaded the entire image.
     */
    function hst_imageFailed(viewerID) { }

    /**
     * Indicates to the host that the preview of an image completed. The preview is a low resolution
     * image that is used to quickly show a result and give the user the experience of progress.
     *
     * @param viewerID       The id of the viewer that loaded the image preview.
     */
    function hst_imagePreviewCompleted(viewerID) { }

    /**
     * Indicates to the host that a segment of the high resolution image has been loaded.
     *
     * @param viewerID       The id of the viewer that loaded the image segment.
     */
    function hst_imageSegmentLoaded(viewerID) { }

    /**
     * Indicates to the host that the current view is changed due to a change in zoom level and / or
     * orientation.
     *
     * @param viewerID       The id of the viewer that loaded its entire view.
     * @param yaw            The horizontal orientation of the viewer in degrees [Number].
     * @param pitch          The vertical orientation of the viewer in degrees [Number].
     * @param hFov           The horizontal view angle of the viewer in degrees [Number].
     * @see ExternalBAPI.CALL_SET_YAW
     * @see ExternalBAPI.CALL_SET_PITCH
     * @see ExternalBAPI.CALL_SET_HFOV
     */
     function hst_viewChanged(viewerID, yaw, pitch, hFov) { }

    /**
     * Indicates to the host that the user clicked on a viewer. The parameters of the function depend on
     * the viewer click mode.
     *
     * @param viewerID      The id of the clicked viewer [uint].
     * @param c0            Click parameter 0 [Number].
     * @param c1            Click parameter 1 [Number].
     * @param c2            Click parameter 2 (optional)[Number].
     * @see ExternalBAPI.CALL_SET_VIEWER_CLICK_MODE
     */
    function hst_viewClicked(c0, c1, c2) { }

    /**
     * Indicates to the host that all image parts of the current view have been completely loaded.
     *
     * @param viewerID       The id of the viewer that loaded its entire view.
     */
    function hst_viewLoaded(viewerID) { }


    // **************************************************************************************************
    // Viewer functionalities (CycloramaViewerSettings).
    //     ToolBar, windowBorders etc
    // **************************************************************************************************

    /**
    * Returns true if the ‘close’ button is enabled for viewers.
    */
    // var closeViewerEnabled = japi.getCloseViewerEnabled();

    /**
    * Returns true if the image information button is enabled for viewers.
    */
    // var imageInformationEnabled = japi.getImageInformationEnabled();

    /**
    * Returns true if the vector data distance slider button is enabled for viewers.
    */
    // var overlayDistanceEnabled = japi.getOverlayDistanceEnabled();

    /**
    * Returns true if the brightness button is enabled for viewers
    */
    // var viewerBrightnessEnabled = japi.getViewerBrightnessEnabled();

    /**
    * Returns true if the cycle zoom levels button is enabled for viewers.
    */
    // var viewerCycleZoomLevelsEnabled = japi.getViewerCycleZoomLevelsEnabled();

    /**
    * Returns true if the fullscreen button is enabled for viewers.
    */
    // var viewerFullscreenEnabled = japi.getViewerFullscreenEnabled();


    /**
    * Returns true if the print image button is enabled for viewers.
    */
    // var viewerPrintImageEnabled = japi.getViewerPrintImageEnabled();

    /**
    * Returns true if the save image button is enabled for viewers.
    */
    // var viewerSaveImageEnabled = japi.getViewerSaveImageEnabled();

    /**
    * Returns true if the show location button is enabled for viewers.
    */
    // var viewerShowLocationEnabled = japi.getViewerShowLocationEnabled();

    /**
    * Enables/disables the ‘close’ button for viewers.
    */
    // japi.setCloseViewerEnabled(closeViewerEnabled);

    /**
    * Enables/disables the image information button for viewers.
    */
    // japi.setImageInformationEnabled(imageInformationEnabled);

    /**
    * Enables/disables vector data distance slider for viewers.
    */
    // japi.setOverlayDistanceEnabled(overlayDistanceEnabled);

    /**
    * Enables/disables the brightness button for viewers.
    */
    // japi.setViewerBrightnessEnabled(viewerBrightnessEnabled);

    /**
    * Enables/disables zoom level button for viewers.
    */
    // japi.setViewerCycleZoomLevelsEnabled(viewerCycleZoomLevelsEnabled);

    /**
    * Enables/disables fullscreen button for viewers.
    */
    // japi.setViewerFullscreenEnabled(viewerFullscreenEnabled);

    /**
    * Enables/disables the print image button for viewers.
    */
    // japi.setViewerPrintImageEnabled(viewerPrintImageEnabled);

    /**
    * Enables/disables the save image button for cyclorama viewers.
    */
    // japi.setViewerSaveImageEnabled(viewerSaveImageEnabled);

    /**
    * Enables/disables the show location button for cyclorama viewers.
    */
    // japi.setViewerShowLocationEnabled(viewerShowLocationEnabled);


    // **************************************************************************************************
    // Viewer settings
    // **************************************************************************************************
    /**
    * Returns the current color scheme used for drawing viewer borders.
    */
    // var viewerBorderColorScheme = japi.getViewerBorderColorScheme();
    /**
    * Returns true if the compass is visible in viewers.
    */
    // var viewerCompassVisible = japi.getViewerCompassVisible();

    /**
     * Returns true if high resolution images can be viewed inside panoramic images (when available).
     */
    // var viewerDetailImagesVisible = japi.getViewerDetailImagesVisible();

    /**
     * Returns the alpha of the viewer overlays.
     */
    // var viewerOverlayAlpha = japi.getViewerOverlayAlpha();

    /**
     * Returns true if the rotation navigation buttons are visible for viewers.
     */
    // var viewerRotationButtonsVisible = japi.getViewerRotationButtonsVisible();

    /**
     * Returns true if the button title for viewers is visible.
     */
    // var viewerTitleVisible = japi.getViewerTitleVisible();

    /**
     * Returns true if the button titlebar for viewers is visible.
     */
    // var viewerTitleBarVisible = japi.getViewerToolBarVisible();

     /**
     * Returns true if the button toolbar for viewers is visible.
     */
    // var viewerToolBarVisible = japi.getViewerToolBarVisible();

    /**
     * Returns true if the window border is visible for viewers.
     */
    // var viewerWindowBorderVisible = japi.getViewerWindowBorderVisible();

    /**
     * Returns true if the zoom box (long press with mouse button in cyclorama to trigger zoom image in the left upper corner) is enabled.
     */
    // var viewerZoomBoxEnabled = japi.getViewerZoomBoxEnabled();

    /**
     * Sets the colorscheme to be used for the CycloramaViewers. Should be set before any viewers are opened.
     *
     * @param viewerBorderColorScheme        The list [array] of color-values (RGB [uint]) to be used for the viewers. 1 to 5 values are expected.
     */
    // japi.setViewerBorderColorScheme(viewerBorderColorScheme);

    /**
    * Sets the visibility for the compass in viewers.
    */
    // japi.setViewerCompassVisible(viewerCompassVisible);

    /**
     * Sets the visibility for viewing high resolution images inside panoramic images (when available).
     */
    // japi.setViewerDetailImagesVisible(viewerDetailImagesVisible);

    /**
     * Sets the alpha for viewer overlays.
     */
    // japi.setViewerOverlayAlpha(viewerOverlayAlpha);

    /**
     * Sets the visibility of the rotation navigation buttons for viewers.
     */
    // japi.setViewerRotationButtonsVisible(viewerRotationButtonsVisible);

    /**
     * Sets the border visibility for viewers.
     */
    // japi.setViewerWindowBorderVisible(viewerWindowBorderVisible);

    /**
     * Sets the visibility of the title for viewers.
     */
    // japi.setViewerTitleVisible(viewerTitleVisible);

    /**
     * Sets the visibility of the titlebar for viewers.
     */
    // japi.setViewerTitleBarVisible(viewerTitleBarVisible);

    /**
     * Sets the visibility of the toolbar for viewers.
     */
    // japi.setViewerToolBarVisible(viewerToolBarVisible);

    /**
     * Enables/disables the zoom box (long press with mouse button in a viewer  to trigger zoom image in the left upper corner).
     */
    // japi.setViewerZoomBoxEnabled(viewerZoomBoxEnabled);


    // **************************************************************************************************
    // Multi window properties and interaction
    // **************************************************************************************************

    /**
     * Remove a viewer from the window manager using a viewer id.
     *
     * @param viewerID       The id of a viewer [uint].
     * @throws Error         If the referenced viewer does not exist.
     */
    // japi.closeViewer(viewerID);

    /**
     * Gets which viewer-window is active.
     *
     * @return viewerID      A reference to a viewer window [int]. An id of -1 is returned if no viewer is active.
     */
    // var viewerID = japi.getActiveViewer();

    /**
     * Returns true if the active viewer is replaced when opening an image.
     *
     * @return activeViewerReplaceMode    The current setting [Boolean].
     */
    // var activeViewerReplaceMode = japi.getActiveViewerReplaceMode();

    /**
     * Returns true if the map is maximized when no viewer is opened.
     *
     * @return autoMaximizeMap    The current setting [Boolean].
     */
    // var autoMaximizeMap = japi.getAutoMaximizeMap();

    /**
     * Returns true if focus mode is enabled.
     *
     * @return focusMode    The current setting [Boolean].
     */
    // var focusMode = japi.getFocusMode();

    /**
     * Gets the current position of the focus target used by the focus mode.
     *
     * @return position        An object having <i>x</i> and <i>y<i/> and <i>z<i/> as properties [Object]. The <i>z</i> is only availble if a viewer is opened.
     */
    // var position = japi.getFocusPoint();

    /**
     * Returns the maximum number of viewers that can be opened by the viewer manager.
     *
     * @return maxViewers    The maximum number of viewers [uint].
     */
    // var maxViewers = japi.getMaxViewers();

    /**
     * Returns true if viewer tiling is enabled
     *
     * @return tilingEnabled    The current setting [Boolean].
     */
    // var tilingEnabled = japi.getTilingEnabled();

    /**
     * Get the number of viewers that are currently opened within the viewer manager.
     *
     * @return viewerCount   The number of viewers opened [uint].
     */
    // var viewerCount = japi.getViewerCount();

    /**
     * Gets the current MDI windowing mode. The selected mode determines the positioning behaviour of windows when they
     * are added or removed to or from the MDI canvas.
     *
     * @return windowingMode The current windowing mode [uint].
     */
    // var windowingMode = japi.getWindowingMode();

    /**
     * Sets the focus on the indicated viewer-window.
     *
     * @param viewerID       [uint].
     * @throws Error         If the referenced viewer does not exist.
     */
    // japi.setActiveViewer(viewerID);

    /**
     * Sets the current value of the setting that switches the open-mode for new imageRequest.
     * true = requests replace the currently active viewer window, false = a new viewer window is created for each request.
     *
     * @param activeViewerReplaceMode    The desired setting [Boolean].
     */
    // japi.setActiveViewerReplaceMode(activeViewerReplaceMode);

    /**
     * Sets the current value of the setting that auto maximizes the map viewer.
     * true = when there are no viewerWindows opened the map will maximize, false = the map will not resize.
     *
     * @param autoMaximizeMap    The desired setting [Boolean].
     */
    // japi.setAutoMaximizeMap(autoMaximizeMap);


    /**
     * Sets the current value of the setting that enables Focus mode.
     * true = a focus target will be visible and all viewers will center their view on the target, false = no focus target will be available
     *
     * @param focusMode    The desired setting [Boolean].
     */
    // japi.setFocusMode(focusMode);

    /**
     * Sets the current position of the focus target for Focus mode.
     *
     * @param x             The x parameter of the position vector
     * @param y             The y parameter of the position vector
     * @param z             The z parameter of the position vector
     */
    // japi.setFocusPoint(x, y, z);

    /**
     * Sets the maximum number of viewers bounded by [1..getAbsMaxViewers()].
     *
     * @param maxViewers     The maximum number of viewers [uint].
     * @return maxViewers    The bounded maximum number of viewers [uint].
     * @see ExternalAPI.CALL_GET_ABS_MAX_VIEWERS
     */
    // var maxViewers = japi.setMaxViewers(maxViewers);

    /**
     * Sets the current value of the setting that enables tiling for the viewer.
     * When set to true the viewer layout will use two rows (in horizontal layout) or two columns (in vertical layout)
     * when there is more than one opened viewer.
     *
     * @param tilingEnabled    The desired setting [Boolean].
     */
    // japi.setTilingEnabled(tilingEnabled);

    /**
     * Sets the current MDI windowing mode. The selected mode determines the positioning behaviour of windows when they
     * are added or removed to or from the MDI canvas.
     * <p/>
     * Supported windowing modes:<br/>
     * <ul>
     * <li>
     * Horizontal=1<br/>
     * Automatically positions and resizes each window to fill the entire MDI canvas without overlapping the windows.
     * </li>
     * <li>
     * Vertical=2<br/>
     * </li>
     * </ul>
     *
     * @param windowingMode  The windowing mode to be used [uint].
     * @throws Error         If the windowing mode is not valid.
     */
    // japi.setWindowingMode(windowingMode);


    // *********************************************************************************
    // Multi viewer events
    // *********************************************************************************

    /**
     * Indicates to the host that the focusPoint has been updated in FocusMode
     *
     * @param x             The x parameter of the position vector
     * @param y             The y parameter of the position vector
     * @param z             The z parameter of the position vector
     */
    function hst_focusPointChanged(x, y, z) { }

    /**
     * Indicates to the host that the API was unable to open an image due to the maximimum amount of viewers already being reached
     */
    function hst_maxViewers() { }

    /**
     * Indicates to the host that a viewer is active.
     *
     * @param viewerID       The id of the viewer which had its window selected [uint].
     */
    function hst_viewerActive(viewerID) { }

    /**
     * Indicates to the host that a viewer was added from the MDI canvas.
     *
     * @param viewerID       The id of the viewer that was added.
     */
    function hst_viewerAdded(viewerID) { }

    /**
     * Indicates to the host that a viewer is inactive.
     *
     * @param viewerID       The id of the viewer which had its window selected [uint].
     */
    function hst_viewerInactive(viewerID) { }

    /**
     * Indicates to the host that a viewer was removed from the MDI canvas.
     *
     * @param viewerID       The id of the viewer that was removed.
     */
    function hst_viewerRemoved(viewerID) { }


    // **************************************************************************************************
    // Multi window functionalties
    // **************************************************************************************************

    /**
    * Returns true if context menu is enabled for the window manager.
    */
    // var contextMenuEnabled = japi.getContextMenuEnabled();

     /**
     * Returns true if keyboard shortcuts are available for use.
     */
    // var keyboardEnabled = japi.getKeyboardEnabled();

    /**
     * Returns true if the map is enabled.
     */
    // var mapEnabled = japi.getMapEnabled();

    /**
     * If set to true, extra context menu items are made available within the window manager.
     */
    // japi.setContextMenuEnabled(contextMenuEnabled);

    /**
     * If set to true, keyboard shortcuts will be made availble. These shortcuts are identical
     * to those of GlobeSpotter. See the Globespotter manual for a description of all available
     * shortcuts.
     */
    // japi.setKeyboardEnabled(keyboardEnabled);

    /**
     * Enables or disables the map. If set to true, it is possible to open the map using openMap.
     */
    // japi.setMapEnabled(mapEnabled);


    // **************************************************************************************************
    // Layers: GML, OSM, WFS, WMS, Address and Recording
    //      Functions
    // **************************************************************************************************

    /**
     * Apply a style (SLD) to a vector layer.
     *
     * @param layerID        A reference to the layer to be removed [uint].
     * @param style          [Object] that can be either a [uint] to specify a 24-bits RGB value
     *                       or a [String] specifying a styled layer descriptor SLD/SE 1.1 compatible layer description in XML format
     * @throws Error         If invalid data is supplied.
     */
    // japi.applyStyle(layerID, style);

    /**
     * Add a new GML layer to all viewers.
     *
     * @param name          Name of the layer [String].
     * @param gml           The GML data [String].
     * @param srsName       The SRS name of the GML data [String].
     * @param style         Either a color [uint] or styled layer descriptor [String](Optional). The color is a 24-bits RGB
     * value of which the two most significant bytes specify the color red, and the SLD/SE is of version 1.1.
     * @param showInViewer  Show the layer in all viewers [Boolean](Optional). The default is true.
     * @param showInMap     Show the layer on the map [Boolean](Optional). The default is true.
     * @param minZoomLevel  The zoom level from which to view the layer on the map [uint](Optional). The default is -1,
     * meaning that the featureZoomLevel is used. The feature zoom level is used as the minimum zoom level for recording and
     * address location features.
     * @return layerID      A reference to the added layer [uint].
     * @throws Error        If any of the parameters are invalid [String].
     */
    // var layerID = japi.addGMLLayer(name, gml, srsName, style, showInViewer, showInMap, minZoomLevel);

    /**
     * Add OSM as a new layer onto the map.
     *
     * @param name           Name of the layer to be added [String].
     * @param url            The url of the OSM layer [String].
     * @param useProxy       Route OSM data through a CycloMedia proxy server (optional)[Boolean]. Default is false.
     * @return layerID       A reference to the added layer [uint].
     * @throws Error         If the map is unavailable or on an argument error.
     */
    // var layerID = japi.addOSMLayer(name, url, useProxy);

    /**
     * Add a new WFS layer to all viewers.
     * <p>
     * Due to security restrictions in the flash player, it is sometimes required to route data via the CycloMeda proxy
     * server. This restriction occurs when the domain on which the WFS service is host does not explicitly allow a flash
     * client from another domain to use its data.
     *
     * @param name          Name of the layer [String].
     * @param url           URL of the WFS service used to draw feature data [String].
     * @param typeName      Name(s) of the features to be drawn on the layer [String]. Multiple types are comma seperated.
     * @param version       The WFS version to be used [String].
     * @param style         Either a color [uint] or styled layer descriptor [String](Optional). The color is a 24-bits RGB
     * value of which the two most significant bytes specify the color red, and the SLD/SE is of version 1.1.
     * @param showInViewer  Show the layer in all viewers [Boolean](Optional). The default is true.
     * @param showInMap     Show the layer on the map [Boolean](Optional). The default is true.
     * @param minZoomLevel  The zoom level from which to view the layer on the map [uint](Optional). The default is -1,
     * meaning that the featureZoomLevel is used. The feature zoom level is used as the minimum zoom level for recording and
     * address location features.
     * @param useProxy      Route WFS data through a CycloMedia proxy server [Boolean](Optional). Default is false.
     * @return layerID      A reference to the added layer [uint].
     * @throws Error        If any of the parameters are invalid [String].
     */
    // var layerID = japi.addWFSLayer(name, url, typeName, version, style, showInViewer, showInMap, minZoomLevel, useProxy);

    /**
     * Add a new WMS layer to the map.
     * <p>
     * Due to security restrictions in the flash player, it is sometimes required to route data via the CycloMeda proxy
     * server. This restriction occurs when the domain on which the WFS service is host does not explicitly allow a flash
     * client from another domain to use its data.
     *
     * @param name           Name of the layer [String].
     * @param url            URL of the WMS service used to draw feature data [String].
     * @param layer          Layer name on the server [String].
     * @param version        The WMS version to be used [String].
     * @param transparent    Wether or not to display transparent pixels (if false, otherwise transparent pixels will be white) [Boolean].
     * @param tiled          Wether or not the layer is tiled. [Boolean].
     * @param bgcolor        The background color of the layer if it is not transparent (optional)[uint]. Default is 0xFFFFFF.
     * @param useProxy       Route WMS data through a CycloMedia proxy server (optional)[Boolean]. Default is false.
     * @return layerID       A reference to the added layer [uint].
     * @throws Error         If the map is unavailable or on an argument error.
     */
    // var layerID = japi.addWMSLayer(name, url, layer, version, transparent, tiled, bgcolor, useProxy);

    /**
     * Gets the visibility of the address locations.
     *
     * @return addressLocationsVisible    True if the recording locations are visible [Boolean].
     */
    // var addressLocationsVisible = japi.getAddressLocationsVisible();

    /**
     * Gets the visibility of the recording locations.
     *
     * @return recordingLocationsVisible    True if the recording locations are visible [Boolean].
     */
    // var recordingLocationsVisible = japi.getRecordingLocationsVisible();

    // japi.removeLayer(layerID);

    /**
     * Sets the visibility of the address locations.
     *
     * @param addressLocationsVisible        True if the layer should be visible [Boolean].
     */
    // japi.setAddressLocationsVisible(addressLocationsVisible);

    /**
     * Sets the visibility of the recording locations.
     *
     * @param recordingLocationsVisible        True if the layer should be visible [Boolean].
     */
    // japi.setRecordingLocationsVisible(recordingLocationsVisible);


    // **************************************************************************************************
    // Layers: GML, OSM, WFS, WMS, Address and Recording
    //      Event
    // **************************************************************************************************

    /**
     * Indicates to the host that a WFS feature has been clicked. This callback returns the contents of the
     * WFS feature as an object.
     * <p/>
     * It is assume that the features are simple features, meaning that it has a single geometry property
     * and other than that no complex XML elements.
     *
     * @param featureData    The data of a WFS feature.
     */
    function hst_wfsFeatureClicked(featureData) { }


    // **************************************************************************************************
    // Layers: Drawing Layer
    //      Functions
    // **************************************************************************************************

    /**
     * Removes a drawing from a viewer.
     *
     * @param viewerID       The ID of the viewer to remove the drawing from [uint].
     * @param drawingID      The ID of the drawing to be removed [uint].
     * @throws Error
     */
    // japi.clearMarker(viewerID, drawingID);

    /**
     * Removes all drawings from a viewer.
     *
     * @param viewerID       The ID of the viewer to remove the drawings from [uint].
     * @throws Error
     */
    // japi.clearMarkers(viewerID);

    /**
     * Draws a marker at position h,v in a viewer.
     *
     * @param viewerID       ID of the viewer to draw the marker in [uint].
     * @param h              Horizontal direction in degrees [Number].
     * @param v              Vertical direction in degrees [Number].
     * @param label          Label for the marker (optional)[String]. Defaults to null.
     * @return drawingID     ID of the added drawing [uint].
     * @throws Error
     */
    // var drawingID = japi.drawMarkerAtHV(viewerID, h, v, label);

    /**
     * Draws a marker at pixel x,y in a viewer.
     *
     * @param viewerID       ID of the viewer to draw the marker in [uint].
     * @param x              X coordinate of the pixel location [Number]
     * @param y              Y coordinate of the pixel location [Number]
     * @param label          Label for the marker (optional)[String]. Defaults to null.
     * @return drawingID     ID of the added drawing [uint].
     * @throws Error
     */
     // var drawingID = japi.drawMarkerAtXY(viewerID, x, y, label);

    /**
     * Draws a marker in direction x,y,z in a viewer.
     *
     * @param viewerID       ID of the viewer to draw the marker in [uint].
     * @param x              X component of the direction [Number].
     * @param y              Y component of the direction [Number].
     * @param z              Z component of the direction [Number].
     * @param label          Label for the marker (optional)[String]. Defaults to null.
     * @return drawingID     ID of the added drawing [uint].
     * @throws Error
     */
     // var drawingID = japi.drawMarkerInDirection(viewerID, x, y, z, label);


    /**
     * Gets the visibility of the drawing layer.
     */
    // var drawingLayerVisible = japi.getDrawingLayerVisible();

    /**
     * Sets the visibility of the drawing layer.
     *
     * @param drawingLayerVisible     The visibility of the layer [Boolean].
     */
    // japi.setDrawingLayerVisible(drawingLayerVisible);

    /**
     * Sets the drawing mode. The drawing mode determines the form of the drawing.
     *
     * @param mode           Drawing mode [uint].
     * @throws Error
     * @see DrawingMode
     */
    // japi.setDrawingMode(mode);

    /**
     * Sets the color used for drawing.
     *
     * @param color          The color of a drawing as a 24-bit RGB value [uint].
     * @throws Error
     */
    // japi.setMarkerColor(color);

    /**
     * Sets the size used for drawing.
     *
     * @param size           Size of the drawing in pixels [uint].
     * @throws Error
     */
    // japi.setMarkerSize(size);

    /**
     * Sets the image url used for drawing.
     *
     * @param imageURL       The URL to a small PNG, GIF or JPEG image [String].
     * @throws Error
     */
    // japi.setMarkerImageURL(imageURL);


    // **************************************************************************************************
    // Layers: Drawing Layer
    //      Event
    // **************************************************************************************************

    /**
     * Indicates to the host that a marker from the drawing layer was clicked. Returns the position of
     * the clicked marker similar to the "vector" viewer click mode.
     *
     * @param viewerID      The id of the viewer in which the marker was clicked [uint].
     * @param drawingID     The id of the marker that was clicked [uint].
     * @param x             The x-element of the click direction vector [Number].
     * @param y             The y-element of the click direction vector [Number].
     * @param z             The z-element of the click direction vector [Number].
     * @see ExternalBAPI.CALL_SET_VIEWER_CLICK_MODE
     */
    function hst_markerClicked(viewerID, drawingID, x, y, z) { }


    // **************************************************************************************************
    // Layers: Measure Layer
    //      Functions
    // **************************************************************************************************

    /**
     * Adds an area entity to the list of entities, which can be used for measuring the height, width and/or
     * area of an object.
     *
     * @param name           Name of the measurement entity.
     * @param height         Height of the measurement entity.
     * @param pos0           A 2D position referenced in the coordinate system as used by the API.
     * @param pos1           A 2D position referenced in the coordinate system as used by the API.
     * @param z              Object height is measured relative to this value.
     * @return entityID      An id by which to reference the measurement entity.
     * @throws Error         If one of the parameters is invalid.
     */
    // var entityID = japi.addAreaEntity(name, height, pos0, pos1, z);

    /**
     * Adds a height entity to the list of entities, which can be used for measuring the height and/or
     * position of an object.
     *
     * @param name           Name of the measurement entity.
     * @param height         Height of the measurement entity.
     * @param pos            A 3D position referenced in the coordinate system as used by the API. Object height is measured relative to this position.
     * @return entityID      An id by which to reference the measurement entity.
     * @throws Error         If one of the parameters is invalid.
     */
    // var entityID = japi.addHeightEntity(name, height, pos);

    /**
     * Adds a line measurement entity to the list of entities, which can be used for measuring a 3D line.
     * After calling this function the user is able to click in the cyclorama windows to get a 3D line.
     * The function finishMeasurement should be called when the measurement is finished
     *
     * @param name           Name of the measurement entity.
     * @return entityID      An id by which to reference the measurement entity.
     * @throws Error         If one of the parameters is invalid.
     */

    // var entityID = japi.addLineMeasurement(name);

    /**
     * Adds a point measurement entity to the list of entities, which can be used for measuring a 3D point.
     * 3D points need to be measured using two or more cyclorama windows. After calling this function
     * the user is able to click in the cyclorama windows to get a 3D point. The function finishPointMeasurement
     * should be called when the measurement is finished
     *
     * @param name           Name of the measurement entity.
     * @return entityID      An id by which to reference the measurement entity.
     * @throws Error         If one of the parameters is invalid.
     */
    // var entityID = japi.addPointMeasurement(name);

    /**
     * Adds a volume entity to the list of entities, which can be used for measuring the height, ground area,
     * volume and/or perimeter of an object.
     *
     * @param name           Name of the measurement entity.
     * @param height         Height of the measurement entity.
     * @param posArray       An array of 2D positions referenced in the coordinate system as used by the API.
     * @param z              Object height is measured relative to this value.
     * @return entityID      An id by which to reference the measurement entity.
     * @throws Error         If one of the parameters is invalid.
     */
    // var entityID = japi.addVolumeEntity(name, height, posArray, z);

    /**
     * Cancels the currently open measurement
     *
     * @param entityID       entityID to be canceled.
     * @throws Error         If one of the parameters is invalid.
     */
    // japi.cancelMeasurement(entityID);


    /**
     * This function should be called when the desired measurement has been completed and the
     * measurement can be finalized. No changes to the measurement are possible after calling
     * this function.
     * <p/>
     * A measurement can only be closed if the estimate was valid.
     *
     * @param entityID      entityID to be finished.
     * @return success      If closed.
     * @throws Error        If one of the parameters is invalid.
     */
    // var succes = japi.closeMeasurement(entityID);

    // var autoPointPlacement = japi.getAutoPointPlacement();

    /**
     * Get the data object associated with an entity. The data of the object depends on the entity
     * referenced.
     *
     * @param entityID       A reference to an entity [uint].
     * @return data          The data object.
     * @throws Error         If the referenced entity does not exist [Object].
     * @see ExternalBAPI.CALL_ADD_HEIGHT_ENTITY
     * @see ExternalBAPI.CALL_ADD_AREA_ENTITY
     * @see ExternalBAPI.CALL_ADD_VOLUME_ENTITY
     */
    // var data = japi.getEntityData(entityID);

    /**
     * Gets the description of a referenced entity.
     *
     * @param entityID       A reference to an entity [uint].
     * @return description   The description of the referenced entity [String].
     * @throws Error         If the referenced id does not exist [Object].
     */
    // var description = japi.getEntityDescription(entityID);

    /**
     * Gets the name of a referenced entity.
     *
     * @param entityID       A reference to an entity [uint].
     * @return name          The name of the referenced entity [String].
     * @throws Error         If the referenced id does not exist [Object].
     */
    // var name = japi.getEntityName(entityID);

    /**
     * This function is used to ascertain which entity has focus. An entity that has focus is shown
     * in color while the others are only shown in shades of gray.
     *
     * @return entityID      A reference to an entity [int]. The value can be -1 if no entity has focus.
     */
    // var entityID = japi.getFocusEntity();

    // var hideOverlaysWhenMeasuring = japi.getHideOverlaysWhenMeasuring();

    /**
     * Gets the visibility of the measurement layer.
     */
    // var measureLayerVisible = japi.getMeasureLayerVisible();

    /**
     * @param entityID       entityID to be opened.
     * @return Boolean       True if opened.
     * @throws Error         If the id is invalid, or if it is not a measurement geometry entity.
     */
    // var opened = japi.openMeasurement(entityID);

    /**
     * Remove all entities from the application.
     */
    // japi.removeAllEntities();

    /**
     * Remove an entity so it is no longer drawn by the application.
     *
     * @param entityID       A reference to an entity [uint].
     * @throws Error         If the referenced id does not exist [Object].
     */
    // japi.removeEntity(entityID);

    // japi.setAutoPointPlacement(autoPointPlacement);

    /**
     * Sets the description of a referenced entity.
     *
     * @param entityID       A reference to an entity [uint].
     * @param description    A description of the entity or something referenced by the entity [String].
     * @throws Error         If the referenced id does not exist [Object].
     */
    // japi.setEntityDescription(entityID, description);

    /**
     * This function is used to give a particular entity focus. An entity that has focus is shown in
     * color while the others are only shown in shades of gray.
     *
     * @param entityID       A reference to an entity [uint].
     * @throws Error         If the referenced entity does not exist.
     */
    // japi.setFocusEntity(entityID);

    // japi.setHideOverlaysWhenMeasuring(hideOverlaysWhenMeasuring);

    /**
     * Sets the visibility of the measurement layer.
     *
     * @param measureLayerVisible     The visibility of the layer [Boolean].
     */
    // japi.setMeasureLayerVisible(measureLayerVisible);


    // **************************************************************************************************
    // Layers: Measure Layer
    //      Events
    // **************************************************************************************************

    /**
     * Indicates to the host that the data of an entity is updated.
     *
     * @param entityID      The id of the entity of which its data is updated [uint].
     * @param entityData    The data of the entity that updated of which its contents depend on its type [Object].
     */
    function hst_entityDataChanged(entityID, entityData) { }

    /**
     * Indicates to the host that the focus of an entity has changed.
     *
     * @param entityID      The id of the entity that obtained focus [int]. The id equals -1 if no entity has focus.
     * @param entityData    The data of the entity that obtained focus (Optional) [Object]. The contents of the data depend on the entity type.
     */
    function hst_entityFocusChanged(entityID, entityData) { }

    /**
     * Indicates to the host that the user canceled the last active measurement.
     *
     * @param entityID       A reference to the measurement [uint].
     * @see ExternalBAPI.CALL_REMOVE_ENTITY
     */
     function hst_measurementCanceled(entityID) { }

    /**
     * Indicates to the host that the created measurement has been finalized. After a measurement
     * is finalized it is locked from edition. Measurements are considered entities and can be
     * deleted using the <b>removeEntity</b> function.
     *
     * @param entityID       A reference to the measurement [uint].
     * @param entityData     Measurement data of which the contents depends on the entity type [Object].
     * @see ExternalBAPI.CALL_REMOVE_ENTITY
     */
    function hst_measurementClosed(entityID, entityData) { }

    /**
     * Indicates to the host that a new measurement has been created. A measurement can only be
     * edited until it is considered finished (by pressing the <i>finish</i> button on the
     * measure panel) after which it is locked.
     * <p/>
     * After creating a new measurement, it can be interacted with using so called observations.
     * An observation is a 2D point in an image that represents the projection the 3D point that
     * is to be measured. Observations are added by clicking on an image, and can be manipulated
     * by clicking on another location in the same image, or by dragging it around using mouse
     * interaction.
     * <p/>
     * A measurement can only be created and edited through user interaction. After a measurement
     * is finalized, it is locked from edition. Measurements are considered entities and can be
     * deleted using the <b>removeEntity</b> function.
     *
     * @param entityID       A reference to the measurement [uint].
     * @param entityType     The type of measurement created [String].
     * @see ExternalAPI.HST_EVENT_MEASUREMENT_FINISHED
     * @see ExternalAPI.HST_EVENT_MEASUREMENT_CANCELED
     * @see ExternalBAPI.CALL_REMOVE_ENTITY
     */
    function hst_measurementCreated(entityID, entityType) { }

    /**
     * Indicates to the host that the Cyclorama viewers are (no longer) in measurement mode
     *
     * @param enabled       Indicates the current state of the measurement mode [Boolean].
     */
    function hst_measurementModeChanged(enabled) { }

    /**
     * Indicates to the host that an existing measurement was opened again for edition.
     *
     * @param entityID       A reference to the measurement [uint].
     * @param entityType     The type of measurement created [String].
     */
    function hst_measurementOpened(entityID, entityType) { }

    /**
     * Indicates to the host that the measurement was changed due to user interaction. This
     * event is only fired after a measurement has been created, until the measurement is either
     * finished or canceled.
     *
     * @param entityID       A reference to the measurement [uint].
     * @param entityData     Measurement data of which the contents depends on the entity type [Object].
     * @see ExternalAPI.HST_EVENT_MEASUREMENT_FINISHED
     * @see ExternalAPI.HST_EVENT_MEASUREMENT_CANCELED
     */
    function hst_measurementUpdated(entityID, entityData) { }

    /**
     * Indicates to the host that an observation was added for the active measurement. An observation
     * consists of an array of 3D vectors that originate from the image as referenced by <b>viewerID</b>.
     *
     * @param viewerID       A reference to the viewer to wihch the observation was added [uint].
     * @param directions     An array containing directional vectors [Array].
     */
    function hst_observationAdded(viewerID, directions) { }

    /**
     * Indicates to the host that an observation was removed for the active measurement. An observation
     * can be removed by closing the viewer that contained it.
     *
     * @param viewerID       A reference to the viewer in which the observation was removed [uint].
     */
    function hst_observationRemoved(viewerID) { }

    /**
     * Indicates to the host that an observation changed due to user interaction.
     *
     * @param viewerID       A reference to the viewer in which the observation was updated [uint].
     * @param directions     An array containing directional vectors [Array].
     */
    function hst_observationUpdated(viewerID, directions) { }


    // **************************************************************************************************
    // Map settings
    // **************************************************************************************************

    /**
     * Returns true if rotation buttons are enabled for the map.
     */
    // var rotationEnabled = japi.getMapCompassRotationEnabled();

    /**
     * Returns true if the compass is visible for the map.
     */
    // var compassVisible = japi.getMapCompassVisible();

    /**
     * Returns true if the cycle zoom levels button is enabled for the map.
     */
    // var cycleZoomLevelsEnabled = japi.getMapCycleZoomLevelsEnabled();

    /**
     * Returns true if the print image button is enabled for the map.
     */
    // var printImageEnabled = japi.getMapPrintImageEnabled();

    /**
     * Returns true if the save image button is enabled for the map.
     */
    // var saveImageEnabled = japi.getMapSaveImageEnabled();

    /**
     * Returns true if the scale line is visible for the map.
     */
    // var scaleLineVisible = japi.getMapScaleLineVisible();

    /**
     * Returns true if the title bar is visible for the map.
     */
    // var titleBarVisible =  japi.getMapTitleBarVisible();

    /**
     * Returns true if the title is visible for the map.
     */
    // var titleVisible = japi.getMapTitleVisible();

    /**
     * Returns true if the tool bar is visible for the map.
     */
    // var toolBarVisible = japi.getMapToolBarVisible();

    /**
     * Returns true if the window border is visible for the map.
     */
    // var windowBorderVisible = japi.getMapWindowBorderVisible();

    /**
     * Returns true if the zoom control is visible for the map.
     */
    // var zoomControlVisible = japi.getMapZoomControlVisible();



    /**
     * Enables/disables rotation buttons for the map.
     */
    // japi.setMapCompassRotationEnabled(rotationEnabled);

    /**
     * Sets the visibility of the compass for the map.
     */
    // japi.setMapCompassVisible(compassVisible);
    /**
     * Enables/disables zoom level button for the map.
     */
    // japi.setMapCycleZoomLevelsEnabled(cycleZoomLevelsEnabled);

    /**
     * Enables/disables print button for the map.
     */
    // japi.setMapPrintImageEnabled(printImageEnabled);

    /**
     * Enables/disables save image button for the map.
     */
    // japi.setMapSaveImageEnabled(saveImageEnabled);

    /**
     * Sets the visibility of the scale line for the map.
     */
    // japi.setMapScaleLineVisible(scaleLineVisible);

    /**
     * Sets the visibility of the title bar for the map.
     */
    // japi.setMapTitleBarVisible(titleBarVisible);

    /**
     * Sets the visibility of the title for the map.
     */
    // japi.setMapTitleVisible(titleVisible);

    /**
     * Sets the visibility of the tool bar for the map.
     */
    // japi.setMapToolBarVisible(toolBarVisible);

    /**
     * Sets the visibility of the window border for the map.
     */
    // japi.setMapWindowBorderVisible(windowBorderVisible);

    /**
     * Sets the visibility of the zoom control for the map.
     */
    // japi.setMapZoomControlVisible(zoomControlVisible);

