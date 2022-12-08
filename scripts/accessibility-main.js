$(function () {
    $('body').openAccessibility({
        // enable the plugin on mobile
        isMobileEnabled: true,

        // override the settings of the Accessibility Tools 
        grayscale: 0,
        brightness: 100,
        contrast: 100,
        maxZoomLevel: 3,
        minZoomLevel: 0.5,
        zoomStep: 0.2,
        zoom: 1,
        cursor: false,
        invert: false,

        // text selector
        textSelector: 'h1,h2,h3,p,span,strong,li,div',
        
        // s(mall), m(edium), l(arge)
        iconSize: 'm',

    });

    let language = {
        "zoom-out": "Ampliar",
        "zoom-in": "Diminuir",
        invert: "Inverter",
        "bigger-cursor": "Cursor grande",
        brightness: "Brilho",
        contrast: "Contraste",
        grayscale: "Escala de cinza",
        reset: "Reiniciar"
    };
    Object.keys(language).forEach(item => {
        document.querySelector('[data-lang="'+item+'"]').textContent =  language[item];
    })
})
