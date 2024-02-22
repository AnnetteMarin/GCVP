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
var format_Lmitecantonal_3 = new ol.format.GeoJSON();
var features_Lmitecantonal_3 = format_Lmitecantonal_3.readFeatures(json_Lmitecantonal_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lmitecantonal_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lmitecantonal_3.addFeatures(features_Lmitecantonal_3);
var lyr_Lmitecantonal_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Lmitecantonal_3, 
                style: style_Lmitecantonal_3,
                interactive: true,
                title: '<img src="styles/legend/Lmitecantonal_3.png" /> Límite cantonal'
            });
var format_Lmiteprovincial_4 = new ol.format.GeoJSON();
var features_Lmiteprovincial_4 = format_Lmiteprovincial_4.readFeatures(json_Lmiteprovincial_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lmiteprovincial_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lmiteprovincial_4.addFeatures(features_Lmiteprovincial_4);
var lyr_Lmiteprovincial_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Lmiteprovincial_4, 
                style: style_Lmiteprovincial_4,
                interactive: true,
    title: 'Límite provincial<br />\
    <img src="styles/legend/Lmiteprovincial_4_0.png" /> Alajuela<br />\
    <img src="styles/legend/Lmiteprovincial_4_1.png" /> Cartago<br />\
    <img src="styles/legend/Lmiteprovincial_4_2.png" /> Guanacaste<br />\
    <img src="styles/legend/Lmiteprovincial_4_3.png" /> Heredia<br />\
    <img src="styles/legend/Lmiteprovincial_4_4.png" /> Limón<br />\
    <img src="styles/legend/Lmiteprovincial_4_5.png" /> Puntarenas<br />\
    <img src="styles/legend/Lmiteprovincial_4_6.png" /> San José<br />'
        });
var format_Redvialnacionalestratgica_5 = new ol.format.GeoJSON();
var features_Redvialnacionalestratgica_5 = format_Redvialnacionalestratgica_5.readFeatures(json_Redvialnacionalestratgica_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Redvialnacionalestratgica_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Redvialnacionalestratgica_5.addFeatures(features_Redvialnacionalestratgica_5);
var lyr_Redvialnacionalestratgica_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Redvialnacionalestratgica_5, 
                style: style_Redvialnacionalestratgica_5,
                interactive: true,
    title: 'Red vial nacional estratégica<br />\
    <img src="styles/legend/Redvialnacionalestratgica_5_0.png" /> Conectores de Integración Territorial<br />\
    <img src="styles/legend/Redvialnacionalestratgica_5_1.png" /> Distribuidores Regionales<br />\
    <img src="styles/legend/Redvialnacionalestratgica_5_2.png" /> Red Básica de Accesso<br />\
    <img src="styles/legend/Redvialnacionalestratgica_5_3.png" /> Red de Alta Capacidad<br />\
    <img src="styles/legend/Redvialnacionalestratgica_5_4.png" /> Ruta Travesía<br />'
        });
var format_Redvialnacional_6 = new ol.format.GeoJSON();
var features_Redvialnacional_6 = format_Redvialnacional_6.readFeatures(json_Redvialnacional_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Redvialnacional_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Redvialnacional_6.addFeatures(features_Redvialnacional_6);
var lyr_Redvialnacional_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Redvialnacional_6, 
                style: style_Redvialnacional_6,
                interactive: true,
    title: 'Red vial nacional<br />\
    <img src="styles/legend/Redvialnacional_6_0.png" /> Primaria<br />\
    <img src="styles/legend/Redvialnacional_6_1.png" /> Secundaria<br />\
    <img src="styles/legend/Redvialnacional_6_2.png" /> Terciaria<br />\
    <img src="styles/legend/Redvialnacional_6_3.png" /> Ruta Travesía<br />'
        });
var format_Portafolio_7 = new ol.format.GeoJSON();
var features_Portafolio_7 = format_Portafolio_7.readFeatures(json_Portafolio_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Portafolio_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Portafolio_7.addFeatures(features_Portafolio_7);
var lyr_Portafolio_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Portafolio_7, 
                style: style_Portafolio_7,
                interactive: true,
    title: 'Portafolio<br />\
    <img src="styles/legend/Portafolio_7_0.png" /> Cierre Contractual<br />\
    <img src="styles/legend/Portafolio_7_1.png" /> Diseño<br />\
    <img src="styles/legend/Portafolio_7_2.png" /> Diseño / Contratación<br />\
    <img src="styles/legend/Portafolio_7_3.png" /> En Ejecución<br />\
    <img src="styles/legend/Portafolio_7_4.png" /> Planificación<br />\
    <img src="styles/legend/Portafolio_7_5.png" /> Sin Iniciar<br />\
    <img src="styles/legend/Portafolio_7_6.png" /> Suspendido<br />'
        });

