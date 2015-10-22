define(function(require) {
    var View = require('view');

    // Dashboard views
    var LayoutView = require('app/view/layout');
    var HeaderView = require('app/view/layout/header');
    var SidebarView = require('app/view/layout/sidebar');
    var FooterView = require('app/view/layout/footer');

    var getPageView = function(template) {
        var view = View.extend({
            model    : app,
            template : require(template)
        });

        return new view();
    };

    return function(app) {
        app.controller.state({
            'dashboard': {
                title: 'Dashboard',
                url: '/dashboard',
                enter: function() {

                    // Render layout
                    app.set({
                        layoutView: new LayoutView({
                            el: app.get('el'),
                            model: app
                        }),
                        headerView: new HeaderView({ model: app }),
                        sidebarView: new SidebarView({ model: app }),
                        footerView: new FooterView({ model: app })
                    });
                    app.get('layoutView').render();

                    console.log(arguments);
                }
            },

            'dashboard.index': {
                url: '',
                enter: function() {
                    app.set('contentView', getPageView('rv!app/template/page/index'));
                }
            },

            'dashboard.flot':  function() {
                app.set('contentView', getPageView('rv!app/template/page/flot'));
            }
        });
    };
});
