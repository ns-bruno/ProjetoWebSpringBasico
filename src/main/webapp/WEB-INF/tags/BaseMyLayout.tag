<%--
    Document   : BaseMyLayout
    Created on : 12/02/2019, 11:22:04
    Author     : Bruno Nogueira Silva
--%>

<%@tag description="Classe personalizada para criar as paginas dos usuarios já logados." pageEncoding="UTF-8"%>
<%@attribute name="myapp" fragment="true" %>
<%@attribute name="title" required="true" rtexprvalue="true" %>
<%@attribute name="file" required="true" rtexprvalue="true" %>

<!DOCTYPE html>
<html>
    <head>
        <%@include file="BaseMyCss.jsp" %>
        <title>${title}</title>
    </head>
    <body>

        <!--Aqui dentro vai o conteudo do body.-->
        <jsp:invoke fragment="myapp"></jsp:invoke>

        <%@include file="BaseMyScript.jsp" %>
    </body>
</html>