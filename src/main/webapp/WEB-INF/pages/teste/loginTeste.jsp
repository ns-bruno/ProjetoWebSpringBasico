<%-- 
    Document   : loginTeste
    Created on : 21/12/2018, 10:44:21
    Author     : Bruno
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <link href='${pageContext.request.contextPath}/lib/fonts/fonts.googleapis.css' rel="stylesheet">
        <link href="${pageContext.request.contextPath}/lib/vue/dist/css/vuetify.min.css" rel="stylesheet">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui">
        <title>JSP Page</title>
    </head>
    <body>
        <div id="app">
            <v-app>
                <v-content>
                    <v-container>Ola munda meu</v-container>
                </v-content>
            </v-app>
        </div>

        <script src="${pageContext.request.contextPath}/lib/vue/dist/js/vue.js"></script>
        <script src="${pageContext.request.contextPath}/lib/vue/dist/js/vuetify.js"></script>
        <script>
            new Vue({el: '#app'});
        </script>
    </body>
</html>
