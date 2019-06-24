import Vue from 'vue';
import Vuetify from 'vuetify';
import '../globalComponents';
import webservice from 'services/webservice';
import baseMyService from 'services/baseMyService';

Vue.use(Vuetify, {
  iconfont: 'mdi'
});

var login = new Vue({
    el: '#login',
    data: {
        showDispositivo: false,
        showSenha: false,
        valido: false,
        smausuar: {},
        smadispo: {}
    },
    mixins: [
        baseMyService,
        webservice
    ],
    methods: {
        reverseMessage: function() {
            this.message = this.message.split('').reverse().join('');
        },
        login() {
            // Limpa o retorno do webservice
            this.returnWebservice = null;

            // Envia o texto para o webservice para criptografar ou descriptografar.
            this.conectWebserviceJson(
                    './Smausuar/Autenticador', // URL
                    this.POST, // Metodo
                    this.smadispo.identificacao, // Chave
                    this.smausuar, // Dados
                    {resume: true}) // Parametro
                    .then(retorno => {
                        console.log('Vai para outra tela');
                        this.returnWebservice = retorno.object;
                        console.log(this.returnWebservice);
                        sessionStorage.setItem('usuarios', this.returnWebservice);
                    })
                    .catch(error => {
                        //console.log('log encription do catch response: ' + JSON.stringify(error));
                        if (error.statusRetorno) {
                            this.returnWebserviceStatus = error.statusRetorno;
                        } else {
                            this.returnWebserviceStatus = error.toString();
                        }
                        this.dialogError = true;
                    });
        }
    }
});