lyr_GoogleHybrid_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(true);lyr_ZonasdeConservacin_2.setVisible(false);lyr_Lmitecantonal_3.setVisible(false);lyr_Lmiteprovincial_4.setVisible(false);lyr_Redvialnacionalestratgica_5.setVisible(false);lyr_Redvialnacional_6.setVisible(true);lyr_Portafolio_7.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_OpenStreetMap_1,lyr_ZonasdeConservacin_2,lyr_Lmitecantonal_3,lyr_Lmiteprovincial_4,lyr_Redvialnacionalestratgica_5,lyr_Redvialnacional_6,lyr_Portafolio_7];
lyr_ZonasdeConservacin_2.set('fieldAliases', {'Zona': 'Zona', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Zona2': 'Zona2', 'Nombre': 'Nombre', 'REgiones': 'REgiones', });
lyr_Lmitecantonal_3.set('fieldAliases', {'gml_id': 'gml_id', 'OBJECTID': 'OBJECTID', 'CÓDIGO': 'CÓDIGO', 'CÓDIGO_CA': 'CÓDIGO_CA', 'CANTÓN': 'CANTÓN', 'CÓDIGO_DE': 'CÓDIGO_DE', 'PROVINCIA': 'PROVINCIA', 'ORIGEN_DEL': 'ORIGEN_DEL', 'LEGISLACI�': 'LEGISLACI�', 'OFICIALIZA': 'OFICIALIZA', 'ÁREA': 'ÁREA', 'VERSIÓN': 'VERSIÓN', 'GlobalID': 'GlobalID', });
lyr_Lmiteprovincial_4.set('fieldAliases', {'gml_id': 'gml_id', 'OBJECTID': 'OBJECTID', 'CÓDIGO': 'CÓDIGO', 'CÓDIGO_PR': 'CÓDIGO_PR', 'PROVINCIA': 'PROVINCIA', 'ORIGEN_DEL': 'ORIGEN_DEL', 'ÁREA': 'ÁREA', 'VERSIÓN': 'VERSIÓN', 'GLOBALID': 'GLOBALID', });
lyr_Redvialnacionalestratgica_5.set('fieldAliases', {'RUTA': 'RUTA', 'SECCION': 'SECCION', 'ZONA': 'ZONA', 'Canton': 'Canton', 'Jerarquia': 'Jerarquia', 'Rve_Descri': 'Rve_Descri', 'OBJECTID': 'OBJECTID', 'RUTA_1': 'RUTA_1', 'SC': 'SC', 'ORDEN': 'ORDEN', 'TIPO': 'TIPO', 'LONG__KM_': 'LONG__KM_', 'ACUMULADA_': 'ACUMULADA_', 'KM_INI': 'KM_INI', 'KM_FIN': 'KM_FIN', 'ZONA_DE_CO': 'ZONA_DE_CO', 'TIPO_DE_SU': 'TIPO_DE_SU', 'DESCRIPCI': 'DESCRIPCI', });
lyr_Redvialnacional_6.set('fieldAliases', {'RUTA': 'RUTA', 'SECCION': 'SECCION', 'ZONA': 'ZONA', 'Canton': 'Canton', 'Jerarquia': 'Jerarquia', 'Rve_Descri': 'Rve_Descri', 'OBJECTID': 'OBJECTID', 'RUTA_1': 'RUTA_1', 'SC': 'SC', 'ORDEN': 'ORDEN', 'TIPO': 'TIPO', 'LONG__KM_': 'LONG__KM_', 'ACUMULADA_': 'ACUMULADA_', 'KM_INI': 'KM_INI', 'KM_FIN': 'KM_FIN', 'ZONA_DE_CO': 'ZONA_DE_CO', 'TIPO_DE_SU': 'TIPO_DE_SU', 'DESCRIPCI': 'DESCRIPCI', });
lyr_Portafolio_7.set('fieldAliases', {'ID': 'ID', 'X': 'X', 'Y': 'Y', 'Proyecto': 'Proyecto', 'Ruta': 'Ruta', 'Estado': 'Estado', 'Alcance': 'Alcance', 'Fecha de Inicio': 'Fecha de Inicio', 'Fecha de Finalización': 'Fecha de Finalización', 'Avance': 'Avance', 'Costo': 'Costo', });
lyr_ZonasdeConservacin_2.set('fieldImages', {'Zona': 'Hidden', 'Shape_Leng': 'Hidden', 'Shape_Area': 'Hidden', 'Zona2': 'TextEdit', 'Nombre': 'TextEdit', 'REgiones': 'Hidden', });
lyr_Lmitecantonal_3.set('fieldImages', {'gml_id': 'Hidden', 'OBJECTID': 'Hidden', 'CÓDIGO': 'Hidden', 'CÓDIGO_CA': 'Hidden', 'CANTÓN': 'TextEdit', 'CÓDIGO_DE': 'Hidden', 'PROVINCIA': 'Hidden', 'ORIGEN_DEL': 'Hidden', 'LEGISLACI�': 'Hidden', 'OFICIALIZA': 'Hidden', 'ÁREA': 'Hidden', 'VERSIÓN': 'Hidden', 'GlobalID': 'Hidden', });
lyr_Lmiteprovincial_4.set('fieldImages', {'gml_id': 'Hidden', 'OBJECTID': 'Hidden', 'CÓDIGO': 'Hidden', 'CÓDIGO_PR': 'Hidden', 'PROVINCIA': 'TextEdit', 'ORIGEN_DEL': 'Hidden', 'ÁREA': 'Hidden', 'VERSIÓN': 'Hidden', 'GLOBALID': 'Hidden', });
lyr_Redvialnacionalestratgica_5.set('fieldImages', {'RUTA': 'TextEdit', 'SECCION': 'Hidden', 'ZONA': 'Hidden', 'Canton': 'Hidden', 'Jerarquia': 'Hidden', 'Rve_Descri': 'TextEdit', 'OBJECTID': 'Hidden', 'RUTA_1': 'Hidden', 'SC': 'Hidden', 'ORDEN': 'Hidden', 'TIPO': 'Hidden', 'LONG__KM_': 'Hidden', 'ACUMULADA_': 'Hidden', 'KM_INI': 'Hidden', 'KM_FIN': 'Hidden', 'ZONA_DE_CO': 'Hidden', 'TIPO_DE_SU': 'Hidden', 'DESCRIPCI': 'Hidden', });
lyr_Redvialnacional_6.set('fieldImages', {'RUTA': 'TextEdit', 'SECCION': 'Hidden', 'ZONA': 'Hidden', 'Canton': 'Hidden', 'Jerarquia': 'Hidden', 'Rve_Descri': 'Hidden', 'OBJECTID': 'Hidden', 'RUTA_1': 'Hidden', 'SC': 'Hidden', 'ORDEN': 'Hidden', 'TIPO': 'Hidden', 'LONG__KM_': 'Hidden', 'ACUMULADA_': 'Hidden', 'KM_INI': 'Hidden', 'KM_FIN': 'Hidden', 'ZONA_DE_CO': 'Hidden', 'TIPO_DE_SU': 'Hidden', 'DESCRIPCI': 'Hidden', });
lyr_Portafolio_7.set('fieldImages', {'ID': 'Range', 'X': 'TextEdit', 'Y': 'TextEdit', 'Proyecto': 'TextEdit', 'Ruta': 'TextEdit', 'Estado': 'TextEdit', 'Alcance': 'TextEdit', 'Fecha de Inicio': 'TextEdit', 'Fecha de Finalización': 'TextEdit', 'Avance': 'TextEdit', 'Costo': 'TextEdit', });
lyr_ZonasdeConservacin_2.set('fieldLabels', {'Zona2': 'no label', 'Nombre': 'no label', });
lyr_Lmitecantonal_3.set('fieldLabels', {'CANTÓN': 'header label - visible with data', });
lyr_Lmiteprovincial_4.set('fieldLabels', {'PROVINCIA': 'no label', });
lyr_Redvialnacionalestratgica_5.set('fieldLabels', {'RUTA': 'inline label - visible with data', 'Rve_Descri': 'no label', });
lyr_Redvialnacional_6.set('fieldLabels', {'RUTA': 'inline label - visible with data', });
lyr_Portafolio_7.set('fieldLabels', {'ID': 'no label', 'X': 'no label', 'Y': 'no label', 'Proyecto': 'inline label - visible with data', 'Ruta': 'inline label - visible with data', 'Estado': 'inline label - visible with data', 'Alcance': 'inline label - visible with data', 'Fecha de Inicio': 'inline label - visible with data', 'Fecha de Finalización': 'inline label - visible with data', 'Avance': 'inline label - visible with data', 'Costo': 'inline label - visible with data', });
lyr_Portafolio_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});