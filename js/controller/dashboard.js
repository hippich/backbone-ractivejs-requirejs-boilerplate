define(function(require) {
    var View = require('view');

    return function(app) {
        app.controller.state('dashboard.index', {
            url: '/(index)?',
            enter: function() {
                app.set(
                    'contentView', new View({
                        model    : app,
                        template : require('rv!app/template/page/blank')
                    })
                );
            }
        });
    };
});
