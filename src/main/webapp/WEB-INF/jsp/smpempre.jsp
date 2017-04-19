<%-- 
    Document   : Smaempre
    Created on : 12/04/2017, 08:31:46
    Author     : Bruno
--%>

<%@page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib tagdir="/WEB-INF/tags/" prefix="mylayout" %>

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
                                        <span class="badge bg-gray">2 Registros</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Corpo da tabela -->
                        <div class="box-body">
                            <div id="listaEmpresa" class="dataTables_wrapper form-inline dt-bootstrap">


                                <table id="tabelaEmpresa" class="table table-striped table-bordered dataTable" cellspacing="0" width="100%">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Position</th>
                                            <th>Office</th>
                                            <th>Age</th>
                                            <th>Start date</th>
                                            <th>Salary</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><a class="" href="">Tiger Nixon</a></td>
                                            <td><a class="" href="">System Architect</a></td>
                                            <td>Edinburgh</td>
                                            <td>61</td>
                                            <td>2011/04/25</td>
                                            <td>$320,800</td>
                                        </tr>
                                        <tr>
                                            <td><a class="" href="">Garrett Winters</a></td>
                                            <td><a class="" href="">Accountant</a></td>
                                            <td>Tokyo</td>
                                            <td>63</td>
                                            <td>2011/07/25</td>
                                            <td>$170,750</td>
                                        </tr>
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
