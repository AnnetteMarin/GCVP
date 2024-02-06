var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Lmiteprovincial_1 = new ol.format.GeoJSON();
var jsonSource_Lmiteprovincial_1 = new ol.source.Vector({
    attributions: ' ',
    format: format_Lmiteprovincial_1
});var lyr_Lmiteprovincial_1 = new ol.layer.Vector({
    declutter: true,
    source: jsonSource_Lmiteprovincial_1, 
    style: style_Lmiteprovincial_1,
    interactive: true,
    title: "Límite provincial"
});

function getLmiteprovincial_1Json(geojson) {
    var features_Lmiteprovincial_1 = format_Lmiteprovincial_1.readFeatures(geojson);
    jsonSource_Lmiteprovincial_1.addFeatures(features_Lmiteprovincial_1);
}
var format_Redvialnacional_2 = new ol.format.GeoJSON();
var features_Redvialnacional_2 = format_Redvialnacional_2.readFeatures(json_Redvialnacional_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Redvialnacional_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Redvialnacional_2.addFeatures(features_Redvialnacional_2);
var lyr_Redvialnacional_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Redvialnacional_2, 
                style: style_Redvialnacional_2,
                interactive: true,
    title: 'Red vial nacional<br />\
    <img src="styles/legend/Redvialnacional_2_0.png" /> Primaria<br />\
    <img src="styles/legend/Redvialnacional_2_1.png" /> Secundaria<br />\
    <img src="styles/legend/Redvialnacional_2_2.png" /> Terciaria<br />\
    <img src="styles/legend/Redvialnacional_2_3.png" /> Ruta Travesía<br />'
        });
var format_ProyectoGerenciadeConstruccin_3 = new ol.format.GeoJSON();
var features_ProyectoGerenciadeConstruccin_3 = format_ProyectoGerenciadeConstruccin_3.readFeatures(json_ProyectoGerenciadeConstruccin_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ProyectoGerenciadeConstruccin_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ProyectoGerenciadeConstruccin_3.addFeatures(features_ProyectoGerenciadeConstruccin_3);
var lyr_ProyectoGerenciadeConstruccin_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ProyectoGerenciadeConstruccin_3, 
                style: style_ProyectoGerenciadeConstruccin_3,
                interactive: true,
    title: 'Proyecto Gerencia de Construcción<br />\
    <img src="styles/legend/ProyectoGerenciadeConstruccin_3_0.png" /> Cierre Contractual<br />\
    <img src="styles/legend/ProyectoGerenciadeConstruccin_3_1.png" /> Diseño<br />\
    <img src="styles/legend/ProyectoGerenciadeConstruccin_3_2.png" /> Diseño / Contratación<br />\
    <img src="styles/legend/ProyectoGerenciadeConstruccin_3_3.png" /> En Ejecución<br />\
    <img src="styles/legend/ProyectoGerenciadeConstruccin_3_4.png" /> Planificación<br />\
    <img src="styles/legend/ProyectoGerenciadeConstruccin_3_5.png" /> Sin Iniciar<br />\
    <img src="styles/legend/ProyectoGerenciadeConstruccin_3_6.png" /> Suspendido<br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_Lmiteprovincial_1.setVisible(true);lyr_Redvialnacional_2.setVisible(true);lyr_ProyectoGerenciadeConstruccin_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Lmiteprovincial_1,lyr_Redvialnacional_2,lyr_ProyectoGerenciadeConstruccin_3];
lyr_Lmiteprovincial_1.set('fieldAliases', {'gml_id': 'gml_id', 'OBJECTID': 'OBJECTID', 'CÓDIGO': 'CÓDIGO', 'CÓDIGO_PROVINCIA': 'CÓDIGO_PROVINCIA', 'PROVINCIA': 'PROVINCIA', 'ORIGEN_DEL_TOPÓNIMO': 'ORIGEN_DEL_TOPÓNIMO', 'ÁREA': 'ÁREA', 'VERSIÓN': 'VERSIÓN', 'GLOBALID': 'GLOBALID', });
lyr_Redvialnacional_2.set('fieldAliases', {'RUTA': 'RUTA', 'SECCION': 'SECCION', 'ZONA': 'ZONA', 'Canton': 'Canton', 'Jerarquia': 'Jerarquia', 'Rve_Descri': 'Rve_Descri', 'OBJECTID': 'OBJECTID', 'RUTA_1': 'RUTA_1', 'SC': 'SC', 'ORDEN': 'ORDEN', 'TIPO': 'TIPO', 'LONG__KM_': 'LONG__KM_', 'ACUMULADA_': 'ACUMULADA_', 'KM_INI': 'KM_INI', 'KM_FIN': 'KM_FIN', 'ZONA_DE_CO': 'ZONA_DE_CO', 'TIPO_DE_SU': 'TIPO_DE_SU', 'DESCRIPCI': 'DESCRIPCI', });
lyr_ProyectoGerenciadeConstruccin_3.set('fieldAliases', {'ID': 'ID', 'X': 'X', 'Y': 'Y', 'Proyecto': 'Proyecto', 'Ruta': 'Ruta', 'Estado': 'Estado', 'Equipo': 'Equipo', 'FechadeInicio': 'FechadeInicio', 'field_9': 'field_9', 'field_10': 'field_10', });
lyr_Lmiteprovincial_1.set('fieldImages', {'gml_id': 'Hidden', 'OBJECTID': 'Hidden', 'CÓDIGO': 'Hidden', 'CÓDIGO_PROVINCIA': 'Hidden', 'PROVINCIA': 'TextEdit', 'ORIGEN_DEL_TOPÓNIMO': 'Hidden', 'ÁREA': 'Hidden', 'VERSIÓN': 'Hidden', 'GLOBALID': 'Hidden', });
lyr_Redvialnacional_2.set('fieldImages', {'RUTA': 'TextEdit', 'SECCION': 'Hidden', 'ZONA': 'Hidden', 'Canton': 'Hidden', 'Jerarquia': 'Hidden', 'Rve_Descri': 'Hidden', 'OBJECTID': 'Hidden', 'RUTA_1': 'Hidden', 'SC': 'Hidden', 'ORDEN': 'Hidden', 'TIPO': 'Hidden', 'LONG__KM_': 'Hidden', 'ACUMULADA_': 'Hidden', 'KM_INI': 'Hidden', 'KM_FIN': 'Hidden', 'ZONA_DE_CO': 'Hidden', 'TIPO_DE_SU': 'Hidden', 'DESCRIPCI': 'Hidden', });
lyr_ProyectoGerenciadeConstruccin_3.set('fieldImages', {'ID': 'Hidden', 'X': 'Hidden', 'Y': 'Hidden', 'Proyecto': 'TextEdit', 'Ruta': 'TextEdit', 'Estado': 'TextEdit', 'Equipo': 'TextEdit', 'FechadeInicio': 'TextEdit', 'field_9': 'Hidden', 'field_10': 'Hidden', });
lyr_Lmiteprovincial_1.set('fieldLabels', {'PROVINCIA': 'inline label - visible with data', });
lyr_Redvialnacional_2.set('fieldLabels', {'RUTA': 'inline label - always visible', });
lyr_ProyectoGerenciadeConstruccin_3.set('fieldLabels', {'Proyecto': 'inline label - always visible', 'Ruta': 'inline label - always visible', 'Estado': 'inline label - always visible', 'Equipo': 'inline label - always visible', 'FechadeInicio': 'inline label - always visible', });
lyr_ProyectoGerenciadeConstruccin_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});