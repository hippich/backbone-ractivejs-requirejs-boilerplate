define(function(require) {
    require('metisMenu');

    return require('view').extend({
        template: require('rv!app/template/layout/sidebar'),
        afterRender: function() {
            this.$el.find('#side-menu').metisMenu();
        }
    });
});

