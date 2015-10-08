define(function(require) {
    require('sbAdmin');

    var Backbone = require('backbone');
    var Ractive = require('ractive');

    // Init ractive backbone adaptor
    var bbAdaptor = require('ractiveBBAdapter');
    bbAdaptor.Backbone = Backbone;

    // Add append decorator
    Ractive.decorators.append = function(node, $el) {
        function append() {
            if ($el) {
                node.appendChild($el);
            }
        }

        append();

        return {
            teardown: function(){
            },
            update: function($update) {
                $el = $update;
                append();
            }
        };
    };

    Ractive.decorators.view = function(node, view) {
        function insert() {
            if (view) {
                if (! view.ractive) {
                    view.render();
                }

                view.ractive.insert(node);
            }
        }

        insert();

        return {
            teardown: function(){
            },
            update: function(update) {
                view = update;
                insert();
            }
        };
    };

    return Backbone.View.extend({
        ractive: null,

        initialize: function() {
            this.render();
        },

        close: function() {
            this.ractive.teardown();
            this.ractive = null;
        },

        render: function() {
            if (this.ractive) {
                this.close();
            }

            var options = {
                adapt: [ bbAdaptor ],
                el: this.el,
                template: this.template,
                data: {
                    model: this.model
                }
            };

            this.ractive = new Ractive(options);

            if (this.afterRender) {
                this.afterRender();
            }
        }
    });
});
