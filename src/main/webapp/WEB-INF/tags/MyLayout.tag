<%-- 
    Document   : MyLayout
    Created on : 12/04/2017, 17:48:59
    Author     : Bruno
--%>

<%@tag description="Classe personalizada para laginas logadas" pageEncoding="UTF-8"%>
<%@attribute name="mycontent" fragment="true" %>
<%@attribute name="title" required="true" rtexprvalue="true" %>
<%@attribute name="descricaoTela" required="false" rtexprvalue="true" %>

<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>${title}</title>
    </head>

    <body class="sidebar-mini wysihtml5-supported skin-red-light fixed" style="height: auto;">

        <div class="wrapper" style="height: auto;">
            <!-- Menu do topo da pagina -->
            <%@include file="menuCabecalho.jsp" %>
            <!-- Barra lateral do lado esquerdo -->
            <%@include file="menuLateralEsquerda.jsp" %>

            <div class="content-wrapper" style="height: 1066px; min-height: 100%">

                <jsp:invoke fragment="mycontent"></jsp:invoke>

            </div>

            <%@include file="rodape.jsp" %>
        </div>
    </body>
</html>