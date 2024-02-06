var size = 0;
var placement = 'point';
function categories_ProyectoGerenciadeConstruccin_4(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                switch(value.toString()) {case 'Cierre Contractual':
                    return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 6.4 + size,
            stroke: new ol.style.Stroke({color: 'rgba(61,61,61,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}), fill: new ol.style.Fill({color: 'rgba(48,18,59,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Diseño':
                    return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 6.4 + size,
            stroke: new ol.style.Stroke({color: 'rgba(61,61,61,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}), fill: new ol.style.Fill({color: 'rgba(71,119,239,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Diseño / Contratación':
                    return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 6.4 + size,
            stroke: new ol.style.Stroke({color: 'rgba(61,61,61,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}), fill: new ol.style.Fill({color: 'rgba(27,208,213,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'En Ejecución':
                    return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 6.4 + size,
            stroke: new ol.style.Stroke({color: 'rgba(61,61,61,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}), fill: new ol.style.Fill({color: 'rgba(100,253,106,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Planificación':
                    return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 6.4 + size,
            stroke: new ol.style.Stroke({color: 'rgba(61,61,61,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}), fill: new ol.style.Fill({color: 'rgba(211,232,53,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Sin Iniciar':
                    return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 6.4 + size,
            stroke: new ol.style.Stroke({color: 'rgba(61,61,61,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}), fill: new ol.style.Fill({color: 'rgba(254,153,44,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Suspendido':
                    return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 6.4 + size,
            stroke: new ol.style.Stroke({color: 'rgba(61,61,61,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}), fill: new ol.style.Fill({color: 'rgba(217,56,7,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_ProyectoGerenciadeConstruccin_4 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("Estado");
    var labelText = "";
    size = 0;
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    
var style = categories_ProyectoGerenciadeConstruccin_4(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement);

    return style;
};
