<%-- 
    Document   : login
    Created on : 14/12/2018, 15:45:46
    Author     : Bruno Nogueira Silva
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Login - SisInfo Web</title>
        <link href='${pageContext.request.contextPath}/lib/fonts/fonts.googleapis.css' rel="stylesheet">
        <link href="${pageContext.request.contextPath}/lib/vue/dist/css/vuetify.min.css" rel="stylesheet">
        <link href="${pageContext.request.contextPath}/lib/app.css" rel="stylesheet">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui">

    </head>
    <body>

        <div id="app">
            <v-app id="inspire">
                <v-content>
                    <v-container fluid fill-height>
                        <v-layout align-center justify-center>
                            <v-flex xs12 sm8 md4>
                                <v-card class="elevation-12">
                                    <v-toolbar dark color="primary">
                                        <v-toolbar-title>Login - SisInfo Web</v-toolbar-title>
                                    </v-toolbar>
                                    <v-card-text>
                                        <v-form v-model="valido">
                                            <v-text-field   v-model="smadispo.identificacao" 
                                                            :append-icon="showDispositivo ? 'visibility_off' : 'visibility'"
                                                            :type="showDispositivo ? 'text' : 'password'"
                                                            :rules="campoObrigatorio"
                                                            prepend-icon="devices" 
                                                            name="dispositivo" 
                                                            label="Dispositivo" 
                                                            @click:append="showDispositivo = !showDispositivo"
                                                            required
                                                            ></v-text-field>

                                            <v-text-field   v-model="smausuar.nome" 
                                                            :rules="campoObrigatorio"
                                                            class="my-v-text-field"
                                                            prepend-icon="person" name="login" label="Usuário" type="text" required></v-text-field>

                                            <v-text-field   v-model="smausuar.senha" 
                                                            :append-icon="showSenha ? 'visibility_off' : 'visibility'"
                                                            :type="showSenha ? 'text' : 'password'"
                                                            :rules="campoObrigatorio"
                                                            prepend-icon="lock" 
                                                            name="senha" 
                                                            label="Senha" 
                                                            id="password"
                                                            @click:append="showSenha = !showSenha"
                                                            required></v-text-field>
                                        </v-form>
                                        <v-card-actions>
                                            <v-btn flat small type="button" @click="showError = true">Primeiro Acesso</v-btn>
                                            <v-spacer></v-spacer>
                                            <v-btn type="button" @click="login" color="primary" :disabled="!valido">Entrar</v-btn>
                                        </v-card-actions>
                                    </v-card-text>
                                </v-card>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-content>
            </v-app>
                <v-dialog
                    v-model="showError"
                    max-width="500"
                    scrollable 
                    >
                    <v-card>
                        <v-card-title class="headline error white--text">Código do Retorno: {{this.codigoRetorno}}</v-card-title>

                        <v-card-text>
                            {{this.errorMsg}}
                        </v-card-text>
                        
                        <v-expansion-panel v-if="this.errorMsgExtra">
                            <v-expansion-panel-content>
                                <div slot="header">Extra</div>
                                <v-card>
                                    <v-card-text class="grey lighten-3">{{this.errorMsgExtra}}</v-card-text>
                                </v-card>
                            </v-expansion-panel-content>
                        </v-expansion-panel>

                        <v-card-actions>
                            <v-spacer></v-spacer>

                            <v-btn
                                flat="flat"
                                @click="showError = false"
                                >
                                Fechar
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            
        </div>


        <script src="${pageContext.request.contextPath}/lib/vue/dist/js/vue.js"></script>
        <script src="${pageContext.request.contextPath}/lib/vue/dist/js/vuetify.js"></script>
        <script src="${pageContext.request.contextPath}/lib/myJs/login.js"></script>
        <script src="${pageContext.request.contextPath}/lib/axios/dist/axios.min.js"></script>
        
    </body>
</html>
