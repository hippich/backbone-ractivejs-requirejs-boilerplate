define(function(require) {
    var View = require('view');
    var tpl = require('rv!app/template/page/tables');

    // CSS
    require('css!components/datatables-plugins/integration/bootstrap/3/dataTables.bootstrap');
    require('css!components/datatables-responsive/css/dataTables.responsive');

    // DataTables plugins
    require('components/datatables/media/js/jquery.dataTables.min');
    require('components/datatables-plugins/integration/bootstrap/3/dataTables.bootstrap.min');

    return View.extend({
        template: tpl,
        afterRender: function() {
            $('#dataTables-example', this.$el).DataTable({
                responsive: true
            });
        }
    });
});
