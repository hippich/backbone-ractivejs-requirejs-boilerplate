define(function(require) {
    var StateMan = require('stateman');
    var Promise = require('promise');

    return function(app) {
        var stateman = new StateMan();

        stateman.requireController = function(path) {
            return new Promise(function(resolve, reject) {
                require([path], function(Controller) {
                    return Controller(app);
                });
            });
        };

        // Add base routes
        stateman.state('dashboard', {
            url: '/dashboard',
            canEnter: stateman.requireController('app/controller/dashboard')
        });

        stateman.state('notfound', {
            url: '/404',
            enter: function() {
                alert('not found');
            }
        });

        return stateman;
    };
});
