define(function(require) {
    var StateMan = require('stateman');
    var Promise = require('promise');

    return function(app) {
        var stateman = new StateMan();

        stateman.ondemandController = function(module, path) {
            require([module], function(Controller) {
                Controller(app);
                stateman.nav(path);
            });
        };

        stateman.state({
            'base': {
                url: '',
                enter: function() {
                }
            },

            'notfound': {
                url: '404',
                enter: function() {
                    alert('not found');
                }
            }
        });

        var notfound_path = '';

        stateman.on('notfound', function(state) {
            if (notfound_path != state.path) {
                notfound_path = state.path;

                if (state.path.match(/^\/dashboard/)) {
                    return stateman.ondemandController('app/controller/dashboard', state.path);
                }
            }

            //this.go("app.contact");
            alert('not found');
        });

        stateman.start();

        return stateman;
    };
});
