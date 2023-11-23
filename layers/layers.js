ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:3375").setExtent([21983.455582, 500629.585577, 445663.139863, 708232.630875]);
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
var format_PERLIS_1 = new ol.format.GeoJSON();
var features_PERLIS_1 = format_PERLIS_1.readFeatures(json_PERLIS_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3375'});
var jsonSource_PERLIS_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PERLIS_1.addFeatures(features_PERLIS_1);
var lyr_PERLIS_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PERLIS_1, 
                style: style_PERLIS_1,
                interactive: true,
                title: '<img src="styles/legend/PERLIS_1.png" /> PERLIS'
            });
var format_KEDAH_2 = new ol.format.GeoJSON();
var features_KEDAH_2 = format_KEDAH_2.readFeatures(json_KEDAH_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3375'});
var jsonSource_KEDAH_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KEDAH_2.addFeatures(features_KEDAH_2);
var lyr_KEDAH_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KEDAH_2, 
                style: style_KEDAH_2,
                interactive: true,
                title: '<img src="styles/legend/KEDAH_2.png" /> KEDAH'
            });
var format_PERAK_3 = new ol.format.GeoJSON();
var features_PERAK_3 = format_PERAK_3.readFeatures(json_PERAK_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3375'});
var jsonSource_PERAK_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PERAK_3.addFeatures(features_PERAK_3);
var lyr_PERAK_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PERAK_3, 
                style: style_PERAK_3,
                interactive: true,
                title: '<img src="styles/legend/PERAK_3.png" /> PERAK'
            });
var format_PAHANG_4 = new ol.format.GeoJSON();
var features_PAHANG_4 = format_PAHANG_4.readFeatures(json_PAHANG_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3375'});
var jsonSource_PAHANG_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PAHANG_4.addFeatures(features_PAHANG_4);
var lyr_PAHANG_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PAHANG_4, 
                style: style_PAHANG_4,
                interactive: true,
                title: '<img src="styles/legend/PAHANG_4.png" /> PAHANG'
            });
var format_SELANGOR_5 = new ol.format.GeoJSON();
var features_SELANGOR_5 = format_SELANGOR_5.readFeatures(json_SELANGOR_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3375'});
var jsonSource_SELANGOR_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SELANGOR_5.addFeatures(features_SELANGOR_5);
var lyr_SELANGOR_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SELANGOR_5, 
                style: style_SELANGOR_5,
                interactive: true,
                title: '<img src="styles/legend/SELANGOR_5.png" /> SELANGOR'
            });
var format_JOHOR_6 = new ol.format.GeoJSON();
var features_JOHOR_6 = format_JOHOR_6.readFeatures(json_JOHOR_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3375'});
var jsonSource_JOHOR_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JOHOR_6.addFeatures(features_JOHOR_6);
var lyr_JOHOR_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JOHOR_6, 
                style: style_JOHOR_6,
                interactive: true,
                title: '<img src="styles/legend/JOHOR_6.png" /> JOHOR'
            });
var format_MELAKA_7 = new ol.format.GeoJSON();
var features_MELAKA_7 = format_MELAKA_7.readFeatures(json_MELAKA_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3375'});
var jsonSource_MELAKA_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MELAKA_7.addFeatures(features_MELAKA_7);
var lyr_MELAKA_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MELAKA_7, 
                style: style_MELAKA_7,
                interactive: true,
                title: '<img src="styles/legend/MELAKA_7.png" /> MELAKA'
            });
var format_KELANTAN_8 = new ol.format.GeoJSON();
var features_KELANTAN_8 = format_KELANTAN_8.readFeatures(json_KELANTAN_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3375'});
var jsonSource_KELANTAN_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KELANTAN_8.addFeatures(features_KELANTAN_8);
var lyr_KELANTAN_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KELANTAN_8, 
                style: style_KELANTAN_8,
                interactive: true,
                title: '<img src="styles/legend/KELANTAN_8.png" /> KELANTAN'
            });
var format_TERENGGANU_9 = new ol.format.GeoJSON();
var features_TERENGGANU_9 = format_TERENGGANU_9.readFeatures(json_TERENGGANU_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3375'});
var jsonSource_TERENGGANU_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TERENGGANU_9.addFeatures(features_TERENGGANU_9);
var lyr_TERENGGANU_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TERENGGANU_9, 
                style: style_TERENGGANU_9,
                interactive: true,
                title: '<img src="styles/legend/TERENGGANU_9.png" /> TERENGGANU'
            });
var format_NEGERISEMBILAN_10 = new ol.format.GeoJSON();
var features_NEGERISEMBILAN_10 = format_NEGERISEMBILAN_10.readFeatures(json_NEGERISEMBILAN_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3375'});
var jsonSource_NEGERISEMBILAN_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NEGERISEMBILAN_10.addFeatures(features_NEGERISEMBILAN_10);
var lyr_NEGERISEMBILAN_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NEGERISEMBILAN_10, 
                style: style_NEGERISEMBILAN_10,
                interactive: true,
                title: '<img src="styles/legend/NEGERISEMBILAN_10.png" /> NEGERI SEMBILAN'
            });
