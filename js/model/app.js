define(function(require) {
    var $ = require('jquery');
    var Model = require('model');

    // Controller class
    var Controller = require('app/controller');

    return Model.extend({
        defaults: {
            el: 'body',
            loggedIn: false
        },

        initialize: function() {
            this.controller = Controller(this);
        },

        isLoggedIn: function() {
            return this.get('loggedIn');
        }
    });
});
