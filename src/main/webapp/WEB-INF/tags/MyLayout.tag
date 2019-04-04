<%-- 
    Document   : MyLayout
    Created on : 12/04/2017, 17:48:59
    Author     : Bruno Nogueira Silva
--%>

<%@tag description="Classe personalizada para paginas logadas" pageEncoding="UTF-8"%>
<%@attribute name="mycontent" fragment="true" %>
<%@attribute name="title" required="true" rtexprvalue="true" %>
<%@attribute name="descricaoTela" required="false" rtexprvalue="true" %>

<!DOCTYPE html>
<html lang="pt-br" style="height: auto; min-height: 100%;">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <!-- Icone da pagina -->
        <link rel="shortcut icon" href="${pageContext.request.contextPath}/lib/img/favicon.ico" type="image/x-icon">
        <link rel="icon" href="${pageContext.request.contextPath}/lib/img/favicon.ico" type="image/x-icon">
        
        <title>${title}</title>
    </head>

    <body class="sidebar-mini fixed skin-red-light layout-boxed" style="height: auto; min-height: 100%;">

        <div class="wrapper" style="height: auto; min-height: 100%;">
            <!-- Menu do topo da pagina -->
            <%@include file="menuCabecalho.jsp" %>
            <!-- Barra lateral do lado esquerdo -->
            <%@include file="menuLateralEsquerda.jsp" %>

            <div class="content-wrapper" style="min-height: 915px;">

                <jsp:invoke fragment="mycontent"></jsp:invoke>

            </div>

            <%@include file="rodape.jsp" %>
        </div>
            <%@include file="importsJavaScript.jsp" %>
    </body>
</html>