<%--
    Document   : BaseMyProgram
    Created on : 03/05/2019, 15:28:47
    Author     : Bruno Nogueira Silva
--%>

<%@tag description="Tela básica para ser usando quando for criar uma tela de formulário com campos de preechimentos e etc." pageEncoding="UTF-8"%>
<%@taglib tagdir="/WEB-INF/tags/" prefix="baseMyLayout" %>
<%@attribute name="mycontent" fragment="true" required="true" %>

<%@attribute name="title" required="true" rtexprvalue="true" description="Titulo da pagina que o usuário vai visualizar." %>
<%@attribute name="file" required="true" rtexprvalue="true" description="Para colocar o nome arquivo jsp (tela). Vai ser usado na nomenclatura que o vue utiliza para preencher a propriedade \"el\"."%> <%-- Para colocar o nome arquivo jsp (tela). Vai ser usado na nomenclatura que o vue utiliza para preencher a propriedade "el". --%>
<%@attribute name="descricaoTela" required="false" rtexprvalue="true" %>

<baseMyLayout:BaseMyLayout
    title="${title}"
    file="${file}">
    <jsp:attribute name="myapp">
        <div id="${file}">
            <v-app id="inspire">
                <div>
                    <!-- Adiciona o Navigation Drawer (menus). -->
                    <%@include file="components/MyNavigationDrawer.tag" %>
                    
                    <!-- Adiciona o toolbar no topo da pagina. -->
                    <%@include file="components/MyToolbar.tag" %>

                    <v-content>
                        <v-container fluid>
                            <jsp:invoke fragment="mycontent"></jsp:invoke>
                        </v-container>
                    </v-content>
                </div>
                <%@include file="BaseMyFooter.jsp" %>
            </v-app>
        </div>

    </jsp:attribute>
</baseMyLayout:BaseMyLayout>