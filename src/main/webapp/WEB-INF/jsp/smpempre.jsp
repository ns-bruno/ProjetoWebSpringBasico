<%-- 
    Document   : Smaempre
    Created on : 12/04/2017, 08:31:46
    Author     : Bruno
--%>

<%@page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib tagdir="/WEB-INF/tags/" prefix="mylayout" %>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="core" %>

<mylayout:MyLayout title="Cadastro de Empresa">
    <jsp:attribute name="mycontent">


        <!-- Conteudo da pagina -->
        <div class="content-header">
            <h1>Empresa<small>Lista</small></h1>
        </div>
        <div class="content">
            <div class="row">
                <div class="col-xs-12">

                    <div class="box">

                        <!-- Cabecalho da tabela -->
                        <div class="box-header">
                            <div class="col-xs-6">
                                <a class="btn btn-default" href="Empresa?action=insert">Novo</a>

                                <div class="row">
                                    <div class="col-md-6">
                                        <span class="badge bg-gray">${lista.size()} Registros</span>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-6">
                                <div class="input-group navbar-text">
                                    <select id="filterSelectDataTable" class="form-control">
                                        <option>Pick</option>
                                        <option>mm</option>
                                        <option>in</option>
                                    </select>
                                    <span class="input-group-addon" style="width:0px; padding-left:0px; padding-right:0px; border:none;"></span>
                                    <input id="filterBoxDataTable" type="text" class="form-control" placeholder="Pesquisar">
                                    <span class="input-group-addon"><i class="fa fa-search"></i></span>
                                </div>
                            </div>
                        </div>

                        <!-- Corpo da tabela -->
                        <div class="box-body">
                            <div class="dataTables_wrapper form-inline dt-bootstrap">


                                <table id="tabela" class="table table-striped table-bordered dataTable" cellspacing="0" width="100%">
                                    <thead>
                                        <tr>
                                            <th class="dt-body-center sorting_disabled" rowspan="1" colspan="1" aria-label="" style="width: 12px;">
                                                <input name="select_all" value="1" id="example-select-all" type="checkbox" />
                                            </th>
                                            <th>Código</th>
                                            <th>Razão Social</th>
                                            <th>Fantasia</th>
                                            <th>CPF/CNPJ</th>
                                            <th>RG/IE</th>
                                            <th>Orgão</th>
                                            <th>Tipo</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <core:forEach items="${lista}" var="empresas">
                                            <tr>
                                                <td class=" dt-body-center"><input type="checkbox" name="id[]" value="${empresas.idSmaempre}"></td>
                                                <td><a class="" href="">${empresas.codigo}</a></td>
                                                <td><a class="" href="">${empresas.nomeRazao}</a></td>
                                                <td><a class="" href="">${empresas.nomeFantasia}</a></td>
                                                <td>${empresas.cpfCgc}</td>
                                                <td>${empresas.ieRg}</td>
                                                <td>${empresas.orgaoEmissor}</td>
                                                <td class="tipoPessoa">${empresas.pessoa}</td>
                                            </tr>
                                        </core:forEach>
                                    </tbody>
                                </table>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </jsp:attribute>
</mylayout:MyLayout>
