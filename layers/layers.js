var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_ZonasdeConservacin_2 = new ol.format.GeoJSON();
var features_ZonasdeConservacin_2 = format_ZonasdeConservacin_2.readFeatures(json_ZonasdeConservacin_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZonasdeConservacin_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZonasdeConservacin_2.addFeatures(features_ZonasdeConservacin_2);
var lyr_ZonasdeConservacin_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ZonasdeConservacin_2, 
                style: style_ZonasdeConservacin_2,
                popuplayertitle: "Zonas de Conservación",
                interactive: true,
    title: 'Zonas de Conservación<br />\
    <img src="styles/legend/ZonasdeConservacin_2_0.png" /> 1-1<br />\
    <img src="styles/legend/ZonasdeConservacin_2_1.png" /> 1-2<br />\
    <img src="styles/legend/ZonasdeConservacin_2_2.png" /> 1-3<br />\
    <img src="styles/legend/ZonasdeConservacin_2_3.png" /> 1-4<br />\
    <img src="styles/legend/ZonasdeConservacin_2_4.png" /> 1-5<br />\
    <img src="styles/legend/ZonasdeConservacin_2_5.png" /> 1-6<br />\
    <img src="styles/legend/ZonasdeConservacin_2_6.png" /> 1-7<br />\
    <img src="styles/legend/ZonasdeConservacin_2_7.png" /> 1-8<br />\
    <img src="styles/legend/ZonasdeConservacin_2_8.png" /> 1-9<br />\
    <img src="styles/legend/ZonasdeConservacin_2_9.png" /> 2-1<br />\
    <img src="styles/legend/ZonasdeConservacin_2_10.png" /> 2-2<br />\
    <img src="styles/legend/ZonasdeConservacin_2_11.png" /> 2-3<br />\
    <img src="styles/legend/ZonasdeConservacin_2_12.png" /> 2-4<br />\
    <img src="styles/legend/ZonasdeConservacin_2_13.png" /> 3-1<br />\
    <img src="styles/legend/ZonasdeConservacin_2_14.png" /> 3-2<br />\
    <img src="styles/legend/ZonasdeConservacin_2_15.png" /> 4-1<br />\
    <img src="styles/legend/ZonasdeConservacin_2_16.png" /> 4-2<br />\
    <img src="styles/legend/ZonasdeConservacin_2_17.png" /> 4-3<br />\
    <img src="styles/legend/ZonasdeConservacin_2_18.png" /> 5-1<br />\
    <img src="styles/legend/ZonasdeConservacin_2_19.png" /> 5-2<br />\
    <img src="styles/legend/ZonasdeConservacin_2_20.png" /> 6-1<br />\
    <img src="styles/legend/ZonasdeConservacin_2_21.png" /> 6-2<br />'
        });
var format_Lmiteprovincial_3 = new ol.format.GeoJSON();
var features_Lmiteprovincial_3 = format_Lmiteprovincial_3.readFeatures(json_Lmiteprovincial_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lmiteprovincial_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lmiteprovincial_3.addFeatures(features_Lmiteprovincial_3);
var lyr_Lmiteprovincial_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Lmiteprovincial_3, 
                style: style_Lmiteprovincial_3,
                popuplayertitle: "Límite provincial",
                interactive: true,
    title: 'Límite provincial<br />\
    <img src="styles/legend/Lmiteprovincial_3_0.png" /> Alajuela<br />\
    <img src="styles/legend/Lmiteprovincial_3_1.png" /> Cartago<br />\
    <img src="styles/legend/Lmiteprovincial_3_2.png" /> Guanacaste<br />\
    <img src="styles/legend/Lmiteprovincial_3_3.png" /> Heredia<br />\
    <img src="styles/legend/Lmiteprovincial_3_4.png" /> Limón<br />\
    <img src="styles/legend/Lmiteprovincial_3_5.png" /> Puntarenas<br />\
    <img src="styles/legend/Lmiteprovincial_3_6.png" /> San José<br />'
        });
var format_Redvialnacionalestratgica_4 = new ol.format.GeoJSON();
var features_Redvialnacionalestratgica_4 = format_Redvialnacionalestratgica_4.readFeatures(json_Redvialnacionalestratgica_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Redvialnacionalestratgica_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Redvialnacionalestratgica_4.addFeatures(features_Redvialnacionalestratgica_4);
var lyr_Redvialnacionalestratgica_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Redvialnacionalestratgica_4, 
                style: style_Redvialnacionalestratgica_4,
                popuplayertitle: "Red vial nacional estratégica",
                interactive: true,
    title: 'Red vial nacional estratégica<br />\
    <img src="styles/legend/Redvialnacionalestratgica_4_0.png" /> Conectores de Integración Territorial<br />\
    <img src="styles/legend/Redvialnacionalestratgica_4_1.png" /> Distribuidores Regionales<br />\
    <img src="styles/legend/Redvialnacionalestratgica_4_2.png" /> Red Básica de Accesso<br />\
    <img src="styles/legend/Redvialnacionalestratgica_4_3.png" /> Red de Alta Capacidad<br />\
    <img src="styles/legend/Redvialnacionalestratgica_4_4.png" /> Ruta Travesía<br />'
        });
