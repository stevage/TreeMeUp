module.exports = [
    {
        "id": "corangamite",
        "download": "https://data.gov.au/geoserver/corangamite-shire-trees/wfs?request=GetFeature&typeName=ckan_d9677ebb_f3db_45f3_88eb_04089debb9e0&outputFormat=json",
        "format": "geojson",
        "gdal_options": "-s_srs EPSG:4326",
        short: 'Corangamite',
        long: 'Corangamite Shire'
    },
    {
        "id": "colac_otways",
        "download": "http://data.gov.au/geoserver/colac-otway-shire-trees/wfs?request=GetFeature&typeName=ckan_3ce1805b_cb81_4683_8f46_e7bd2d2a3b7c&outputFormat=json",
        "format": "geojson",
        short: 'Colac-Otways',
        long: 'Colac-Otways Shire',
    },
    {
        // BAD 404
        "id": "ballarat",
        "download": "http://data.gov.au/dataset/eabaee3f-a563-449b-a04a-1ec847566ea1/resource/2f5eb80f-55fa-418c-915c-0b6de7653719/download/BallaratTrees.csv",
        "format": "csv",
        "filename": "ballarat.vrt",
        "gdal_options": "-skipfailures",
        short: 'Ballarat',
        long: 'City of Ballarat',
    },
    {
        "id": "manningham",
        "download": "https://data.gov.au/geoserver/manningham-streettrees/wfs?request=GetFeature&typeName=ckan_1aef5123_24ff_4084_a0f1_a52ca71e9e99&outputFormat=json",
        "format": "geojson",
        short: 'Manningham',
        long: 'City of Manningham',

    },
    {
        "id": "geelong",
        "download": "https://data.gov.au/geoserver/geelong-trees/wfs?request=GetFeature&typeName=ckan_13b1196c_7fb7_436a_86bc_ab24c16526de&outputFormat=json",
        "format": "geojson",
        short: 'Geelong',
        long: 'City of Greater Geelong',
    },
    {
        "id": "melbourne",
        "download": "https://data.melbourne.vic.gov.au/api/views/fp38-wiyy/rows.csv?accessType=DOWNLOAD",
        "format": "csv",
        "filename": "melbourne.vrt",
        short: 'Melbourne',
        long: 'City of Melbourne',
    },
    {
        "id": "adelaide",
        "download": "http://opendata.adelaidecitycouncil.com/street_trees/street_trees.csv",
        "format": "csv",
        "filename": "adelaide.vrt",
        "gdal_options": "-skipfailures",
        short: 'Adelaide',
        long: 'City of Adelaide',
    },
    {
        "id": "waite",
        "download": "http://data.sa.gov.au/storage/f/2014-06-23T06%3A12%3A22.180Z/waitetreeid-2014-app-joined-19062014.zip",
        "format": "zip",
        "filename": "WaiteTreeID_2014_App_Joined_19062014.shp",
        short: 'Waite Arboretum',
        long: 'Waite Arboretum (Adelaide)',
    },
    {
        "id": "burnside",
        "download": "https://data.sa.gov.au/data/dataset/b7e1c8f6-169c-41bd-b5d7-140395a41c38/resource/6d1912aa-4775-4f5e-b00d-18456ad872a5/download/burnsidetrees.geojson",
        "format": "geojson",
        short: 'Burnside',
        long: 'City of Burnside',

    },
    {
        "id": "launceston",
        "download": "http://lcc.launceston.opendata.arcgis.com/datasets/63b09a3688804a17b0edc4b3b072a0d7_1.zip",
        "format": "zip",
        "filename": "Trees.shp",
        short: 'Launceston',
        long: 'City of Launceston',
    },
   {
        "id": "hobsons_bay",
        "download": "https://data.gov.au/dataset/80051ffe-04d5-4602-b15b-60e0d0e3d153/resource/ea1ec6fc-02bd-4e36-8e43-c990b6a9268d/download/hbcc_street_and_park_trees.json",
        "format": "geojson",
        short: 'Hobson\'s Bay',
        long: 'City of Hobson\'s Bay',
    },
    {
        "id": "glenelg",
        "download": "http://data.gov.au/dataset/3721ad67-7b5b-4815-96b1-9d8b1a89dbd7/resource/b9ff3d44-17b4-4f87-8a28-2d540fa37d8f/download/Glenelg-Street-and-Park-Trees.csv",
        "format": "csv",
        "filename": "glenelg.vrt",
        short: 'Glenelg',
        long: 'Glenelg Shire',
    },
    {
        "id": "ryde",
        "download": [ 
            "http://data.nsw.gov.au/data/dataset/f7cd2071-642e-4cac-9d28-d7ddf5635c39/resource/47843888-f9b6-4ae3-ba80-9318ff60a120/download/Public-Trees-2013.dbf",
            "http://data.nsw.gov.au/data/dataset/f7cd2071-642e-4cac-9d28-d7ddf5635c39/resource/1372b28f-4201-46ab-9099-be0458a317bb/download/Public-Trees-2013.prj",
            "http://data.nsw.gov.au/data/dataset/f7cd2071-642e-4cac-9d28-d7ddf5635c39/resource/00e339ad-e411-48b2-8cfa-ed3dfa8209ca/download/Public-Trees-2013.shp",
            "http://data.nsw.gov.au/data/dataset/f7cd2071-642e-4cac-9d28-d7ddf5635c39/resource/3f4f3346-52d5-4084-94fc-877bf70c0a76/download/Public-Trees-2013.shx"
        ],
        "format": "shp",
        "keepExtension": true,
        short: 'Ryde',
        long: 'City of Ryde',

    },
    {
        "id": "southern_grampians",
        "download": "http://data.gov.au/geoserver/southern-grampians-street-and-park-trees/wfs?request=GetFeature&typeName=ckan_4a2843f5_8c01_438b_95f3_01ef0a518441&outputFormat=json",
        "format": "geojson",
        short: 'Southern Grampians',
        long: 'City of Southern Grampians',
    },
    {
        "id": "prospect1",
        "download": "https://data.sa.gov.au/data/dataset/5d86d41e-b6c6-47d5-9b88-4d95916c5e76/resource/d1e30913-6e91-4a1f-b576-64120cc4b242/download/city-of-prospect-tree-species-in-reserves-2016.csv",
        "format": "csv",
        short: 'Prospect',
        long: 'City of Prospect',
    },
    {
        "id": "prospect2",
        "download": "https://data.sa.gov.au/data/dataset/7bf2e4a4-40cc-40fd-83a9-fabb6d854039/resource/3f6be219-d66f-4b40-bfc7-16214fbc0989/download/city-of-prospect-street-trees-2016.csv",
        "format": "csv",
        short: 'Prospect',
        long: 'City of Prospect',
    },
    {
        // BAD 404
        "id": "perth",
        "download": "http://catalogue.beta.data.wa.gov.au/dataset/80ad058b-9089-4915-bea5-f7ce8eab7a3f/resource/a5867408-d9d0-4cb3-a640-24b458a5b3df/download/trees.zip",
        "format": "zip",
        "filename": "TreesCOP_009.shp",
        "comment": "Automatic download doesn't work: needs Google sign in. https://search.data.gov.au/dataset/ds-wa-154bd398-f536-4a78-b747-c5275461e181/details?q=trees%20perth",
        short: 'Perth',
        long: 'City of Perth',
    },
    {
        "id": "brimbank",
        "download": "https://data.gov.au/geoserver/brimbank-open-space-trees/wfs?request=GetFeature&typeName=ckan_7a57b5a1_2ca3_4171_be91_0d371cefd250&outputFormat=json",
        "format": "geojson",
        short: 'Brimbank',
        long: 'City of Brimbank',
    },
    {
        "id": "bendigo",
        "download": "https://data.gov.au/geoserver/city-of-greater-bendigo-environment-trees/wfs?request=GetFeature&typeName=ckan_d17c9e50_fab1_40e6_b91d_6e665faf2656&outputFormat=json",
        "format": "geojson",
        short: 'Bendigo',
        long: 'City of Greater Bendigo',
    },
    {
        "id": "shepparton",
        "download": "https://data.gov.au/dataset/e794491f-2eb7-4035-8b0c-f7248c28feda/resource/a1148573-68b9-4bd8-bda4-f08030d38c9d/download/greatersheppartoncitycouncilstreetandparktrees.zip",
        "format": "zip",
        "filename": "Greater_Shepparton_City_Council_Street_and_Park_Trees.shp",
        short: 'Shepparton',
        long: 'City of Shepparton',
    },
    {
        "id": "wyndham",
        // what about https://data.gov.au/dataset/ds-dga-87307c7b-b92c-48f1-841a-b5794dfb5322/details?q=trees ?
        "download": "https://data.gov.au/dataset/0254dee0-5b26-484f-a5ae-5ca3cab46601/resource/fb06e7c8-d037-489b-a963-b747271f2e54/download/trees.json",
        "download_old2": "https://data.gov.au/dataset/0254dee0-5b26-484f-a5ae-5ca3cab46601/resource/4ab38849-d1de-4444-aeca-08719138d24f/download/trees.zip",
        "gdal_options": "-s_srs unzip/OpenData_TI_Trees_LatestInspection.prj",
        "format":"zip",
        "filename": "OpenData_TI_Trees_LatestInspection.shp",
        short: 'Wyndham',
        long: 'City of Wyndham',
    },
    {
        "id": "port_phillip",
        "download": "https://data.gov.au/dataset/6b72d22b-d824-4281-bd08-ab62e3c38415/resource/9b0d7d55-5267-464b-85d7-3d141d779bab/download/city-of-port-phillip-trees.geojson",
        "format": "geojson",
        short: 'Port Phillip',
        long: 'City of Port Phillip',
    },
    {
        "id": "boroondara",
        "download": "https://data.gov.au/geoserver/significant-tree/wfs?request=GetFeature&typeName=ckan_14e2b87e_c733_4071_b604_c0cb33d14a42&outputFormat=json",
        "format": "geojson",
        short: 'Boroondara',
        long: 'City of Boroondara',
    },
    {
        id: 'yarra',
        download: 'https://data.gov.au/data/dataset/f3c88ce7-504b-4ef7-907f-686037f7420c/resource/6e4186b0-3e00-48f9-a09c-cb60d1d0d49f/download/yarra-street-and-park-trees.geojson',
        format:'geojson',
        // significant? https://data.gov.au/dataset/ds-dga-4b950f69-8816-45a7-8788-951d788287bd/details?q=trees,
        short: 'Yarra',
        long: 'City of Yarra',
    },
    {
        id: 'glen_eira',
        download: 'https://data.gov.au/geoserver/street-and-park-trees/wfs?request=GetFeature&typeName=ckan_0553b144_9145_4458_922f_5c6175d2e100&outputFormat=json',
        format: 'geojson',
        short: 'Glen Eira',
        long: 'City of Glen Eira',
    },
    {
        // TODO create a VRT file. no header.
        id: 'wodonga',
        download: 'https://data.gov.au/data/dataset/e7d6ebd3-04a8-4d73-b8ba-a9b82aa79b16/resource/180ba7ad-7bd7-490b-81f8-79c74ec0a915/download/tree.csv',
        format: 'csv',
        filename: 'wodonga.vrt',
        short: 'Wodonga',
        long: 'City of Wodonga',
    },
    {
        id: 'hobart',
        download: 'http://data-1-hobartcc.opendata.arcgis.com/datasets/d50fa3c9875d43fbb7e462248160e1ee_0.geojson',
        format: 'geojson',
        short: 'Hobart',
        long: 'City of Hobart',
    },
    {
        id: 'sherwood_arboretum', //brisbane
        download: 'http://www.spatial-data.brisbane.qld.gov.au/datasets/613169f42b43494499c83640392c43e5_0.geojson',
        format: 'geojson',
        short: 'Sherwood Arboretum',
        long: 'Sherwood Arboretum (Brisbane)'
    }

    // hobart:
    // https://data.gov.au/dataset/ds-hobart-http%3A%2F%2Fdata-1-hobartcc.opendata.arcgis.com%2Fdatasets%2F9b31f3f6acb14bb2a5869b5e17707155_0/details?q=trees
    // act:
    // http://www.arcgis.com/home/webmap/viewer.html?url=https://data.actmapi.act.gov.au/arcgis/rest/services/data_extract/Environment/MapServer/14


];
