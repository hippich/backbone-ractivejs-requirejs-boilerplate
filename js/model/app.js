define(function(require) {
    var $ = require('jquery');
    var Model = require('model');

    // Controller class
    var Controller = require('app/controller');

    return Model.extend({
        defaults: {
            el: 'body'
        },

        initialize: function() {
            this.controller = Controller(this);
        }
    });
});