var format_PULAUPINANG_11 = new ol.format.GeoJSON();
var features_PULAUPINANG_11 = format_PULAUPINANG_11.readFeatures(json_PULAUPINANG_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3375'});
var jsonSource_PULAUPINANG_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PULAUPINANG_11.addFeatures(features_PULAUPINANG_11);
var lyr_PULAUPINANG_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PULAUPINANG_11, 
                style: style_PULAUPINANG_11,
                interactive: true,
                title: '<img src="styles/legend/PULAUPINANG_11.png" /> PULAU PINANG'
            });
var format_JLNUTAMA_12 = new ol.format.GeoJSON();
var features_JLNUTAMA_12 = format_JLNUTAMA_12.readFeatures(json_JLNUTAMA_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3375'});
var jsonSource_JLNUTAMA_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JLNUTAMA_12.addFeatures(features_JLNUTAMA_12);
var lyr_JLNUTAMA_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JLNUTAMA_12, 
                style: style_JLNUTAMA_12,
                interactive: true,
                title: '<img src="styles/legend/JLNUTAMA_12.png" /> JLN UTAMA'
            });
var format_NEWSKPK_SEMENANJUNG_LAT_LONG_13 = new ol.format.GeoJSON();
var features_NEWSKPK_SEMENANJUNG_LAT_LONG_13 = format_NEWSKPK_SEMENANJUNG_LAT_LONG_13.readFeatures(json_NEWSKPK_SEMENANJUNG_LAT_LONG_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3375'});
var jsonSource_NEWSKPK_SEMENANJUNG_LAT_LONG_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NEWSKPK_SEMENANJUNG_LAT_LONG_13.addFeatures(features_NEWSKPK_SEMENANJUNG_LAT_LONG_13);
var lyr_NEWSKPK_SEMENANJUNG_LAT_LONG_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NEWSKPK_SEMENANJUNG_LAT_LONG_13, 
                style: style_NEWSKPK_SEMENANJUNG_LAT_LONG_13,
                interactive: true,
                title: '<img src="styles/legend/NEWSKPK_SEMENANJUNG_LAT_LONG_13.png" /> NEW SKPK_SEMENANJUNG_LAT_LONG'
            });
var format_NEW_SMPK_SEMENANJUNG_LAT_LONG_14 = new ol.format.GeoJSON();
var features_NEW_SMPK_SEMENANJUNG_LAT_LONG_14 = format_NEW_SMPK_SEMENANJUNG_LAT_LONG_14.readFeatures(json_NEW_SMPK_SEMENANJUNG_LAT_LONG_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3375'});
var jsonSource_NEW_SMPK_SEMENANJUNG_LAT_LONG_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NEW_SMPK_SEMENANJUNG_LAT_LONG_14.addFeatures(features_NEW_SMPK_SEMENANJUNG_LAT_LONG_14);
var lyr_NEW_SMPK_SEMENANJUNG_LAT_LONG_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NEW_SMPK_SEMENANJUNG_LAT_LONG_14, 
                style: style_NEW_SMPK_SEMENANJUNG_LAT_LONG_14,
                interactive: true,
                title: '<img src="styles/legend/NEW_SMPK_SEMENANJUNG_LAT_LONG_14.png" /> NEW_SMPK_SEMENANJUNG_LAT_LONG'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_PERLIS_1.setVisible(true);lyr_KEDAH_2.setVisible(true);lyr_PERAK_3.setVisible(true);lyr_PAHANG_4.setVisible(true);lyr_SELANGOR_5.setVisible(true);lyr_JOHOR_6.setVisible(true);lyr_MELAKA_7.setVisible(true);lyr_KELANTAN_8.setVisible(true);lyr_TERENGGANU_9.setVisible(true);lyr_NEGERISEMBILAN_10.setVisible(true);lyr_PULAUPINANG_11.setVisible(true);lyr_JLNUTAMA_12.setVisible(true);lyr_NEWSKPK_SEMENANJUNG_LAT_LONG_13.setVisible(true);lyr_NEW_SMPK_SEMENANJUNG_LAT_LONG_14.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_PERLIS_1,lyr_KEDAH_2,lyr_PERAK_3,lyr_PAHANG_4,lyr_SELANGOR_5,lyr_JOHOR_6,lyr_MELAKA_7,lyr_KELANTAN_8,lyr_TERENGGANU_9,lyr_NEGERISEMBILAN_10,lyr_PULAUPINANG_11,lyr_JLNUTAMA_12,lyr_NEWSKPK_SEMENANJUNG_LAT_LONG_13,lyr_NEW_SMPK_SEMENANJUNG_LAT_LONG_14];
