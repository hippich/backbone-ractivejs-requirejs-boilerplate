define(function(require) {
    var View = require('view');

    // Dashboard views
    var LayoutView = require('app/view/layout');
    var HeaderView = require('app/view/layout/header');
    var SidebarView = require('app/view/layout/sidebar');
    var FooterView = require('app/view/layout/footer');

    var getPageView = function(template) {
        var PageView = View.extend({
            model    : app,
            template : template
        });

        return new PageView();
    };

    return function(app) {
        app.controller.state({

            'dashboard': {
                title: 'Dashboard',
                url: '/dashboard',
                enter: function(state) {

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

                    if (state.path === '/dashboard') {
                        app.controller.go('dashboard.index');
                    }
                }
            },

            'dashboard.index': function() {
                app.set('contentView', getPageView(require('rv!app/template/page/index')));
            },

            'dashboard.flot':  function() {
                var FlotPageView = require('app/view/page/flot');
                app.set('contentView', new FlotPageView());
            },

            'dashboard.morris':  function() {
                var MorrisPageView = require('app/view/page/morris');
                app.set('contentView', new MorrisPageView());
            },

            'dashboard.tables':  function() {
                var TablesPageView = require('app/view/page/tables');
                app.set('contentView', new TablesPageView());
            },

            'dashboard.forms': function() {
                app.set('contentView', getPageView(require('rv!app/template/page/forms')));
            },

            'dashboard.panels': function() {
                app.set('contentView', getPageView(require('rv!app/template/page/panels-wells')));
            },

            'dashboard.buttons': function() {
                var PageView = require('app/view/page/buttons');
                app.set('contentView', new PageView());
            }

        });
    };
});
