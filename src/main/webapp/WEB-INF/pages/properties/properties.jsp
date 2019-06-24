<%--
    Document   : properties
    Created on : 10/abr/2019, 12:36:35
    Author     : Bruno Nogueira Silva
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@taglib tagdir="/WEB-INF/tags/" prefix="baseMyLayoutConsult" %>

<baseMyLayoutConsult:BaseMyLayoutConsult
    file="properties"
    title="Propriedades"
    descricaoTela="Manipula o arquivo de propriedades onde contém dados de conexão entre outras informações.">

    <jsp:attribute name="mycontent">
        <v-data-table
            :headers="cabecalho"
            :items="propriedades"
            :rows-per-page-items=[10,25,{"text":"Todos","value":-1}]
            rows-per-page-text="Linhas por página"
            class="elevation-1"
            >
            <template v-slot:items="props">
                <td>{{ props.item.chave }}</td>
                <td>{{ props.item.descricao }}</td>
                <td class="justify-center layout px-0">
                <v-icon
                    small
                    class="mr-2"
                    @click="editItem(props.item)"
                    >
                    edit
                </v-icon>
                <v-icon
                    small
                    @click="deleteItemConfirm(props.item)"
                    >
                    delete
                </v-icon>
                </td>
            </template>
        </v-data-table>

        <v-dialog
            v-model="dialogError"
            max-width="500"
            scrollable
            >
            <v-card>
                <v-card-title class="headline error white--text">Código do Retorno: {{returnWebservice.codigoRetorno}}</v-card-title>

                <v-card-text>
                    {{this.returnWebservice.errorMsg}}
                </v-card-text>

                <v-expansion-panel v-if="this.errorMsgExtra">
                    <v-expansion-panel-content>
                        <div slot="header">Extra</div>
                        <v-card>
                            <v-card-text class="grey lighten-3">{{this.returnWebservice.errorMsgExtra}}</v-card-text>
                        </v-card>
                    </v-expansion-panel-content>
                </v-expansion-panel>

                <v-card-actions>
                    <v-spacer></v-spacer>

                    <v-btn
                        flat="flat"
                        outline
                        @click="dialogError = false"
                        >
                        Fechar
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>

        <v-dialog
            v-model="dialogDelete"
            max-width="500"
            persistent
            scrollable
            >
            <v-card>
                <v-card-title class="headline error white--text">Deletar</v-card-title>

                <v-card-text>
                    Você tem certeza que deseja deletar:<br>
                    {{this.editedItem.chave}}?
                </v-card-text>

                <v-card-actions>
                    <v-spacer></v-spacer>

                    <v-btn
                        flat="flat"
                        outline
                        @click="dialogDelete = false"
                        >
                        Cancelar
                    </v-btn>

                    <v-btn
                        flat="flat"
                        outline
                        color="error"
                        @click="deleteItem(editedItem)"
                        >
                        Confirmar Deleção
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </jsp:attribute>


    <jsp:attribute name="mytoolbarafterspace">
        <v-dialog
            persistent
            v-model="dialog"
            max-width="600px">
            <template v-slot:activator="{ on }">
                <v-btn outline color="default" v-on="on">Novo</v-btn>
            </template>
            <v-card>
                <v-card-title>
                    <span class="headline">{{ formTitle }}</span>
                </v-card-title>

                <v-card-text>
                    <v-container grid-list-md>
                        <v-layout wrap>
                            <v-flex xs12>
                                <v-text-field v-model="editedItem.chave" label="Nome da Chave"></v-text-field>
                            </v-flex>
                            <v-flex xs12>
                                <v-text-field v-model="editedItem.descricao" label="Valor da Chave"></v-text-field>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-card-text>

                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                        outline
                        color="error"
                        @click="close"
                        >Cancelar</v-btn>
                    <v-btn
                        outline
                        color="success"
                        @click="save"
                        >Salvar</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </jsp:attribute>
</baseMyLayoutConsult:BaseMyLayoutConsult>
