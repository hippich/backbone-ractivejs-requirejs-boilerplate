define(function(require) {
    var $ = require('jquery');
    var Model = require('model');

    var LayoutView = require('app/view/layout');
    var HeaderView = require('app/view/layout/header');
    var SidebarView = require('app/view/layout/sidebar');
    var ContentView = require('app/view/layout/content');
    var FooterView = require('app/view/layout/footer');

    return Model.extend({
        defaults: {
            el: 'body',
            pageTitle: 'loading...'
        },

        initialize: function() {
            this.set({
                layoutView: new LayoutView({
                    el: this.get('el'),
                    model: this
                }),
                headerView: new HeaderView({ model: this }),
                sidebarView: new SidebarView({ model: this }),
                contentView: new ContentView({ model: this }),
                footerView: new FooterView({ model: this })
            });

            this.get('layoutView').render();

            this.on('change:pageTitle', function() {
                $('title').text(this.get('pageTitle'));
            });
        }
    });
});

