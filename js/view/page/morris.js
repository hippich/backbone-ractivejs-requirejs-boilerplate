define(function(require) {
    var View = require('view');
    var tpl = require('rv!app/template/page/morris');

    require('css!components/morrisjs/morris');
    require('components/raphael/raphael-min');
    require('components/morrisjs/morris.min');

    // Source code for morris-data.js
    var morrisDataSrc = require('text!app/data/morris-data.js');

    return View.extend({
        template: tpl,
        afterRender: function() {
            // setTimeout to allow DOM to be rendered by Ractive, since code below
            // operates on visible DOM
            setTimeout(function() {
                eval(morrisDataSrc);
            });
        }
    });
});
