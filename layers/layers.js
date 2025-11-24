var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_WilayahAdministrasiKecamatan_1 = new ol.format.GeoJSON();
var features_WilayahAdministrasiKecamatan_1 = format_WilayahAdministrasiKecamatan_1.readFeatures(json_WilayahAdministrasiKecamatan_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WilayahAdministrasiKecamatan_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WilayahAdministrasiKecamatan_1.addFeatures(features_WilayahAdministrasiKecamatan_1);
var lyr_WilayahAdministrasiKecamatan_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WilayahAdministrasiKecamatan_1, 
                style: style_WilayahAdministrasiKecamatan_1,
                popuplayertitle: 'Wilayah Administrasi Kecamatan',
                interactive: true,
                title: '<img src="styles/legend/WilayahAdministrasiKecamatan_1.png" /> Wilayah Administrasi Kecamatan'
            });
var format_JaringanJalan_2 = new ol.format.GeoJSON();
var features_JaringanJalan_2 = format_JaringanJalan_2.readFeatures(json_JaringanJalan_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JaringanJalan_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JaringanJalan_2.addFeatures(features_JaringanJalan_2);
var lyr_JaringanJalan_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JaringanJalan_2, 
                style: style_JaringanJalan_2,
                popuplayertitle: 'Jaringan Jalan',
                interactive: true,
                title: '<img src="styles/legend/JaringanJalan_2.png" /> Jaringan Jalan'
            });
var format_BatasAdministrasiKecamatan_3 = new ol.format.GeoJSON();
var features_BatasAdministrasiKecamatan_3 = format_BatasAdministrasiKecamatan_3.readFeatures(json_BatasAdministrasiKecamatan_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasAdministrasiKecamatan_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasAdministrasiKecamatan_3.addFeatures(features_BatasAdministrasiKecamatan_3);
var lyr_BatasAdministrasiKecamatan_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasAdministrasiKecamatan_3, 
                style: style_BatasAdministrasiKecamatan_3,
                popuplayertitle: 'Batas Administrasi Kecamatan',
                interactive: true,
                title: '<img src="styles/legend/BatasAdministrasiKecamatan_3.png" /> Batas Administrasi Kecamatan'
            });
var format_JangkauanRumahSakit_4 = new ol.format.GeoJSON();
var features_JangkauanRumahSakit_4 = format_JangkauanRumahSakit_4.readFeatures(json_JangkauanRumahSakit_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JangkauanRumahSakit_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JangkauanRumahSakit_4.addFeatures(features_JangkauanRumahSakit_4);
var lyr_JangkauanRumahSakit_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JangkauanRumahSakit_4, 
                style: style_JangkauanRumahSakit_4,
                popuplayertitle: 'Jangkauan Rumah Sakit',
                interactive: true,
    title: 'Jangkauan Rumah Sakit (m)<br />\
    <img src="styles/legend/JangkauanRumahSakit_4_0.png" /> 500<br />\
    <img src="styles/legend/JangkauanRumahSakit_4_1.png" /> 1.500<br />\
    <img src="styles/legend/JangkauanRumahSakit_4_2.png" /> 1.000<br />' });
var format_RumahSakit_5 = new ol.format.GeoJSON();
var features_RumahSakit_5 = format_RumahSakit_5.readFeatures(json_RumahSakit_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RumahSakit_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RumahSakit_5.addFeatures(features_RumahSakit_5);
var lyr_RumahSakit_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RumahSakit_5, 
                style: style_RumahSakit_5,
                popuplayertitle: 'Rumah Sakit',
                interactive: true,
                title: '<img src="styles/legend/RumahSakit_5.png" /> Rumah Sakit'
            });
var format_Puskesmas_6 = new ol.format.GeoJSON();
var features_Puskesmas_6 = format_Puskesmas_6.readFeatures(json_Puskesmas_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Puskesmas_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Puskesmas_6.addFeatures(features_Puskesmas_6);
var lyr_Puskesmas_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Puskesmas_6, 
                style: style_Puskesmas_6,
                popuplayertitle: 'Puskesmas',
                interactive: true,
                title: '<img src="styles/legend/Puskesmas_6.png" /> Puskesmas'
            });
