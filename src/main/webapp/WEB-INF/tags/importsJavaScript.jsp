<!-- jQuery 2.2.3 (Obrigatorio) -->
<script src="${pageContext.request.contextPath}/lib/AdminLTE/plugins/jQuery/jquery-2.2.3.min.js"></script>
<!-- Bootstrap 3.3.7 (Obrigatorio) -->
<script src="${pageContext.request.contextPath}/lib/bootstrap/js/bootstrap.min.js"></script>
<!-- iCheck (Obrigatorio) -->
<script src="${pageContext.request.contextPath}/lib/AdminLTE/plugins/iCheck/icheck.min.js"></script>
<!-- (Obrigatorio) -->
<script src="${pageContext.request.contextPath}/lib/AdminLTE/dist/js/app.js" type="text/javascript"></script>

<script src="${pageContext.request.contextPath}/lib/AdminLTE/plugins/datatables/dataTables.bootstrap.min.js" type="text/javascript"></script>

<script src="${pageContext.request.contextPath}/lib/AdminLTE/plugins/datatables/jquery.dataTables.min.js" type="text/javascript"></script>

<script src="${pageContext.request.contextPath}/lib/myJs/smpempre.js" type="text/javascript"></script>

<script src="${pageContext.request.contextPath}/lib/AdminLTE/plugins/datatables/buttons.print.min.js" type="text/javascript"></script>

<script src="${pageContext.request.contextPath}/lib/AdminLTE/plugins/datatables/dataTables.buttons.min.js" type="text/javascript"></script>

<script src="${pageContext.request.contextPath}/lib/AdminLTE/plugins/datatables/buttons.flash.min.js" type="text/javascript"></script>

<script src="${pageContext.request.contextPath}/lib/AdminLTE/plugins/datatables/jszip.min.js" type="text/javascript"></script>

<script src="${pageContext.request.contextPath}/lib/AdminLTE/plugins/datatables/buttons.html5.min.js" type="text/javascript"></script>

<script src="${pageContext.request.contextPath}/lib/AdminLTE/plugins/datatables/dataTables.select.min.js" type="text/javascript"></script>

<script src="${pageContext.request.contextPath}/lib/AdminLTE/plugins/datatables/dataTables.checkboxes.js" type="text/javascript"></script>

<script src="${pageContext.request.contextPath}/lib/AdminLTE/plugins/datatables/dataTables.checkboxes.min.js" type="text/javascript"></script>

<script>
    $(document).ready(function () {
        var myDataTable = $('table').DataTable({
            scrollY: 'auto',
            scrollCollapse: true,
            paging: false,
            bInfo: false,
            fixedHeader: true,
            responsive: true,
            sDom: 'Bltipr',
            buttons: [{
                    extend: 'print',
                    autoPrint: false,
                    text: 'Imprimir',
                    className: 'btn btn-default btn-xs',
                    customize: function (win) {
                        $(win.document.body)
                                .css('font-size', '10pt')
                                .prepend(
                                        //'<img src="http://datatables.net/media/images/logo-fade.png" style="position:absolute; top:0; left:0;" />'
                                        );
                        $(win.document.body).find('table')
                                .addClass('compact')
                                .css('font-size', 'inherit');
                    }
                },
                {
                    extend: 'csv',
                    text: 'Exportar CVS',
                    className: 'btn btn-default btn-xs'
                }],
            columnDefs: [{
                    searchable: false,
                    orderable: false,
                    className: 'dt-body-center',
                    targets: 0
                }],
            order: [[1, 'asc']]
        });
        
        // Direciona o filto para o input que estiver usando class filterBoxDataTable
        $("#filterBoxDataTable").keyup(function () {
            myDataTable.search(this.value).draw();
        });


        $('#example-select-all').on('click', function () {
            // Check/uncheck all checkboxes in the table
            var rows = myDataTable.rows({'search': 'applied'}).nodes();
            $('input[type="checkbox"]', rows).prop('checked', this.checked);
        });


        // Handle click on checkbox to set state of "Select all" control
        $('table.tbody').on('change', 'input[type="checkbox"]', function () {
            // If checkbox is not checked
            if (!this.checked) {
                var el = $('#example-select-all').get(0);
                // If "Select all" control is checked and has 'indeterminate' property
                if (el && el.checked && ('indeterminate' in el)) {
                    // Set visual state of "Select all" control 
                    // as 'indeterminate'
                    el.indeterminate = true;
                }
            }
        });


    });

</script>

