<%-- 
    Document   : sisinfowebProperties
    Created on : 09/04/2018, 09:56:58
    Author     : Bruno
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="core" %>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Propriedades - SisInfo Web</title>
        <link rel="icon" href="${pageContext.request.contextPath}/lib/img/favicon.ico" type="image/x-icon">
        <!-- Tell the browser to be responsive to screen width -->
        <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
        <!-- Bootstrap 3.3.6 -->
        <link rel="stylesheet" href="${pageContext.request.contextPath}/lib/bootstrap/css/bootstrap.min.css">
    </head>
    <body class="sidebar-mini wysihtml5-supported skin-red-light fixed" style="height: auto;">
        
        <div class="container" style="height: 1066px; min-height: 100%">

            <!-- Conteudo da pagina -->
            <div class="content-header">
                <h5>SisInfoWeb<small> Configurações</small></h5>
            </div>

            <section class="content">
                <div class="col-xs-12" id="app">

                    <!-- Cabecalho da tabela -->
<!--                        <div class="box-header with-border">

                        <form class="form-inline" method="POST" modelAttribute="properties">
                            <div class="col-xs-4 mb-2">
                                <label for="inputChave" class="sr-only">Chave</label>
                                <input type="text" class="form-control" id="key" placeholder="Chave">
                            </div>
                            <div class="mx-sm-3 mb-2">
                                <label for="inputDescricao" class="sr-only">Descricao</label>
                                <input type="text" class="form-control" id="value" placeholder="Descrição">
                            </div>
                            <button type="submit" class="btn btn-primary mb-2">Salvar</button>
                        </form>
                    </div>-->

                    <!-- Corpo da tabela -->
                    <div class="box-body">

                        <button type="button" class="btn btn-default mb-2" data-toggle="modal" data-target="#modal-novo">Novo</button>
                        
                        <div class="dataTables_wrapper form-inline dt-bootstrap">
                            <table id="tablePropriedades" class="table table-bordered table-hover dataTable">
                                <thead>
                                    <tr>
                                        <th>Chave</th>
                                        <th>Descricao</th>
                                        <th>Ações</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <core:forEach items="${lista}" var="prop">
                                        <tr>
                                            <td><a class="" href="">${prop.key}</a></td>
                                            <td><a class="" href="">${prop.value}</a></td>
                                            <td>
                                                <button class="btn btn-primary" data-toggle="modal" data-target="#modal-novo" data-chave="${prop.key}" data-descricaochave="${prop.value}" >Editar</button>
                                                <button class="btn btn-danger" data-toggle="modal"  data-target="#modal-delete" data-chave="${prop.key}" >Excluir</button>
                                            </td>
                                        </tr>
                                    </core:forEach>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    
                    <!-- Modal Novo/Editar -->
                    <div class="modal modal-primary fade" id="modal-novo">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h4 id="modal-title" class="modal-title">SisInfoWeb<small> Configurações</small></h4>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">×</span></button>
                                </div>

                                <form id="formPropriedade" method="POST">
                                    <div class="modal-body">
                                        <div class="md-form mb-5">
                                            <label for="inputChave">Nome da Chave</label>
                                            <input type="text" id="inputChave" name="inputChave" class="form-control validate" placeholder="Chave" required>
                                        </div>

                                        <div class="md-form mb-5">
                                            <label for="inputDescricaoChave">Descrição da Chave</label>
                                            <input type="text" id="inputDescricaoChave" name="inputDescricaoChave" class="form-control validate" placeholder="Descrição da Chave" required>
                                        </div>

                                    </div>
                                    <div class="modal-footer">
                                        <button type="submit" class="btn btn-primary">Salvar</button>
                                        <button type="button" class="btn btn-outline pull-left" data-dismiss="modal">Cancelar</button>
                                    </div>
                                </form>
                            </div>
                            <!-- /.modal-content -->
                        </div>
                        <!-- /.modal-dialog -->
                    </div>
                    
                    <!-- Modal Delete -->
                    <div class="modal modal-primary fade" id="modal-delete">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h4 id="modal-title" class="modal-title">SisInfoWeb<small> Configurações</small></h4>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">×</span></button>
                                </div>

                                <form id="formDelete" method="POST">
                                    <div class="modal-body">
                                        <div class="md-form mb-5">
                                            <h4 id="hChave" >Tem certeza que deseja EXCLUIR a chave?</h4>
                                        </div>

                                    </div>
                                    <div class="modal-footer">
                                        <button type="submit" id="buttonDeleteSim" class="btn btn-danger" name="deleteChave" value="">Sim</button>
                                        <button type="button" class="btn btn-outline pull-left" data-dismiss="modal">Cancelar</button>
                                    </div>
                                </form>
                            </div>
                            <!-- /.modal-content -->
                        </div>
                        <!-- /.modal-dialog -->
                    </div>
                    
                    
                </div>
            </section>
        </div>
        <script src="${pageContext.request.contextPath}/lib/AdminLTE/plugins/jQuery/jquery-3.3.1.min.js"></script>
        <!-- Bootstrap 3.3.7 (Obrigatorio) -->
        <script src="${pageContext.request.contextPath}/lib/bootstrap/js/bootstrap.min.js"></script>
        <script src="${pageContext.request.contextPath}/lib/AdminLTE/dist/js/adminlte.min.js" type="text/javascript"></script>
        <script>
            $('#modal-novo').on('show.bs.modal', function (event) {
                var button = $(event.relatedTarget) // Button that triggered the modal
                var chave = button.data('chave') // Extract info from data-* attributes
                var descricao = button.data('descricaochave') // Extract info from data-* attributes
                
                var modal = $(this)
                modal.find('.modal-title').text('Chave # ' + chave)
                modal.find('.modal-body #inputChave').val(chave)
                modal.find('.modal-body #inputDescricaoChave').val(descricao)
              })
              
            $('#modal-delete').on('show.bs.modal', function (event) {
                var button = $(event.relatedTarget) // Button that triggered the modal
                var chave = button.data('chave') // Extract info from data-* attributes
                console.log('Entrou no modal delete | ' + chave);
                
                var modal = $(this)
                modal.find('.modal-title').text('Chave # ' + chave)
                modal.find('.modal-body #hChave').text('Tem certeza que deseja EXCLUIR a chave ' + chave + '?')
                modal.find('.modal-footer #buttonDeleteSim').val(chave)
              })
        </script>
    </body>
</html>
