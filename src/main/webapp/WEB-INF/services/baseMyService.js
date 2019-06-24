'use strict';

export default {

    data: {
        dispositivo: null,
        drawer: null,
        dialogError: false,
        dialogDelete: false,
        returnWebservice: null,
        returnWebserviceStatus: {
            codigoRetorno: 0,
            errorMsg: '',
            errorMsgExtra: ''
        }
    },
    methods: {
        /**
         * Recebe a comunicacao do component MyDialogReturnWebservice.vue onde 
         * indica se eh pra fechar o dialog ou nao.
         * @param {type} dialogError
         * @returns {undefined}
         */
        closeDialogError: function(dialogError) {
            if (!dialogError) {
                this.dialogError = false;
                this.returnWebserviceStatus = {
                    codigoRetorno: 0,
                    errorMsg: '',
                    errorMsgExtra: ''
                };
            }
        },
        /**
         * Pega os dados do dispositivo salvo no computador local.
         * @returns {DOMString}
         */
        getDispositivo: function() {
            // Checa se tem a cave salva no session storaege
            if (sessionStorage.getItem("dispositivo") === null) {
                return null;
            } else {
                return sessionStorage.getItem("dispositivo");
            }
        }
    }
}