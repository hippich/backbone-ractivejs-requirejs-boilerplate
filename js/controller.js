define(function(require) {
    var StateMan = require('stateman');
    var Promise = require('promise');
    var LoginView = require('app/view/login');

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
                    if (app.isLoggedIn()) {
                        alert('not found');
                    }
                    else {
                        stateman.go('login');
                    }
                }
            },

            'login': {
                url: 'login',
                canEnter: function() {
                    return !app.isLoggedIn();
                },
                enter: function() {
                    var loginView = new LoginView({
                        el: app.get('el'),
                        model: app
                    });
                    loginView.render();
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

            this.go("notfound");
        });

        stateman.start();

        return stateman;
    };
});