var format_Klinik_7 = new ol.format.GeoJSON();
var features_Klinik_7 = format_Klinik_7.readFeatures(json_Klinik_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Klinik_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Klinik_7.addFeatures(features_Klinik_7);
var lyr_Klinik_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Klinik_7, 
                style: style_Klinik_7,
                popuplayertitle: 'Klinik',
                interactive: true,
                title: '<img src="styles/legend/Klinik_7.png" /> Klinik'
            });

lyr_OSMStandard_0.setVisible(true);lyr_WilayahAdministrasiKecamatan_1.setVisible(true);lyr_JaringanJalan_2.setVisible(true);lyr_BatasAdministrasiKecamatan_3.setVisible(true);lyr_JangkauanRumahSakit_4.setVisible(true);lyr_RumahSakit_5.setVisible(true);lyr_Puskesmas_6.setVisible(true);lyr_Klinik_7.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_WilayahAdministrasiKecamatan_1,lyr_JaringanJalan_2,lyr_BatasAdministrasiKecamatan_3,lyr_JangkauanRumahSakit_4,lyr_RumahSakit_5,lyr_Puskesmas_6,lyr_Klinik_7];
lyr_WilayahAdministrasiKecamatan_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'UUPP': 'UUPP', 'luas': 'luas', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_JaringanJalan_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'ARHRJL': 'ARHRJL', 'AUTRJL': 'AUTRJL', 'FGSRJL': 'FGSRJL', 'JARRJL': 'JARRJL', 'JPARJL': 'JPARJL', 'KLLRJL': 'KLLRJL', 'KONRJL': 'KONRJL', 'KPMSTR': 'KPMSTR', 'LKONOF': 'LKONOF', 'LKSBSP': 'LKSBSP', 'LKSRTA': 'LKSRTA', 'LLHRRT': 'LLHRRT', 'LOCRJL': 'LOCRJL', 'LBRBHJ': 'LBRBHJ', 'LBRJLN': 'LBRJLN', 'MATRJL': 'MATRJL', 'MEDRJL': 'MEDRJL', 'SPCRJL': 'SPCRJL', 'STARJL': 'STARJL', 'TOLRJL': 'TOLRJL', 'UTKRJL': 'UTKRJL', 'VLCPRT': 'VLCPRT', 'WLYRJL': 'WLYRJL', 'TGL_SK': 'TGL_SK', 'JLNLYG': 'JLNLYG', 'KLSRJL': 'KLSRJL', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_BatasAdministrasiKecamatan_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'UUPP': 'UUPP', 'luas': 'luas', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_JangkauanRumahSakit_4.set('fieldAliases', {'namobj': 'namobj', 'fcode': 'fcode', 'remark': 'remark', 'metadata': 'metadata', 'srs_id': 'srs_id', 'jplyrs': 'jplyrs', 'rsalamat': 'rsalamat', 'tiprst': 'tiprst', 'kab_kota': 'kab_kota', 'longitude': 'longitude', 'latitude': 'latitude', 'ringId': 'ringId', 'distance': 'distance', });
lyr_RumahSakit_5.set('fieldAliases', {'namobj': 'namobj', 'fcode': 'fcode', 'remark': 'remark', 'metadata': 'metadata', 'srs_id': 'srs_id', 'jplyrs': 'jplyrs', 'rsalamat': 'rsalamat', 'tiprst': 'tiprst', 'kab_kota': 'kab_kota', 'longitude': 'longitude', 'latitude': 'latitude', });
lyr_Puskesmas_6.set('fieldAliases', {'namobj': 'namobj', 'fcode': 'fcode', 'remark': 'remark', 'metadata': 'metadata', 'srs_id': 'srs_id', 'jplpkm': 'jplpkm', 'kmppkm': 'kmppkm', 'pkmkat': 'pkmkat', 'pkmkode': 'pkmkode', 'pkmlmt': 'pkmlmt', 'kwkpkm': 'kwkpkm', 'id_organis': 'id_organis', 'nama_fasya': 'nama_fasya', 'lokasi': 'lokasi', 'kode_saran': 'kode_saran', 'jenis_sara': 'jenis_sara', 'long': 'long', 'lat': 'lat', 'alamat': 'alamat', 'kemampuan': 'kemampuan', 'telepon': 'telepon', 'medis': 'medis', 'paramedis': 'paramedis', 'bidan': 'bidan', 'farmasi': 'farmasi', 'kesmas': 'kesmas', 'kesling': 'kesling', 'gizi': 'gizi', 'kab': 'kab', });
lyr_Klinik_7.set('fieldAliases', {'no': 'no', 'nama': 'nama', 'alamat': 'alamat', 'tipe': 'tipe', 'jenis': 'jenis', 'kategori': 'kategori', 'x': 'x', 'y': 'y', 'kec': 'kec', 'kab': 'kab', });
lyr_WilayahAdministrasiKecamatan_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDPBPS': 'TextEdit', 'KDPKAB': 'TextEdit', 'KDPPUM': 'TextEdit', 'LUASWH': 'TextEdit', 'TIPADM': 'Range', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADKC': 'TextEdit', 'WIADKK': 'TextEdit', 'WIADPR': 'TextEdit', 'WIADKD': 'TextEdit', 'UUPP': 'TextEdit', 'luas': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_JaringanJalan_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'ARHRJL': 'TextEdit', 'AUTRJL': 'TextEdit', 'FGSRJL': 'TextEdit', 'JARRJL': 'TextEdit', 'JPARJL': 'TextEdit', 'KLLRJL': 'TextEdit', 'KONRJL': 'TextEdit', 'KPMSTR': 'TextEdit', 'LKONOF': 'TextEdit', 'LKSBSP': 'TextEdit', 'LKSRTA': 'TextEdit', 'LLHRRT': 'TextEdit', 'LOCRJL': 'TextEdit', 'LBRBHJ': 'TextEdit', 'LBRJLN': 'TextEdit', 'MATRJL': 'TextEdit', 'MEDRJL': 'TextEdit', 'SPCRJL': 'TextEdit', 'STARJL': 'TextEdit', 'TOLRJL': 'TextEdit', 'UTKRJL': 'TextEdit', 'VLCPRT': 'TextEdit', 'WLYRJL': 'TextEdit', 'TGL_SK': 'TextEdit', 'JLNLYG': 'TextEdit', 'KLSRJL': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_BatasAdministrasiKecamatan_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDPBPS': 'TextEdit', 'KDPKAB': 'TextEdit', 'KDPPUM': 'TextEdit', 'LUASWH': 'TextEdit', 'TIPADM': 'Range', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADKC': 'TextEdit', 'WIADKK': 'TextEdit', 'WIADPR': 'TextEdit', 'WIADKD': 'TextEdit', 'UUPP': 'TextEdit', 'luas': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_JangkauanRumahSakit_4.set('fieldImages', {'namobj': 'TextEdit', 'fcode': 'TextEdit', 'remark': 'TextEdit', 'metadata': 'TextEdit', 'srs_id': 'TextEdit', 'jplyrs': 'Range', 'rsalamat': 'TextEdit', 'tiprst': 'Range', 'kab_kota': 'TextEdit', 'longitude': 'TextEdit', 'latitude': 'TextEdit', 'ringId': 'Range', 'distance': 'TextEdit', });
lyr_RumahSakit_5.set('fieldImages', {'namobj': 'TextEdit', 'fcode': 'TextEdit', 'remark': 'TextEdit', 'metadata': 'TextEdit', 'srs_id': 'TextEdit', 'jplyrs': 'Range', 'rsalamat': 'TextEdit', 'tiprst': 'Range', 'kab_kota': 'TextEdit', 'longitude': 'TextEdit', 'latitude': 'TextEdit', });
lyr_Puskesmas_6.set('fieldImages', {'namobj': 'TextEdit', 'fcode': 'TextEdit', 'remark': 'TextEdit', 'metadata': 'TextEdit', 'srs_id': 'TextEdit', 'jplpkm': 'Range', 'kmppkm': 'Range', 'pkmkat': 'Range', 'pkmkode': 'TextEdit', 'pkmlmt': 'TextEdit', 'kwkpkm': 'Range', 'id_organis': 'TextEdit', 'nama_fasya': 'TextEdit', 'lokasi': 'TextEdit', 'kode_saran': 'TextEdit', 'jenis_sara': 'TextEdit', 'long': 'TextEdit', 'lat': 'TextEdit', 'alamat': 'TextEdit', 'kemampuan': 'TextEdit', 'telepon': 'TextEdit', 'medis': 'TextEdit', 'paramedis': 'TextEdit', 'bidan': 'TextEdit', 'farmasi': 'TextEdit', 'kesmas': 'TextEdit', 'kesling': 'TextEdit', 'gizi': 'TextEdit', 'kab': 'TextEdit', });
lyr_Klinik_7.set('fieldImages', {'no': 'TextEdit', 'nama': 'TextEdit', 'alamat': 'TextEdit', 'tipe': 'TextEdit', 'jenis': 'TextEdit', 'kategori': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'kec': 'TextEdit', 'kab': 'TextEdit', });
lyr_WilayahAdministrasiKecamatan_1.set('fieldLabels', {'OBJECTID': 'inline label - visible with data', 'NAMOBJ': 'inline label - visible with data', 'FCODE': 'inline label - visible with data', 'REMARK': 'inline label - visible with data', 'METADATA': 'inline label - visible with data', 'SRS_ID': 'inline label - visible with data', 'KDBBPS': 'inline label - visible with data', 'KDCBPS': 'inline label - visible with data', 'KDCPUM': 'inline label - visible with data', 'KDEBPS': 'inline label - visible with data', 'KDEPUM': 'inline label - visible with data', 'KDPBPS': 'inline label - visible with data', 'KDPKAB': 'inline label - visible with data', 'KDPPUM': 'inline label - visible with data', 'LUASWH': 'inline label - visible with data', 'TIPADM': 'inline label - visible with data', 'WADMKC': 'inline label - visible with data', 'WADMKD': 'inline label - visible with data', 'WADMKK': 'inline label - visible with data', 'WADMPR': 'inline label - visible with data', 'WIADKC': 'inline label - visible with data', 'WIADKK': 'inline label - visible with data', 'WIADPR': 'inline label - visible with data', 'WIADKD': 'inline label - visible with data', 'UUPP': 'inline label - visible with data', 'luas': 'inline label - visible with data', 'SHAPE_Leng': 'inline label - visible with data', 'SHAPE_Area': 'inline label - always visible', });
lyr_JaringanJalan_2.set('fieldLabels', {'OBJECTID': 'inline label - visible with data', 'NAMOBJ': 'inline label - visible with data', 'FCODE': 'inline label - visible with data', 'REMARK': 'inline label - visible with data', 'METADATA': 'inline label - visible with data', 'SRS_ID': 'inline label - visible with data', 'ARHRJL': 'inline label - visible with data', 'AUTRJL': 'inline label - visible with data', 'FGSRJL': 'inline label - visible with data', 'JARRJL': 'inline label - visible with data', 'JPARJL': 'inline label - visible with data', 'KLLRJL': 'inline label - visible with data', 'KONRJL': 'inline label - visible with data', 'KPMSTR': 'inline label - visible with data', 'LKONOF': 'inline label - visible with data', 'LKSBSP': 'inline label - visible with data', 'LKSRTA': 'inline label - visible with data', 'LLHRRT': 'inline label - visible with data', 'LOCRJL': 'inline label - visible with data', 'LBRBHJ': 'inline label - visible with data', 'LBRJLN': 'inline label - visible with data', 'MATRJL': 'inline label - visible with data', 'MEDRJL': 'inline label - visible with data', 'SPCRJL': 'inline label - visible with data', 'STARJL': 'inline label - visible with data', 'TOLRJL': 'inline label - visible with data', 'UTKRJL': 'inline label - visible with data', 'VLCPRT': 'inline label - visible with data', 'WLYRJL': 'inline label - visible with data', 'TGL_SK': 'inline label - visible with data', 'JLNLYG': 'inline label - visible with data', 'KLSRJL': 'inline label - visible with data', 'SHAPE_Leng': 'inline label - visible with data', });
lyr_BatasAdministrasiKecamatan_3.set('fieldLabels', {'OBJECTID': 'inline label - visible with data', 'NAMOBJ': 'inline label - visible with data', 'FCODE': 'inline label - visible with data', 'REMARK': 'inline label - visible with data', 'METADATA': 'inline label - visible with data', 'SRS_ID': 'inline label - visible with data', 'KDBBPS': 'inline label - visible with data', 'KDCBPS': 'inline label - visible with data', 'KDCPUM': 'inline label - visible with data', 'KDEBPS': 'inline label - visible with data', 'KDEPUM': 'inline label - visible with data', 'KDPBPS': 'inline label - visible with data', 'KDPKAB': 'inline label - visible with data', 'KDPPUM': 'inline label - visible with data', 'LUASWH': 'inline label - visible with data', 'TIPADM': 'inline label - visible with data', 'WADMKC': 'inline label - visible with data', 'WADMKD': 'inline label - visible with data', 'WADMKK': 'inline label - visible with data', 'WADMPR': 'inline label - visible with data', 'WIADKC': 'inline label - visible with data', 'WIADKK': 'inline label - visible with data', 'WIADPR': 'inline label - visible with data', 'WIADKD': 'inline label - visible with data', 'UUPP': 'inline label - visible with data', 'luas': 'inline label - visible with data', 'SHAPE_Leng': 'inline label - visible with data', 'SHAPE_Area': 'inline label - visible with data', });
lyr_JangkauanRumahSakit_4.set('fieldLabels', {'namobj': 'inline label - visible with data', 'fcode': 'inline label - visible with data', 'remark': 'inline label - visible with data', 'metadata': 'inline label - visible with data', 'srs_id': 'inline label - visible with data', 'jplyrs': 'inline label - visible with data', 'rsalamat': 'inline label - visible with data', 'tiprst': 'inline label - visible with data', 'kab_kota': 'inline label - visible with data', 'longitude': 'inline label - visible with data', 'latitude': 'inline label - visible with data', 'ringId': 'inline label - visible with data', 'distance': 'inline label - visible with data', });
lyr_RumahSakit_5.set('fieldLabels', {'namobj': 'inline label - visible with data', 'fcode': 'inline label - visible with data', 'remark': 'inline label - visible with data', 'metadata': 'inline label - visible with data', 'srs_id': 'inline label - visible with data', 'jplyrs': 'inline label - visible with data', 'rsalamat': 'inline label - visible with data', 'tiprst': 'inline label - visible with data', 'kab_kota': 'inline label - visible with data', 'longitude': 'inline label - visible with data', 'latitude': 'inline label - visible with data', });
lyr_Puskesmas_6.set('fieldLabels', {'namobj': 'inline label - visible with data', 'fcode': 'inline label - visible with data', 'remark': 'inline label - visible with data', 'metadata': 'inline label - visible with data', 'srs_id': 'inline label - visible with data', 'jplpkm': 'inline label - visible with data', 'kmppkm': 'inline label - visible with data', 'pkmkat': 'inline label - visible with data', 'pkmkode': 'inline label - visible with data', 'pkmlmt': 'inline label - visible with data', 'kwkpkm': 'inline label - visible with data', 'id_organis': 'inline label - visible with data', 'nama_fasya': 'inline label - visible with data', 'lokasi': 'inline label - visible with data', 'kode_saran': 'inline label - visible with data', 'jenis_sara': 'inline label - visible with data', 'long': 'inline label - visible with data', 'lat': 'inline label - visible with data', 'alamat': 'inline label - visible with data', 'kemampuan': 'inline label - visible with data', 'telepon': 'inline label - visible with data', 'medis': 'inline label - visible with data', 'paramedis': 'inline label - visible with data', 'bidan': 'inline label - visible with data', 'farmasi': 'inline label - visible with data', 'kesmas': 'inline label - visible with data', 'kesling': 'inline label - visible with data', 'gizi': 'inline label - visible with data', 'kab': 'inline label - visible with data', });
lyr_Klinik_7.set('fieldLabels', {'no': 'inline label - visible with data', 'nama': 'inline label - visible with data', 'alamat': 'inline label - visible with data', 'tipe': 'inline label - visible with data', 'jenis': 'inline label - visible with data', 'kategori': 'inline label - visible with data', 'x': 'inline label - visible with data', 'y': 'inline label - visible with data', 'kec': 'inline label - visible with data', 'kab': 'inline label - visible with data', });
lyr_Klinik_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});