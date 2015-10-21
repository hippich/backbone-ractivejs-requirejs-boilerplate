define(function(require) {
    var View = require('view');

    return function(app) {
        app.controller.state({
            'dashboard': {
                title: 'Dashboard',
                url: '/dashboard',
                enter: function() {
                    var view = View.extend({
                        model    : app,
                        template : require('rv!app/template/page/index')
                    });

                    app.set('contentView', new view());
                }
            }
        });
    };
});
