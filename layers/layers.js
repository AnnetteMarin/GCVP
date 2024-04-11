var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
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
                declutter: false,
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
var format_Lmitecantonal_3 = new ol.format.GeoJSON();
var features_Lmitecantonal_3 = format_Lmitecantonal_3.readFeatures(json_Lmitecantonal_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lmitecantonal_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lmitecantonal_3.addFeatures(features_Lmitecantonal_3);
var lyr_Lmitecantonal_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lmitecantonal_3, 
                style: style_Lmitecantonal_3,
                popuplayertitle: "Límite cantonal",
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
                declutter: false,
                source:jsonSource_Lmiteprovincial_4, 
                style: style_Lmiteprovincial_4,
                popuplayertitle: "Límite provincial",
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
                declutter: false,
                source:jsonSource_Redvialnacionalestratgica_5, 
                style: style_Redvialnacionalestratgica_5,
                popuplayertitle: "Red vial nacional estratégica",
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
                declutter: false,
                source:jsonSource_Redvialnacional_6, 
                style: style_Redvialnacional_6,
                popuplayertitle: "Red vial nacional",
                interactive: true,
    title: 'Red vial nacional<br />\
    <img src="styles/legend/Redvialnacional_6_0.png" /> Primaria<br />\
    <img src="styles/legend/Redvialnacional_6_1.png" /> Secundaria<br />\
    <img src="styles/legend/Redvialnacional_6_2.png" /> Terciaria<br />\
    <img src="styles/legend/Redvialnacional_6_3.png" /> Ruta Travesía<br />'
        });
var format_Proyectosencierrecontractual_7 = new ol.format.GeoJSON();
var features_Proyectosencierrecontractual_7 = format_Proyectosencierrecontractual_7.readFeatures(json_Proyectosencierrecontractual_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Proyectosencierrecontractual_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Proyectosencierrecontractual_7.addFeatures(features_Proyectosencierrecontractual_7);
var lyr_Proyectosencierrecontractual_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Proyectosencierrecontractual_7, 
                style: style_Proyectosencierrecontractual_7,
                popuplayertitle: "Proyectos en cierre contractual",
                interactive: true,
                title: '<img src="styles/legend/Proyectosencierrecontractual_7.png" /> Proyectos en cierre contractual'
            });
var format_Proyectosencontratacin_8 = new ol.format.GeoJSON();
var features_Proyectosencontratacin_8 = format_Proyectosencontratacin_8.readFeatures(json_Proyectosencontratacin_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Proyectosencontratacin_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Proyectosencontratacin_8.addFeatures(features_Proyectosencontratacin_8);
var lyr_Proyectosencontratacin_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Proyectosencontratacin_8, 
                style: style_Proyectosencontratacin_8,
                popuplayertitle: "Proyectos en contratación",
                interactive: true,
                title: '<img src="styles/legend/Proyectosencontratacin_8.png" /> Proyectos en contratación'
            });
var format_Proyectosendiseo_9 = new ol.format.GeoJSON();
var features_Proyectosendiseo_9 = format_Proyectosendiseo_9.readFeatures(json_Proyectosendiseo_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Proyectosendiseo_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Proyectosendiseo_9.addFeatures(features_Proyectosendiseo_9);
var lyr_Proyectosendiseo_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Proyectosendiseo_9, 
                style: style_Proyectosendiseo_9,
                popuplayertitle: "Proyectos en diseño",
                interactive: true,
                title: '<img src="styles/legend/Proyectosendiseo_9.png" /> Proyectos en diseño'
            });
var format_Proyectosenejecucin_10 = new ol.format.GeoJSON();
var features_Proyectosenejecucin_10 = format_Proyectosenejecucin_10.readFeatures(json_Proyectosenejecucin_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Proyectosenejecucin_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Proyectosenejecucin_10.addFeatures(features_Proyectosenejecucin_10);
var lyr_Proyectosenejecucin_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Proyectosenejecucin_10, 
                style: style_Proyectosenejecucin_10,
                popuplayertitle: "Proyectos en ejecución",
                interactive: true,
                title: '<img src="styles/legend/Proyectosenejecucin_10.png" /> Proyectos en ejecución'
            });
