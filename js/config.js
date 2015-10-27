require.config({
    map: {
        '*': {
            app        : 'js',
            css        : 'components/require-css/css',
            underscore : 'lodash',
        }
    },

    paths: {
        model            : 'js/lib/model',
        view             : 'js/lib/view',

        backbone         : 'components/backbone/backbone',
        promise          : 'components/bluebird/js/browser/bluebird',
        bootstrap        : 'components/bootstrap/dist/js/bootstrap.min',
        forms            : 'components/backbone-forms/distribution.amd/backbone-forms.min',
        jquery           : 'components/jquery/dist/jquery',
        lodash           : 'components/lodash/lodash',
        metisMenu        : 'components/metisMenu/dist/metisMenu.min',
        ractive          : 'components/ractive/ractive',
        ractiveBBAdapter : 'components/ractive-adaptors-backbone/dist/ractive-adaptors-backbone',
        rv               : 'components/rv/rv',
        sbAdmin          : 'components/startbootstrap-sb-admin-2/dist/js/sb-admin-2',
        stateman         : 'components/stateman/stateman'
    },

    shim: {
        bootstrap: {
            deps: ['jquery']
        },
        metisMenu: {
            deps: ['jquery']
        },
        sbAdmin: {
            deps: ['metisMenu', 'bootstrap']
        },

        // Flot libraries need to load in this specific order
        'components/flot/excanvas.min': {
            deps: ['jquery']
        },
        'components/flot/jquery.flot': {
            deps: ['jquery']
        },
        'components/flot/jquery.flot.pie': {
            deps: ['components/flot/jquery.flot']
        },
        'components/flot/jquery.flot.resize': {
            deps: ['components/flot/jquery.flot']
        },
        'components/flot/jquery.flot.time': {
            deps: ['components/flot/jquery.flot']
        },
        'components/flot.tooltip/js/jquery.flot.tooltip.min': {
            deps: ['components/flot/jquery.flot']
        }
    }
});

