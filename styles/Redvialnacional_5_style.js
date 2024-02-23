var size = 0;
var placement = 'point';
function categories_Redvialnacional_5(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                switch(value.toString()) {case 'Primaria':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(226,44,12,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.508}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Secundaria':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(233,154,35,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 1.748}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Terciaria':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(83,184,77,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 1.748}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Ruta Travesía':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(213,235,16,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 1.748}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_Redvialnacional_5 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("q2wHide_Jerarquia");
    var labelText = "";
    size = 0;
    var labelFont = "9.1px \'Open Sans\', sans-serif";
    var labelFill = "#323232";
    var bufferColor = "#fafafa";
    var bufferWidth = 1.3;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'line';
    if ("" !== null && resolution > 0 && resolution < 28) {
        labelText = String("");
    }
    
var style = categories_Redvialnacional_5(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement);

    return style;
};