var format_Proyectosenplanificacin_11 = new ol.format.GeoJSON();
var features_Proyectosenplanificacin_11 = format_Proyectosenplanificacin_11.readFeatures(json_Proyectosenplanificacin_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Proyectosenplanificacin_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Proyectosenplanificacin_11.addFeatures(features_Proyectosenplanificacin_11);
var lyr_Proyectosenplanificacin_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Proyectosenplanificacin_11, 
                style: style_Proyectosenplanificacin_11,
                popuplayertitle: "Proyectos en planificación",
                interactive: true,
                title: '<img src="styles/legend/Proyectosenplanificacin_11.png" /> Proyectos en planificación'
            });
var format_Proyectossininiciar_12 = new ol.format.GeoJSON();
var features_Proyectossininiciar_12 = format_Proyectossininiciar_12.readFeatures(json_Proyectossininiciar_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Proyectossininiciar_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Proyectossininiciar_12.addFeatures(features_Proyectossininiciar_12);
var lyr_Proyectossininiciar_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Proyectossininiciar_12, 
                style: style_Proyectossininiciar_12,
                popuplayertitle: "Proyectos sin iniciar",
                interactive: true,
                title: '<img src="styles/legend/Proyectossininiciar_12.png" /> Proyectos sin iniciar'
            });
var format_Proyectossuspendidos_13 = new ol.format.GeoJSON();
var features_Proyectossuspendidos_13 = format_Proyectossuspendidos_13.readFeatures(json_Proyectossuspendidos_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Proyectossuspendidos_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Proyectossuspendidos_13.addFeatures(features_Proyectossuspendidos_13);
var lyr_Proyectossuspendidos_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Proyectossuspendidos_13, 
                style: style_Proyectossuspendidos_13,
                popuplayertitle: "Proyectos suspendidos",
                interactive: true,
                title: '<img src="styles/legend/Proyectossuspendidos_13.png" /> Proyectos suspendidos'
            });
var format_PortafoliodeproyectoGCVP_14 = new ol.format.GeoJSON();
var features_PortafoliodeproyectoGCVP_14 = format_PortafoliodeproyectoGCVP_14.readFeatures(json_PortafoliodeproyectoGCVP_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PortafoliodeproyectoGCVP_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PortafoliodeproyectoGCVP_14.addFeatures(features_PortafoliodeproyectoGCVP_14);
var lyr_PortafoliodeproyectoGCVP_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PortafoliodeproyectoGCVP_14, 
                style: style_PortafoliodeproyectoGCVP_14,
                popuplayertitle: "Portafolio de proyecto GCVP",
                interactive: true,
                title: '<img src="styles/legend/PortafoliodeproyectoGCVP_14.png" /> Portafolio de proyecto GCVP'
            });
var format_PROERI_15 = new ol.format.GeoJSON();
var features_PROERI_15 = format_PROERI_15.readFeatures(json_PROERI_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PROERI_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PROERI_15.addFeatures(features_PROERI_15);
var lyr_PROERI_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PROERI_15, 
                style: style_PROERI_15,
                popuplayertitle: "PROERI",
                interactive: true,
    title: 'PROERI<br />\
    <img src="styles/legend/PROERI_15_0.png" /> Alarmante<br />\
    <img src="styles/legend/PROERI_15_1.png" /> Deficiente<br />\
    <img src="styles/legend/PROERI_15_2.png" /> Falla inminente<br />\
    <img src="styles/legend/PROERI_15_3.png" /> Regular<br />\
    <img src="styles/legend/PROERI_15_4.png" /> Riesgo inaceptable<br />\
    <img src="styles/legend/PROERI_15_5.png" /> Seria<br />'
        });

