<%-- 
    Document   : BaseMyLayout
    Created on : 12/02/2019, 11:22:04
    Author     : Bruno
--%>

<%@tag description="Classe personalizada para criar as paginas dos usuarios já logados." pageEncoding="UTF-8"%>
<%@attribute name="mycontent" fragment="true" %>
<%@attribute name="title" required="true" rtexprvalue="true" %>
<%@attribute name="descricaoTela" required="false" rtexprvalue="true" %>

<%-- The list of normal or fragment attributes can be specified here: --%>
<%@attribute name="message"%>

<!DOCTYPE html>
<html>
    <head>
        <link href='${pageContext.request.contextPath}/lib/fonts/fonts.googleapis.css' rel="stylesheet">
        <link href="${pageContext.request.contextPath}/lib/vue/dist/css/vuetify.min.css" rel="stylesheet">
        <link href="${pageContext.request.contextPath}/lib/app.css" rel="stylesheet">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui">
        <!-- Icone da pagina -->
        <link rel="shortcut icon" href="${pageContext.request.contextPath}/lib/img/favicon.ico" type="image/x-icon">
        <link rel="icon" href="${pageContext.request.contextPath}/lib/img/favicon.ico" type="image/x-icon">
    </head>
    <body>
        
        <jsp:invoke fragment="mycontent"></jsp:invoke>
<!--        <div id="app">
            <v-app>
                <v-content>
                    <v-container>Hello world</v-container>
                </v-content>
            </v-app>
        </div>-->

        <%@include file="BaseMyScript.jsp" %>
    </body>
    <%@include file="BaseMyFooter.jsp" %>
</html>