define(function(require) {
    return require('view').extend({
        events: {
            'submit form': 'login'
        },
        login: function(e) {
            e.preventDefault();
            alert('login me please');
        },
        template: require('rv!app/template/login')
    });
});
