define(function(require) {
    var View = require('view');
    var tpl = require('rv!app/template/page/notifications');

    return View.extend({
        template: tpl,
        afterRender: function() {
            // setTimeout to allow DOM to be rendered by Ractive, since code below
            // operates on visible DOM
            setTimeout(function() {
                // tooltip demo
                $('.tooltip-demo').tooltip({
                    selector: "[data-toggle=tooltip]",
                    container: "body"
                })

                // popover demo
                $("[data-toggle=popover]").popover()
            });
        }
    });
});
