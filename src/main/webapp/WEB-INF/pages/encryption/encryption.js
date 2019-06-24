/*
 * Document   : encryption
 * Created on : 03/05/2019, 15:22:46
 * Author     : Bruno Nogueira Silva
 */
import Vue from 'vue';
import Vuetify from 'vuetify';
import '../globalComponents';
import webservice from 'services/webservice';
import baseMyService from 'services/baseMyService';

Vue.use(Vuetify);

var encryption = new Vue({
    el: "#encryption",
    data: {
        valido: false,
        texto: null,
        chave: null,
        selectOpcao: null,
        opcao: [
            {idOpcao: 0, descricao: 'Criptografar'},
            {idOpcao: 1, descricao: 'Descriptografar'}
        ]
    },
    mixins: [
        baseMyService,
        webservice
    ],
    watch: {

    },
    created() {

    },
    methods: {
        executar: function() {
            //console.log('Executar - texo: ' + this.texto + ' - chave: ' + this.chave + ' - opcao: ' + this.selectOpcao);
            // Limpa o retorno do webservice
            this.returnWebservice = null;
            
            // Envia o texto para o webservice para criptografar ou descriptografar.
            this.conectWebserviceJson(
                    './Encryption', // URL
                    this.POST, // Metodo
                    null, // Chave
                    null, // Dados
                    {tipo: this.selectOpcao, texto: this.texto, chave: this.chave}) // Parametro
                    .then(retorno => {
                        //console.log('log encription do then response: ' + JSON.stringify(retorno));
                        this.returnWebservice = String.fromCharCode.apply(String, retorno.object);
                    })
                    .catch(error => {
                        //console.log('log encription do catch response: ' + JSON.stringify(error));
                        this.returnWebserviceStatus = error.statusRetorno;
                        this.dialogError = true;
                    });


        }
    },
    computed: {

    }
});

