var basemap = new Basemap({
    portalItem: {
        id: "ea53f092fa654ad08eb88067cd73c56a" // gråtone
    }
});

var elevLyr = new ElevationLayer({
    portalItem: {
        id: "4526a4d94b844467a3ce130da8ca172d"
    }
});



const gLayer = new GraphicsLayer();

var map = new Map({
    basemap: basemap,
    ground: "world-elevation",
    layers: [gLayer],
    ground: {
        surfaceColor: "#FCFCFC"
    }
});
map.ground.layers.add(elevLyr);

var view = new SceneView({
    container: "viewDiv",
    map: map,
    alphaCompositingEnabled: true,
    environment: {
        background: {
            type: "color", // autocasts as new ColorBackground()
            color: "#FCFCFC"
        },
        // disable stars
        starsEnabled: false,
        //disable atmosphere
        atmosphereEnabled: true
    },
    center: {
        x: 256924.68078,
        y: 6605196.9098,
        z: 5000,
        spatialReference: 25833
    }

});

Layer.fromPortalItem({
        portalItem: {
            // Legg til bygg
            id: "d10b1ff653234cd08a3fc7da78820a14"
        }
    })
    .then(addLayer)
    .catch(rejection);

// Adds the layer to the map once it loads
function addLayer(layer) {
    map.add(layer);

    checkForBygninger();
}

function rejection(error) {
    console.log("Layer failed to load: ", error);
}