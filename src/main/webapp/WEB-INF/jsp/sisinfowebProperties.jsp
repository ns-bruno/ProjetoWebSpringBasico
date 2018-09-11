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
        
        <div class="wrapper" style="height: auto; min-height: 100%;">

            <div class="content-wrapper" style="height: 1066px; min-height: 100%">

                <!-- Conteudo da pagina -->
                <div class="content-header">
                    <h5>SisInfoWeb<small> Configurações</small></h5>
                </div>
                
                <section class="content">
                    <div class="col-xs-12">
                        
                        <!-- Cabecalho da tabela -->
                        <div class="box-header with-border">
                                
                            <form class="form-inline" method="POST" modelAttribute="properties">
                                <div class="col-xs-4 mb-2">
                                    <!--<label for="inputChave" class="sr-only">Chave</label>-->
                                    <input type="text" class="form-control" id="key" placeholder="Chave">
                                </div>
                                <div class="mx-sm-3 mb-2">
                                    <!--<label for="inputDescricao" class="sr-only">Descricao</label>-->
                                    <input type="text" class="form-control" id="value" placeholder="Descrição">
                                </div>
                                <button type="submit" class="btn btn-primary mb-2">Salvar</button>
                            </form>
                        </div>
                        
                        <!-- Corpo da tabela -->
                        <div class="box-body">
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
                                                    <button class="btn btn-primary">Editar</button>
                                                    <button class="btn btn-danger">Excluir</button>
                                                </td>
                                            </tr>
                                        </core:forEach>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </div>
    </body>
</html>
