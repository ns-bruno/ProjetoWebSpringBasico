<%--
    Document   : encryption
    Created on : 03/05/2019, 15:23:24
    Author     : Bruno Nogueira Silva
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@taglib tagdir="/WEB-INF/tags/" prefix="baseMyLayoutProgram" %>

<baseMyLayoutProgram:BaseMyLayoutProgram
    title="Criptografar/Descriptografar"
    file="encryption"
    descricaoTela="Criptografa ou descriptografa texto desde que tenha a chave(key).">

    <jsp:attribute name="mycontent">
        <v-layout row wrap>

            <v-flex>
                <v-card>
                    <v-card-text>
                        <v-form v-model="valido">
                            <my-text-field
                                v-model="texto"
                                mylabel="*Texto para ser criptogrado/descriptografado"
                                :myrequired="true"
                                :mycounter="false"
                                :myuppercase="false">
                            </my-text-field>

                            <my-text-field
                                v-model="chave"
                                mylabel="*Chave (Key)"
                                :myrequired="true"
                                :mymaxlength="32"
                                :myuppercase="false"
                                myhint="O tamanho da chave pode ser com 16, 24 ou 32 caracteres.">
                            </my-text-field>

                            <v-flex xs12 sm6 md6>
                                <my-select
                                    v-model="selectOpcao"
                                    mylabel="Tipo de Opção"
                                    :myitems="opcao"
                                    myitemtext="descricao"
                                    myitemvalue="idOpcao"
                                    :myrequired="true">
                                </my-select>

                            </v-flex>
                        </v-form>
                    </v-card-text>

                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn 
                            type="button" 
                            flat="flat"
                            outline 
                            @click="executar" 
                            color="default"
                            :disabled="!valido">Executar</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>

        <v-flex>
            <v-card v-if="returnWebservice">
                <v-card-title class="headline">Retorno</v-card-title>
                <v-card-text>
                    {{returnWebservice}}
                </v-card-text>
            </v-card>
        </v-flex>

        <my-dialog-return-webservice 
            v-model="dialogError"
            @emit-myclick-close="closeDialogError"
            :myreturnwebservicestatus="returnWebserviceStatus">
        </my-dialog-return-webservice>

    </jsp:attribute>
</baseMyLayoutProgram:BaseMyLayoutProgram>