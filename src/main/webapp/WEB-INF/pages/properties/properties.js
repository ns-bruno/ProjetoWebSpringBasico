import Vue from 'vue';
import Vuetify from 'vuetify';
import axios from 'axios';

Vue.use(Vuetify);
var properties = new Vue({
    el: "#properties",
    data: {
        dispositivo: null,
        drawer: null,
        dialogError: false,
        dialogDelete: false,
        returnWebservice: {},
        dialog: false,
        editedIndex: -1,
        cabecalho: [
            {
                text: 'Chave',
                align: 'left',
                sortable: true,
                value: 'chave'
            },
            {
                text: 'Descrição',
                align: 'left',
                sortable: true,
                value: 'descricao'
            }
        ],
        pagination: {
            rowsPerPage: 15 // -1 for All",
        },
        propriedades: [],
        editedItem: {
            chave: '',
            descricao: ''
        }
    },
    watch: {
        dialog(val) {
            val || this.close();
        }
    },
    created() {
        this.initialize();
    },
    methods: {
        initialize() {
            // Preserva toda a classe Veu aqui
            var selfVue = this;
            axios.get('./Properties')
                    .then(function(response) {
                        // Checa o status do header do rest
                        if (response.status === 200) {
                            // Checa se o retorno do webservice esta ok ou um erro
                            if (response.data.statusRetorno.codigoRetorno === 200) {

                                for (var [key, value] of Object.entries(response.data.object)) {
                                    selfVue.propriedades.push({chave: key, descricao: value});
                                }
                            } else {
                                // Checa se tem algum status de retorno dentro do object
                                if (response.data.object) {
                                    selfVue.returnWebservice.codigoRetorno = response.data.object.codigoRetorno;
                                    selfVue.returnWebservice.errorMsg = response.data.object.mensagemRetorno;
                                    selfVue.returnWebservice.errorMsgExtra = '';
                                    // Chaso nao tenha status no object entao pega o status padrao
                                } else {
                                    selfVue.returnWebservice.codigoRetorno = response.data.statusRetorno.codigoRetorno;
                                    selfVue.returnWebservice.errorMsg = response.data.statusRetorno.mensagemRetorno;
                                    selfVue.returnWebservice.errorMsgExtra = response.data.statusRetorno.extra;
                                }
                                selfVue.dialogError = true;
                            }
                        } else {
                            selfVue.returnWebservice.codigoRetorno = response.status;
                            selfVue.returnWebservice.errorMsg = response.statusText;
                            selfVue.returnWebservice.errorMsgExtra = '';
                            selfVue.dialogError = true;
                        }
                    })
                    .catch(function(error) {
                        selfVue.returnWebservice.codigoRetorno = 0;
                        selfVue.returnWebservice.errorMsg = error.toString();
                        selfVue.returnWebservice.errorMsgExtra = '';
                        selfVue.dialogError = true;
                    });
        },
        editItem(item) {
            this.editedIndex = this.propriedades.indexOf(item);
            this.editedItem = Object.assign({}, item);
            this.dialog = true;
        },
        deleteItemConfirm(item) {
            this.editedIndex = this.propriedades.indexOf(item);
            this.editedItem = Object.assign({}, item);
            this.dialogDelete = true;
        },
        deleteItem(item) {
            //const index = this.propriedades.findIndex(prop => prop.chave === item.chave);
            // Preserva toda a classe Veu aqui
            var selfVue = this;
            axios.delete('./Properties', {params: {
                    chave: this.editedItem.chave,
                    descricao: this.editedItem.descricao
                }})
                    .then(function(response) {
                        // Checa o status do header do rest
                        if (response.status === 200) {
                            // Checa se o retorno do webservice esta ok ou um erro
                            if (response.data.statusRetorno.codigoRetorno === 200) {
                                if (selfVue.editedIndex > -1) {
                                    // Deleta o item selecionado da lista
                                    selfVue.propriedades.splice(selfVue.propriedades.findIndex(prop => prop.chave === item.chave), 1);
                                } else {
                                    selfVue.returnWebservice.codigoRetorno = 0;
                                    selfVue.returnWebservice.errorMsg = 'Por algum motivo não conseguimos atualizar, sugerimos que atualiza a página usando o comando Ctrl + F5.';
                                    selfVue.returnWebservice.errorMsgExtra = '';
                                    selfVue.dialogError = true;
                                }
                            } else {
                                // Checa se tem algum status de retorno dentro do object
                                if (response.data.object) {
                                    selfVue.returnWebservice.codigoRetorno = response.data.object.codigoRetorno;
                                    selfVue.returnWebservice.errorMsg = response.data.object.mensagemRetorno;
                                    selfVue.returnWebservice.errorMsgExtra = '';
                                    // Chaso nao tenha status no object entao pega o status padrao
                                } else {
                                    selfVue.returnWebservice.codigoRetorno = response.data.statusRetorno.codigoRetorno;
                                    selfVue.returnWebservice.errorMsg = response.data.statusRetorno.mensagemRetorno;
                                    selfVue.returnWebservice.errorMsgExtra = response.data.statusRetorno.extra;
                                }
                                selfVue.dialogError = true;
                            }
                        } else {
                            selfVue.returnWebservice.codigoRetorno = response.status;
                            selfVue.returnWebservice.errorMsg = response.statusText;
                            selfVue.returnWebservice.errorMsgExtra = '';
                            selfVue.dialogEr.returnWebserviceror = true;
                        }
                        selfVue.close();
                    })
                    .catch(function(error) {
                        selfVue.returnWebservice.codigoRetorno = 0;
                        selfVue.returnWebservice.errorMsg = error.toString();
                        selfVue.returnWebservice.errorMsgExtra = '';
                        selfVue.dialogError = true;
                        selfVue.close();
                    });
        },
        close() {
            this.dialog = false;
            this.dialogDelete = false;
            this.editedItem = {};
            this.editedIndex = -1;
        },
        save() {
            // Preserva toda a classe Veu aqui
            var selfVue = this;
            axios.post('./Properties', {}, {params: {
                    chave: this.editedItem.chave,
                    descricao: this.editedItem.descricao
                }})
                    .then(function(response) {
                        // Checa o status do header do rest
                        if (response.status === 200) {
                            // Checa se o retorno do webservice esta ok ou um erro
                            if (response.data.statusRetorno.codigoRetorno === 200) {
                                if (selfVue.editedIndex > -1) {
                                    Object.assign(selfVue.propriedades[selfVue.editedIndex], {chave: selfVue.editedItem.chave, descricao: selfVue.editedItem.descricao});
                                } else {
                                    selfVue.propriedades.push({chave: selfVue.editedItem.chave, descricao: selfVue.editedItem.descricao});
                                }
                            } else {
                                // Checa se tem algum status de retorno dentro do object
                                if (response.data.object) {
                                    selfVue.returnWebservice.codigoRetorno = response.data.object.codigoRetorno;
                                    selfVue.returnWebservice.errorMsg = response.data.object.mensagemRetorno;
                                    selfVue.returnWebservice.errorMsgExtra = '';
                                    // Chaso nao tenha status no object entao pega o status padrao
                                } else {
                                    selfVue.returnWebservice.codigoRetorno = response.data.statusRetorno.codigoRetorno;
                                    selfVue.returnWebservice.errorMsg = response.data.statusRetorno.mensagemRetorno;
                                    selfVue.returnWebservice.errorMsgExtra = response.data.statusRetorno.extra;
                                }
                                selfVue.dialogError = true;
                            }
                        } else {
                            selfVue.returnWebservice.codigoRetorno = response.status;
                            selfVue.returnWebservice.errorMsg = response.statusText;
                            selfVue.returnWebservice.errorMsgExtra = '';
                            selfVue.dialogEr.returnWebserviceror = true;
                        }
                        selfVue.close();
                    })
                    .catch(function(error) {
                        selfVue.returnWebservice.codigoRetorno = 0;
                        selfVue.returnWebservice.errorMsg = error.toString();
                        selfVue.returnWebservice.errorMsgExtra = '';
                        selfVue.dialogError = true;
                        selfVue.close();
                    });

        }
    },
    computed: {
        formTitle: function() {
            return this.editedIndex === -1 ? 'Novo' : 'Editar Item';
        }

    }
});