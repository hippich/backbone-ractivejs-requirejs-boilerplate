define(function(require) {
    var App = require('app/model/app');

    var app = window.app = new App();

    app.set('pageTitle', 'Backbone + RactiveJS + RequireJS Boilerplate');
});
