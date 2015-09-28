define(function(require) {
    require('css!styles/index');

    return require('view').extend({
        template: require('rv!app/template/layout'),
        afterRender: function() {
            this.$el.addClass('body-class-set');
        }
    });
});
