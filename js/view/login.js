define(function(require) {
    return require('view').extend({
        template: require('rv!app/template/login'),
        afterRender: function() {
            this.$el.addClass('body-class-set');
        }
    });
});
