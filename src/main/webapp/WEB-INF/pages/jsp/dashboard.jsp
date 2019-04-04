<%-- 
    Document   : dashboard
    Created on : 18/04/2017, 14:02:47
    Author     : Bruno
--%>

<%@page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib tagdir="/WEB-INF/tags/" prefix="mylayout" %>

<mylayout:MyLayout title="Cadastro de Empresa">
    <jsp:attribute name="mycontent">
        
        <!-- Conteudo da pagina -->
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="#">Inicio</a></li>
                <li class="breadcrumb-item active" aria-current="page">Dashboard</li>
            </ol>
        </nav>
        <div class="content">
             <div class="row">
                <div class="col-xs-12">

                    <div class="box">
                        <h1>Dashboard</h1>
                    </div>
                </div>
            </div>
        </div>
    </jsp:attribute>
</mylayout:MyLayout>