var format_Redvialnacional_5 = new ol.format.GeoJSON();
var features_Redvialnacional_5 = format_Redvialnacional_5.readFeatures(json_Redvialnacional_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Redvialnacional_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Redvialnacional_5.addFeatures(features_Redvialnacional_5);
var lyr_Redvialnacional_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Redvialnacional_5, 
                style: style_Redvialnacional_5,
                popuplayertitle: "Red vial nacional",
                interactive: true,
    title: 'Red vial nacional<br />\
    <img src="styles/legend/Redvialnacional_5_0.png" /> Primaria<br />\
    <img src="styles/legend/Redvialnacional_5_1.png" /> Secundaria<br />\
    <img src="styles/legend/Redvialnacional_5_2.png" /> Terciaria<br />\
    <img src="styles/legend/Redvialnacional_5_3.png" /> Ruta Travesía<br />'
        });
var format_PortafoliodeproyectoGCVP_6 = new ol.format.GeoJSON();
var features_PortafoliodeproyectoGCVP_6 = format_PortafoliodeproyectoGCVP_6.readFeatures(json_PortafoliodeproyectoGCVP_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PortafoliodeproyectoGCVP_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PortafoliodeproyectoGCVP_6.addFeatures(features_PortafoliodeproyectoGCVP_6);
var lyr_PortafoliodeproyectoGCVP_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PortafoliodeproyectoGCVP_6, 
                style: style_PortafoliodeproyectoGCVP_6,
                popuplayertitle: "Portafolio de proyecto GCVP",
                interactive: true,
    title: 'Portafolio de proyecto GCVP<br />\
    <img src="styles/legend/PortafoliodeproyectoGCVP_6_0.png" /> Cierre Contractual<br />\
    <img src="styles/legend/PortafoliodeproyectoGCVP_6_1.png" /> Diseño<br />\
    <img src="styles/legend/PortafoliodeproyectoGCVP_6_2.png" /> Contratación<br />\
    <img src="styles/legend/PortafoliodeproyectoGCVP_6_3.png" /> En Ejecución<br />\
    <img src="styles/legend/PortafoliodeproyectoGCVP_6_4.png" /> Planificación<br />\
    <img src="styles/legend/PortafoliodeproyectoGCVP_6_5.png" /> Sin Iniciar<br />\
    <img src="styles/legend/PortafoliodeproyectoGCVP_6_6.png" /> Suspendido<br />'
        });