lyr_PERLIS_1.set('fieldAliases', {'id': 'id', 'n_daerah': 'n_daerah', 'Luas': 'Luas', 'NAGERI': 'NAGERI', });
lyr_KEDAH_2.set('fieldAliases', {'id': 'id', 'POPULASI': 'POPULASI', 'KELUASAN': 'KELUASAN', 'NEGERI': 'NEGERI', });
lyr_PERAK_3.set('fieldAliases', {'id': 'id', 'KELUASAN': 'KELUASAN', 'POPULASI': 'POPULASI', 'NAGERI': 'NAGERI', });
lyr_PAHANG_4.set('fieldAliases', {'id': 'id', 'Keluasan': 'Keluasan', 'Populasi': 'Populasi', 'NEGERI': 'NEGERI', });
lyr_SELANGOR_5.set('fieldAliases', {'id': 'id', 'Keluasan': 'Keluasan', 'Populasi': 'Populasi', ' NEGERI': ' NEGERI', });
lyr_JOHOR_6.set('fieldAliases', {'id': 'id', 'Keluasan': 'Keluasan', 'Populasi': 'Populasi', 'NEGERI': 'NEGERI', });
lyr_MELAKA_7.set('fieldAliases', {'id': 'id', 'Keluasan': 'Keluasan', 'Populasi': 'Populasi', 'NEGERI': 'NEGERI', });
lyr_KELANTAN_8.set('fieldAliases', {'id': 'id', 'Keluasan': 'Keluasan', 'Populasi': 'Populasi', 'NEGERI': 'NEGERI', });
lyr_TERENGGANU_9.set('fieldAliases', {'id': 'id', 'Keluasan': 'Keluasan', 'Populasi': 'Populasi', 'NEGERI': 'NEGERI', });
lyr_NEGERISEMBILAN_10.set('fieldAliases', {'id': 'id', 'Keluasan': 'Keluasan', 'Populasi': 'Populasi', 'NEGERI': 'NEGERI', });
lyr_PULAUPINANG_11.set('fieldAliases', {'id': 'id', 'Keluasan': 'Keluasan', 'Populasi': 'Populasi', 'NEGERI': 'NEGERI', });
lyr_JLNUTAMA_12.set('fieldAliases', {'nama jln': 'nama jln', 'jenis jln': 'jenis jln', });
lyr_NEWSKPK_SEMENANJUNG_LAT_LONG_13.set('fieldAliases', {'NAMA SEKOLAH': 'NAMA SEKOLAH', 'ALAMAT': 'ALAMAT', 'NO. TELEON': 'NO. TELEON', 'Kategori kelas': 'Kategori kelas', 'Arah': 'Arah', 'email': 'email', 'Y': 'Y', 'X': 'X', });
lyr_NEW_SMPK_SEMENANJUNG_LAT_LONG_14.set('fieldAliases', {'NAMA SEKOLAH': 'NAMA SEKOLAH', 'field_2': 'field_2', 'ALAMAT': 'ALAMAT', 'NO. TELEON': 'NO. TELEON', 'Kategori kelas': 'Kategori kelas', 'Arah': 'Arah', 'email': 'email', 'field_8': 'field_8', 'field_9': 'field_9', 'Y': 'Y', 'X': 'X', });
lyr_PERLIS_1.set('fieldImages', {'id': 'TextEdit', 'n_daerah': 'TextEdit', 'Luas': 'TextEdit', 'NAGERI': 'TextEdit', });
lyr_KEDAH_2.set('fieldImages', {'id': 'TextEdit', 'POPULASI': 'TextEdit', 'KELUASAN': 'TextEdit', 'NEGERI': 'TextEdit', });
lyr_PERAK_3.set('fieldImages', {'id': 'TextEdit', 'KELUASAN': 'TextEdit', 'POPULASI': 'TextEdit', 'NAGERI': 'TextEdit', });
lyr_PAHANG_4.set('fieldImages', {'id': 'TextEdit', 'Keluasan': 'TextEdit', 'Populasi': 'TextEdit', 'NEGERI': 'TextEdit', });
lyr_SELANGOR_5.set('fieldImages', {'id': 'TextEdit', 'Keluasan': 'TextEdit', 'Populasi': 'TextEdit', ' NEGERI': 'TextEdit', });
lyr_JOHOR_6.set('fieldImages', {'id': 'TextEdit', 'Keluasan': 'TextEdit', 'Populasi': 'TextEdit', 'NEGERI': 'TextEdit', });
lyr_MELAKA_7.set('fieldImages', {'id': 'TextEdit', 'Keluasan': 'TextEdit', 'Populasi': 'TextEdit', 'NEGERI': 'TextEdit', });
lyr_KELANTAN_8.set('fieldImages', {'id': 'TextEdit', 'Keluasan': 'TextEdit', 'Populasi': 'TextEdit', 'NEGERI': 'TextEdit', });
lyr_TERENGGANU_9.set('fieldImages', {'id': 'TextEdit', 'Keluasan': 'TextEdit', 'Populasi': 'TextEdit', 'NEGERI': 'TextEdit', });
lyr_NEGERISEMBILAN_10.set('fieldImages', {'id': 'TextEdit', 'Keluasan': 'TextEdit', 'Populasi': 'TextEdit', 'NEGERI': 'TextEdit', });
lyr_PULAUPINANG_11.set('fieldImages', {'id': 'TextEdit', 'Keluasan': 'TextEdit', 'Populasi': 'TextEdit', 'NEGERI': 'TextEdit', });
lyr_JLNUTAMA_12.set('fieldImages', {'nama jln': 'TextEdit', 'jenis jln': 'TextEdit', });
lyr_NEWSKPK_SEMENANJUNG_LAT_LONG_13.set('fieldImages', {'NAMA SEKOLAH': '', 'ALAMAT': '', 'NO. TELEON': '', 'Kategori kelas': '', 'Arah': '', 'email': '', 'Y': '', 'X': '', });
lyr_NEW_SMPK_SEMENANJUNG_LAT_LONG_14.set('fieldImages', {'NAMA SEKOLAH': '', 'field_2': '', 'ALAMAT': '', 'NO. TELEON': '', 'Kategori kelas': '', 'Arah': '', 'email': '', 'field_8': '', 'field_9': '', 'Y': '', 'X': '', });
lyr_PERLIS_1.set('fieldLabels', {'id': 'inline label', 'n_daerah': 'inline label', 'Luas': 'inline label', 'NAGERI': 'inline label', });
lyr_KEDAH_2.set('fieldLabels', {'id': 'inline label', 'POPULASI': 'inline label', 'KELUASAN': 'inline label', 'NEGERI': 'inline label', });
lyr_PERAK_3.set('fieldLabels', {'id': 'inline label', 'KELUASAN': 'inline label', 'POPULASI': 'inline label', 'NAGERI': 'inline label', });
lyr_PAHANG_4.set('fieldLabels', {'id': 'inline label', 'Keluasan': 'inline label', 'Populasi': 'inline label', 'NEGERI': 'inline label', });
lyr_SELANGOR_5.set('fieldLabels', {'id': 'inline label', 'Keluasan': 'inline label', 'Populasi': 'inline label', ' NEGERI': 'inline label', });
lyr_JOHOR_6.set('fieldLabels', {'id': 'inline label', 'Keluasan': 'inline label', 'Populasi': 'inline label', 'NEGERI': 'inline label', });
lyr_MELAKA_7.set('fieldLabels', {'id': 'inline label', 'Keluasan': 'inline label', 'Populasi': 'inline label', 'NEGERI': 'inline label', });
lyr_KELANTAN_8.set('fieldLabels', {'id': 'inline label', 'Keluasan': 'inline label', 'Populasi': 'inline label', 'NEGERI': 'inline label', });
lyr_TERENGGANU_9.set('fieldLabels', {'id': 'inline label', 'Keluasan': 'inline label', 'Populasi': 'inline label', 'NEGERI': 'inline label', });
lyr_NEGERISEMBILAN_10.set('fieldLabels', {'id': 'inline label', 'Keluasan': 'inline label', 'Populasi': 'inline label', 'NEGERI': 'inline label', });
lyr_PULAUPINANG_11.set('fieldLabels', {'id': 'inline label', 'Keluasan': 'inline label', 'Populasi': 'inline label', 'NEGERI': 'inline label', });
lyr_JLNUTAMA_12.set('fieldLabels', {'nama jln': 'inline label', 'jenis jln': 'inline label', });
lyr_NEWSKPK_SEMENANJUNG_LAT_LONG_13.set('fieldLabels', {'NAMA SEKOLAH': 'no label', 'ALAMAT': 'no label', 'NO. TELEON': 'no label', 'Kategori kelas': 'no label', 'Arah': 'no label', 'email': 'no label', 'Y': 'no label', 'X': 'no label', });
lyr_NEW_SMPK_SEMENANJUNG_LAT_LONG_14.set('fieldLabels', {'NAMA SEKOLAH': 'inline label', 'field_2': 'inline label', 'ALAMAT': 'inline label', 'NO. TELEON': 'inline label', 'Kategori kelas': 'inline label', 'Arah': 'inline label', 'email': 'inline label', 'field_8': 'no label', 'field_9': 'no label', 'Y': 'inline label', 'X': 'inline label', });
lyr_NEW_SMPK_SEMENANJUNG_LAT_LONG_14.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});