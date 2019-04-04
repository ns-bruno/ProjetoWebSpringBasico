<%-- 
    Document   : criptografar
    Created on : 27/09/2018, 15:00:58
    Author     : Bruno
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="core" %>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Criptografar/Descriptografar - SisInfo Web</title>
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
                <h5>SisInfoWeb<small> Criptografar/Descriptografar</small></h5>
            </div>
            
            <section class="content">
                <!-- Corpo da tabela -->
                <div class="box-body">
                    <form method="GET">
                        <div class="form-row">
                            <div class="col">
                                <label >Texto</label>
                                <input type="text" name="textTexto" class="form-control" placeholder="Digite o Texto">
                            </div>
                            
                            <div class="w-100"></div>
                            
                            <div class="col">
                                <label >Chave</label>
                                <input type="text" name="textChave" class="form-control" placeholder="Digite Chave (Key)">
                            </div>
                            
                            <div class="col">
                                <label >Tipo de Opção</label>
                                <select class="form-control" id="selectTipo" name="selectTipo">
                                    <option value="0">Criptografar</option>
                                    <option value="1" >Descriptografar</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-sm text-center">
                            <br>
                            <button type="submit" class="btn btn-success" >Executar</button>
                        </div>
                    </form>
                </div>
                <div class="footer text-center">
                    
                    <label>
                        <c:if test="${empty retorno}">
                        </c:if>
                        <c:if test="${not empty retorno}">
                            <label>Após Execução</label>
                            <div class="col-lg border">
                                ${retorno}</div>
                        </c:if>
                    </label>
                </div>
                        
            </section>
            
        </div>
    </body>
</html>