lyr_GoogleHybrid_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(true);lyr_ZonasdeConservacin_2.setVisible(false);lyr_Lmitecantonal_3.setVisible(false);lyr_Lmiteprovincial_4.setVisible(false);lyr_Redvialnacionalestratgica_5.setVisible(false);lyr_Redvialnacional_6.setVisible(true);lyr_Proyectosencierrecontractual_7.setVisible(true);lyr_Proyectosencontratacin_8.setVisible(true);lyr_Proyectosendiseo_9.setVisible(true);lyr_Proyectosenejecucin_10.setVisible(true);lyr_Proyectosenplanificacin_11.setVisible(true);lyr_Proyectossininiciar_12.setVisible(true);lyr_Proyectossuspendidos_13.setVisible(true);lyr_PortafoliodeproyectoGCVP_14.setVisible(true);lyr_PROERI_15.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_OpenStreetMap_1,lyr_ZonasdeConservacin_2,lyr_Lmitecantonal_3,lyr_Lmiteprovincial_4,lyr_Redvialnacionalestratgica_5,lyr_Redvialnacional_6,lyr_Proyectosencierrecontractual_7,lyr_Proyectosencontratacin_8,lyr_Proyectosendiseo_9,lyr_Proyectosenejecucin_10,lyr_Proyectosenplanificacin_11,lyr_Proyectossininiciar_12,lyr_Proyectossuspendidos_13,lyr_PortafoliodeproyectoGCVP_14,lyr_PROERI_15];
lyr_ZonasdeConservacin_2.set('fieldAliases', {'Zona': 'Zona', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Zona2': 'Zona2', 'Nombre': 'Nombre', 'REgiones': 'REgiones', });
lyr_Lmitecantonal_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'CÓDIGO_CA': 'CÓDIGO_CA', 'CANTÓN': 'CANTÓN', });
lyr_Lmiteprovincial_4.set('fieldAliases', {'gml_id': 'gml_id', 'OBJECTID': 'OBJECTID', 'CÓDIGO': 'CÓDIGO', 'CÓDIGO_PR': 'CÓDIGO_PR', 'PROVINCIA': 'PROVINCIA', 'ORIGEN_DEL': 'ORIGEN_DEL', 'ÁREA': 'ÁREA', 'VERSIÓN': 'VERSIÓN', 'GLOBALID': 'GLOBALID', });
lyr_Redvialnacionalestratgica_5.set('fieldAliases', {'RUTA': 'RUTA', 'SECCION': 'SECCION', 'ZONA': 'ZONA', 'Canton': 'Canton', 'Jerarquia': 'Jerarquia', 'Rve_Descri': 'Rve_Descri', 'OBJECTID': 'OBJECTID', 'RUTA_1': 'RUTA_1', 'SC': 'SC', 'ORDEN': 'ORDEN', 'TIPO': 'TIPO', 'LONG__KM_': 'LONG__KM_', 'ACUMULADA_': 'ACUMULADA_', 'KM_INI': 'KM_INI', 'KM_FIN': 'KM_FIN', 'ZONA_DE_CO': 'ZONA_DE_CO', 'TIPO_DE_SU': 'TIPO_DE_SU', 'DESCRIPCI': 'DESCRIPCI', });
lyr_Redvialnacional_6.set('fieldAliases', {'RUTA': 'RUTA', 'SECCION': 'SECCION', 'ZONA': 'ZONA', 'Canton': 'Canton', 'Jerarquia': 'Jerarquia', 'Rve_Descri': 'Rve_Descri', 'OBJECTID': 'OBJECTID', 'RUTA_1': 'RUTA_1', 'SC': 'SC', 'ORDEN': 'ORDEN', 'TIPO': 'TIPO', 'LONG__KM_': 'LONG__KM_', 'ACUMULADA_': 'ACUMULADA_', 'KM_INI': 'KM_INI', 'KM_FIN': 'KM_FIN', 'ZONA_DE_CO': 'ZONA_DE_CO', 'TIPO_DE_SU': 'TIPO_DE_SU', 'DESCRIPCI': 'DESCRIPCI', });
lyr_Proyectosencierrecontractual_7.set('fieldAliases', {'ID': 'ID', 'X': 'X', 'Y': 'Y', 'Proyecto': 'Proyecto', 'Alcance': 'Alcance', 'Estado': 'Estado', 'Ruta': 'Ruta', 'Inicio': 'Inicio', 'Finalizaci': 'Finalizaci', 'Avance': 'Avance', 'Costo': 'Costo', });
lyr_Proyectosencontratacin_8.set('fieldAliases', {'ID': 'ID', 'X': 'X', 'Y': 'Y', 'Proyecto': 'Proyecto', 'Alcance': 'Alcance', 'Estado': 'Estado', 'Ruta': 'Ruta', 'Inicio': 'Inicio', 'Finalizaci': 'Finalizaci', 'Avance': 'Avance', 'Costo': 'Costo', });
lyr_Proyectosendiseo_9.set('fieldAliases', {'ID': 'ID', 'X': 'X', 'Y': 'Y', 'Proyecto': 'Proyecto', 'Alcance': 'Alcance', 'Estado': 'Estado', 'Ruta': 'Ruta', 'Inicio': 'Inicio', 'Finalizaci': 'Finalizaci', 'Avance': 'Avance', 'Costo': 'Costo', });
lyr_Proyectosenejecucin_10.set('fieldAliases', {'ID': 'ID', 'X': 'X', 'Y': 'Y', 'Proyecto': 'Proyecto', 'Alcance': 'Alcance', 'Estado': 'Estado', 'Ruta': 'Ruta', 'Inicio': 'Inicio', 'Finalizaci': 'Finalizaci', 'Avance': 'Avance', 'Costo': 'Costo', });
lyr_Proyectosenplanificacin_11.set('fieldAliases', {'ID': 'ID', 'X': 'X', 'Y': 'Y', 'Proyecto': 'Proyecto', 'Alcance': 'Alcance', 'Estado': 'Estado', 'Ruta': 'Ruta', 'Inicio': 'Inicio', 'Finalizaci': 'Finalizaci', 'Avance': 'Avance', 'Costo': 'Costo', });
lyr_Proyectossininiciar_12.set('fieldAliases', {'ID': 'ID', 'X': 'X', 'Y': 'Y', 'Proyecto': 'Proyecto', 'Alcance': 'Alcance', 'Estado': 'Estado', 'Ruta': 'Ruta', 'Inicio': 'Inicio', 'Finalizaci': 'Finalizaci', 'Avance': 'Avance', 'Costo': 'Costo', });
lyr_Proyectossuspendidos_13.set('fieldAliases', {'ID': 'ID', 'X': 'X', 'Y': 'Y', 'Proyecto': 'Proyecto', 'Alcance': 'Alcance', 'Estado': 'Estado', 'Ruta': 'Ruta', 'Inicio': 'Inicio', 'Finalizaci': 'Finalizaci', 'Avance': 'Avance', 'Costo': 'Costo', });
lyr_PortafoliodeproyectoGCVP_14.set('fieldAliases', {'ID': 'ID', 'X': 'X', 'Y': 'Y', 'Proyecto': 'Proyecto', 'Alcance': 'Alcance', 'Estado': 'Estado', 'Ruta': 'Ruta', 'Inicio': 'Inicio', 'Finalizaci': 'Finalizaci', 'Avance': 'Avance', 'Costo': 'Costo', 'field_12': 'field_12', 'field_13': 'field_13', 'field_14': 'field_14', 'field_15': 'field_15', 'field_16': 'field_16', 'field_17': 'field_17', 'field_18': 'field_18', 'field_19': 'field_19', 'field_20': 'field_20', 'field_21': 'field_21', 'field_22': 'field_22', 'field_23': 'field_23', 'field_24': 'field_24', 'field_25': 'field_25', 'field_26': 'field_26', });
lyr_PROERI_15.set('fieldAliases', {'ID': 'ID', 'Nombre del': 'Nombre', 'Descripci�': 'Descripción', 'Tipo de in': 'Intervención', 'Condición': 'Condición', 'Estado': 'Estado', 'Equipo de': 'Equipo', 'Provincia': 'Provincia', 'Cantón': 'Cantón', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Ruta Nacio': 'Ruta', 'Fuente de': 'Financiamiento', 'Monto del': 'Monto', });
lyr_ZonasdeConservacin_2.set('fieldImages', {'Zona': 'Hidden', 'Shape_Leng': 'Hidden', 'Shape_Area': 'Hidden', 'Zona2': 'TextEdit', 'Nombre': 'TextEdit', 'REgiones': 'Hidden', });
lyr_Lmitecantonal_3.set('fieldImages', {'OBJECTID': 'Hidden', 'CÓDIGO_CA': 'Hidden', 'CANTÓN': 'TextEdit', });
lyr_Lmiteprovincial_4.set('fieldImages', {'gml_id': 'Hidden', 'OBJECTID': 'Hidden', 'CÓDIGO': 'Hidden', 'CÓDIGO_PR': 'Hidden', 'PROVINCIA': 'TextEdit', 'ORIGEN_DEL': 'Hidden', 'ÁREA': 'Hidden', 'VERSIÓN': 'Hidden', 'GLOBALID': 'Hidden', });
lyr_Redvialnacionalestratgica_5.set('fieldImages', {'RUTA': 'TextEdit', 'SECCION': 'Hidden', 'ZONA': 'Hidden', 'Canton': 'Hidden', 'Jerarquia': 'Hidden', 'Rve_Descri': 'TextEdit', 'OBJECTID': 'Hidden', 'RUTA_1': 'Hidden', 'SC': 'Hidden', 'ORDEN': 'Hidden', 'TIPO': 'Hidden', 'LONG__KM_': 'Hidden', 'ACUMULADA_': 'Hidden', 'KM_INI': 'Hidden', 'KM_FIN': 'Hidden', 'ZONA_DE_CO': 'Hidden', 'TIPO_DE_SU': 'Hidden', 'DESCRIPCI': 'Hidden', });
lyr_Redvialnacional_6.set('fieldImages', {'RUTA': 'TextEdit', 'SECCION': 'Hidden', 'ZONA': 'Hidden', 'Canton': 'Hidden', 'Jerarquia': 'Hidden', 'Rve_Descri': 'Hidden', 'OBJECTID': 'Hidden', 'RUTA_1': 'Hidden', 'SC': 'Hidden', 'ORDEN': 'Hidden', 'TIPO': 'Hidden', 'LONG__KM_': 'Hidden', 'ACUMULADA_': 'Hidden', 'KM_INI': 'Hidden', 'KM_FIN': 'Hidden', 'ZONA_DE_CO': 'Hidden', 'TIPO_DE_SU': 'Hidden', 'DESCRIPCI': 'Hidden', });
lyr_Proyectosencierrecontractual_7.set('fieldImages', {'ID': 'Hidden', 'X': 'Hidden', 'Y': 'Hidden', 'Proyecto': 'Hidden', 'Alcance': 'TextEdit', 'Estado': 'TextEdit', 'Ruta': 'TextEdit', 'Inicio': 'TextEdit', 'Finalizaci': 'TextEdit', 'Avance': 'TextEdit', 'Costo': 'TextEdit', });
lyr_Proyectosencontratacin_8.set('fieldImages', {'ID': 'Hidden', 'X': 'Hidden', 'Y': 'Hidden', 'Proyecto': 'Hidden', 'Alcance': 'TextEdit', 'Estado': 'TextEdit', 'Ruta': 'TextEdit', 'Inicio': 'TextEdit', 'Finalizaci': 'TextEdit', 'Avance': 'TextEdit', 'Costo': 'TextEdit', });
lyr_Proyectosendiseo_9.set('fieldImages', {'ID': 'Hidden', 'X': 'Hidden', 'Y': 'Hidden', 'Proyecto': 'Hidden', 'Alcance': 'TextEdit', 'Estado': 'TextEdit', 'Ruta': 'TextEdit', 'Inicio': 'TextEdit', 'Finalizaci': 'TextEdit', 'Avance': 'TextEdit', 'Costo': 'TextEdit', });
lyr_Proyectosenejecucin_10.set('fieldImages', {'ID': 'Hidden', 'X': 'Hidden', 'Y': 'Hidden', 'Proyecto': 'Hidden', 'Alcance': 'TextEdit', 'Estado': 'TextEdit', 'Ruta': 'TextEdit', 'Inicio': 'TextEdit', 'Finalizaci': 'TextEdit', 'Avance': 'TextEdit', 'Costo': 'TextEdit', });
lyr_Proyectosenplanificacin_11.set('fieldImages', {'ID': 'Hidden', 'X': 'Hidden', 'Y': 'Hidden', 'Proyecto': 'Hidden', 'Alcance': 'TextEdit', 'Estado': 'TextEdit', 'Ruta': 'TextEdit', 'Inicio': 'TextEdit', 'Finalizaci': 'TextEdit', 'Avance': 'TextEdit', 'Costo': 'TextEdit', });
lyr_Proyectossininiciar_12.set('fieldImages', {'ID': 'Hidden', 'X': 'Hidden', 'Y': 'Hidden', 'Proyecto': 'Hidden', 'Alcance': 'TextEdit', 'Estado': 'TextEdit', 'Ruta': 'TextEdit', 'Inicio': 'TextEdit', 'Finalizaci': 'TextEdit', 'Avance': 'TextEdit', 'Costo': 'TextEdit', });
lyr_Proyectossuspendidos_13.set('fieldImages', {'ID': 'Hidden', 'X': 'Hidden', 'Y': 'Hidden', 'Proyecto': 'Hidden', 'Alcance': 'TextEdit', 'Estado': 'TextEdit', 'Ruta': 'TextEdit', 'Inicio': 'TextEdit', 'Finalizaci': 'TextEdit', 'Avance': 'TextEdit', 'Costo': 'TextEdit', });
lyr_PortafoliodeproyectoGCVP_14.set('fieldImages', {'ID': 'Hidden', 'X': 'Hidden', 'Y': 'Hidden', 'Proyecto': 'TextEdit', 'Alcance': 'Hidden', 'Estado': 'Hidden', 'Ruta': 'Hidden', 'Inicio': 'Hidden', 'Finalizaci': 'Hidden', 'Avance': 'Hidden', 'Costo': 'Hidden', 'field_12': 'Hidden', 'field_13': 'Hidden', 'field_14': 'Hidden', 'field_15': 'Hidden', 'field_16': 'Hidden', 'field_17': 'Hidden', 'field_18': 'Hidden', 'field_19': 'Hidden', 'field_20': 'Hidden', 'field_21': 'Hidden', 'field_22': 'Hidden', 'field_23': 'Hidden', 'field_24': 'Hidden', 'field_25': 'Hidden', 'field_26': 'Hidden', });
lyr_PROERI_15.set('fieldImages', {'ID': 'Hidden', 'Nombre del': 'TextEdit', 'Descripci�': 'TextEdit', 'Tipo de in': 'TextEdit', 'Condición': 'TextEdit', 'Estado': 'TextEdit', 'Equipo de': 'Hidden', 'Provincia': 'Hidden', 'Cantón': 'Hidden', 'Latitud': 'Hidden', 'Longitud': 'Hidden', 'Ruta Nacio': 'TextEdit', 'Fuente de': 'TextEdit', 'Monto del': 'TextEdit', });
lyr_ZonasdeConservacin_2.set('fieldLabels', {'Zona2': 'inline label - visible with data', 'Nombre': 'inline label - visible with data', });
lyr_Lmitecantonal_3.set('fieldLabels', {'CANTÓN': 'inline label - visible with data', });
lyr_Lmiteprovincial_4.set('fieldLabels', {'PROVINCIA': 'inline label - visible with data', });
lyr_Redvialnacionalestratgica_5.set('fieldLabels', {'RUTA': 'inline label - visible with data', 'Rve_Descri': 'inline label - always visible', });
lyr_Redvialnacional_6.set('fieldLabels', {'RUTA': 'inline label - visible with data', });
lyr_Proyectosencierrecontractual_7.set('fieldLabels', {'Alcance': 'inline label - visible with data', 'Estado': 'inline label - visible with data', 'Ruta': 'inline label - visible with data', 'Inicio': 'inline label - visible with data', 'Finalizaci': 'inline label - visible with data', 'Avance': 'inline label - visible with data', 'Costo': 'inline label - visible with data', });
lyr_Proyectosencontratacin_8.set('fieldLabels', {'Alcance': 'inline label - visible with data', 'Estado': 'inline label - visible with data', 'Ruta': 'inline label - visible with data', 'Inicio': 'inline label - visible with data', 'Finalizaci': 'inline label - visible with data', 'Avance': 'inline label - visible with data', 'Costo': 'inline label - visible with data', });
lyr_Proyectosendiseo_9.set('fieldLabels', {'Alcance': 'inline label - visible with data', 'Estado': 'inline label - visible with data', 'Ruta': 'inline label - visible with data', 'Inicio': 'inline label - visible with data', 'Finalizaci': 'inline label - visible with data', 'Avance': 'inline label - visible with data', 'Costo': 'inline label - visible with data', });
lyr_Proyectosenejecucin_10.set('fieldLabels', {'Alcance': 'inline label - visible with data', 'Estado': 'inline label - visible with data', 'Ruta': 'inline label - visible with data', 'Inicio': 'inline label - visible with data', 'Finalizaci': 'inline label - visible with data', 'Avance': 'inline label - visible with data', 'Costo': 'inline label - visible with data', });
lyr_Proyectosenplanificacin_11.set('fieldLabels', {'Alcance': 'inline label - visible with data', 'Estado': 'inline label - visible with data', 'Ruta': 'inline label - visible with data', 'Inicio': 'inline label - visible with data', 'Finalizaci': 'inline label - visible with data', 'Avance': 'inline label - visible with data', 'Costo': 'inline label - visible with data', });
lyr_Proyectossininiciar_12.set('fieldLabels', {'Alcance': 'inline label - visible with data', 'Estado': 'inline label - visible with data', 'Ruta': 'inline label - visible with data', 'Inicio': 'inline label - visible with data', 'Finalizaci': 'inline label - visible with data', 'Avance': 'inline label - visible with data', 'Costo': 'inline label - visible with data', });
lyr_Proyectossuspendidos_13.set('fieldLabels', {'Alcance': 'inline label - visible with data', 'Estado': 'inline label - visible with data', 'Ruta': 'inline label - visible with data', 'Inicio': 'inline label - visible with data', 'Finalizaci': 'inline label - visible with data', 'Avance': 'inline label - visible with data', 'Costo': 'inline label - visible with data', });
lyr_PortafoliodeproyectoGCVP_14.set('fieldLabels', {'Proyecto': 'no label', });
lyr_PROERI_15.set('fieldLabels', {'Nombre del': 'inline label - always visible', 'Descripci�': 'inline label - always visible', 'Tipo de in': 'inline label - always visible', 'Condición': 'inline label - always visible', 'Estado': 'inline label - always visible', 'Ruta Nacio': 'inline label - always visible', 'Fuente de': 'inline label - always visible', 'Monto del': 'inline label - always visible', });
lyr_PROERI_15.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});