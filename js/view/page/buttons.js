define(function(require) {
    var View = require('view');
    var tpl = require('rv!app/template/page/buttons');

    require('css!components/bootstrap-social/bootstrap-social');

    return View.extend({
        template: tpl
    });
});

