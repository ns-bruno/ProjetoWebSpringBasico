<%-- 
    Document   : error
    Created on : 16/12/2017, 12:30:09
    Author     : Bruno
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <!-- Icone da pagina -->
        <link rel="shortcut icon" href="${pageContext.request.contextPath}/lib/img/favicon.ico" type="image/x-icon">
        <link rel="icon" href="${pageContext.request.contextPath}/lib/img/favicon.ico" type="image/x-icon">

        <title>SisInfo Web | Error</title>

        <%@include file="../tags/importsCss.jsp" %>
    </head>
    <body class="hold-transition skin-blue sidebar-mini">
        <section class="content">

            <div class="error-page">
                <h2 class="headline text-red">500</h2>

                <div class="error-content">
                    <h1><i class="fa fa-warning text-red"></i> Oops! Algo deu errado.</h1>

                    <p>
                        Trabalharemos para consertar isso imediatamente.
                        <br>
                        <h3>${exception.getMessage()}</h3>
                    </p>

                </div>
            </div>

        </section>
    </body>
</html>
