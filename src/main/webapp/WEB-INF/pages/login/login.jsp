<%-- 
    Document   : login
    Created on : 17/06/2019, 16:04:58
    Author     : Bruno Nogueira Silva
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@taglib tagdir="/WEB-INF/tags/" prefix="baseMyLayoutProgram" %>

<baseMyLayoutProgram:BaseMyLayoutProgram
    title="Login - SisInfo Web"
    file="login"
    descricaoTela="Tela para fazer login e ter acesso ao sistema.">

    <jsp:attribute name="mycontent">
        <v-container fluid fill-height>
            <v-layout align-center justify-center>
                <v-flex xs12 sm8 md4>
                    <v-card class="elevation-12">
                        <v-toolbar dark color="primary">
                            <v-toolbar-title>Autenticação do Usuário</v-toolbar-title>
                        </v-toolbar>
                        <v-card-text>
                            <v-form v-model="valido">
                                
                                <my-text-field  v-model="smadispo.identificacao" 
                                                :myappendicon="showDispositivo ? 'visibility_off' : 'visibility'"
                                                :mytype="showDispositivo ? 'text' : 'password'"
                                                :myuppercase="true"
                                                :myrequired="true"
                                                :mymaxlength="40"
                                                myprependicon="devices" 
                                                mylabel="Dispositivo" 
                                                @click:append="showDispositivo = !showDispositivo"
                                                ></my-text-field>
                                
                                <my-text-field   v-model="smausuar.nome" 
                                                :myuppercase="true"
                                                :myrequired="true"
                                                :mymaxlength="60"
                                                myprependicon="person" 
                                                mylabel="Usuário"></my-text-field>

                                <my-text-field   v-model="smausuar.senha" 
                                                :myappendicon="showSenha ? 'visibility_off' : 'visibility'"
                                                :mytype="showSenha ? 'text' : 'password'"
                                                :myuppercase="false"
                                                :myrequired="true"
                                                :mymaxlength="20"
                                                myprependicon="lock" 
                                                mylabel="Senha" 
                                                id="password"
                                                @click:append="showSenha = !showSenha"></my-text-field>
                            </v-form>
                            <v-card-actions>
                                <v-btn flat small type="button" @click="dialogError = true">Primeiro Acesso</v-btn>
                                <v-spacer></v-spacer>
                                <v-btn type="button" @click="login" color="primary" :disabled="!valido">Entrar</v-btn>
                            </v-card-actions>
                        </v-card-text>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>

        <my-dialog-return-webservice 
            v-model="dialogError"
            @emit-myclick-close="closeDialogError"
            :myreturnwebservicestatus="returnWebserviceStatus">
        </my-dialog-return-webservice>

    </jsp:attribute>
</baseMyLayoutProgram:BaseMyLayoutProgram>