lyr_GoogleHybrid_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(true);lyr_ZonasdeConservacin_2.setVisible(false);lyr_Lmiteprovincial_3.setVisible(false);lyr_Redvialnacionalestratgica_4.setVisible(false);lyr_Redvialnacional_5.setVisible(true);lyr_PortafoliodeproyectoGCVP_6.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_OpenStreetMap_1,lyr_ZonasdeConservacin_2,lyr_Lmiteprovincial_3,lyr_Redvialnacionalestratgica_4,lyr_Redvialnacional_5,lyr_PortafoliodeproyectoGCVP_6];
lyr_ZonasdeConservacin_2.set('fieldAliases', {'Zona': 'Zona', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Zona2': 'Zona2', 'Nombre': 'Nombre', 'REgiones': 'REgiones', });
lyr_Lmiteprovincial_3.set('fieldAliases', {'gml_id': 'gml_id', 'OBJECTID': 'OBJECTID', 'CÓDIGO': 'CÓDIGO', 'CÓDIGO_PR': 'CÓDIGO_PR', 'PROVINCIA': 'PROVINCIA', 'ORIGEN_DEL': 'ORIGEN_DEL', 'ÁREA': 'ÁREA', 'VERSIÓN': 'VERSIÓN', 'GLOBALID': 'GLOBALID', });
lyr_Redvialnacionalestratgica_4.set('fieldAliases', {'RUTA': 'RUTA', 'SECCION': 'SECCION', 'ZONA': 'ZONA', 'Canton': 'Canton', 'Jerarquia': 'Jerarquia', 'Rve_Descri': 'Rve_Descri', 'OBJECTID': 'OBJECTID', 'RUTA_1': 'RUTA_1', 'SC': 'SC', 'ORDEN': 'ORDEN', 'TIPO': 'TIPO', 'LONG__KM_': 'LONG__KM_', 'ACUMULADA_': 'ACUMULADA_', 'KM_INI': 'KM_INI', 'KM_FIN': 'KM_FIN', 'ZONA_DE_CO': 'ZONA_DE_CO', 'TIPO_DE_SU': 'TIPO_DE_SU', 'DESCRIPCI': 'DESCRIPCI', });
lyr_Redvialnacional_5.set('fieldAliases', {'RUTA': 'RUTA', 'SECCION': 'SECCION', 'ZONA': 'ZONA', 'Canton': 'Canton', 'Jerarquia': 'Jerarquia', 'Rve_Descri': 'Rve_Descri', 'OBJECTID': 'OBJECTID', 'RUTA_1': 'RUTA_1', 'SC': 'SC', 'ORDEN': 'ORDEN', 'TIPO': 'TIPO', 'LONG__KM_': 'LONG__KM_', 'ACUMULADA_': 'ACUMULADA_', 'KM_INI': 'KM_INI', 'KM_FIN': 'KM_FIN', 'ZONA_DE_CO': 'ZONA_DE_CO', 'TIPO_DE_SU': 'TIPO_DE_SU', 'DESCRIPCI': 'DESCRIPCI', });
lyr_PortafoliodeproyectoGCVP_6.set('fieldAliases', {'ID': 'ID', 'X': 'X', 'Y': 'Y', 'Proyecto': 'Proyecto', 'Ruta': 'Ruta', 'Estado': 'Estado', 'Alcance': 'Alcance', 'Fecha de I': 'Fecha de I', 'Fecha de F': 'Fecha de F', 'Avance': 'Avance', 'Costo': 'Costo', });
lyr_ZonasdeConservacin_2.set('fieldImages', {'Zona': 'Hidden', 'Shape_Leng': 'Hidden', 'Shape_Area': 'Hidden', 'Zona2': 'TextEdit', 'Nombre': 'TextEdit', 'REgiones': 'Hidden', });
lyr_Lmiteprovincial_3.set('fieldImages', {'gml_id': 'Hidden', 'OBJECTID': 'Hidden', 'CÓDIGO': 'Hidden', 'CÓDIGO_PR': 'Hidden', 'PROVINCIA': 'TextEdit', 'ORIGEN_DEL': 'Hidden', 'ÁREA': 'Hidden', 'VERSIÓN': 'Hidden', 'GLOBALID': 'Hidden', });
lyr_Redvialnacionalestratgica_4.set('fieldImages', {'RUTA': 'TextEdit', 'SECCION': 'Hidden', 'ZONA': 'Hidden', 'Canton': 'Hidden', 'Jerarquia': 'Hidden', 'Rve_Descri': 'TextEdit', 'OBJECTID': 'Hidden', 'RUTA_1': 'Hidden', 'SC': 'Hidden', 'ORDEN': 'Hidden', 'TIPO': 'Hidden', 'LONG__KM_': 'Hidden', 'ACUMULADA_': 'Hidden', 'KM_INI': 'Hidden', 'KM_FIN': 'Hidden', 'ZONA_DE_CO': 'Hidden', 'TIPO_DE_SU': 'Hidden', 'DESCRIPCI': 'Hidden', });
lyr_Redvialnacional_5.set('fieldImages', {'RUTA': 'TextEdit', 'SECCION': 'Hidden', 'ZONA': 'Hidden', 'Canton': 'Hidden', 'Jerarquia': 'Hidden', 'Rve_Descri': 'Hidden', 'OBJECTID': 'Hidden', 'RUTA_1': 'Hidden', 'SC': 'Hidden', 'ORDEN': 'Hidden', 'TIPO': 'Hidden', 'LONG__KM_': 'Hidden', 'ACUMULADA_': 'Hidden', 'KM_INI': 'Hidden', 'KM_FIN': 'Hidden', 'ZONA_DE_CO': 'Hidden', 'TIPO_DE_SU': 'Hidden', 'DESCRIPCI': 'Hidden', });
lyr_PortafoliodeproyectoGCVP_6.set('fieldImages', {'ID': 'Hidden', 'X': 'Hidden', 'Y': 'Hidden', 'Proyecto': 'TextEdit', 'Ruta': 'TextEdit', 'Estado': 'TextEdit', 'Alcance': 'TextEdit', 'Fecha de I': 'TextEdit', 'Fecha de F': 'TextEdit', 'Avance': 'TextEdit', 'Costo': 'TextEdit', });
lyr_ZonasdeConservacin_2.set('fieldLabels', {'Zona2': 'no label', 'Nombre': 'no label', });
lyr_Lmiteprovincial_3.set('fieldLabels', {'PROVINCIA': 'no label', });
lyr_Redvialnacionalestratgica_4.set('fieldLabels', {'RUTA': 'inline label - visible with data', 'Rve_Descri': 'inline label - always visible', });
lyr_Redvialnacional_5.set('fieldLabels', {'RUTA': 'inline label - visible with data', });
lyr_PortafoliodeproyectoGCVP_6.set('fieldLabels', {'Proyecto': 'inline label - visible with data', 'Ruta': 'inline label - visible with data', 'Estado': 'inline label - visible with data', 'Alcance': 'inline label - visible with data', 'Fecha de I': 'inline label - visible with data', 'Fecha de F': 'inline label - visible with data', 'Avance': 'inline label - visible with data', 'Costo': 'inline label - visible with data', });
lyr_PortafoliodeproyectoGCVP_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});