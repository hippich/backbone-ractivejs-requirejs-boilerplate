define(function(require) {
    var View = require('view');
    var tpl = require('rv!app/template/page/flot');

    require('components/flot/excanvas.min');
    require('components/flot/jquery.flot');
    require('components/flot/jquery.flot.pie');
    require('components/flot/jquery.flot.resize');
    require('components/flot/jquery.flot.time');
    require('components/flot.tooltip/js/jquery.flot.tooltip.min');

    // Source code for flot-data.js
    var flotDataSrc = require('text!app/data/flot-data.js');

    return View.extend({
        template: tpl,
        afterRender: function() {
            // setTimeout to allow DOM to be rendered by Ractive, since code below
            // operates on visible DOM
            setTimeout(function() {
                eval(flotDataSrc);
            });
        }
    });
});
