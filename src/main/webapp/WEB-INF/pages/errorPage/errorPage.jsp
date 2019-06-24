<%-- 
    Document   : errorPage
    Created on : 12/06/2019, 15:14:24
    Author     : Bruno Nogueira Silva
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@taglib tagdir="/WEB-INF/tags/" prefix="baseMyLayoutProgram" %>
<baseMyLayoutProgram:BaseMyLayoutProgram
    title="Página Não Encontrada"
    file="errorPage"
    descricaoTela="A página digitada na barra de endereço da URL não foi encontrada.">

    <jsp:attribute name="mycontent">
        <v-layout row wrap>
            <v-flex xs12>
                <v-card>
                    <v-layout>
                        <v-flex xs5 class="display-1 font-weight-black">
                            <v-card-title>
                                <div>
                                    <span class="title">Oops!</span>
                                    <v-spacer></v-spacer>
                                    <h4>${returnWebserviceStatus.codigoRetorno}</h4>
                                    <h4>${returnWebserviceStatus.mensagemRetorno}</h4>
                                </div>
                            </v-card-title>
                        </v-flex>
                        <v-flex xs7>
                            <v-card-text>
                                <div>
                                    <div class="headline">${returnWebserviceStatus.extra}</div>
                                </div>
                            </v-card-text>
                        </v-flex>
                    </v-layout>
                </v-card>
            </v-flex>
        </v-layout>

    </jsp:attribute>
</baseMyLayoutProgram:BaseMyLayoutProgram>
